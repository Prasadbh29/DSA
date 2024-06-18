class SearchInString
{
public static int search(String a,char target)
{

char[] ar=a.toCharArray();
if(ar.length==0)
{
return -1;
}

for(int i=0;i<ar.length;i++)
{
    
if(ar[i]==target)
{
return i;
}

}
return -1;

}
public static void main(String ar[])
{

String name="Prasad Bhagyawant";
System.out.println(search(name,'Z'));
}

}