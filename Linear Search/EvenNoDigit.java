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
public class EvenNoDigit {
    public static void main(String ar[])
    {
        /*
        Shortcut to obtain total number of digits in a number using log10() of class Math
        System.out.println((int)Math.log10(100)+1);
        */
        int arr[]={10,200,4000,142,201};
        System.out.println(findNumbers(arr));
        
}

    
    static int findNumbers(int[] nums)
    {
        int count=0;
        for(int num:nums)
        {
            if(even(num))
            {
                count++;
            }
        }
        return count;
    }
    
    //to check whether an number contains even number of digits
    static boolean even(int num) {
        int count=0;
        while(num>0)
        {
            count++;
            num=num/10;
        }
        
        if(count%2==0)
        {
        return true;    
        }
        else
        {
            return false;
        }
    }
    
    
    
}
