class Solution {
    /*
        -We will use binary search as complexity is O(logn)
        ex.

                            6 -> peak element/largest element
                        5       4
                    3               3
                2                       
            1

            conditions:
            1. when arr[mid]>arr[mid+1] then
                - decreasing part of array and we will make
                    "end = mid"

            2. when arr[mid] < arr[mid+1] then
                -increasing part of array ,so possible answer maybe lies in mid+1 to end
                -so we will make "start = mid+1"

            3. loop break when "start == end" 
                -both the start and end points to peak/largest element 
                -return start or end  
        */
    public int findPeakElement(int[] arr) {
        int start=0;
        int end=arr.length-1;

        while(start < end) //loop breaks when start==end
        {
            int mid=start+(end-start)/2;

            if(arr[mid] > arr[mid+1])
            {
                // decreasing order
                end=mid;
            }
            else if(arr[mid] < arr[mid+1])
            {
                //increasing order
                start=mid+1;
            }
        }
        return start; //return start or end
}
}

