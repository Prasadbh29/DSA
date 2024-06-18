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
public class OrderAgnosticBinarySearch {
    
   public static void main(String ar[])
   {
       int[] arr={-18,-12,-4,0,2,3,4,15,16,18,22,45,89};
        int target=22;
        System.out.println(orderAgnosticBS(arr,target));

   }
   static int orderAgnosticBS(int[] arr,int target)
   {  int start=0;
        int end=arr.length-1;
        
        
        //find whether array is sorted in ascendong or descending
        boolean isAsc;
        if(arr[start]<arr[end])
        {
            isAsc=true;
        }
        else
        {
            isAsc=false;
        }
        
        while(start<=end)
        {
            //find middle element
            // int mid=(start+end)/2; might be possible that (start+end)may exceeds the range of int
            int mid=start+(end-start)/2;
            
            if(arr[mid]==target)
            {
                return mid;
            }
            if(isAsc)
            {
                if(target<arr[mid])
                {
                end=mid-1;
                }
                else if(target>arr[mid])
                {
                start=mid+1;
                }
            }
            else
            {
                if(target>arr[mid])
                {
                end=end-1;
                }
                else if(target<arr[mid])
                {
                start=mid+1;
                }
            }
           
        }
        return -1;
   }
    
}
