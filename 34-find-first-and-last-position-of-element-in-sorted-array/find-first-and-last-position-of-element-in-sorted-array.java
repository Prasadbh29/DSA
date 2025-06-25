class Solution {
    public int[] searchRange(int[] nums, int target) {
       int[] ans={-1,-1};
        ans[0]=binary(nums,target,true);
        
        //what if that element not exist in array then it doesnt make sense to search for last occurence
        if(ans[0] != -1){
            //if first occurence is not equal to -1 i.e Element exist at range of first occurnce
            ans[1]=binary(nums,target,false);

        }
        return ans;
    }

    int binary(int[] arr,int target,boolean isFirstIndex)
    {
        int start=0;
        int end=arr.length-1;
        int ans=-1;
        while(start<=end)
        {
            int mid=start+(end-start)/2;

            if(target<arr[mid])
            {
                end=mid-1;
            }
            else if(target>arr[mid])
            {
                start=mid+1;
            }
            else{
                //potential ans
                ans=mid;
                if(isFirstIndex)
                {
                    end=mid-1;
                }
                else{
                    start=mid+1;
                }
            }
        }

        return ans;
    }
}