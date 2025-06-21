
public class Solution {
    
    static int findNumbers(int[] nums)
    {
        int count=0;
        for (int num:nums)
        {
            if(even(num))
            {
                count++;
            }
        }
        return count;
    }
public static boolean even(int num)
{
    int count=0;
    while(num>0)
    {
        count++;
        num=num/10;

    }

    return count%2==0;
}

}
    
    

