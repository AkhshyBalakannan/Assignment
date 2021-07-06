
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    const fname = document.querySelector('.firstName');
    const lname = document.querySelector('.lastName');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phno')

    if (fname.value == "") {
        e.preventDefault();
        fname.style.border = "1px solid red";

    }

    if (lname.value == "") {
        e.preventDefault();
        lname.style.border = "1px solid red";
    }

    if (company.value == "") {
        e.preventDefault();
        company.style.border = "1px solid red";
    }

    var reg = /^([a-z A-z 0-9 \.-]+)@([a-z A-z 0-9]+).([a-z]{2,10}) .([a-z]{2,4}?)$/;
    if (!(reg.test(email.value))) {
        email.style.color = "red";
        email.style.border = "1px solid red";
        e.preventDefault();
    }

    var regx = /^[7-9]\d{9}$/;
    if (!(regx.test(phone.value))) {
        phone.style.color = "red";
        phone.style.border = "1px solid red";
        e.preventDefault();
    }
    const subject = document.querySelector("#subject");
    if (subject.value === "false") {
        subject.style.border = "1px solid red";
        e.preventDefault();
    }
    // if (!(document.querySelector('.customer').contains('selected'))) {

    //     // if (!(btn1.contains('selected') || btn2.contains('selected'))) {
    //     btn1.style.border = "1px solid red";
    //     btn2.style.border = "1px solid red";
    // }
    alert("Please fill the red bordered fields")
})
const btn1 = document.querySelector('#yesCustomer');
const btn2 = document.querySelector('#noCustomer');
btn1.addEventListener('click', () => {
    btn2.setAttribute("disabled", "")
    btn2.classList.add("notselected")
})
btn2.addEventListener('click', () => {
    btn1.setAttribute("disabled", "")
    btn1.classList.add("notselected")

})


// btn.addEventListener('click', (e) => {
//     console.log('hy ')
//     var Firstname = document.getElementsById("Name");
//     var Lastname = document.getElementsByClassName("lastName").value;
//     var company = document.getElementById("company");
//     var email = document.getElementById("email");
//     var phonenumber = document.getElementById("phno");

//     if (Firstname.value == "") {
//         Firstname.style.border = "1px solid red";
//         e.preventDefault();
//     }
//     //company name validation
//     if (company.value == "") {
//         company.style.border = "1px solid red";
//         e.preventDefault();
//     }
//     // email validation
//     var reg = /^([a-z A-z 0-9 \.-]+)@([a-z A-z 0-9]+).([a-z]{2,10}) .([a-z]{2,4}?)$/;
//     if (reg.test(email.value)) {
//         document.getElementById("email").innerHTML = "valid"
//         document.getElementById("email").style.visibility = "visible";
//         document.getElementById("email").style.color = "green";
//     }
//     else {
//         document.getElementById("email").innerHTML = "Invalid"
//         document.getElementById("email").style.visibility = "visible";
//         document.getElementById("email").style.color = "red";
//         e.preventDefault();
//     }

//     //phonenumber validation
//     var regx = /^[7-9]\d{9}$/;

//     if (regx.test(phonenumber.value)) {
//         document.getElementById("phno").innerHTML = "valid"
//         document.getElementById("phno").style.visibility = "visible";
//         document.getElementById("phno").style.color = "green";
//     }
//     else {
//         document.getElementById("phno").innerHTML = "Invalid"
//         document.getElementById("phno").style.visibility = "visible";
//         document.getElementById("phno").style.color = "red";
//         e.preventDefault();
//     }
// })