let sbiBank={
    bankName : 'SBI Bank',
    location: "Pune",
    accountNo: 41022454023,
    ifsc: 'SBIN0000454',
    interestRate: 8.5 ,

  
    showDetails:  function(){
    

        console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC code: ${this.ifsc}, Interest Rate: ${this.interestRate}`); 
    }
}

let axisBank={
    bankName : 'AXIS Bank',
    location: "Mumbai",
    accountNo: 4210543687,
    ifsc: 'UTIB0000492',
    interestRate: 8 ,
    showDetails:  function(){
    

        console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC code: ${this.ifsc}, Interest Rate: ${this.interestRate}`); 
    }
}


let hdfcBank={
    bankName : 'HDFC Bank',
    location: "Kolkata",
    accountNo: 1100451725,
    ifsc: 'UTIB0000945',
    interestRate: 7 ,

    showDetails:  function(){
    

        console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC code: ${this.ifsc}, Interest Rate: ${this.interestRate}`); 
    }
   
}


let yesBank={
    bankName : 'YES Bank',
    location: "Nashik",
    accountNo: 416532002,
    ifsc: 'UTIB0000945',
    interestRate: 9.6 ,

    showDetails:  function(){
    

        console.log(`Bank Details: Bank name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC code: ${this.ifsc}, Interest Rate: ${this.interestRate}`); 
    }
}
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();