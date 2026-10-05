// #include<iostream>
// #include<vector>

// using namespace std;

// int main(){
//     vector<int>arr = {1,2,{3,4},5,{6},7,8};
//     vector<int>res;
//     for(int i=0; i<arr.size(); i++){
//         if(isArray(arr[i])){
//             res.push_back(...arr[i]);
//         }
//         else{
//             res.push_back(arr[i]);
//         }
//     }
//     cout<<res;
//     return 0;
// }




#include <iostream>
#include <vector>

using namespace std;

int main() {

    vector<vector<int>> arr = {
        {1},
        {2},
        {3,4},
        {5},
        {6},
        {7},
        {8}
    };

    vector<int> res;

    for(int i = 0; i < arr.size(); i++) {
        for(int j = 0; j < arr[i].size(); j++) {
            res.push_back(arr[i][j]);
        }
    }

    for(int x : res) {
        cout << x << " ";
    }

    return 0;
}