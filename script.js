function validateForm(){
    const day = document.getElementById('date').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    if (day > 0 && day <32 && month > 0 && month < 13 && year > 0 && year < 2023){
        document.getElementById('warning-msg').innerText = 'Valid input !';
        document.getElementById('warning-msg').style.color = 'green';
        const bday = new Date(year, month-1, day);
        const current = new Date();
        
        let days = current.getTime() - bday.getTime();
        let dividend = 1000*60*60*24*365;
        let result = days/dividend;
        if (result < 15){
            alert("your age is restricted !");
        }
        else{
            alert('going to ggogle!');
            window.location.href = "http://www.google.com";
            window.location.replace = "http://www.google.com";
        }

    }
    else{
        document.getElementById('warning-msg').innerText = 'Pls Validate all your inputs are in specified range !';
        document.getElementById('warning-msg').style.color = 'red';
        return false;

    }

    

}
