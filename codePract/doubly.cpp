// #include<iostream>
// using namespace std;

// struct Node{
//   int value;
//   Node* nextAddress;
//   Node* prevAddress;

// };


// int main(){
//   Node* n0 = new Node();
//   Node* n1 = new Node();
//   Node* n2 = new Node();
//   Node* n3 = new Node();
//   Node* n4 = new Node();
//   Node* n5 = new Node();
//   Node* ns1 = new Node();

// n0->value = 1;
// n1->value = 2;
// n2->value = 3;
// n3->value = 4;
// n4->value = 5;
// n5->value = 6;
// ns1->value = 12;


// n0->nextAddress = n1;
// n0->prevAddress = nullptr;
// n1->nextAddress = n2;
// n1->prevAddress = n0;
// n2->nextAddress = n3;
// n2->prevAddress = n1;
// n3->nextAddress = n4;
// n3->prevAddress = n2;

// // insert AT first
// ns1->nextAddress = n0;
// n0->prevAddress = ns1;
// ns1->prevAddress = nullptr;

// // insert AT last
// n4->nextAddress = n5;
// n5->nextAddress = nullptr;
// n5->prevAddress = n4;




// cout << "The values in the doubly linked list are: ";
// Node* current = ns1;
// while(current != nullptr){
//   cout << current->value << " ";
//   current = current->nextAddress;
// }
//   return 0;
// }


// #include<iostream>
// using namespace std;

// struct Node{
//   int value;
//   Node* prev;
//   Node* next;
// };

// int main(){
//   Node* n0 = new Node();
//   Node* n1 = new Node();
//   Node* n2 = new Node();
//   Node* n3 = new Node();
//   Node* n4 = new Node();
  
//   Node* insertAt = new Node();
//   int target = 23;

//   n0->value =27;
//   n1->value = 5;
//   n2->value = 19;
//   n3->value = 23;
//   n4->value = 54;
//   insertAt->value = 80;


//   n0->next = n1;
//   n0->prev = nullptr;
//   n1->next = n2;
//   n1->prev = n0;
//   n2->next = n3;
//   n2->prev = n1;
//   n3->next = n4;
//   n3->prev = n2;
//   n4->next = nullptr;
//   n4->prev = n3;
  
//   Node* temp = n0;
//     while(temp!= nullptr){
      
//       if(temp->value == target){
//             insertAt->next = temp->next;
//             temp->next = insertAt;
//             insertAt->prev = temp;
//            if (temp->next != nullptr) {
//         temp->next->prev = insertAt;
//       }
//            temp->next = insertAt;
//             break;
//       }
//       temp = temp->next;
//     }
//   temp = n0;
//   while (temp != nullptr) {
//     cout << temp->value << " ";
//     temp = temp->next;
//   }
//   cout << endl;
//   return 0;
// }




// delete target Node
// #include<iostream>
// using namespace std;

// struct Node{
//   int value;
//   Node* prev;
//   Node* next;
// };

// int main(){
//   Node* n0 = new Node();
//   Node* n1 = new Node();
//   Node* n2 = new Node();
//   Node* n3 = new Node();
//   Node* n4 = new Node();
  
//   // Node* insertAt = new Node();
//   int target = 23;

//   n0->value =27;
//   n1->value = 5;
//   n2->value = 19;
//   n3->value = 23;
//   n4->value = 54;
//   // insertAt->value = 80;


//   n0->next = n1;
//   n0->prev = nullptr;
//   n1->next = n2;
//   n1->prev = n0;
//   n2->next = n3;
//   n2->prev = n1;
//   n3->next = n4;
//   n3->prev = n2;
//   n4->next = nullptr;
//   n4->prev = n3;
  
