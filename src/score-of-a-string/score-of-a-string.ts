function scoreOfString(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const j = i + 1;
        if (j <= s.length - 1) {
            const score = Math.abs(s[i].charCodeAt() - s[j].charCodeAt());
            sum += score;
        }
    }
    return sum;
};