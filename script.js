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

            studentInfo.push(studentObj) // Corrected this line
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

function show(){
   let myTable = document.getElementById("myTable")

   myTable.innerHTML= ""

   for (x = 0; x < studentInfo.length; x++){
        myTable.innerHTML += `
        <tr>
            <td class="col-1"><p>${x + 1}</p></td>
            <td class="col-4"><p>${studentInfo[x].firstName} ${studentInfo[x].lastName}</p></td>
            <td class="col-4"><p>${studentInfo[x].email}</p></td>
            <td class="col-4"><p>${studentInfo[x].classgrade}</p></td>
            <td class="col-3">
            <button class="btn btn-danger" onclick="deleted(${x})">DELETE</button>
            <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop${x}"><i class="fa-regular fa-pen-to-square fw-5"></i></button>
            </td>

        </tr>
        `
   }
}
