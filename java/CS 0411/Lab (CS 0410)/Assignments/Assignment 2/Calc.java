// Samuel Settie 
// Calc.java 
// 1/20/22 11AM 
// Program to do some simple calculations 
 
public class Calc {
     
public static void main(String[] args) { 
  
  int firstNum = 29645; 
  int secondNum = 392; 
  int sum;    // sum of firstNum and secondNum 
  int diff;   // difference of firstNum and secondNum 
  int product;  // product of firstNum and secondNum 
  double quotient; // firstNum divided by secondNum 
  double average;  // average of firstNum and secondNum 
  int remainder;   // remainder when firstNum is divided by secondNum 
   
  sum = firstNum + secondNum; 
  diff = firstNum - secondNum;
  product = firstNum * secondNum;
  quotient = (double)firstNum/secondNum;
  average = sum / 2.0;
  remainder = firstNum%secondNum;
  // Add in the other 5 calculations 
   
  System.out.println("Sum is : " + sum);
  System.out.println("Difference is : " + diff);
  System.out.println("Product is : " + product);
  System.out.println("Quotient is : " + quotient);
  System.out.println("Average is : " + average);
  System.out.println("Remainder is : " + remainder);
 
  // Print the other 5 quantities in the same way   
 } 
} 