// Author: Samuel Settie 
// Filename: ComputeArea.java 
// Date: 1/14/22, CS410 11AM 
// Program to calculate area of a circle given the radius 
 
import java.util.Scanner; 
 
public class ComputeArea  
{ 
public static void main(String[] args) 
{ 
    Scanner input = new Scanner(System.in); 
    double radius;  // Declare radius 
    double area;  // Declare area 
 
   // Prompt user to enter a radius 
    System.out.print("Enter a number for radius: "); 
    radius = input.nextDouble(); 
 
    // Compute area 
    area = radius * radius * 3.14159; 
 
    // Display results 
    System.out.println("The area for the circle of radius "  
     + radius + " is " + area); 
} 
} 