function areOccurrencesEqual(s: string): boolean {
    const freq = {};
    for (let i = 0; i < s.length; i++) {
        if (!freq[s[i]]) {
            freq[s[i]] = 0;
        }
        freq[s[i]]++;
    }
    const keys = Object.keys(freq);
    if (keys.length === 1) return true;
    let equal = true;
    let refValue = freq[keys[0]];
    for (let i = 1; i < keys.length; i++) {
        const value = freq[keys[i]];
        if (refValue !== value) {
            equal = false;
            break;
        }
    }
    return equal;
};