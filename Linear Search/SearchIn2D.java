package dsa;


import java.util.Arrays;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Prasad bhagyawant
 */
public class SearchIn2D {
    public static void main(String ar[])
    {
        int[][] arr={
            {23,4,1},
            {18,12,3,9},
            {78,99,34,56},
            {18,12,1055}
        
        };
        int target=0;
        System.out.println(Arrays.toString(search(arr,target)));
        System.out.println(max(arr));
        System.out.println(min(arr));


                
    }
    public static int[] search(int[][] arr,int target)
    {
        for(int row=0;row<arr.length;row++)
        {
            for(int col=0;col<arr[row].length;col++)
            {
               if(arr[row][col]==target)
               {
                  return new int[]{row,col};
               }
            }
        }
        return null;
       
    }
    
     public static int max(int[][] arr)
    {
        int max=0;
        for(int row=0;row<arr.length;row++)
        {
            for(int col=0;col<arr[row].length;col++)
            {
               if(arr[row][col]>max)
               {
                  max=arr[row][col];
               }
            }
        }
        return max;
       
    }
     
     
      public static int min(int[][] arr)
    {
        int min=Integer.MAX_VALUE;
        for(int row=0;row<arr.length;row++)
        {
            for(int col=0;col<arr[row].length;col++)
            {
               if(arr[row][col]<min)
               {
                  min=arr[row][col];
               }
            }
        }
        return min;
       
    }
    
}
