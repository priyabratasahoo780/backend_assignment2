
#include<iostream>
using namespace std;

 int arr[20] = {};
  int a = 0;
int target = 3;
int count = 0;
void push(int data){
   arr[a] = data;
    a++;
}
   void pop(){
     a--;

   }

   int top(){
     return arr[a-1];
   }

void display(){
    while(a>0){
    if(top() == target){
       count++;
    } 
         pop();
    }
    cout<<count<<endl;
}
int main(){ 
  push(1);
  push(2);
  push(3);
  push(4);
  push(5);
   push(7);
    push(8);
     push(3);
      push(10);
       push(6);
        push(4);
         push(3);
       push(11);
      push(3);
 push(5);           
  // cout<<a << endl;
  display();
  return 0;
}
