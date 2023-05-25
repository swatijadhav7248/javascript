var tcsInterviewEligibility = function() { // gradScore,hscScore,sscScore,candidateName

    console.log("-------------------------------------TCS Interview Eligibility-----------------------------");
    var gradScore=80;
    var hscScore=86;
    var sscScore=90;
    var candidateName="Swati";
     if (gradScore>=70 || hscScore>=80 || sscScore>90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
     } else {
        console.log(`Unfortunately you are not eligible for interview`);
     }


      console.log("--------------------------------------------------------------------------------");


     var gradScore=70;
     var hscScore=65;
     var sscScore=55;
     var candidateName="Vaishnavi";
      if (gradScore>=70 || hscScore>=80 || sscScore>90) {
         console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
      } else {
         console.log(`Unfortunately you are not eligible for interview`);
      }



      console.log("--------------------------------------------------------------------------------");


      var gradScore=60;
      var hscScore=79;
      var sscScore=88;
      var candidateName="Rutuja";
       if (gradScore>=70 || hscScore>=80 || sscScore>90) {
          console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
       } else {
          console.log(`Unfortunately ${candidateName} you are not eligible for interview`);
       }
    }
    
    tcsInterviewEligibility();