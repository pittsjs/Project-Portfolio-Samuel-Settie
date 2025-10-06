// Samuel Settie  
// SumSquares.java 
// 2/24/2022 11 AM
// Program to input an even positive integer, n, and then calculate and print the sum 2^2 + 4^2 + 6^2 + 8^2 + ....... + n^2. 

import java.util.Scanner;
 
public class SumSquares 
{ 
     public static void main(String[] args) 
	{
		Scanner input = new Scanner(System.in);
		int n;												// Initializes int variable n for an even positive integer input by the user.
		int sum = 0;										// Initializes int variable for the sum of all even numbers squared up to n squared.
		int i = 2;											// Initializes int variable i as a counter for the while loop.
		
		System.out.println("Enter a positive, even integer");
		n = input.nextInt();
		while( (n <=0) || (n % 2 == 1) )
		{
			System.out.println("Enter a positive, even integer");
			n = input.nextInt();
		}
		
		while(i <= n)
		{
			sum = sum + (int)Math.pow(i, 2);
			i = i + 2;
			
		}
		
		System.out.println(sum);
		
	}
}	