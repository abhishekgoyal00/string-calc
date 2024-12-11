const StringCalc = require('../src/stringCalc');

test('returns 0 for an empty string', () => {
    expect(StringCalc.add("")).toBe(0);
});

test('returns the number itself for a single number', () => {
    expect(StringCalc.add("1")).toBe(1);
});

test('returns the sum of two numbers', () => {
    expect(StringCalc.add("1,2")).toBe(3);
});

test('returns the sum of multiple numbers', () => {
    expect(StringCalc.add("1,2,3,4")).toBe(10);
});

test('handles new lines as delimiters', () => {
    expect(StringCalc.add("1\n2,3")).toBe(6);
});

test('handles custom delimiters', () => {
    expect(StringCalc.add("//;\n1;2;3")).toBe(6);
});

test('throws an error for negative numbers', () => {
    expect(() => StringCalc.add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
});

test('handles both commas and new lines with multiple numbers', () => {
    expect(StringCalc.add("1\n2,3\n4")).toBe(10);
});

test('ignores non-numeric values', () => {
    expect(StringCalc.add("1,a,3")).toBe(4);
});