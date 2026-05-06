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