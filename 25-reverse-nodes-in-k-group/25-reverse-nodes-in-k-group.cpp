class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        
        vector<int>v;
        
        ListNode* curr = head;
        
         while(curr!=NULL){
             v.push_back(curr->val);
             curr = curr->next;
         }
        
        
        
         vector<int>r;
        
        vector<int>temp;
          for(int i=0;i<v.size();i++){
             
              
              temp.push_back(v[i]);
              
               if((i+1)%k==0){
                   reverse(temp.begin(),temp.end());
                   r.insert(r.end(),temp.begin(),temp.end());
                   temp.clear();
               }
              
              
              
              
              
          }
        
        if(temp.size()!=0){
            r.insert(r.end(),temp.begin(),temp.end());
        }
        
        ListNode* res = new ListNode(0) , *e = res;
        
         for(auto i:r){
             e->next  = new ListNode(i);
             e = e->next;
         }
        
        
        
        return res->next;
    }
};