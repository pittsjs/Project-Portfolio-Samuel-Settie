// Samuel Settie  
// Tickets.java 
// 2/10/2022 11 AM
// Program to input the number of adults and children in a party and calculate and output the cost of the tickets.

import java.util.Scanner;
 
public class Tickets 
{ 
     public static void main(String[] args) 
	{
		final double highAdultRate = 20.0;						// Highest rate for adult tickets.
		final double highChildRate = 15.0;						// Highest rate for child tickets.
		final double mediumAdultRate = 18.75;					// Medium rate for adult tickets.
		final double mediumChildRate = 13.75;					// Medium rate for child tickets.
		final double lowAdultRate = 17.50;						// Lowest rate for adult tickets.
		final double lowChildRate = 12.50;						// Lowest rate for child tickets.
		
		int childTickets;										// Total number of child tickets.
		double childCost;										// Total cost of child tickets.
		int adultTickets;										// Total number of adult tickets.	
		double adultCost;										// Total cost of adult tickets.
		double groupCost;										// Total cost of the group of adults and children.
		
		int discountNum;										// 7 digit number inputed for a chance at a discount.
		double discount;										// Total discount.
		double finalCost;										// Final cost of the group compounded with the discount.
		
		Scanner input = new Scanner(System.in);
		
		System.out.println("Enter the number of child tickets.");
		childTickets = input.nextInt();
		System.out.println("Enter the number of adult tickets.");
		adultTickets = input.nextInt();
		System.out.println("Enter a 7 digit number.");
		discountNum = input.nextInt();
		
		if((childTickets + adultTickets) >= 20)
		{
			childCost = childTickets * lowChildRate;
			adultCost = adultTickets * lowAdultRate;
		}
		else if((childTickets + adultTickets) > 10)
		{
			childCost = childTickets * mediumChildRate;
			adultCost = adultTickets * mediumAdultRate;
		}
		else
		{
			childCost = childTickets * highChildRate;
			adultCost = adultTickets * highAdultRate;
		}
		
		groupCost = childCost + adultCost;
		
		System.out.println("Total cost of children = $" + childCost);
		System.out.println("Total cost of adults = $" + adultCost);
		System.out.println("Total cost of group = $" + groupCost);
		
		finalCost = groupCost;
		
		if((discountNum % 7 == 0) ^ (discountNum % 11 == 0))
		{			
			discount = 0.05;
			finalCost = finalCost - (finalCost*discount);
		}
		else
		{
			discount = 0;
		}
		
		System.out.println("Discount = $" + discount);
		System.out.println("Final cost = $" + finalCost);
		
	}
}