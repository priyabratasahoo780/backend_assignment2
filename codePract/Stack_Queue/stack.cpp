// #include<iostream>
// using namespace std;

//  int arr[5] = {};
//   int a = 0;

// void push(int data){
//    arr[a] = data;
//     a++;
// }
//    void pop(){
//      a--;

//    }

//    void top(){
//      cout<<arr[a-1];
//    }

// void display(){
//   for(int i = a - 1; i>=0; i--){
//     cout<<arr[i]<<endl;
//   }
// }
// int main(){ 
//   push(1);
//   push(2);
//   push(3);
//   push(4);
//   push(5);
//   // cout<<a << endl;
//   display();
//   return 0;
// }





// find max element in stack

// #include<iostream>
// #include<climits>
// using namespace std;

//  int arr[6] = {};
//   int a = 0;
// int maxElement = INT_MIN;
// void push(int data){
//    arr[a] = data;
//     a++;
// }
//    void pop(){
//      a--;

//    }

//    int top(){
//      return arr[a-1];
//    }
// void display(){
//   if(top() > maxElement){
//     maxElement = top();
//     pop();
//   }
//      cout<<"Max element is: "<<maxElement<<endl;
  
// }
// int main(){ 
//   push(1);
//   push(2);
//   push(3);
//   push(4);
//   push(5);
//   // cout<<a << endl;
//   display();
//   return 0;
// }





// target element find index of element in stack

#include<iostream>
using namespace std;

 int arr[5] = {};
  int a = 0;
int target = 3;
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
    while(top() != target){
        pop();
    } 
     
        cout<<"Target element is: "<<target<<endl;
        cout<<"Index of target element is: "<<a-1<<endl;
     
}
int main(){ 
  push(1);
  push(2);
  push(3);
  push(4);
  push(5);
  // cout<<a << endl;
  display();
  return 0;
}
