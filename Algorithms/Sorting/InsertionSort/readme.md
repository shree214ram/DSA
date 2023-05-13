### insertion Sort O(N x N)
Devide array into two part 
    first for loop i start from 1{
        let temp = A[i]
        let j 
        second loop j alway from i-1 to 0 && A[j]>temp{
            A[j+1]=A[j] //Swap current value ko ek ek index age badate rahenge jab tak ki A[j] temp se bada milta rahega 
        }
        A[j+1] = temp //Bad me fir akhiri baje hue element par temp ko replace kar dennge . 
    }
