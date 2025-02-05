#include<iostream>
using namespace std;

class Employee
{

public:
    Employee()
    {
        cout << "creating the constructor" << endl;
    }

    string name;
    int age;
    long phoneNo;
    string address;
};

int main()
{

    Employee e1;
    e1.name = "swatantra gupta";
    e1.age = 21;
    e1.phoneNo = 9084440850;
    e1.address = "lohvan, mathura";

    cout << e1.name << e1.age << e1.phoneNo << e1.address << endl;

    return 0;
}