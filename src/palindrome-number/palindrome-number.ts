function isPalindrome(x: number): boolean {
    // solution 1
    // const strX = "" + x;
    // const y = [...(strX)].reverse().join("");
    // return strX === y;

    // solution 2
    if (x < 0) return false;
    if (x === 0) return true;

    let reverseValue = 0;
    let remaining = x;
    while (remaining > 0) {
        const remainder = remaining % 10;
        reverseValue = (reverseValue * 10) + remainder;
        
        remaining = Math.floor(remaining / 10);
    }
    return reverseValue === x;
};