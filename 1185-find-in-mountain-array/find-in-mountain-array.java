/**
 * // This is MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface MountainArray {
 *     public int get(int index) {}
 *     public int length() {}
 * }
 */
 
class Solution {
      public static int peakIndexInMountainArray(int target,MountainArray arr)
    {
        int start=0;
        int end=arr.length()-1;
        while(start<=end)
        {
            int mid=start+(end-start)/2;
            if(arr.get(mid)>arr.get(mid+1))
            {
                end=mid;
            }
            else
            {
                start=mid+1;
            }
            if(start==end)
            {
                break;
            }
        }
        return start;
    }
    public static int orderAgnostic(int target,MountainArray arr,int start,int end)
    {
        
        boolean isAsc=arr.get(start)<arr.get(end);
        
        while(start<=end)
        {
            int mid=start+(end-start)/2;
            
            if(arr.get(mid)==target)
            {
                return mid;
            }
            if(isAsc)
            {
             if(target<arr.get(mid))
             {
             end=mid-1;    
             }
             else
             {
                 start=mid+1;
             }
             
            }
            else
            {
                if(target>arr.get(mid))
                {
                    end=mid-1;
                }
                else
                {
                    start=mid+1;
                }
            }
        }
        return -1;
        
        }
public int findInMountainArray(int target, MountainArray arr)
{
int peak=peakIndexInMountainArray(target,arr);  
int firstTry=orderAgnostic(target,arr,0,peak);

if(firstTry!=-1)
{
    return firstTry;
}
return orderAgnostic(target,arr,peak+1,arr.length()-1);
}
    
}