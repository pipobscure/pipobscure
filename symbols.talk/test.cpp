#include <iostream>
#include <stdio.h>
using namespace std;
class MyClass {
  public:
    MyClass();
    void speak();
  private:
    char value;
};
MyClass::MyClass() {
  this->value = 'b';
}
void MyClass::speak() {
  cout << "Internal: " << this->value << '\n';
}
int main() {
  MyClass t;
  t.speak();
  char cl[2];
  char c = 'c';
  memset(cl, 0, 2);
  memcpy(cl, &t, sizeof(char));
  cout << "Stolen: " << cl << '\n';
  memcpy(&t, &c, sizeof(char));
  t.speak();
  return 0;
}
