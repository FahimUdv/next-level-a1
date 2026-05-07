/*<<<<<<<<<<<<<<< Problem 01 >>>>>>>>>>>>>>>>*/

function filterEvenNumbers(arr: number[]): number[] {
    return arr.filter((n: number) => n % 2 === 0);
}
const myArr: number[] = [1, 2, 3, 4, 5, 6]
const result = filterEvenNumbers(myArr);



/*<<<<<<<<<<<<<<< Problem 02 >>>>>>>>>>>>>>>>*/

const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
}
const str1: string = 'typescript';
const result2 = reverseString(str1);



/*<<<<<<<<<<<<<<< Problem 03 >>>>>>>>>>>>>>>>*/

type StringOrNumber = number | string;
const checkType = (input: StringOrNumber) => {
    if(typeof input === 'number'){
        return 'Number'
    }else {
        return 'String'
    }
}


/*<<<<<<<<<<<<<<< Problem 04 >>>>>>>>>>>>>>>>*/

const getProperty = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {
    return obj[key];
}
const user = {
    name: "Fahim",
    age: 25,
};

const names = getProperty(user, "name"); 



/*<<<<<<<<<<<<<<< Problem 05 >>>>>>>>>>>>>>>>*/

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true
  };
}

const myBook = {
  title: "Programming Hero",
  author: "Jhankar Mahbub",
  publishedYear: 2020
};

const updatedBook = toggleReadStatus(myBook);



/*<<<<<<<<<<<<<<< Problem 06 >>>>>>>>>>>>>>>>*/

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
const student = new Student('Rifat', 24, 'A');
student.getDetails();



/*<<<<<<<<<<<<<<< Problem 07 >>>>>>>>>>>>>>>>*/

function getIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(num => arr2.includes(num));
}

const finalArr = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
