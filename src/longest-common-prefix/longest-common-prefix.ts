function longestCommonPrefix(strs: string[]): string {
    const minLength: number = strs.reduce((min, str) => Math.min(min, str.length), Number.MAX_SAFE_INTEGER);
    let i = 0;
    for (; i < minLength; i++) {
        let match = true;

        const firstString = strs[0];
        const charAt = firstString[i];

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== charAt) {
                match = false;
            }
        }

        if (!match) {
            break;
        }
    }
    
    return strs[0].substring(0, i);
};