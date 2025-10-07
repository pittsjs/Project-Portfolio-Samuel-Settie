// CS0410
// Name and Section here
// NumberMethods.java
// Program to show some methods involving numerical analysis
// Some methods are incomplete, some have errors
// Complete the methods and the main



import java.util.Scanner;

public class NumberMethodsErrors {
	public static void main(String[] args) {
		
		// Complete the main method by adding in 8 more 
		// System.out.println commands where each should
		// contain a call to a method
		Scanner input = new Scanner(System.in);
		System.out.print("Enter a positive integer...");
		int numIn = input.nextInt();
		System.out.println("Number of digits in number is " + numberDigits(numIn));
		System.out.println("Number begins with " + lastNum(numIn));
		System.out.println("Number ends with " + firstNum(numIn));
		System.out.println("Does number begin with 7? " + beginWith(numIn, 7));
		System.out.println("Does number begin with 3? " + beginWith(numIn, 3));
		System.out.println("Does number contain a 7? " + contains(numIn,7));
		System.out.println("Does number contain a 3? " + contains(numIn,3));
		System.out.println("Number of factors of the number is " + numberOfFactors(numIn));
		System.out.println("Sum of digits in the number is " + sumDigits(numIn));
	}
	
	// The method below returns the number of digits 
	// in the parameter num
	public static int numberDigits(int num) {
		int length = 0;
		
		while(num > 0){
			num = num / 10;
			length++;
		}
		return length;
		
		
	}
	
	// The method below returns the value of
	// the last digit in the num parameter
	public static int lastNum(int num) {
		return num % 10;
	}
	
	// The method below returns the value of
	// the first digit in the num parameter
	public static int firstNum(int num) {
		int firstDigit = 0;
		
		while(num > 9)
			num = num / 10;
		
		firstDigit = num;
		return firstDigit;
	}
	
	// The method below returns true if num begins
	// with x otherwise it returns false
	public static boolean beginWith(int num, int x) {
		if (firstNum(num) == x)
			return true;
		else
			return false;
	}
	
	
	// The method below returns true if the num parameter
	// contains x as one of its digits otherwise it 
	// returns false
	public static boolean contains(int num, int x) {
		int currentLength = numberDigits(num);
		int currentNum = lastNum(num);
		for(int i = 0; i <= currentLength; i++){
			if(currentNum == x)
				return true;
			num = num/10;
			currentNum = lastNum(num);
		}	
		return false;
	}
	
	// The method below counts the number of distinct factors of the parameter
	// The factors do not include 1 and the number itself
	// Example: 12 has factors 2, 3, 4, 6 so should return 4
	// Example: 13 is a prime so will return 0
	public static int numberOfFactors(int x) {
		int numFactors = 0;
		for(int i = 2; i < x; i++){
			if(x % i == 0)
				numFactors++;
		}
		return numFactors;
	}
	
	// Method to sum the digits in the num parameter
	// Example: num is 2815 will return 16
	public static int sumDigits(int num)  {
		int currentLength = numberDigits(num);
		int currentNum = lastNum(num);
		int sum = currentNum;
		for(int i = 0; i <= currentLength; i++){
			num = num/10;
			currentNum = lastNum(num);
			sum += currentNum;
		}	
		return sum;
	}

	
}

