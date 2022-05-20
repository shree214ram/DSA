import get from 'lodash/get';

class uploadWorker {
	constructor(data) {
		this.data = data;
	}
	postMessage = (e) => {
		let data = e;
		switch (e.type) {
			case 'convertCsvToJson':
				const res = this.convertCsvToJson(data);
				return res;
				break;
			case 'convertCsvToJson_Sp':
				this.convertCsvToJson_Sp(data);
			default:
				console.log('Unknown command: ' + data.msg);
		}
	}

	convertCsvToJson_Sp(data) {

	}
	convertCsvToJson(data) {
		let payload = get(data, 'payload');
		let lines;
		let headerArray = [];
		let payloadHeader;
		let errors = [];
		let successData = [];
		if (data && payload) {
			try {
				lines = payload.trim().split(/[\r\n]/).filter(String);
				lines[0] = lines[0].replace(/[\n\r]+/g, '').toLowerCase();
				payloadHeader = lines[0].split(',');

				if (lines.length > data.uploadLimit) {
					errors.push({ status: 'error', message: data.switchConstant.notificationMessages.uploadFileMaxLimitException.replace("${uploadLimit}", data.uploadLimit) });
				} else if (lines.length <= 1) {
					errors.push({ status: 'error', message: data.switchConstant.notificationMessages.emptyFileException, sampleFileForReference: true });
				} else {
					headerArray = data.switchConstant.headerAuditCountPerAgentPerWeek;
					let validHeadersCount = 0;
					for (let j = 0; j < payloadHeader.length; j++) {
						if (headerArray.indexOf(payloadHeader[j].toLowerCase().trim().replace(/\s/g, "")) !== -1) {
							validHeadersCount += 1;
						}
					}
					if (validHeadersCount === headerArray.length) {
						for (let i = 1; i < lines.length; i++) {
							const uploadData = {};
							// Split row by , but exclude comma inside double quotes
							const currentLine = lines[i].trim().split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
							for (let j = 0; j < headerArray.length; j++) {
								// trim column value and replace double quotes with ''
								let currentValue = currentLine[j].replace(/['"]+/g, '').replace(/\s+/g, '').trim();
								if (headerArray[j].toLowerCase() === 'vtid/userid') {
									let gtins = [];
									let rawgtinsArray = currentValue.split('|');
									for (let gtin in rawgtinsArray) {
										if (!rawgtinsArray[gtin]) {
											var nullValueException = data.switchConstant.notificationMessages.nullValueException;
											var mapObj = {
												"${i}": i,
												"${gtin2}": (parseInt(gtin)+1),
												"${columnName}": data.switchConstant.headerAuditCountPerAgentPerWeekCSV[0]
											};
											nullValueException = nullValueException.replace(/\${i}|\${gtin2}|\${columnName}/gi, function (matched) {
												return mapObj[matched];
											});
											errors.push({ status: 'ERROR', message: nullValueException })
										}
									}
									gtins = rawgtinsArray.map(gtin => ({ 'newvtid/userid': gtin }));
									uploadData['vtid/userid'] = gtins;
								}
								else if (headerArray[j].toLowerCase() === 'auditcountperagentperweek') {
									let gtins2 = [];
									let rawgtinsArray = currentValue.split('|');
									for (let gtin2 in rawgtinsArray) {
										if (!rawgtinsArray[gtin2]) {
											var nullValueException = data.switchConstant.notificationMessages.nullValueException;
											var mapObj = {
												"${i}": i,
												"${gtin2}": (parseInt(gtin2)+1),
												"${columnName}": data.switchConstant.headerAuditCountPerAgentPerWeekCSV[1]
											};
											nullValueException = nullValueException.replace(/\${i}|\${gtin2}|\${columnName}/gi, function (matched) {
												return mapObj[matched];
											});
											errors.push({ status: 'ERROR', message: nullValueException })
										}
										if (!this.isNumeric(rawgtinsArray[gtin2])) {
											var numericValueException = data.switchConstant.notificationMessages.numericValueException;
											var mapObj = {
												"${i}": i,
												"${gtin2}": (parseInt(gtin2)+1),
												"${rawgtinsArray[gtin2]}": rawgtinsArray[gtin2],
												"${columnName}": data.switchConstant.headerAuditCountPerAgentPerWeekCSV[1]
											};
											numericValueException = numericValueException.replace(/\${i}|\${gtin2}|\${columnName}|\${rawgtinsArray\[gtin2\]}/gi, function (matched) {
												return mapObj[matched];
											});
											errors.push({ status: 'ERROR', message: numericValueException });
										}
									}
									gtins2 = rawgtinsArray.map(gtin2 => ({ 'newauditcountperagentperweek': gtin2 }));
									uploadData['auditcountperagentperweek'] = gtins2;
								}
								else {
									uploadData[headerArray[j]] = currentValue;
								}
							}
							successData.push(uploadData);
						}
					} else {
						return { status: 'ERROR', message: data.switchConstant.notificationMessages.headerNotCorrectException, sampleFileForReference: true };
					}
				}

				if (errors && errors.length > 0) {
					return { status: 'ERROR', message: errors };
				}
				return { status: 'SUCCESS', json: { data: successData }, message: data.switchConstant.notificationMessages.dataParsedSuccessfully }; // JSON
			} catch (err) {
				console.log("Inside catch + " + err);
				return { status: 'ERROR', message: data.switchConstant.notificationMessages.defaultException };
			}
		}
	}
	isNumeric(str) {
		return !isNaN(str) &&
			!isNaN(parseFloat(str))
	}
}

export default uploadWorker