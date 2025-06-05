/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals.length) return [];

    // Sort intervals by their start time
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        const current = intervals[i];

        // Check for overlap
        if (current[0] <= last[1]) {
            // Merge by updating the end of the last interval
            last[1] = Math.max(last[1], current[1]);
        } else {
            // No overlap, push the interval
            result.push(current);
        }
    }

    return result;
};
