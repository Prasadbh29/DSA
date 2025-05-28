/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for (const str of strs) {
        // Sort the string to use as a key
        const key = str.split('').sort().join('');
        
        // Group all anagrams under the same key
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    // Return all grouped anagram arrays
    return Array.from(map.values());
};
