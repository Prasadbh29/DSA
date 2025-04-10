function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        const area = width * h;
        maxArea = Math.max(maxArea, area);

        // Move the pointer at the shorter height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
