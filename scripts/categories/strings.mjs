import { createProblem } from "../problem_blueprints.mjs";

export function getStringProblems() {
    return [
        // 1. Longest Common Prefix
        createProblem({
            title: "Longest Common Prefix",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["String Matching"],
            dataStructures: ["String", "Array"],
            expectedTime: "O(n * m)",
            expectedSpace: "O(1)",
            description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string \"\".",
            constraints: "1 <= strs.length <= 200\n0 <= strs[i].length <= 200\nstrs[i] consists of only lowercase English letters.",
            fnName: "longestCommonPrefix",
            returnType: "string",
            params: [{ name: "strs", type: "vector<string>&" }],
            rawExamples: [
                [["flower", "flow", "flight"]],
                [["dog", "racecar", "car"]]
            ],
            solver: (strs) => {
                if (!strs || strs.length === 0) return "";
                let prefix = strs[0];
                for (let i = 1; i < strs.length; i++) {
                    while (strs[i].indexOf(prefix) !== 0) {
                        prefix = prefix.slice(0, -1);
                        if (!prefix) return "";
                    }
                }
                return prefix;
            }
        }),

        // 2. Reverse Words in a String
        createProblem({
            title: "Reverse Words in a String",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space.",
            constraints: "1 <= s.length <= 10^4\ns contains English letters, digits, and spaces ' '.\nThere is at least one word in s.",
            fnName: "reverseWords",
            returnType: "string",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["the sky is blue"],
                ["  hello world  "],
                ["a good   example"]
            ],
            solver: (s) => {
                return s.trim().split(/\s+/).reverse().join(" ");
            }
        }),

        // 3. Valid Anagram
        createProblem({
            title: "Valid Anagram",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
            constraints: "1 <= s.length, t.length <= 5 * 10^4\ns and t consist of lowercase English letters.",
            fnName: "isAnagram",
            returnType: "bool",
            params: [
                { name: "s", type: "string" },
                { name: "t", type: "string" }
            ],
            rawExamples: [
                ["anagram", "nagaram"],
                ["rat", "car"]
            ],
            solver: (s, t) => {
                if (s.length !== t.length) return false;
                const count = {};
                for (const c of s) count[c] = (count[c] || 0) + 1;
                for (const c of t) {
                    if (!count[c]) return false;
                    count[c]--;
                }
                return true;
            }
        }),

        // 4. String Compression
        createProblem({
            title: "String Compression Length",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["Array", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string chars, compress it using the following algorithm: For each group of consecutive repeating characters, if the group length is 1, append the character; otherwise, append the character followed by the group's length. Return the length of the compressed string.",
            constraints: "1 <= chars.length <= 2000\nchars consists of lowercase English letters.",
            fnName: "compressLength",
            returnType: "int",
            params: [{ name: "chars", type: "string" }],
            rawExamples: [
                ["aabbccc"],
                ["a"],
                ["abbbbbbbbbbbb"]
            ],
            solver: (chars) => {
                let res = "";
                let i = 0;
                while (i < chars.length) {
                    let j = i;
                    while (j < chars.length && chars[j] === chars[i]) j++;
                    const count = j - i;
                    res += chars[i];
                    if (count > 1) res += count;
                    i = j;
                }
                return res.length;
            }
        }),

        // 5. Valid Palindrome II
        createProblem({
            title: "Valid Palindrome II",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string s, return true if the s can be palindrome after deleting at most one character from it.",
            constraints: "1 <= s.length <= 10^5\ns consists of lowercase English letters.",
            fnName: "validPalindrome",
            returnType: "bool",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["aba"],
                ["abca"],
                ["abc"]
            ],
            solver: (s) => {
                const isPal = (str, l, r) => {
                    while (l < r) {
                        if (str[l] !== str[r]) return false;
                        l++; r--;
                    }
                    return true;
                };
                let l = 0, r = s.length - 1;
                while (l < r) {
                    if (s[l] !== s[r]) {
                        return isPal(s, l + 1, r) || isPal(s, l, r - 1);
                    }
                    l++; r--;
                }
                return true;
            }
        }),

        // 6. First Unique Character in a String
        createProblem({
            title: "First Unique Character in a String",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
            constraints: "1 <= s.length <= 10^5\ns consists of only lowercase English letters.",
            fnName: "firstUniqChar",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["leetcode"],
                ["loveleetcode"],
                ["aabb"]
            ],
            solver: (s) => {
                const freq = {};
                for (const c of s) freq[c] = (freq[c] || 0) + 1;
                for (let i = 0; i < s.length; i++) {
                    if (freq[s[i]] === 1) return i;
                }
                return -1;
            }
        }),

        // 7. Is Subsequence
        createProblem({
            title: "Is Subsequence",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given two strings s and t, return true if s is a subsequence of t, or false otherwise.",
            constraints: "0 <= s.length <= 100\n0 <= t.length <= 10^4\ns and t consist only of lowercase English letters.",
            fnName: "isSubsequence",
            returnType: "bool",
            params: [
                { name: "s", type: "string" },
                { name: "t", type: "string" }
            ],
            rawExamples: [
                ["abc", "ahbgdc"],
                ["axc", "ahbgdc"]
            ],
            solver: (s, t) => {
                let i = 0, j = 0;
                while (i < s.length && j < t.length) {
                    if (s[i] === t[j]) i++;
                    j++;
                }
                return i === s.length;
            }
        }),

        // 8. Longest Palindromic Substring Length
        createProblem({
            title: "Longest Palindromic Substring Length",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Two Pointers", "Dynamic Programming"],
            dataStructures: ["String"],
            expectedTime: "O(n^2)",
            expectedSpace: "O(1)",
            description: "Given a string s, return the length of the longest palindromic substring in s.",
            constraints: "1 <= s.length <= 1000\ns consist of only digits and English letters.",
            fnName: "longestPalindromeLen",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["babad"],
                ["cbbd"],
                ["racecar"]
            ],
            solver: (s) => {
                if (!s) return 0;
                let maxLen = 0;
                const expand = (l, r) => {
                    while (l >= 0 && r < s.length && s[l] === s[r]) {
                        l--; r++;
                    }
                    return r - l - 1;
                };
                for (let i = 0; i < s.length; i++) {
                    const l1 = expand(i, i);
                    const l2 = expand(i, i + 1);
                    maxLen = Math.max(maxLen, l1, l2);
                }
                return maxLen;
            }
        }),

        // 9. Count Substrings That Differ by One Character
        createProblem({
            title: "Count Substrings That Differ by One Character",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Dynamic Programming", "Trie"],
            dataStructures: ["String"],
            expectedTime: "O(n * m)",
            expectedSpace: "O(1)",
            description: "Given two strings s and t, find the number of pairs of substrings (one from s, one from t) of equal length that differ by exactly one character.",
            constraints: "1 <= s.length, t.length <= 100\ns and t consist of lowercase English letters only.",
            fnName: "countSubstrings",
            returnType: "int",
            params: [
                { name: "s", type: "string" },
                { name: "t", type: "string" }
            ],
            rawExamples: [
                ["aba", "baba"],
                ["ab", "bb"],
                ["a", "a"]
            ],
            solver: (s, t) => {
                let ans = 0;
                for (let i = 0; i < s.length; i++) {
                    for (let j = 0; j < t.length; j++) {
                        let diff = 0;
                        for (let k = 0; i + k < s.length && j + k < t.length; k++) {
                            if (s[i + k] !== t[j + k]) diff++;
                            if (diff === 1) ans++;
                            else if (diff > 1) break;
                        }
                    }
                }
                return ans;
            }
        }),

        // 10. Roman to Integer
        createProblem({
            title: "Roman to Integer",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Simulation"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a roman numeral s, convert it to an integer. Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.",
            constraints: "1 <= s.length <= 15\ns contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').",
            fnName: "romanToInt",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["III"],
                ["LVIII"],
                ["MCMXCIV"]
            ],
            solver: (s) => {
                const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
                let total = 0;
                for (let i = 0; i < s.length; i++) {
                    const cur = map[s[i]];
                    const next = map[s[i + 1]] || 0;
                    if (cur < next) total -= cur;
                    else total += cur;
                }
                return total;
            }
        }),

        // 11. Integer to Roman
        createProblem({
            title: "Integer to Roman",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Greedy"],
            dataStructures: ["String"],
            expectedTime: "O(1)",
            expectedSpace: "O(1)",
            description: "Given an integer num, convert it to a roman numeral string.",
            constraints: "1 <= num <= 3999",
            fnName: "intToRoman",
            returnType: "string",
            params: [{ name: "num", type: "int" }],
            rawExamples: [
                [3],
                [58],
                [1994]
            ],
            solver: (num) => {
                const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
                const syms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
                let res = "";
                for (let i = 0; i < values.length && num > 0; i++) {
                    while (num >= values[i]) {
                        num -= values[i];
                        res += syms[i];
                    }
                }
                return res;
            }
        }),

        // 12. String to Integer (atoi)
        createProblem({
            title: "String to Integer (atoi)",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Simulation"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function). Clamp to [-2^31, 2^31 - 1].",
            constraints: "0 <= s.length <= 200\ns consists of English letters, digits, ' ', '+', '-', and '.'.",
            fnName: "myAtoi",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["42"],
                ["   -42"],
                ["4193 with words"]
            ],
            solver: (s) => {
                const INT_MAX = 2147483647;
                const INT_MIN = -2147483648;
                let i = 0;
                while (i < s.length && s[i] === ' ') i++;
                let sign = 1;
                if (s[i] === '+' || s[i] === '-') {
                    sign = s[i] === '-' ? -1 : 1;
                    i++;
                }
                let res = 0;
                while (i < s.length && s[i] >= '0' && s[i] <= '9') {
                    res = res * 10 + (s.charCodeAt(i) - 48);
                    if (sign === 1 && res > INT_MAX) return INT_MAX;
                    if (sign === -1 && -res < INT_MIN) return INT_MIN;
                    i++;
                }
                return sign * res;
            }
        }),

        // 13. Multiply Strings
        createProblem({
            title: "Multiply Strings",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Simulation"],
            dataStructures: ["String", "Array"],
            expectedTime: "O(n * m)",
            expectedSpace: "O(n + m)",
            description: "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.",
            constraints: "1 <= num1.length, num2.length <= 200\nnum1 and num2 consist of digits only.\nBoth num1 and num2 do not contain any leading zero, except the number 0 itself.",
            fnName: "multiply",
            returnType: "string",
            params: [
                { name: "num1", type: "string" },
                { name: "num2", type: "string" }
            ],
            rawExamples: [
                ["2", "3"],
                ["123", "456"]
            ],
            solver: (num1, num2) => {
                if (num1 === "0" || num2 === "0") return "0";
                const m = num1.length, n = num2.length;
                const pos = new Array(m + n).fill(0);
                for (let i = m - 1; i >= 0; i--) {
                    for (let j = n - 1; j >= 0; j--) {
                        const mul = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);
                        const p1 = i + j, p2 = i + j + 1;
                        const sum = mul + pos[p2];
                        pos[p2] = sum % 10;
                        pos[p1] += Math.floor(sum / 10);
                    }
                }
                while (pos.length > 0 && pos[0] === 0) pos.shift();
                return pos.join("");
            }
        }),

        // 14. Add Binary
        createProblem({
            title: "Add Binary",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Simulation", "Bit Manipulation"],
            dataStructures: ["String"],
            expectedTime: "O(max(n, m))",
            expectedSpace: "O(max(n, m))",
            description: "Given two binary strings a and b, return their sum as a binary string.",
            constraints: "1 <= a.length, b.length <= 10^4\na and b consist only of '0' or '1' characters.\nEach string does not contain leading zeros except for the zero itself.",
            fnName: "addBinary",
            returnType: "string",
            params: [
                { name: "a", type: "string" },
                { name: "b", type: "string" }
            ],
            rawExamples: [
                ["11", "1"],
                ["1010", "1011"]
            ],
            solver: (a, b) => {
                let i = a.length - 1, j = b.length - 1, carry = 0;
                let res = [];
                while (i >= 0 || j >= 0 || carry) {
                    let sum = carry;
                    if (i >= 0) sum += a.charCodeAt(i--) - 48;
                    if (j >= 0) sum += b.charCodeAt(j--) - 48;
                    res.push(sum % 2);
                    carry = Math.floor(sum / 2);
                }
                return res.reverse().join("");
            }
        }),

        // 15. Simplify Path
        createProblem({
            title: "Simplify Canonical Path",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Stack"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an absolute path for a Unix-style file system, simplify it to its canonical path.",
            constraints: "1 <= path.length <= 3000\npath consists of English letters, digits, period '.', slash '/' or '_'.\npath is a valid absolute Unix path.",
            fnName: "simplifyPath",
            returnType: "string",
            params: [{ name: "path", type: "string" }],
            rawExamples: [
                ["/home/"],
                ["/../"],
                ["/home//foo/"]
            ],
            solver: (path) => {
                const parts = path.split("/");
                const stack = [];
                for (const p of parts) {
                    if (p === "" || p === ".") continue;
                    if (p === "..") {
                        if (stack.length > 0) stack.pop();
                    } else {
                        stack.push(p);
                    }
                }
                return "/" + stack.join("/");
            }
        }),

        // 16. Decode String
        createProblem({
            title: "Decode String",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Stack", "Recursion"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.",
            constraints: "1 <= s.length <= 30\ns consists of lowercase English letters, digits, and square brackets '[]'.\ns is guaranteed to be a valid input.",
            fnName: "decodeString",
            returnType: "string",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["3[a]2[bc]"],
                ["3[a2[c]]"],
                ["2[abc]3[cd]ef"]
            ],
            solver: (s) => {
                const countStack = [];
                const strStack = [];
                let curStr = "";
                let curNum = 0;
                for (let i = 0; i < s.length; i++) {
                    const c = s[i];
                    if (c >= '0' && c <= '9') {
                        curNum = curNum * 10 + (c.charCodeAt(0) - 48);
                    } else if (c === '[') {
                        countStack.push(curNum);
                        strStack.push(curStr);
                        curNum = 0;
                        curStr = "";
                    } else if (c === ']') {
                        const count = countStack.pop();
                        const prevStr = strStack.pop();
                        curStr = prevStr + curStr.repeat(count);
                    } else {
                        curStr += c;
                    }
                }
                return curStr;
            }
        }),

        // 17. Count Binary Substrings
        createProblem({
            title: "Count Binary Substrings",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.",
            constraints: "1 <= s.length <= 10^5\ns[i] is either '0' or '1'.",
            fnName: "countBinarySubstrings",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["00110011"],
                ["10101"]
            ],
            solver: (s) => {
                let cur = 1, prev = 0, ans = 0;
                for (let i = 1; i < s.length; i++) {
                    if (s[i] === s[i - 1]) cur++;
                    else {
                        ans += Math.min(prev, cur);
                        prev = cur;
                        cur = 1;
                    }
                }
                ans += Math.min(prev, cur);
                return ans;
            }
        }),

        // 18. Custom Sort String
        createProblem({
            title: "Custom Sort String",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Hashing", "Sorting"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(1)",
            description: "You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously. Permute the characters of s so that they match the order that order was sorted.",
            constraints: "1 <= order.length <= 26\n1 <= s.length <= 200\norder and s consist of lowercase English letters.\nAll characters in order are unique.",
            fnName: "customSortString",
            returnType: "string",
            params: [
                { name: "order", type: "string" },
                { name: "s", type: "string" }
            ],
            rawExamples: [
                ["cba", "abcd"],
                ["cbafg", "abcd"]
            ],
            solver: (order, s) => {
                const count = {};
                for (const c of s) count[c] = (count[c] || 0) + 1;
                let res = "";
                for (const c of order) {
                    if (count[c]) {
                        res += c.repeat(count[c]);
                        delete count[c];
                    }
                }
                for (const c in count) {
                    res += c.repeat(count[c]);
                }
                return res;
            }
        }),

        // 19. Remove All Adjacent Duplicates In String
        createProblem({
            title: "Remove All Adjacent Duplicates In String",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Stack"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them. We repeatedly make duplicate removals on s until we no longer can. Return the final string after all such duplicate removals have been made.",
            constraints: "1 <= s.length <= 10^5\ns consists of lowercase English letters.",
            fnName: "removeDuplicates",
            returnType: "string",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["abbaca"],
                ["azxxzy"]
            ],
            solver: (s) => {
                const stack = [];
                for (const c of s) {
                    if (stack.length > 0 && stack[stack.length - 1] === c) {
                        stack.pop();
                    } else {
                        stack.push(c);
                    }
                }
                return stack.join("");
            }
        }),

        // 20. Minimum Add to Make Parentheses Valid
        createProblem({
            title: "Minimum Add to Make Parentheses Valid",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Stack", "Greedy"],
            dataStructures: ["Stack", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "A parentheses string is valid if and only if: It is the empty string, it can be written as AB, or it can be written as (A). Given a parentheses string s, return the minimum number of moves required to make s valid.",
            constraints: "1 <= s.length <= 1000\ns[i] is either '(' or ')'.",
            fnName: "minAddToMakeValid",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["())"],
                ["((("],
                ["()()"]
            ],
            solver: (s) => {
                let open = 0, add = 0;
                for (const c of s) {
                    if (c === '(') open++;
                    else {
                        if (open > 0) open--;
                        else add++;
                    }
                }
                return add + open;
            }
        }),

        // 21. Reverse Only Letters
        createProblem({
            title: "Reverse Only Letters",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a string s, reverse the string according to the following rules: All characters that are not characters stay in the same position; all characters that are letters reverse their positions.",
            constraints: "1 <= s.length <= 100\ns consists of characters with ASCII values in the range [33, 122].",
            fnName: "reverseOnlyLetters",
            returnType: "string",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["ab-cd"],
                ["a-bC-dEf-ghIj"],
                ["Test1ng-Leet=code-Q!"]
            ],
            solver: (s) => {
                const isLetter = (c) => /[a-zA-Z]/.test(c);
                const arr = s.split("");
                let l = 0, r = arr.length - 1;
                while (l < r) {
                    if (!isLetter(arr[l])) l++;
                    else if (!isLetter(arr[r])) r--;
                    else {
                        const tmp = arr[l];
                        arr[l] = arr[r];
                        arr[r] = tmp;
                        l++; r--;
                    }
                }
                return arr.join("");
            }
        }),

        // 22. Word Pattern
        createProblem({
            title: "Word Pattern",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a pattern and a string s, find if s follows the same pattern. Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.",
            constraints: "1 <= pattern.length <= 300\npattern contains only lower-case English letters.\n1 <= s.length <= 3000\ns contains only lowercase English letters and spaces ' '.",
            fnName: "wordPattern",
            returnType: "bool",
            params: [
                { name: "pattern", type: "string" },
                { name: "s", type: "string" }
            ],
            rawExamples: [
                ["abba", "dog cat cat dog"],
                ["abba", "dog cat cat fish"],
                ["aaaa", "dog cat cat dog"]
            ],
            solver: (pattern, s) => {
                const words = s.split(" ");
                if (words.length !== pattern.length) return false;
                const pToW = {};
                const wToP = {};
                for (let i = 0; i < pattern.length; i++) {
                    const p = pattern[i];
                    const w = words[i];
                    if (pToW[p] && pToW[p] !== w) return false;
                    if (wToP[w] && wToP[w] !== p) return false;
                    pToW[p] = w;
                    wToP[w] = p;
                }
                return true;
            }
        }),

        // 23. Compare Version Numbers
        createProblem({
            title: "Compare Version Numbers",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Two Pointers"],
            dataStructures: ["String"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(n + m)",
            description: "Given two version numbers, version1 and version2, compare them. If version1 < version2 return -1, if version1 > version2 return 1, otherwise return 0.",
            constraints: "1 <= version1.length, version2.length <= 500\nversion1 and version2 only contain digits and '.'.",
            fnName: "compareVersion",
            returnType: "int",
            params: [
                { name: "version1", type: "string" },
                { name: "version2", type: "string" }
            ],
            rawExamples: [
                ["1.01", "1.001"],
                ["1.0", "1.0.0"],
                ["0.1", "1.1"]
            ],
            solver: (version1, version2) => {
                const v1 = version1.split(".").map(Number);
                const v2 = version2.split(".").map(Number);
                const maxLen = Math.max(v1.length, v2.length);
                for (let i = 0; i < maxLen; i++) {
                    const n1 = v1[i] || 0;
                    const n2 = v2[i] || 0;
                    if (n1 < n2) return -1;
                    if (n1 > n2) return 1;
                }
                return 0;
            }
        }),

        // 24. Zigzag Conversion
        createProblem({
            title: "Zigzag Conversion",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Simulation"],
            dataStructures: ["String", "Array"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "The string \"PAYPALISHIRING\" is written in a zigzag pattern on a given number of rows. Write the code that will take a string and make this conversion given a number of rows.",
            constraints: "1 <= s.length <= 1000\ns consists of English letters, ',' and '.'.\n1 <= numRows <= 1000",
            fnName: "convert",
            returnType: "string",
            params: [
                { name: "s", type: "string" },
                { name: "numRows", type: "int" }
            ],
            rawExamples: [
                ["PAYPALISHIRING", 3],
                ["PAYPALISHIRING", 4],
                ["A", 1]
            ],
            solver: (s, numRows) => {
                if (numRows === 1 || s.length <= numRows) return s;
                const rows = new Array(numRows).fill("");
                let curRow = 0;
                let goingDown = false;
                for (const c of s) {
                    rows[curRow] += c;
                    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
                    curRow += goingDown ? 1 : -1;
                }
                return rows.join("");
            }
        }),

        // 25. Reorganize String Possible
        createProblem({
            title: "Reorganize String Possible",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Greedy", "Heap"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string s, return true if the characters of s can be rearranged such that any two adjacent characters are not the same, or false otherwise.",
            constraints: "1 <= s.length <= 500\ns consists of lowercase English letters.",
            fnName: "reorganizePossible",
            returnType: "bool",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["aab"],
                ["aaab"]
            ],
            solver: (s) => {
                const counts = {};
                let maxCount = 0;
                for (const c of s) {
                    counts[c] = (counts[c] || 0) + 1;
                    maxCount = Math.max(maxCount, counts[c]);
                }
                return maxCount <= Math.floor((s.length + 1) / 2);
            }
        }),

        // 26. Minimum Deletions to Make Character Frequencies Unique
        createProblem({
            title: "Minimum Deletions for Unique Frequencies",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Greedy", "Hashing"],
            dataStructures: ["Hash Map", "Set"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "A string s is called good if there are no two different characters in s that have the same frequency. Given a string s, return the minimum number of characters you need to delete to make s good.",
            constraints: "1 <= s.length <= 10^5\ns contains only lowercase English letters.",
            fnName: "minDeletions",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["aab"],
                ["aaabbbcc"],
                ["ceabaacb"]
            ],
            solver: (s) => {
                const count = {};
                for (const c of s) count[c] = (count[c] || 0) + 1;
                const freqs = Object.values(count).sort((a, b) => b - a);
                const seen = new Set();
                let deletions = 0;
                for (let f of freqs) {
                    while (f > 0 && seen.has(f)) {
                        f--;
                        deletions++;
                    }
                    if (f > 0) seen.add(f);
                }
                return deletions;
            }
        }),

        // 27. Find the Index of the First Occurrence in a String
        createProblem({
            title: "Find Index of First Occurrence in String",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Two Pointers", "String Matching"],
            dataStructures: ["String"],
            expectedTime: "O(n * m)",
            expectedSpace: "O(1)",
            description: "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
            constraints: "1 <= haystack.length, needle.length <= 10^4\nhaystack and needle consist of only lowercase English characters.",
            fnName: "strStr",
            returnType: "int",
            params: [
                { name: "haystack", type: "string" },
                { name: "needle", type: "string" }
            ],
            rawExamples: [
                ["sadbutsad", "sad"],
                ["leetcode", "leeto"]
            ],
            solver: (haystack, needle) => {
                return haystack.indexOf(needle);
            }
        }),

        // 28. Length of Last Word
        createProblem({
            title: "Length of Last Word",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string s consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.",
            constraints: "1 <= s.length <= 10^4\ns consists of only English letters and spaces ' '.\nThere will be at least one word in s.",
            fnName: "lengthOfLastWord",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["Hello World"],
                ["   fly me   to   the moon  "],
                ["luffy is still joyboy"]
            ],
            solver: (s) => {
                const words = s.trim().split(/\s+/);
                return words[words.length - 1].length;
            }
        }),

        // 29. Check if One String Swap Can Make Strings Equal
        createProblem({
            title: "Check if One String Swap Can Make Strings Equal",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Hashing", "Two Pointers"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string and swap the characters at these indices. Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings.",
            constraints: "1 <= s1.length, s2.length <= 100\ns1.length == s2.length\ns1 and s2 consist of only lowercase English letters.",
            fnName: "areAlmostEqual",
            returnType: "bool",
            params: [
                { name: "s1", type: "string" },
                { name: "s2", type: "string" }
            ],
            rawExamples: [
                ["bank", "kanb"],
                ["attack", "defend"],
                ["kelb", "kelb"]
            ],
            solver: (s1, s2) => {
                if (s1 === s2) return true;
                const diff = [];
                for (let i = 0; i < s1.length; i++) {
                    if (s1[i] !== s2[i]) diff.push(i);
                }
                if (diff.length !== 2) return false;
                const [i, j] = diff;
                return s1[i] === s2[j] && s1[j] === s2[i];
            }
        }),

        // 30. Maximum Number of Balloons
        createProblem({
            title: "Maximum Number of Balloons",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string text, you want to use the characters of text to form as many instances of the word \"balloon\" as possible. You can use each character in text at most once. Return the maximum number of instances that can be formed.",
            constraints: "1 <= text.length <= 10^4\ntext consists of lower case English letters only.",
            fnName: "maxNumberOfBalloons",
            returnType: "int",
            params: [{ name: "text", type: "string" }],
            rawExamples: [
                ["nlaebolko"],
                ["loonbalxballpoon"],
                ["leetcode"]
            ],
            solver: (text) => {
                const count = { b: 0, a: 0, l: 0, o: 0, n: 0 };
                for (const c of text) {
                    if (count[c] !== undefined) count[c]++;
                }
                return Math.min(
                    count.b,
                    count.a,
                    Math.floor(count.l / 2),
                    Math.floor(count.o / 2),
                    count.n
                );
            }
        }),

        // 31. Goat Latin
        createProblem({
            title: "Goat Latin",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Simulation"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Convert the sentence to 'Goat Latin' according to standard rules: words beginning with a vowel append 'ma'; words beginning with a consonant move the first letter to end and append 'ma'. Each word appends 'a' corresponding to its 1-based index.",
            constraints: "1 <= sentence.length <= 150\nsentence consists of English letters and spaces.",
            fnName: "toGoatLatin",
            returnType: "string",
            params: [{ name: "sentence", type: "string" }],
            rawExamples: [
                ["I speak Goat Latin"],
                ["The quick brown fox jumped over the lazy dog"]
            ],
            solver: (sentence) => {
                const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
                const words = sentence.split(" ");
                const res = words.map((w, i) => {
                    let transformed = "";
                    if (vowels.has(w[0])) {
                        transformed = w + "ma";
                    } else {
                        transformed = w.slice(1) + w[0] + "ma";
                    }
                    return transformed + "a".repeat(i + 1);
                });
                return res.join(" ");
            }
        }),

        // 32. Detect Capital Use
        createProblem({
            title: "Detect Capital Use",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Simulation"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "We define the usage of capitals in a word to be right when either all letters are capitals, all letters are lowercase, or only the first letter is capital. Return true if word capital usage is valid.",
            constraints: "1 <= word.length <= 100\nword consists of lowercase and uppercase English letters.",
            fnName: "detectCapitalUse",
            returnType: "bool",
            params: [{ name: "word", type: "string" }],
            rawExamples: [
                ["USA"],
                ["FlaG"],
                ["leetcode"]
            ],
            solver: (word) => {
                if (word === word.toUpperCase()) return true;
                if (word === word.toLowerCase()) return true;
                if (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()) return true;
                return false;
            }
        }),

        // 33. Reverse String
        createProblem({
            title: "Reverse String Return",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Two Pointers"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a string s, return the reversed string.",
            constraints: "1 <= s.length <= 10^5\ns consists of printable ASCII characters.",
            fnName: "reverseString",
            returnType: "string",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["hello"],
                ["Hannah"]
            ],
            solver: (s) => s.split("").reverse().join("")
        }),

        // 34. Find All Anagrams in a String Count
        createProblem({
            title: "Count Anagram Occurrences in String",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Sliding Window", "Hashing"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given two strings s and p, return the count of p's anagram substrings in s.",
            constraints: "1 <= s.length, p.length <= 3 * 10^4\ns and p consist of lowercase English letters.",
            fnName: "countAnagrams",
            returnType: "int",
            params: [
                { name: "s", type: "string" },
                { name: "p", type: "string" }
            ],
            rawExamples: [
                ["cbaebabacd", "abc"],
                ["abab", "ab"]
            ],
            solver: (s, p) => {
                if (s.length < p.length) return 0;
                const pCount = new Array(26).fill(0);
                const sCount = new Array(26).fill(0);
                for (let i = 0; i < p.length; i++) {
                    pCount[p.charCodeAt(i) - 97]++;
                    sCount[s.charCodeAt(i) - 97]++;
                }
                let count = 0;
                const matches = (a1, a2) => a1.every((v, i) => v === a2[i]);
                if (matches(pCount, sCount)) count++;
                for (let i = p.length; i < s.length; i++) {
                    sCount[s.charCodeAt(i) - 97]++;
                    sCount[s.charCodeAt(i - p.length) - 97]--;
                    if (matches(pCount, sCount)) count++;
                }
                return count;
            }
        }),

        // 35. Repeated DNA Sequences Count
        createProblem({
            title: "Count Repeated 10-Letter Sequences",
            topic: "Strings",
            difficulty: "Medium",
            patterns: ["Hashing", "Sliding Window"],
            dataStructures: ["Hash Map", "Set"],
            expectedTime: "O(n)",
            expectedSpace: "O(n)",
            description: "Given a string s that represents a DNA sequence, return the number of 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.",
            constraints: "1 <= s.length <= 10^5\ns[i] is either 'A', 'C', 'G', or 'T'.",
            fnName: "countRepeatedDnaSequences",
            returnType: "int",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"],
                ["AAAAAAAAAAAAA"]
            ],
            solver: (s) => {
                const seen = new Set();
                const repeated = new Set();
                for (let i = 0; i <= s.length - 10; i++) {
                    const sub = s.substring(i, i + 10);
                    if (seen.has(sub)) repeated.add(sub);
                    else seen.add(sub);
                }
                return repeated.size;
            }
        }),

        // 36. Valid Number Check
        createProblem({
            title: "Is Valid Integer String",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Simulation"],
            dataStructures: ["String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string s, return true if s represents a valid signed or unsigned integer without leading or trailing spaces or invalid characters.",
            constraints: "1 <= s.length <= 20",
            fnName: "isValidInteger",
            returnType: "bool",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["123"],
                ["-456"],
                ["+78"],
                ["12a3"],
                ["--5"]
            ],
            solver: (s) => {
                return /^[-+]?\d+$/.test(s);
            }
        }),

        // 37. Greatest Common Divisor of Strings
        createProblem({
            title: "Greatest Common Divisor of Strings",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Math", "String Matching"],
            dataStructures: ["String"],
            expectedTime: "O(n + m)",
            expectedSpace: "O(1)",
            description: "For two strings s and t, we say \"t divides s\" if and only if s = t + t + ... + t. Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.",
            constraints: "1 <= str1.length, str2.length <= 1000\nstr1 and str2 consist of English uppercase letters.",
            fnName: "gcdOfStrings",
            returnType: "string",
            params: [
                { name: "str1", type: "string" },
                { name: "str2", type: "string" }
            ],
            rawExamples: [
                ["ABCABC", "ABC"],
                ["ABABAB", "ABAB"],
                ["LEET", "CODE"]
            ],
            solver: (str1, str2) => {
                if (str1 + str2 !== str2 + str1) return "";
                const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
                const len = gcd(str1.length, str2.length);
                return str1.substring(0, len);
            }
        }),

        // 38. Check if All Characters Have Equal Number of Occurrences
        createProblem({
            title: "Check if All Characters Have Equal Occurrences",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Hash Map", "String"],
            expectedTime: "O(n)",
            expectedSpace: "O(1)",
            description: "Given a string s, return true if all the characters that appear in s have the same number of occurrences, or false otherwise.",
            constraints: "1 <= s.length <= 1000\ns consists of lowercase English letters.",
            fnName: "areOccurrencesEqual",
            returnType: "bool",
            params: [{ name: "s", type: "string" }],
            rawExamples: [
                ["abacbc"],
                ["aaabb"]
            ],
            solver: (s) => {
                const count = {};
                for (const c of s) count[c] = (count[c] || 0) + 1;
                const vals = Object.values(count);
                return vals.every(v => v === vals[0]);
            }
        }),

        // 39. Count the Number of Consistent Strings
        createProblem({
            title: "Count Consistent Strings",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["Hashing"],
            dataStructures: ["Set", "String"],
            expectedTime: "O(n * m)",
            expectedSpace: "O(1)",
            description: "You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed. Return the number of consistent strings in the array words.",
            constraints: "1 <= words.length <= 10^4\n1 <= allowed.length <= 26\n1 <= words[i].length <= 10\nThe characters in allowed are distinct.\nwords[i] and allowed contain only lowercase English letters.",
            fnName: "countConsistentStrings",
            returnType: "int",
            params: [
                { name: "allowed", type: "string" },
                { name: "words", type: "vector<string>&" }
            ],
            rawExamples: [
                ["ab", ["ad", "bd", "aaab", "baa", "badab"]],
                ["abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]]
            ],
            solver: (allowed, words) => {
                const allowedSet = new Set(allowed.split(""));
                let count = 0;
                for (const w of words) {
                    if (w.split("").every(c => allowedSet.has(c))) count++;
                }
                return count;
            }
        }),

        // 40. Maximum Repeating Substring
        createProblem({
            title: "Maximum Repeating Substring",
            topic: "Strings",
            difficulty: "Easy",
            patterns: ["String Matching"],
            dataStructures: ["String"],
            expectedTime: "O(n * m)",
            expectedSpace: "O(1)",
            description: "For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. Return the maximum k-repeating value of word in sequence.",
            constraints: "1 <= sequence.length <= 100\n1 <= word.length <= 100\nsequence and word contain only lowercase English letters.",
            fnName: "maxRepeating",
            returnType: "int",
            params: [
                { name: "sequence", type: "string" },
                { name: "word", type: "string" }
            ],
            rawExamples: [
                ["ababc", "ab"],
                ["ababc", "ba"],
                ["ababc", "ac"]
            ],
            solver: (sequence, word) => {
                let k = 0;
                let cur = word;
                while (sequence.includes(cur)) {
                    k++;
                    cur += word;
                }
                return k;
            }
        })
    ];
}
