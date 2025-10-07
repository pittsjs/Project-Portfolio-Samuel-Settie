// StringMethods.java
// March 31, 2022
// Samuel Settie
// Program to do certain String operations with methods

import java.util.Scanner;

public class Inventory {
	public static void main(String[] args) {
		String[] productIDs = new String[5];
		double[] productPrices = new double[5];
		int[] productInventory = new int[5];
		
		System.out.println("Enter productIDs, prices, and inventories");
		fillArrays(productIDs, productPrices, productInventory);
		printArrays(productIDs, productPrices, productInventory);
		editArrays(productIDs, productPrices, productInventory);
		printFinalArrays(productIDs, productPrices, productInventory);
		
		
	}
	
	public static void fillArrays(String[] a, double[] b, int[] c){
		Scanner input = new Scanner(System.in);
		System.out.println("Enter all product ID's");
		for(int i = 0; i < a.length; i++)
			a[i] = input.nextLine();
		
		System.out.println("Enter all product prices");
		for(int i = 0; i < b.length; i++)
			b[i] = input.nextDouble();
		
		System.out.println("Enter all product inventories");
		for(int i = 0; i < c.length; i++)
			c[i] = input.nextInt();
	}
	
	public static void printArrays(String[] a, double[] b, int[] c){
		System.out.println("i \tProduct IDs \tPrices \tInventory");
		for(int i = 0; i < a.length; i++)
			System.out.println(i + "\t" + a[i] + "\t\t" + b[i] + "\t\t" + c[i]);
	}
	
	public static void editArrays(String[] a, double[] b, int[] c){
		Scanner input = new Scanner(System.in);
		int userResponse = -1;
		System.out.println("Enter 0 if you would like to make any edits.");
		userResponse = input.nextInt();
		while(userResponse == 0){
			System.out.println("Enter 1 to edit product IDs, 2 to edit product prices, 3 to edit product inventory");
			userResponse = input.nextInt();
			
			if(userResponse == 1){
				System.out.println("Enter the index of the data point you would like to edit.");
				userResponse = input.nextInt();
				input.nextLine();
				System.out.println("Enter the new data point.");
				a[userResponse] = input.nextLine();
			}
			else if(userResponse == 2){
				System.out.println("Enter the index of the data point you would like to edit.");
				userResponse = input.nextInt();
				System.out.println("Enter the new data point.");
				b[userResponse] = input.nextDouble();
			}
			else if(userResponse == 3){
				System.out.println("Enter the index of the data point you would like to edit.");
				userResponse = input.nextInt();
				System.out.println("Enter the new data point.");
				c[userResponse] = input.nextInt();
			}
			
			System.out.println("Enter 0 to continue making edits.");
			userResponse = input.nextInt();
		}
	}
	
	public static void printFinalArrays(String[] a, double[] b, int[] c){
		double totalPrice = 0;
		
		System.out.println("i \tProduct IDs \tPrices \tInventory \tTotal Price");
		for(int i = 0; i < a.length; i++){
			System.out.println(i + "\t" + a[i] + "\t\t" + b[i] + "\t\t" + c[i] + "\t\t $" + b[i]*c[i]);
			totalPrice+= b[i]*c[i];
		}
		
		System.out.println("Total price = $" + totalPrice);
	}
}