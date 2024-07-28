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
public class SmallestLetterGreaterThanTarget {
    public static char findLetter(char letters[],char target)
    {
        int start=0;
        int end=letters.length-1;
        while(start<=end)
        {
            int mid=start+(end-start)/2;
            
            if(target<letters[mid])
            {
                end=mid-1;
            }
            else
            {
                start=mid+1;
            }
        }
                return letters[start%letters.length];
    }
    public static void main(String ar[])
    {
        char letters[]= {'c','f','j'};
    System.out.println(findLetter(letters,'j'));
    }
    
}
