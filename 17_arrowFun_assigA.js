console.log(`=============1) Arrow function with no arguments and no return value===============`);
let display = ()=> {
    console.log("Good Morning, Today is Monday");
}
display();


console.log("-----------------------------------------------------------------------------------------");

console.log(`=============2) Arrow function with arguments and no return value==================`);
let mul = (num1,num2,num3=1) => {
    let result= num1*num2*num3;
    return result;
}
  let result = mul(5,5,2);
  console.log(`Multiplication of 5*5*2 is : ${result}`);

   result= mul(10,4);
   console.log(`Multiplication of 10*4*1 is : ${result}`);



   console.log("-----------------------------------------------------------------------------------------");



   console.log(`=======================Arrow function with arguments and return value================================`);
    let add = (num1, num2,num3, num4, num5) => {
    let res = num1 +  num2  + num3 +  num4  +  num5;
    return res;
}
   let res = add(100, 100,200,349,756);
   console.log(`Addition of numbers is:  ${res}`);


    add = (var1, var2 ,var3 , var4, var5) => {
        res=var1 + " "+ var2 + " "+ var3 + " "+ var4 +" "+ var5;
        return res;
    }
   res =add ("I am" , "learning", "ES6", "features",  "in depth");
    console.log(`Addition of Words is: ${res}`);
    
