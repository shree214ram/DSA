function ReverseString(str) {
	return str.split('').reverse().join('')
}

function max(a, b) {
	if (a > b)
		return a;
	else
		return b;
}
function printLCS(str1, str2) {
	var len1 = str1.length;
	var len2 = str2.length;
	//Make a DP DP
	var DP = new Array(len1 + 1);
	for (var i = 0; i <= len1; i++) {
		DP[i] = new Array(len2 + 1)
	}
	//Fill DP 
	for (var i = 0; i <= len1; i++) {
		for (var j = 0; j <= len2; j++) {
			//If row and column value is 0 then 0
			if (i == 0 || j == 0) {
				DP[i][j] = 0;
			}
			else {
				//If left and upper values are equal than 1+ Digonal
				if (str1[i - 1] == str2[j - 1]) {
					DP[i][j] = 1 + DP[i - 1][j - 1];
				}
				//If left and upper values are not equal Max(left,upper)
				else {
					DP[i][j] = max(DP[i][j - 1], DP[i - 1][j]);
				}
			}
		}
	}

	var n = DP[len1][len2]; // Last element of this table will be the Longest common subsequence 
	document.write("Length of common subsequence is: " +
		n + "<br>" + "The subsequence is : ");
	var str = "";
	var i = len1;
	var j = len2;
	while (i > 0 && j > 0) {
		if (str1[i - 1] == str2[j - 1]) {
			str += str1[i - 1];
			i--;
			j--;
		}
		else {
			if (DP[i][j - 1] > DP[i - 1][j]) {
				j--;
			}
			else {
				i--;
			}
		}
	}
	return ReverseString(str);
}
var str1 = "AGGTAB";
var str2 = "GXTXAYB";
document.write(printLCS(str1, str2));

	// This code is contributed by akshitsaxenaa09
