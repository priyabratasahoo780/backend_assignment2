#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

int main() {
    unordered_set<int>s;
  vector<int>v = {1,2,4,4,5,6,7,8};
  for(int x : v){
      s.insert(x);
  }
 
   for(int x : s){
       cout << x << " ";
   }
  return 0;
}