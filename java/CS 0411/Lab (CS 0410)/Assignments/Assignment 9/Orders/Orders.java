// Samuel Settie  
// Orders.java 
// 3/17/2022 11 AM
// Program to read a series of sales as pairs of inputs – item code and quantity sold. The program will calculate the number and price of each item 
// and then print the results and the total price. The program rejects orders which have an incorrect item code or a nonpositive quantity. 
// The program will only end when user enters the pair ZZZZ, 0 which may be the very first data entered.

import java.util.Scanner;
 
public class Orders
{ 
     public static void main(String[] args) 
	{
		Scanner input = new Scanner(System.in);
		String productCode = "";
		int productQuantity;
		
		final double PRODUCT1_PRICE = 3.16;
		final double PRODUCT2_PRICE = 22.15;
		final double PRODUCT3_PRICE = 7.52;
		final double PRODUCT4_PRICE = 8.99;
		final double PRODUCT5_PRICE = 18.23;
		
		int product1Count = 0;
		int product2Count = 0;
		int product3Count = 0;
		int product4Count = 0;
		int product5Count = 0;
		
		double product1Sum = 0;
		double product2Sum = 0;
		double product3Sum = 0;
		double product4Sum = 0;
		double product5Sum = 0;
		
		double totalPrice = 0;
		
		System.out.println("Please enter the product code and quantity. Enter ZZZZ and 0 when finished.");
		productCode = input.next();
		productQuantity = input.nextInt();
		
		while(!productCode.equals("ZZZZ") || productQuantity != 0)
		{
			while(!productCode.equals("AXA3") && !productCode.equals("DPA5") && !productCode.equals("ESS7") && !productCode.equals("QXK7") && !productCode.equals("PLP8") || productQuantity <= 0)
			{
				System.out.println("Error. Re-enter product code and quantity");
				productCode = input.next();
				productQuantity = input.nextInt();
				
				if(productCode.equals("ZZZZ") && (productQuantity == 0))
					break;
			}
			
			switch(productCode)
			{
				case "AXA3":
					product1Count += productQuantity;
					product1Sum += PRODUCT1_PRICE * productQuantity;
					System.out.println("Please enter the product code and quantity. Enter ZZZZ and 0 when finished.");
					productCode = input.next();
					productQuantity = input.nextInt();
					break;
				
				case "DPA5":
					product2Count += productQuantity;
					product2Sum += PRODUCT2_PRICE * productQuantity;
					System.out.println("Please enter the product code and quantity. Enter ZZZZ and 0 when finished.");
					productCode = input.next();
					productQuantity = input.nextInt();
					break;
				
				case "ESS7":
					product3Count += productQuantity;
					product3Sum += PRODUCT3_PRICE * productQuantity;
					System.out.println("Please enter the product code and quantity. Enter ZZZZ and 0 when finished.");
					productCode = input.next();
					productQuantity = input.nextInt();
					break;
				
				case "QXK7":
					product4Count += productQuantity;
					product4Sum += PRODUCT4_PRICE * productQuantity;
					System.out.println("Please enter the product code and quantity. Enter ZZZZ and 0 when finished.");
					productCode = input.next();
					productQuantity = input.nextInt();
					break;
				
				case "PLP8":
					product5Count += productQuantity;
					product5Sum += PRODUCT5_PRICE * productQuantity;
					System.out.println("Please enter the product code and quantity. Enter ZZZZ and 0 when finished.");
					productCode = input.next();
					productQuantity = input.nextInt();
					break;
				}
		}
		
		totalPrice = product1Sum + product2Sum + product3Sum + product4Sum + product5Sum;
		System.out.printf("AXA3: " + product1Count + " items \t Price = $%.02f \n", product1Sum);
		System.out.printf("DPA5: " + product2Count + " items \t Price = $%.02f \n", product2Sum);
		System.out.printf("ESS7: " + product3Count + " items \t Price = $%.02f \n", product3Sum);
		System.out.printf("QXK7: " + product4Count + " items \t Price = $%.02f \n", product4Sum);
		System.out.printf("PLP8: " + product5Count + " items \t Price = $%.02f \n", product5Sum);
		System.out.printf("Total price: $%.02f \n", totalPrice);
		
		
		
		
	}
}	