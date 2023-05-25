function gradeCalculation(marks) {
     if(marks>=90) {
       console.log(`Excellent marks: ${marks},Your grade is A+`); 
     } else {
        if (marks>=75 && marks<90) {
            console.log(`Excellent marks: ${marks},Your grade is A`);
        } else {
            if (marks>=50 && marks<75) {
                console.log(`Good marks: ${marks},Your grade is B`);
            } else {
                if (marks>=35 && marks<50) {
                    console.log(`Marks is: ${marks} Your grade is C,Need Improvement`);
                } else {
                    if (marks==0 || marks<0 || marks=="91" || marks=="Eighty") {
                        console.log(`Please provide the valid marks: ${marks}`);
                    } else {
                        if(marks==undefined || marks==null){
                            console.log(`Please provide the valid marks: ${marks}`);
                        } else {
                            if (marks==150) {
                                console.log(`please provide the valid marks: ${marks}`);
                            }
                        }
                    }

                }
            }
        }
     }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);