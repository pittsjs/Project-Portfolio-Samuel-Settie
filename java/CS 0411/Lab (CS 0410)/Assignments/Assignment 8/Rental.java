// Samuel Settie  
// Rental.java 
// 3/3/2022 11 AM
// Program to input the class of a vehicle, the number of days rented, miles traveled and whether the renter has a concession, and then print the 
// vehicle charge, the mileage charge, the discount and the final price.

import java.util.Scanner;
 
public class Rental
{ 
     public static void main(String[] args) 
	{
		Scanner input = new Scanner(System.in);
		
		final double COMPACT_DAY_RATE = 60;							// Initializes a final variable for a compact vehicle's cost per day.
		final double COMPACT_FLAT_RATE = 150;						// Initializes a final variable for a compact vehicle's flat rate charge.
		final double COMPACT_MILE_RATE = 0.10;						// Initializes a final variable for a compact vehicle's cost per mile.
		
		final double MIDSIZE_DAY_RATE = 70;
		final double MIDSIZE_FLAT_RATE = 180;
		final double MIDSIZE_MILE_RATE = 0.15;
		
		final double UTILITY_DAY_RATE = 80;
		final double UTILITY_FLAT_RATE = 140;
		final double UTILITY_MILE_RATE = 0.20;
		
		final double OTHER_DAY_RATE = 120;
		final double OTHER_FLAT_RATE = 200;
		final double OTHER_MILE_RATE = 0.25;
		
		char vehicleClass;											// Initializes variable for the class of the vehicle the user inputs.
		int numDaysRented;
		int milesTraveled;
		double vehicleCost = 0;
		double mileageCost = 0;
		double discountAmount = 0;
		double totalCost = 0;
		char concessionDiscount;									// Initializes variable for whether or not the renter has a concession.
		
		
		System.out.println("Enter a 1-letter abbreviation for the vehicle class you wish to rent: C for compact, M for midsize, T for truck/SUV, O for other");
		vehicleClass = input.nextLine().toUpperCase().charAt(0);
		
		while(vehicleClass != 'C' && vehicleClass != 'M' && vehicleClass != 'T' && vehicleClass != 'O')
		{
			System.out.println("Enter a 1-letter abbreviation for the vehicle class you wish to rent: C for compact, M for midsize, T for truck/SUV, O for other");
			vehicleClass = input.nextLine().toUpperCase().charAt(0);
		}
		
		System.out.println("Enter the number of days the vehicle was rented for.");
		numDaysRented = input.nextInt();
		
		switch(vehicleClass)
		{
			case 'C':
			
				if(numDaysRented > 3)
					vehicleCost = numDaysRented * COMPACT_DAY_RATE;
				else
					vehicleCost = COMPACT_FLAT_RATE;
				
				break;
			
			case 'M':
			
				if(numDaysRented > 3)
					vehicleCost = numDaysRented * MIDSIZE_DAY_RATE;
				else
					vehicleCost = MIDSIZE_FLAT_RATE;
				
				break;
			
			case 'T':
			
				if(numDaysRented > 2)
					vehicleCost = numDaysRented * UTILITY_DAY_RATE;
				else
					vehicleCost = UTILITY_FLAT_RATE;
				
				break;
			
			case 'O':
			
				if(numDaysRented > 2)
					vehicleCost = numDaysRented * OTHER_DAY_RATE;
				else
					vehicleCost = OTHER_FLAT_RATE;
				
				break;
		}
		
		System.out.printf("Vehicle charge: $%.02f \n", vehicleCost);
		
		System.out.println("Enter the number of miles traveled");
		milesTraveled = input.nextInt();
		input.nextLine();
		
		switch(vehicleClass)
		{
			case 'C':
				mileageCost = milesTraveled * COMPACT_MILE_RATE;
				break;
			
			case 'M':
				mileageCost = milesTraveled * MIDSIZE_MILE_RATE;
				break;
			
			case 'T':
				mileageCost = milesTraveled * UTILITY_MILE_RATE;
				break;
			
			case 'O':
				mileageCost = milesTraveled * OTHER_MILE_RATE;
				break;
		}
		
		System.out.printf("Mileage charge: $%.02f \n", mileageCost);
		totalCost = vehicleCost + mileageCost;
		
		System.out.println("Do you have a concession? (Military, senior, student, etc.) Enter Y for yes, or N for no.");
		concessionDiscount = input.nextLine().toUpperCase().charAt(0);
		
		while(concessionDiscount != 'Y' && concessionDiscount != 'N')
		{
			System.out.println("Do you have a concession? (Military, senior, student, etc.) Enter Y for yes, or N for no.");
			concessionDiscount = input.nextLine().toUpperCase().charAt(0);
		}
		
		if(concessionDiscount == 'Y')
		{
			discountAmount = totalCost * .05;
			totalCost = totalCost - discountAmount;
		}
		else
			discountAmount = 0;
		
		System.out.printf("Discount Amount : $%.02f \n", discountAmount);
		System.out.printf("Total Cost : $%.02f \n", totalCost);
		
		
	}
}	