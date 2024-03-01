function submitForm(){
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let phoneNumber = document.getElementById('phoneNumber').value
    let classgrade = document.getElementById('classgrade').value
    let email = document.getElementById("mail").value
    let password = document.getElementById("password").value

    let confirmation = confirm("Are you sure you want to submit")
    if (confirmation){
        if (firstName == "" || lastName == "" || phoneNumber == "" || classgrade == "" || email == "" || password == ""){
            errMSG.style.display = 'block'
        }else{
    
        }
    }else{
        return
    }


}