class Solution {
public:

int removeDuplicates(vector<int>& a) {
    int n = a.size();
    int c = 1;
    for(int i = 1; i <n; i++)
    {
        if(a[i] == a[i-1]) continue;
        else a[c++] = a[i];
    }
        return c;
}
};