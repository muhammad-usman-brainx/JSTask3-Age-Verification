function validateForm(){
    const day = document.getElementById('date').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const bday = new Date(year, month-1, day);
    const current = new Date();
    
    let days = current.getTime() - bday.getTime();
    let dividend = 1000*60*60*24*365;
    let result = days/dividend;
    if (result < 15){
        alert("your age is restricted !");
    }else{
        window.location.href = "http://www.google.com";
        window.location.replace = "http://www.google.com";
    }

}