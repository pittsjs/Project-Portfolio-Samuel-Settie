// Samuel Settie  
// StudentID.java 
// 2/17/2022 11 AM
// Program to input a student’s last name, campus (4 letter abbreviation), month of birth (3 letter abbreviation) and display the student’s ID. 

import java.util.Scanner;
 
public class StudentID 
{ 
     public static void main(String[] args) 
	{
		Scanner input = new Scanner(System.in);
		String lastName = "";							// Initializes variable for the user's last name.
		String campusName = "";							// Initializes variable for name of the user's campus.
		String birthMonth = "";							// Initializes variable for the user's birth month.
		int nameLength;									// Initializes variable for the length of the user's last name.
		String studentID = "";							// Initializes variable for the user's student ID.
		
		System.out.println("Enter your last name.");
		lastName = input.nextLine().toUpperCase();
		nameLength = lastName.length();
		
		switch(lastName.substring(0,1))
		{
			case "B": case "C": case "D": case "G": case "J": case "P": case "Q": case "R": case "S": case "X":
				studentID = "X";
				break;
			
			case "A": case "E": case "I": case "O": case "U": case "Y":
				studentID = "Y";
				break;
			
			default:
				studentID = "Z";
		}
		
		System.out.println("Enter the 4-letter abbreviation for your campus.");
		campusName = input.nextLine().toLowerCase();
		
		switch(campusName)
		{
			case "main":
				studentID = studentID.concat("101");
				break;
			
			case "cent":
				studentID = studentID.concat("102");
				break;
			
			case "sout":
				studentID = studentID.concat("103");
				break;
			
			case "jane":
				studentID = studentID.concat("104");
				break;
			
			case "cant":
				studentID = studentID.concat("105");
				break;
			
			case "fiel":
				studentID = studentID.concat("106");
				break;
			
			default:
				studentID = studentID.concat("110");
		}
		
		System.out.println("Enter the 3-letter abbreviation for your birth month.");
		birthMonth = input.nextLine().toLowerCase();
		
		switch(birthMonth)
		{
			case "jan": case "feb":
				studentID = studentID.concat("01");
				break;
			
			case "mar": case "apr":
				studentID = studentID.concat("02");
				break;
			
			case "may": case "jun":
				studentID = studentID.concat("03");
				break;
			
			case "jul": case "aug":
				studentID = studentID.concat("04");
				break;
			
			case "sep": case "oct":
				studentID = studentID.concat("05");
				break;
			
			case "nov": case "dec":
				studentID = studentID.concat("06");
				break;
		}
		
		switch(nameLength)
		{
			case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
				studentID = studentID.concat("0" + String.valueOf(nameLength));
				break;
			default:
				studentID = studentID.concat(String.valueOf(nameLength));
		}
		
		System.out.println("Student ID = " + studentID);
		
	}
}	