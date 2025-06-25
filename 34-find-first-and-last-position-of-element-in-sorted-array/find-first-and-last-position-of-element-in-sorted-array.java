class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] ans={-1,-1};

        int start=binary(nums,target,true);
        int end=binary(nums,target,false);

        ans[0]=start;
        ans[1]=end;

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