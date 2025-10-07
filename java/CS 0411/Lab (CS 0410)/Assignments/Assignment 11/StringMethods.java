// StringMethods.java
// March 31, 2022
// Samuel Settie
// Program to do certain String operations with methods



import java.util.Scanner;

public class StringMethods {
	public static void main(String[] args) {
	
		Scanner input = new Scanner(System.in);
		System.out.println("Enter a sentence");
		String s = input.nextLine();
		
		System.out.println("\nNumber of Spaces in the string = " + countSpaces(s) + "\n");
		System.out.println("Number of E's in the string = " + countChar(s, "E") + "\n");
		System.out.println("Number of Stars in the string = " + countChar(s, "*") + "\n");
		System.out.println("Does string contain vowels? " + anyVowels(s) + "\n");
		System.out.println("String reversed = " + reverse(s) + "\n");
		System.out.println("String shifted by one letter is " + shift(s)  + "\n");
	}
	
	// method to return the number of spaces in a String
	public static int countSpaces(String s) {
		int count = 0;
		for(int i = 0; i < s.length(); i++){
			if(s.charAt(i) == ' ')
				count++;
		}
		return count;
	}
	
	// method to count the number of instances of
	// a particular character in a String
	// the method will return the total of upper and lower
	// case instances if it is a letter
	public static int countChar(String s, String x) {
		int count = 0;
		for(int i = 0; i < s.length(); i++){
			if(x.toUpperCase().charAt(0) == s.toUpperCase().charAt(i))
				count++;
		}
		return count;
	}
	
	// method to detect whether a String contains a vowel or not
	// must include call(s) to countChar
	// returns true or false
	public static boolean anyVowels(String s) {
		int countA = countChar(s, "a");
		int countE = countChar(s, "e");
		int countI = countChar(s, "i");
		int countO = countChar(s, "o");
		int countU = countChar(s, "u");
		
		if(countA + countE + countI + countO + countU > 0)
			return true;
		else
			return false;
		
	}
	
		
	// method to return the reverse of a String
	public static String reverse(String s) {
		String reverse = "";
		for(int i = s.length()-1; i >= 0; i--)
			reverse = reverse.concat(s.substring(i, i+1));
		return reverse;
		
	}

   	// method to return a character shifted one place in the alphabet
	// a becomes b, b become c etc. z becomes a
	// A becomes B, B becomes C etc. Z becomes A
	// all other characters are left unchanged
 	public static char shift(String s, int i) {
		char shift;
		int charValue = (int)s.charAt(i);
		if(charValue == 122){
			shift = 'a';
		}
		else if(charValue == 90){
			shift = 'A';
		}
		else if(charValue < 65 || (charValue >= 91 && charValue <=96) || charValue > 122){
			shift = s.charAt(i);
		}
		else{
			shift = (char)(charValue + 1);
		}
		return shift;	
	}
	
	// method to return a String with each letter shifted one place in the alphabet
	// method must include call(s) to previous method
	public static String shift(String s) {
		String newString = "";
		for(int i = 0; i < s.length(); i++)
			newString = newString + shift(s, i);
		return newString;
	}
	
	
}
