/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return "";

    const map = {};
    for (let char of t) {
        map[char] = (map[char] || 0) + 1;
    }

    let start = 0, minStart = 0;
    let minLen = Infinity;
    let required = t.length;

    for (let end = 0; end < s.length; end++) {
        let charEnd = s[end];

        // If we needed this character, decrease the overall requirement
        if (map[charEnd] > 0) required--;
        
        // Decrease the debt for this character (can go negative)
        map[charEnd] = (map[charEnd] || 0) - 1;
 
        // While the window is "valid" (all characters found)
        while (required === 0) {
            // Update the global minimum
            if (end - start + 1 < minLen) {
                minLen = end - start + 1;
                minStart = start;
            }

            let charStart = s[start];
            // We are moving 'start' out of the window, so add back to debt
            map[charStart]++;
            
            // If the debt becomes positive, it means we actually need this char again
            if (map[charStart] > 0) required++;
            
            start++;
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};