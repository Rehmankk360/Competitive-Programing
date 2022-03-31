void middle(string s, int l, int r, int &e, int &b, int &mx)
{
    int len = 0;
    while (l!=-1?s[l] == s[r]: true && r <= s.length() && l >= 0)
    {
        l--;
        r++;
        len += 2;
    }
    if (mx < r-l)
    {
        b = l + 1;
        e = r - 1;
        mx = len;
    }
}
class Solution {
public:
    string longestPalindrome(string s) {
    int mx = 1;
    int b = 0;
    int e = 0;
    
    for (int i = 0; i < s.length(); i++)
    {
        middle(s, i, i + 1, e, b, mx);
        middle(s, i, i, e, b, mx);
    }
    string st = "";
    for (int i = b; i <= e; i++)
    {
        st += s[i];
    }
    
    return st;
    }
};