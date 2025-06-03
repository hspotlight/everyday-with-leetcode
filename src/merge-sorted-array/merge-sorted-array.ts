/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const result: number[] = [];
    let i = 0, j = 0;
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else if (nums1[i] > nums2[j]) {
            result.push(nums2[j]);
            j++;
        }
    }
    while (i < m) {
        result.push(nums1[i]);
        i++;
    }
    while (j < n) {
        result.push(nums2[j]);
        j++;
    }
    // copy to nums1
    i = 0;
    for (; i < nums1.length; i++) {
        nums1[i] = result[i];
    }
};