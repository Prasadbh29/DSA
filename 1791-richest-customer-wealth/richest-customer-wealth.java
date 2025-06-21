class Solution {
    
 public static int maximumWealth(int[][] accounts) {

        int max=0,sum=0;
        for (int person=0;person<accounts.length;person++)
        {
            sum=0;
            for (int bank=0;bank<accounts[person].length;bank++)
            {
            sum+=accounts[person][bank];
            }
            if(sum>max)
         {
            max=sum;
         }
        }
        
        return max;
    }

}
