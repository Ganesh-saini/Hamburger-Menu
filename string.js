// strings

//string Mathod
// String length  = count 1
// String slice() = for break strings (star , end ) end is not includes
// substring()  //= :( start ,end ) end not include and we can not use negative value in this mathod
// String substr()  = (start , lenght)
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
//String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

// strings convert in Arrays throw the split() mathod
// const mystr1="hello"
// console.log(mystr1.split());

// const str1 ="Jai"
// const str2="shree"
// const str3="ram"
// console.log(str1.concat("-"+str2+"-"+str3));

// const str4="hello"
// console.log(str4.padStart(9, "hey-"));
// console.log(str4.charCodeAt(str4));      // 104 
// console.log(str4.split());                  // [ 'hello' ]
//slice() : for break strings (star , end ) end is not includes
//substr() : (start , lenght)
//substring() :( start ,end ) end not include and we can not use negative value in this mathod



// Q . String 
// 1. slice(),substr(),substring() me deffrience
// ANS . https://www.tutorialspoint.com/difference-between-string-slice-and-substring-methods#:~:text=Here%2C%20as%20the%20end%20index,%2C%20it%20returns%20'Good'.




///// string +++++++++++++++++++++++++++++++++++++++

// " " ,' ' ,` `

// let name="hello"
// let value=35
// console.log(name+value+" abc");
// console.log(name + "" + value); // hello35
// console.log(name + " " + value); // hello 35

// morden way / ``(backtic) // string interpolation  // literals
/// we make placeholder and we can add directelly variables

// console.log(`my name is ${name} and my age is ${value}`);

// string 
// const Name = new String("HappyNewYear")
// console.log(Name);
// console.log(Name[0]);
// console.log(Name.__proto__);  // we can check all string mathod 

// string Mathod 
// .length
// toUpperCase()
// toLowerCase()
// charAt(10)=> /a/ zero bassed index ke through element ko find krna
// indexof("N")=> element ka index value find krna
// slice()  
// substring(srart , end) // end is not include // we can't use negative value  
// substr(srart , length)
// trim()
// replace()
// includes()
// split()


// const Name = "HappyNewYear"

// console.log(Name.length);
// console.log(Name.toLocaleUpperCase()); // HAPPYNEWYEAR
// console.log(Name);

// console.log(Name.toLocaleLowerCase()); //happynewyear

// but but this mathod can't change originol value , because this is ptimitive data type and primitive data types
// are store in stack memorry and stack memorry me original variable ki copy milti h.

// index => start at 0.
// length => start at 1.

// console.log(Name.indexOf(N));  // N is not defined
// console.log(Name.indexOf("N"));  // 5

// console.log(Name.charAt(10));  // a // count with zero basses index


// const Name = "HappyNewYear"

// // console.log(Name.slice(5,12));
// console.log(Name.slice(-5,8));

// console.log(Name.replace("Happy" ,"Good"));


// console.log(Name.substring(-5,8));   // negitive value nhi leta , start from 0 

// console.log(Name.substr(0,8)); // HappyNew // (start , length)



// const Name = "    Happy New Year    "
// console.log(Name);
// console.log(Name.trim());



// const Name = "Happy New Year"
// console.log(Name.replaceAll("HappyNewYear" ,"Good Moring"));

// console.log(Name.includes("HAPPY"));  // false
// console.log(Name.includes("Happy"));   // true


// split()
// strings convert in Arrays throw the split() mathod

// const Name = "Happy-New-Year"
// console.log(Name.split("-"));  // [ 'Happy', 'New', 'Year' ]


let value = "Good-morning"
// let newValue=value.slice(11,12)
// console.log(newValue);

// console.log(value.split());   // [ 'Good-morning' ]
// console.log(value.split(''));   // with commass without space
/*  [
'G', 'o', 'o', 'd',
'-', 'm', 'o', 'r',
'n', 'i', 'n', 'g'
] */



// console.log(value.split(' ')) // [ 'Good-morning' ]

// console.log(value.split('-'));  // [ 'Good', 'morning' ]
// console.log(value.split('n'));  // [ 'Good-mor', 'i', 'g' ]



//++++++++++++++++++++++++++++++++ Adavanced

// const a = "8";
// const b = "8";
// if (a < b) {
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }



//Q.string reverse

let a="Hello"

let b=a.split("")
let c= b.reverse()
let d=c.join("")
console.log(d);

// let a1=a.split("").reverse().join("")    // Arrays// arryas ka mathod// string me convert kiya
// console.log(a1);




// function myf() {

//   let name = "dooG"

//   let name2 = name.split("")
//   console.log(typeof name2);   // Object 

//   let name3 = name2.reverse()
 

//   let name4 = name3.join("")
//   console.log(name4);
//   console.log(typeof name4);

//   return

// }

// myf()


// Q - Convert a string in Each Array
// let name= "hello"

// console.log([...name]);

// console.log(name.split()); // [ 'hello' ]

// console.log(name.split(""))  // [ 'h', 'e', 'l', 'l', 'o' ]


// let name= "saini ganesh"
// let name1= name.split(' ')
// let name2=name1.reverse()
// let name3=name2.join(" ")
// console.log(name3);  // ganesh saini