
class SearchInRange
{

public static void main(String ar[])
{
int[] arr={10,5,1,4,8,9,45};

System.out.println(search(arr,1,5,4));

}

public static int search(int[] arr,int start,int end,int target)
{
 if(arr.length==0)
  return -1;
    
for(int i=start;i<=end;i++)
{
if(arr[i]==target)
{
return i;
}

}
return -1;    

}

}

