function romanToInt(s: string): number {
    const mapping = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const j = i + 1;
        if (j <= s.length - 1) {
            const valueI = mapping[s[i]];
            const valueJ = mapping[s[j]];
            // console.log(mapping[s[i]], mapping[s[j]]);
            // console.log("result: ", (valueI >= valueJ ? "+ " : "- "), valueI);
            if (valueI >= valueJ) {
                sum += valueI;
            } else {
                sum -= valueI;
            }
        } else {
            // console.log(mapping[s[i]]);
            // console.log("result: + ", mapping[s[i]]);
            sum += mapping[s[i]];
        }
    }
    return sum;
};