/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dsa;

import java.util.Arrays;

/**
 *
 * @author Prasad bhagyawant
 */
public class FindFirstAndLastPositionOfElementInSortedArray {
    
    static int search(int arr[],int target,boolean findStart)
    {
        int start=0;
        int end=arr.length-1;
        int mid;
        int ans=-1;
        while(start<=end)
        {
               mid=start+(end-start)/2;
               if(arr[mid]==target)
               {
                   ans=mid;
                   if(findStart==true)
                   {
                       end=mid-1;
                   }
                   else
                   {
                       start=mid+1;
                   }
               }
               else if(target<arr[mid])
               {
                   end=mid-1;
               }
               else
               {
                   start=mid+1;
               }
                  
        }
        return ans;
    }
    public static int[] searchRange(int arr[],int target)
    {
       int start=search(arr,target,true);
       int end=search(arr,target,false);
       int ans[]={-1,-1};
       ans[0]=start;
       ans[1]=end;
       return ans;
    }
    public static void main(String ar[])
    {
        int arr[]={5,7,7,7,7,8,8,10};
        int ans[]=searchRange(arr,7);
        System.out.println(Arrays.toString(ans));
    }
    
}
