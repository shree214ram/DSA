import get from 'lodash/get';

class downloadWorker {
	constructor(data) {
		this.data = data;
	}
	postMessage = (e) => {
		let data = e;
		switch (e.type) {
			case 'convertJsonToCsv':
				const res = this.convertJsonToCsv(data,e.page);
				return res;
				break;
			case 'convertJsonToCsv_Sp':
				this.convertJsonToCsv_Sp(data);
			default:
				console.log('Unknown command: ' + data.msg);
		}
	}

	convertJsonToCsv_Sp(data) {
	}
	
	convertJsonToCsv(data,page) {
		let payload = get(data, 'payload');
		if (data && payload) {
			let jsonDataArray;
			try {
				jsonDataArray = (payload && typeof payload != 'object') ? JSON.parse( payload ) : payload;
			} catch ( err ) {
				jsonDataArray = null;
			}
			if ( jsonDataArray ) {
				let csvHeader            = (jsonDataArray && jsonDataArray.length) ? Object.keys( jsonDataArray[ 0 ] ) : null;
				let commaSeparatedValues = csvHeader ? csvHeader.join( "," ) + "\n" : "";

				jsonDataArray.forEach(
					function ( data ) {
						let csvRow = '';
						for ( let index in data ) {
							if ( data.hasOwnProperty( index ) ) {
								if ( csvRow != '' ) {
									csvRow += ','
								}
								csvRow += data[ index ];
							}
						}
						commaSeparatedValues += page === "view" ? csvRow + '\r\n' : csvRow;
					}
				);
				return { status: 'SUCCESS', commaSeparatedValues: commaSeparatedValues };
			}
			else {
				return { status: 'ERROR', commaSeparatedValues: null };
			}
		}
	}
}

export default downloadWorker
