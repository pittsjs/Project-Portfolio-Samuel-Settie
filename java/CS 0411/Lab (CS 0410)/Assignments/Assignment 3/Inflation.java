// Samuel Settie  
// Inflation.java 
// 1/27/2022 11 AM
// Program to calculate the cost of an item in the future based 
// on whether the inflation increase is calculated yearly or daily.

import java.util.Scanner;
 
public class Inflation { 
     
	public static void main(String[] args) {
	
		Scanner input = new Scanner(System.in);
		double cost;					// Original cost
		double yearlyCost;				// Future yearly cost
		double dailyCost;				// Future daily cost
		double inflationRate;			// Inflation rate
		int years;						// Number of years
	
		System.out.println("Enter original cost: ");
		cost = input.nextDouble();
	
		System.out.println("Enter inflation rate: ");
		inflationRate = input.nextDouble();
	
		System.out.println("Enter number of years: ");
		years = input.nextInt();
	
		yearlyCost = cost * (Math.pow((1 + inflationRate*0.01), years));
		dailyCost = cost * (Math.pow(1 + ((inflationRate*0.01)/365), 365*years));
	
		System.out.println("Original cost = $" + cost);
		System.out.printf("Future cost with inflation calculated yearly : $ %.2f \n" , yearlyCost);
		System.out.printf("Future cost with inflation calculated daily : $ %.2f \n" , dailyCost);
	
 }
}

