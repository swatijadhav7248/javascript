const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];


console.log("-----------------------------1) Log array element with its index------------------------");



    arrayNumbers.forEach( (element,index) => {
        console.log(index,element);
    } );



    console.log("-----------------------------2) Find Positive Numbers----------------------------------");

    const arrayPositiveNums = [];
    arrayNumbers.forEach( (element) => {
        if(element>0) {
            arrayPositiveNums.push(element);
        }
    });
    arrayPositiveNums.forEach(element => console.log(element))




        console.log("-----------------------------3) Find Negative Numbers----------------------------------");


        const arrayNegativeNums = [];
        arrayNumbers.forEach( (element) => {
            if(element<0) {
                arrayNegativeNums.push(element);
            }
        });
        arrayNegativeNums.forEach(element => console.log(element))
    

        console.log("-----------------------------4) Find Even Numbers----------------------------------");


        arrayNumbers.forEach( (element) => {
            if(element%2==0) {
                console.log(element);
            }
        });


        console.log("-----------------------------5) Find Sum of all Numbers----------------------------------");



        let sum = 0;
arrayNumbers.forEach( (element)=> {
    
        sum = sum + element;
    }
);
console.log(`sum of all numbers: ${sum}`);


console.log("------------------------------------6) Find Even indexed element----------------------------------");


arrayNumbers.forEach( (element,index) => {
    if (index%2==0) {
     console.log(index,element);
    }
 });