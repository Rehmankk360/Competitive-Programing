var findMedianSortedArrays = function(nums1, nums2) {
    let merged = []
    let totalLength = nums1.length + nums2.length 
    let even = (totalLength % 2 == 0)
    let target = even ? (totalLength / 2) + 1 : totalLength / 2
    let val, prev;
    for(let i1 = 0, i2 = 0, j = 0; j < target; j++) {
        let elem1 = nums1[i1] ?? Number.MAX_SAFE_INTEGER
        let elem2 = nums2[i2] ?? Number.MAX_SAFE_INTEGER
        prev = val
        if(elem1 < elem2) {
            val = elem1
            i1++
        }
        else {
            val = elem2
            i2++
        }
    }
    return (even ? (prev + val) / 2 : val)
};