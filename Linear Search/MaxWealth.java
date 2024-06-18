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
public class MaxWealth {
    
    public static void main(String ar[])
    {
        int [][] arr={
            {1,2,3},
            {4,5,6},
            {1,4,5}
                
    };
        System.out.println("MAX WEALTH:"+maximumWealth(arr));
                
    }
    public static int maximumWealth(int[][] accounts) 
    {
        int max=Integer.MIN_VALUE;
        for(int person=0;person<accounts.length;person++)
        {
            int sum=0;
        for(int account=0;account<accounts[person].length;account++)
        {
            sum+=accounts[person][account];
        }
        if(sum>max)
        {
            max=sum;
        }
        }
        return max;
    }
}
    

