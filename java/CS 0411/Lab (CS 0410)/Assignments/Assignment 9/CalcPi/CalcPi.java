// Samuel Settie  
// Orders.java 
// 3/17/2022 11 AM
// Program to calculate pi using a certain number of terms in the infinite series.

import java.util.Scanner;
 
public class CalcPi
{ 
     public static void main(String[] args) 
	{
		Scanner input = new Scanner(System.in);
		int numTerms;
		double pi = 0;
		
		System.out.println("How many terms would you like to use in the calculation?");
		numTerms = input.nextInt();
		
		for(double i = 1.0; i <= numTerms; i+= 1.0)
		{
			pi += 1/((4*i-3)*(4*i-1));
		}
		
		pi = pi * 8;
		System.out.println(pi);
	}
}