// right angle * pattern


// #include<iostream>
// using namespace std;

// int main(){
//     for(int i=1; i<=5; i++){
//         for(int j=1; j<=i; j++){
//             cout<<"*";
//         }
//         cout<<endl;
//     }
     
//     return 0;
// } 



// reverse right angle * pattern
// #include<iostream>
// using namespace std;

// int main(){
//     for(int i=1; i<=5; i++){
//         for(int j=5; j>=i; j--){
//             cout<<"*";
//         }
//         cout<<endl;
//     }
     
//     return 0;
// } 



// right right angle traingle pattern
// #include<iostream>
// using namespace std;

// int main(){
//     for(int i=1; i<=5; i++){
//         for(int k=1; k<=5-i; k++){
//             cout<<" ";
//         }
//         for(int j=1; j<=i; j++){
//             cout<<"*";
//         }
//         cout<<endl;
//     }
     
//     return 0;
// } 


// right right reverse triangle pattern

// #include<iostream>
// using namespace std;

// int main(){
//     for(int i=1; i<=5; i++){
//         for(int k=1; k<=i-1; k++){
//             cout<<" ";
//         }
//         for(int j=1; j<=5-i+1; j++){
//             cout<<"*";
//         }
//         cout<<endl;
//     }
     
//     return 0;
// } 



// #include<iostream>
// using namespace std;

// int main(){
//     for(int i=1; i<=5; i++){
//         for(int j=1; j<=5-i+1; j++){
//             cout<<"*";
//         }
       
//  for(int k=1; k<=i-1; k++){
//             cout<<" ";
//         }
//         cout<<endl;
//     }
     
//     return 0;
// } 


// #include <iostream>
// using namespace std;

// int main() {

//     int n = 5;

//     for(int i = 1; i <= n; i++) {

//         for(int j = 1; j <= n - i; j++) {
//             cout << " ";
//         }

//         for(int j = 1; j <= 2 * i - 1; j++) {
//             cout << "*";
//         }

//         cout << endl;
//     }

    
//     for(int i = n-1; i >= 1; i--) {

//         for(int j = 1; j <= n - i; j++) {
//             cout << " ";
//         }

//         for(int j = 1; j <= 2 * i - 1; j++) {
//             cout << "*";
//         }

//         cout << endl;
//     }

    
//     return 0; 
// }



#include <iostream>
using namespace std;

int main() {

    int n = 5;

    for (int i = 0; i < n; i++) {

        // A
        for (int j = 0; j < n; j++) {
            if ((i == 0 && j == 2) ||
                (i == 1 && (j == 1 || j == 3)) ||
                (i == 2) ||
                (i >= 3 && (j == 0 || j == 4))) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << endl;
    }
    return 0;
}