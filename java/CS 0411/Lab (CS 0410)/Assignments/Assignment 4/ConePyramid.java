// Samuel Settie  
// ConePyramid.java 
// 2/3/2022 11 AM
// Program to calculate either volume or surface area of a closed cone or a closed pyramid with a square base.

import java.util.Scanner;
 
public class ConePyramid { 
     
	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		double volume;
		double surfaceArea;
		int shapeChoice;
		int calcChoice;
		double radius;
		double height;
		double baseEdge;
		
		System.out.println("Choose a shape. Input 1 for a cone, or 2 for a pyramid.");
		shapeChoice = input.nextInt();
		
		if(shapeChoice>0){
			if(shapeChoice==1){
				System.out.println("Choose a calculation. Input 1 for volume, or 2 for surface area.");
				calcChoice = input.nextInt();
				
				if(calcChoice>0){
					if(calcChoice==1){
						
						System.out.println("Enter radius");
						radius = input.nextDouble();
						System.out.println("Enter height");
						height = input.nextDouble();
						volume = Math.PI * Math.pow(radius,2) * (height/3.0);
						System.out.printf("Volume = %.4f" , volume);
						
					}
					else{
						if(calcChoice==2){
							
							System.out.println("Enter radius");
							radius = input.nextDouble();
							System.out.println("Enter height");
							height = input.nextDouble();
							surfaceArea = Math.PI * radius * (radius + Math.sqrt(Math.pow(height,2) + Math.pow(radius,2)));
							System.out.printf("Surface Area = %.4f" , surfaceArea);
							
						}	
						else
							System.out.println("Please enter either a 1 or a 2.");
					}
				}
				else
					System.out.println("Please enter either a 1 or a 2.");	
			}
			else{
				if(shapeChoice==2){
					System.out.println("Choose a calculation. Input 1 for volume, or 2 for surface area.");
					calcChoice = input.nextInt();
				
					if(calcChoice>0){
						if(calcChoice==1){
						
							System.out.println("Enter base edge");
							baseEdge = input.nextDouble();
							System.out.println("Enter height");
							height = input.nextDouble();
							volume = Math.pow(baseEdge,2) * (height/3);
							System.out.printf("Volume = %.4f" , volume);
							
						}	
						else{
							if(calcChoice==2){
								
								System.out.println("Enter baseEdge");
								baseEdge = input.nextDouble();
								System.out.println("Enter height");
								height = input.nextDouble();
								surfaceArea = Math.pow(baseEdge,2) + 2 * baseEdge * Math.sqrt((Math.pow(baseEdge,2)/4)+Math.pow(height,2));
								System.out.printf("Surface Area = %.4f" , surfaceArea);
							
							}	
							else
								System.out.println("Please enter either a 1 or a 2.");
						}
					}
					else
						System.out.println("Please enter either a 1 or a 2.");
				}
				else
					System.out.println("Please enter either a 1 or a 2.");		
			}		
		}
		else
			System.out.println("Please enter either a 1 or a 2.");
	}
}