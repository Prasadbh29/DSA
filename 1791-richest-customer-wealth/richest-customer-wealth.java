class Solution {
    
 public static int maximumWealth(int[][] accounts) {
        int sum=0,max=Integer.MIN_VALUE;
     for(int num[]:accounts)
     {
        sum=0;
        for(int acc:num)
        {
            sum+=acc;
        }

        if(sum>max)
        {
            max=sum;
        }
     }
     return max;
    }

}
