#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int>v = {1,3,4,5,6};
    int n = v.size();
    int actual = (n+1)*(n+2)/2;
    int expected = 0;
    for(int i=0; i<v.size(); i++){
        expected+=v[i];
    }
    cout<<actual-expected; // 21-19=2
    return 0;
}




// #include <iostream>
// #include <vector>
// using namespace std;

// int main() {

//     vector<int> v = {1,2,4,5,6};

//     int n = v.size();
//     int ans = 0;

//     // XOR all numbers from 1 to n+1
//     for(int i = 1; i <= n + 1; i++) {
//         ans ^= i;
//     }

//     // XOR all array elements
//     for(int x : v) {
//         ans ^= x;
//     }

//     cout << ans << endl;

//     return 0;
// }