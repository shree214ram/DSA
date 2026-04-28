/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    //10:53
    const st = [nums2[0]];
    const res = {}
    //nums2[0]
    for (let i = 1; i < nums2.length; i++) {
        if (st.length == 0) {
            st.push(nums2[i])
            continue;
        }
        while (st.length != 0 && nums2[i] >= st[st.length - 1]) {
            res[st[st.length - 1]]=nums2[i]
            st.pop()
        }
        st.push(nums2[i])

    }
    while (st.length != 0) {
        res[st[st.length - 1]]=-1
        st.pop()
    }
    const result=[]
    for(let i=0;i<nums1.length;i++){
        result.push(res[nums1[i]])
    }
    return result
};