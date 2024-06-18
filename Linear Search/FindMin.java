/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dsa;

/**
 *
 * @author Prasad bhagyawant
 */
public class FindMin {
    
   public static void main(String ar[])
   {
       int[] arr={10,-2,4,8,7,9,5,3,1,45};
        System.out.println(findMinimum(arr));
   }
   
   public static int findMinimum(int[] arr)
   {
       int min=arr[0];
       for(int i=1;i<arr.length;i++)
       {
           if(arr[i]<min)
           {
               min=arr[i];
           }
       }
       return min; //return minimum value
   }
    
}
