
#include <string>
using namespace std;

class Solution {
public:
	string addBinary(string a, string b) {
		string shortString = a.length() <= b.length() ? a : b;
		string longString = a.length() > b.length() ? a : b;

		int sizeShortString = shortString.length();
		int indexLongString = longString.length() - 1;
		char carry = 0;

		for (int i = sizeShortString - 1; i >= 0; i--) {
			int sum = (shortString[i] - '0') + (longString[indexLongString] - '0') + carry;

			switch (sum) {
			case (3):
				longString[indexLongString--] = '1';
				carry = 1;
				break;

			case (2):
				longString[indexLongString--] = '0';
				carry = 1;
				break;
			case (1):
				longString[indexLongString--] = '1';
				carry = 0;
				break;
			default:
				longString[indexLongString--] = '0';
				carry = 0;
			}
		}


		for (int i = indexLongString; i >= 0 && carry > 0; i--) {
			int sum = (longString[i] - '0') + carry;
			switch (sum) {
			case (2):
				longString[i] = '0';
				carry = 1;
				break;
			case (1):
				longString[i] = '1';
				carry = 0;
				break;
			default:
				longString[i] = '0';
				carry = 0;
				break;
			}
		}

		return finalAnswerToString(longString, carry);

	}

	string finalAnswerToString(const string& longString, int carry) {
		int leadingBit = longString.find_first_of("1");

		return carry == 1
			? "1" + longString
			: leadingBit > -1 ? longString.substr(leadingBit)
			: "0";
	}
};
