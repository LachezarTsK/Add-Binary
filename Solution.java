
public class Solution {

    public String addBinary(String a, String b) {

        char[] shortArray = a.length() <= b.length() ? a.toCharArray() : b.toCharArray();
        char[] longArray = a.length() > b.length() ? a.toCharArray() : b.toCharArray();

        int sizeShortArray = shortArray.length;
        int indexLongArray = longArray.length - 1;
        char carry = 0;

        for (int i = sizeShortArray - 1; i >= 0; i--) {
            int sum = (shortArray[i] - '0') + (longArray[indexLongArray] - '0') + carry;

            switch (sum) {
                case 3 -> {
                    longArray[indexLongArray--] = '1';
                    carry = 1;
                    break;
                }
                case 2 -> {
                    longArray[indexLongArray--] = '0';
                    carry = 1;
                    break;
                }
                case 1 -> {
                    longArray[indexLongArray--] = '1';
                    carry = 0;
                    break;
                }
                default -> {
                    longArray[indexLongArray--] = '0';
                    carry = 0;
                }

            }
        }

        outerLoop:
        for (int i = indexLongArray; i >= 0; i--) {
            int sum = (longArray[i] - '0') + carry;
            switch (sum) {
                case 2 -> {
                    longArray[i] = '0';
                    carry = 1;
                    break;
                }
                case 1 -> {
                    longArray[i] = '1';
                    carry = 0;
                    break outerLoop;
                }
                default -> {
                    longArray[i] = '0';
                    carry = 0;
                    break outerLoop;
                }
            }
        }

        return finalAnswerToString(longArray, carry);
    }

    public String finalAnswerToString(char[] longArray, int carry) {
        String arrayToString = String.valueOf(longArray);
        int leadingBit = arrayToString.indexOf("1");

        return carry == 1
                ? "1" + arrayToString
                : leadingBit > -1 ? arrayToString.substring(leadingBit)
                : "0";
    }
}
