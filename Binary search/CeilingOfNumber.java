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
public class CeilingOfNumber {
public static void main(String ar[])
{
    int arr[]={2,3,5,9,14,16,17,18};
    System.out.println(ceiling(arr,15));
}
public static int ceiling(int arr[],int target)
{
int start=0;
int end=arr.length-1;
while(start<=end)
{
    int mid=start+(end-start)/2;
if(arr[mid]==target)
{
    return arr[mid];
}
else if(target>arr[mid])
{
    start=mid+1;
}
else
{
    end=mid-1;
}
}
return arr[start];
}

}
