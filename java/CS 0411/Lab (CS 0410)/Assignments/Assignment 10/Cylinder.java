// Samuel Settie  
// Cylinder.java 
// 3/24/2022 11 AM
// Program to input the radius and height of a cylinder and calculate and print both the volume and surface area.

import java.util.Scanner;
 
public class Cylinder
{ 
     public static void main(String[] args) 
	{
		Scanner input = new Scanner(System.in);
		int i = 1;
		char continueLoop;
		double radius;
		double height;
		
		do
		{
			System.out.println("Please enter the radius of the cylinder.");
			radius = input.nextDouble();
			System.out.println("Please enter the height of the cylinder.");
			height = input.nextDouble();
			
			System.out.print("Set " + i + ": ");
			display(radius,height);
			
			i++;
			System.out.println("Enter Y if you would like to enter another set of cylinder dimensions.");
			continueLoop = input.next().toUpperCase().charAt(0);
			
		} while(continueLoop == 'Y');

	}

	public static double volCyl(double radius, double height)
	{
		return Math.PI * Math.pow(radius, 2) * height;
	}

	public static double surfaceAreaCyl(double radius, double height)
	{
		return Math.PI * radius * (2 * radius + 2 * height);
	}
	
	public static void display(double radius, double height)
	{
		System.out.print("Volume : " + volCyl(radius, height) + "\t");
		System.out.println("Surface Area : " + surfaceAreaCyl(radius, height));
	}	
}	