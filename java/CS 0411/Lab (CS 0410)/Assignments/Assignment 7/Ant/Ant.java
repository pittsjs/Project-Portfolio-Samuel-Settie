// Samuel Settie  
// Ant.java 
// 2/24/2022 11 AM
// Program to print the year and population of an ant colony every year from 2021 to the first year when the population is under 6 million. 
 
public class Ant 
{ 
     public static void main(String[] args) 
	{
		
		int year = 2021;									// Initializes int variable for the current year.
		double population = 6.356;							// Initializes double variable for the population of an ant colony in millions.
		int i = 0;											// Initializes int variable as a counter for the while loop.
		
		System.out.println("Year = " + year);
		System.out.println("Population = " + population + " million");
		
		while(population >= 6)
		{
			year++;
			population = population - (population * 0.006);
			
			System.out.println("Year = " + year);
			System.out.printf("Population = %.3f million \n", population);
		}
		
		
		
	}
}	