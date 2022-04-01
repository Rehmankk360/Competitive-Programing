class Solution {
public:
    int lengthOfLongestSubstring(string s) {
    int m = 0;
    int l = 0;
    int r = 0;
    vector<int> c(127);
    while (r < s.length())
    {
        c[s[r]]+=1;
        while (c[s[r]] > 1)
        {
            c[s[l]]--;
            l++;
        }
        m=max(m, r-l+1);
        r++;
    }
    return m;
    }
};