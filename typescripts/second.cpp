#include<iostream>
#include<vector>
#include<climits>
using namespace std;

int main(){
  vector<int>v = {10,10,10,10};
  int first = INT_MIN;
  int second = INT_MIN;
  int third = INT_MIN;
  for(int i=0; i<v.size(); i++){
     if(v[i] > first){
      third = second;
      second = first;
      // cout<<second<<endl;
      first = v[i];
      // cout<< first << endl;
     }
     else if(v[i] > second && v[i] < first){
      third = second;
          second = v[i];
     }
      else if(v[i] > third && v[i] < second){
          third = v[i];
     }
     
  }
   cout<<first<<endl;
   cout<<second<<endl;
   cout<<third<<endl;
  return 0;
}