function isValid(s: string): boolean {
    let stack: string[] = [];
    const mapping = {
        "}": "{",
        "]": "[",
        ")": "(",
    };

    for (let i = 0; i < s.length; i++) {
        const char: string = s[i];
        if (['{', '[', '('].includes(char)) { // open bracket
            stack.push(char);
        } else { // close bracket
            const peak = stack[stack.length - 1];
            // check if it match with the top of stack
            // if yes, remove from top stack
            // else return false
            if (mapping[char] === peak) {
                stack = stack.slice(0, stack.length - 1);
            } else {
                return false;
            }
        }
    }
    if (stack.length > 0) return false;
    return true;
};