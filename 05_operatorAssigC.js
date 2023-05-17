  var tcsInterviewEligibility= function () {// Arguments  gradeScore,hscScore,sscScore,candidateName
    

    console.log("---------------------------------------TCS Interview Eligibility----------------------------------------");



    

    var gradeScore = 80;
    var hscScore = 86;
    var sscScore = 90;
    var candidateName="Swati";
    var result = (gradeScore>=70 || hscScore>=80 || sscScore>=90) ? `Congrats!! ${candidateName} you are eligible for TCS interview` : `Unfortunately ${candidateName}  you are not  eligible for interview`;
    console.log(`${result}`);

   console.log("---------------------------------------------------------------------------------------------------------");

    var gradeScore = 70;
    var hscScore = 65;
    var sscScore = 55;
    var candidateName="vaishnavi";
    var result = (gradeScore>=70 || hscScore>=80 || sscScore>=90) ? `Congrats!! ${candidateName} you are eligible for TCS interview` : `Unfortunately ${candidateName}  you are not  eligible for interview`;
    console.log(`${result}`);
  

    console.log("---------------------------------------------------------------------------------------------------------");



    
    var gradeScore = 60;
    var hscScore = 79;
    var sscScore = 88;
    var candidateName="Rutuja";
    var result = (gradeScore>=70 || hscScore>=80 || sscScore>=90) ? `Congrats!!  ${candidateName} you are eligible for TCS interview` : ` ${candidateName} Unfortunately you are not  eligible for interview`;
    console.log(`${result}`);
  
}
 
 tcsInterviewEligibility();