//   Node* temp = n0;
//     while(temp!= nullptr){
//       if(temp->value == target){
//           temp->next->prev = temp->prev;
//           temp->prev->next = temp->next;
//              delete temp;
//              break;
//       }
//       temp = temp->next;
//     }
//   temp = n0;
//   while (temp != nullptr) {
//     cout << temp->value << " ";
//     temp = temp->next;
//   }
//   cout << endl;
//   return 0;
// }


// two list to merge in sort linkedList
// #include<iostream>
// using namespace std;

// struct Node{
//   int value;
//   Node* prev;
//   Node* next;
// };

// int main(){
//   Node* n0 = new Node();
//   Node* n1 = new Node();
//   Node* n2 = new Node();
//   Node* n3 = new Node();
//   Node* n4 = new Node();
  

//   Node* a0 = new Node();
//   Node* a1 = new Node();
//   Node* a2 = new Node();
//   Node* a3 = new Node();
//   Node* a4 = new Node();
  

//   // List 1 (Sorted: 5, 19, 23, 27, 54)
//   n0->value = 5;
//   n1->value = 19;
//   n2->value = 23;
//   n3->value = 27;
//   n4->value = 54;

//   // List 2 (Sorted: 1, 7, 11, 14, 89)
//   a0->value = 1;
//   a1->value = 7;
//   a2->value = 11;
//   a3->value = 14;
//   a4->value = 89;

//   n0->next = n1;
//   n0->prev = nullptr;
//   n1->next = n2;
//   n1->prev = n0;
//   n2->next = n3;
//   n2->prev = n1;
//   n3->next = n4;
//   n3->prev = n2;
//   n4->next = nullptr;
//   n4->prev = n3;

//   a0->next = a1;
//   a0->prev = nullptr;
//   a1->next = a2;
//   a1->prev = a0;
//   a2->next = a3;
//   a2->prev = a1;
//   a3->next = a4;
//   a3->prev = a2;
//   a4->next = nullptr;
//   a4->prev = a3;
  
//   Node* list1 = n0;
//   Node* list2 = a0;

//   Node* dummy = new Node();
//   Node* curr = dummy;

//   // merge with linkedlist and sorted leetcode 21
//   while(list1 != nullptr && list2 != nullptr){
//     if(list1->value < list2->value){
//       curr->next = list1;
//       list1 = list1->next;
//     }
//     else{
//       curr->next = list2;
//       list2 = list2->next;
//     }
//     curr = curr->next;
//   }
//   if(list1 != nullptr){
//     curr->next = list1;
//   }
//   else{
//     curr->next = list2;
//   }
  
//   Node* temp = dummy->next;
//   while (temp != nullptr) {
//     cout << temp->value << " ";
//     temp = temp->next;
//   }
//   cout << endl;
//   return 0;
// }



// delete the value that is greater that the target value
#include<iostream>
using namespace std;

struct Node{
  int value;
  Node* prev;
  Node* next;
};

int main(){
  Node* n0 = new Node();
  Node* n1 = new Node();
  Node* n2 = new Node();
  Node* n3 = new Node();
  Node* n4 = new Node();

  n0->value = 80;
  n1->value = 9;
  n2->value = 23;
  n3->value = 27;
  n4->value = 54;

  int target = 27;
  n0->next = n1;
  n0->prev = nullptr;
  n1->next = n2;
  n1->prev = n0;
  n2->next = n3;
  n2->prev = n1;
  n3->next = n4;
  n3->prev = n2;
  n4->next = nullptr;
  n4->prev = n3;

  Node* temp = n0;
  // remove target to greater than values
  while(temp != nullptr){
    Node* nextNode = temp->next;
    if(temp->value >= target){
      if(temp->next != nullptr){
        temp->next->prev = temp->prev;
      }
      if(temp->prev != nullptr){
        temp->prev->next = temp->next;
      }
      delete temp;
    }
    temp = nextNode;
  }
  temp = n0;
  while(temp != nullptr){
    cout << temp->value << " ";
    temp = temp->next;
  }
    cout<<endl;
  return 0;
}