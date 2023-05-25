function voteEligibility(age) { //null undefined
    if (age==0 || age >120 || age==-10) {
        console.log(`Your Age:  ${age}-->Invalid Data`); 
    } else {
        if (age==null || age==undefined) {
            console.log(`Your Age:  ${age} -->Invalid Data`);
       
        }else {
            if (age<18) {
                console.log(`Your Age :  ${age} -->You are not eligible for voting`);
            } else{
             console.log(`Your Age :  ${age} -->You are eligible for voting`);
             } 

             }
            }     
        }
     
    
voteEligibility(45);
console.log("-------------------------------------------------------------------------------------------------------");
voteEligibility(17);
console.log("-------------------------------------------------------------------------------------------------------");
voteEligibility(8);
console.log("-------------------------------------------------------------------------------------------------------");
voteEligibility(20);
console.log("-------------------------------------------------------------------------------------------------------");
voteEligibility(-10);
console.log("-------------------------------------------------------------------------------------------------------");
voteEligibility(200);
console.log("-------------------------------------------------------------------------------------------------------");
voteEligibility(0);
console.log("-------------------------------------------------------------------------------------------------------");
voteEligibility(undefined);
console.log("-------------------------------------------------------------------------------------------------------");
voteEligibility(null);