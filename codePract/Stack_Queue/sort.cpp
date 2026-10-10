// C++ program to sort a stack 
#include<iostream>
#include<algorithm>
using namespace std;

 int arr[20] = {};
  int a = 0;
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
    sort(arr, arr + a);
  for (int i = 0; i < a; i++){
    cout << arr[i] << " ";
  }
  cout << endl;
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
