import { expose } from "comlink";

const convertJsonToCsv = ( payload ) => {
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
				commaSeparatedValues += csvRow + '\r\n';
			}
		);
		return commaSeparatedValues;
	}
}


expose (convertJsonToCsv);
