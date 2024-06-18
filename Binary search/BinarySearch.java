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
public class BinarySearch {
    public static void main(String ar[])
    {
        int[] arr={-15,-4,0,2,4,5,6,7,8,9,10,12,36,45,78,98};
        int target=36;
        System.out.println(binarySearch(arr,target));
        
    }
    
    
    //return the index
    //if not found return -1
    static int binarySearch(int[] arr,int target)
    {
        int start=0;
        int end=arr.length-1;
        
        while(start<=end)
        {
            //find middle element
            // int mid=(start+end)/2; might be possible that (start+end)may exceeds the range of int
            int mid=start+(end-start)/2;
            
            
            if(target<arr[mid])
            {
                end=mid-1;
            }
            else if(target>arr[mid])
            {
                start=mid+1;
            }
            else
            {
                //
                return mid;
            }
        }
        return -1;
    }
    
}
