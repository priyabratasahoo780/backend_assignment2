// #include <bits/stdc++.h>
// using namespace std;

// int main()
// {
//     int maxs = INT_MIN;
//     int mins = INT_MAX;

//     vector<int> v = {1,2,3,8,6,7,8,4,8,5,8,9};
//     vector<int> d;

//     for(int i = 0; i < v.size(); i++) {
//         if(v[i] == 8) {
//             d.push_back(i);
//         }
//     }

//     for(int x : d) {
//         if(x > maxs) {
//             maxs = x;
//         }

//         if(x < mins) {
//             mins = x;
//         }
//     }

//     cout << "Maximum index: " << maxs << endl;
//     cout << "Minimum index: " << mins << endl;

//     return 0;
// }


#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> v = {1,2,3,8,6,7,8,4,8,5,8,9};

    int target = 8;

    int first = -1;
    int last = -1;

    for(int i = 0; i < v.size(); i++)
    {
        if(v[i] == target)
        {
            if(first == -1)
            {
                first = i;
            }

            last = i;
        }
    }

    cout << "First index: " << first << endl;
    cout << "Last index: " << last << endl;

    return 0;
}