function lengthOfLastWord(s: string): number {
    const words = s.split(/\s+/g).filter(x => x.length !== 0)
    return words[words.length - 1].length
};