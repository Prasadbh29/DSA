var findSubstring = function(s, words) {
    if (!s || !words || words.length === 0) return [];
    
    let wordLength = words[0].length;
    let wordCount = words.length;
    let totalLength = wordLength * wordCount;
    
    // Hash map to store the frequency of words in 'words'
    let wordMap = {};
    for (let word of words) {
        wordMap[word] = (wordMap[word] || 0) + 1;
    }
    
    let result = [];
    
    // Loop over each possible starting point in s
    for (let i = 0; i < wordLength; i++) {
        let left = i; // Start of the window
        let right = i; // End of the window
        let windowMap = {}; // Hash map for the current window's word count
        let count = 0; // To track how many words in the current window are valid
        
        while (right + wordLength <= s.length) {
            let word = s.substring(right, right + wordLength);
            right += wordLength;
            
            // If word is in wordMap, we process it
            if (wordMap[word] !== undefined) {
                windowMap[word] = (windowMap[word] || 0) + 1;
                
                // If the word count in the window exceeds the required frequency, shift the left pointer
                while (windowMap[word] > wordMap[word]) {
                    let leftWord = s.substring(left, left + wordLength);
                    windowMap[leftWord]--;
                    left += wordLength;
                }
                
                // If the window contains all the words exactly
                if (right - left === totalLength) {
                    result.push(left);
                }
            } else {
                // If the word is not in the list, reset the window
                windowMap = {};
                left = right;
            }
        }
    }
    
    return result;
};
