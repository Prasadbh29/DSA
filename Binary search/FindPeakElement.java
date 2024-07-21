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
public class FindPeakElement {
     public static void main(String ar[])
    {
        int arr[]={0,1,0};
        System.out.println(peakElement(arr));
    }
    public static int peakElement(int[] arr) {
        int start=0;
        int end=arr.length-1;
       
       while(start<end){
        int mid=start+(end-start)/2;
        if(arr[mid]>arr[mid+1])
        {
            end=mid;
        }
        else
        {
            start=mid+1;
        }
       }
    return start;

    }
    
}
