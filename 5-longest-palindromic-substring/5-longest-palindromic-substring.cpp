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
    int mx1 = 1;
    int b1 = 0;
    int e1 = 0;
    int mx2 = 1;
    int b2 = 0;
    int e2 = 0;
    for (int i = 0; i < s.length(); i++)
    {
        middle(s, i, i + 1, e1, b1, mx1);
        middle(s, i, i, e2, b2, mx2);
    }
    string st1 = "";
    for (int i = b1; i <= e1; i++)
    {
        st1 += s[i];
    }
    string st2 = "";
    for (int i = b2; i <= e2; i++)
    {
        st2 += s[i];
    }
    return st1.length() > st2.length() ? st1 : st2;
    }
};