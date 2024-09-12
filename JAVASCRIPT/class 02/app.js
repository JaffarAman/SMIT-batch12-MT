// alert("Good Morning...");

// var firstname = "Jaffar";
// var lastname = "Aman";
// alert(firstname)
// alert(lastname)

// var fullname = "Sufiyan";
// alert(fullname);
// fullname = "Jaffar"; //variable value update
// alert(fullname);

// var num1  = 100
// var num1;
// num1 = 101
// console.log(num1);

// var myFirstName = "123"

// var firstName = "Jaffar"
// console.log(firstName)

// var num1 = 100;
// var num2 = 200;
// var result = num1 / num2;
// console.log(result, "result");

// var num1 = "200";
// var num2 = "300";
// var result = num1 / num2;
// console.log(result);

// var firstName = "Jaffar";
// var lastName = "Aman";

// var fullName = firstName + lastName;
// var fullName = firstName + " " + lastName;
// console.log(fullName, "fullName");

// var num1 = 10;
// var num2 = 2;
// var result = num1 % num2;
// console.log(result, "result");

// var num1 = 10;
// var num2 = 30;
// var result = num1 + num2 - num2 + num1 * num2; //DMAS , BODMAS
//  10  + 300

// var result = num1 * (num2 - num2 * num1) + num1 * num2;
//    =  10 * (30 - 300) + 10 * 30
//    =  10 ( -270) + 10 *30
//    =  -2700 + 300
//     = -2400

// var result = 200 + (300 + "200");
// console.log(result);

// var num1 = 10;
// var num2 = 30;

// var result = (num1 * num2 *(num1 + num1) )- num2 - num1 * num1;
// console.log("result" , result)

// num1 = num1 + 1
// num1 += 10;

// var num1 = 10; //11
// num1++
// console.log(num1);

// console.log(num1++) //post increment = > phely print phr add
// console.log(num1)

// console.log(++num1); //pre increment => phely update phr print
// console.log(num1);

// var num10 = 20; //21 // 22 // 23
// var result = num10 + ++num10 + num10;
// var result =  num10 + ++num10 + ++num10 + num10++ ;
// var result =  ++num10 + ++num10 + num10 + num10++  + ++num10 ;
//

// console.log(result, "result");

// num1 = 10
// ex:
//1. num1++ - num1 + num1++ + ++num1 - --num1 - num1 //-1 , 12,13
//2. num1-- -  ++num1 + num1 + num1++ //24,20
//3. ++num1 + ++num1 - ++num1 - num1++ -  num1

var num1 = 10;
var result = ++num1 + ++num1 - ++num1 - num1++ -  num1;
console.log(result, "result");
