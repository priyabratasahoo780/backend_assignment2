// #include<iostream>

// using namespace std;

// int main(){
//   for(int i=1; i<=5; i++){
//     for(int j=1; j <=5-i; j++){
//       cout<<" ";
//     } 
//       for(int j=1; j<=2*i-1; j++){
//         if(i == 1 || j == 1 || j == 2*i-1){
//           cout<<"*";
//         }
//         else{
//           cout<<" ";
//         }
//       }
//         cout<<endl;
//   }

//   for(int i=4; i>=1; i--){
//     for(int j=1; j <=5-i; j++){
//       cout<<" ";
//     } 
//       for(int j=1; j<=2*i-1; j++){
//        if(j == 1 || j == 2 * i - 1) {
//                 cout << "*";
//             }
//             else {
//                 cout << " ";
//             }
//       }
//         cout<<endl;
//   }
//   return 0;
// }



#include <iostream>
using namespace std;

int main() {

    int n = 9;
for(int i=1; i<=n; i++){
  for(int j=1; j<=n; j++){
  if(i == 1 || j == 1 || i == n || j == n || i == j || j == n-i+1){
    cout<<"*";
  } else{
    cout<<" ";
  }
  }
     cout<<endl;
}

    return 0;
}