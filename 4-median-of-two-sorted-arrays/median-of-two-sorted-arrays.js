var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the shorter array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let imin = 0, imax = m;
    const halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;

        const nums1Left = i === 0 ? -Infinity : nums1[i - 1];
        const nums1Right = i === m ? Infinity : nums1[i];
        const nums2Left = j === 0 ? -Infinity : nums2[j - 1];
        const nums2Right = j === n ? Infinity : nums2[j];

        if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
            if ((m + n) % 2 === 1) {
                return Math.max(nums1Left, nums2Left);
            } else {
                return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
            }
        } else if (nums1Left > nums2Right) {
            imax = i - 1;
        } else {
            imin = i + 1;
        }
    }

    throw new Error("Input arrays are not sorted correctly");
};
