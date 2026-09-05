class MinimumJumpTakens
{
    public static int getMinimumJumpTakens(int arr[])
    {
        if (arr.length <= 1)
            return 0;
        if (arr[0] == 0)
            return -1;
        int maxValue = arr[0];
        int stepTaken = arr[0];
        int jumpTaken = 1;
        for (int i = 1; i < arr.length; i++)
        {
            if (i == arr.length - 1)
                return jumpTaken;
            maxValue = Math.max(maxValue, i + arr[i]);
            stepTaken--;
            if (stepTaken == 0)
            {
                jumpTaken++;
                if(i >= maxValue)
                    return -1;
                stepTaken = maxValue - i;
            }
        }
        return -1;
    }
    public static void main(String[] args)
    {
        int arr[] = { 1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9 };
        System.out.println(getMinimumJumpTakens(arr));
    }
}