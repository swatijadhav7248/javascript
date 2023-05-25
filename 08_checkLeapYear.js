

var checkLeapYear=function (leapYear) {
    if (leapYear==null || leapYear==undefined || leapYear=="Twenty Twenty") {
        console.log(`${leapYear} : It is Invalid input`);
    } else{
        if(leapYear%4==0) {
            console.log(`${leapYear}  is Leap Year`);
    }
     else {
        console.log(`${leapYear}  is not a leap Year`);
    } 
}
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(1750);
checkLeapYear(null);
checkLeapYear(undefined);
checkLeapYear("Twenty Twenty");