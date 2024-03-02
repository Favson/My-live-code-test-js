let studentInfo =[]

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
            setTimeout(()=>{
                errMSG.style.display= 'none'
            }, 4000);
        }else{
           let studentObj = {firstName, lastName, phoneNumber, classgrade, email, password}

            studentInfo.push('studentObj')
            localStorage.setItem("studentVar", JSON.stringify(studentInfo))
            document.getElementById("firstName").value =""
            document.getElementById('lastName').value = ""
            document.getElementById('mail').value = ""
            document.getElementById('phoneNumber').value =""
            document.getElementById("password").value =""
            document.getElementById('classgrade').value=""
            
            window.location.href = "dashboard.html"
        }

    }else{
        return
    }


}