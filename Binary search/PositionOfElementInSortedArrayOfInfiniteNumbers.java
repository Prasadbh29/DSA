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
//https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers
public class PositionOfElementInSortedArrayOfInfiniteNumbers {
    
    public static int mainAns(int arr[],int target)
    {
        int start=0;
        int end=1;
        //condition for target to lie in range
        while(target>arr[end])
        {
            int temp=end+1;//new start
            //double chunk size
            //end=previous end+sizeOfChunk*2
            end=end+(end-start+1)*2;
            start=temp; 
        }
    return binarySearch(arr,target,start,end);
    }
    
    public static int binarySearch(int arr[],int target,int start,int end)
    {
        while(start<=end)
        {
            int mid=start+(end-start)/2;
            
            if(arr[mid]==target)
            {
                return mid;
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
        return -1;
        
    }
    public static void main(String ar[])
    {
        int arr[]={3,5,7,9,10,90,100,130,140,160,170};
        System.out.println(mainAns(arr,10));
    }
    
}
