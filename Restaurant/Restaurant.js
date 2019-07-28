function myFunction() {
  alert("This website is best viewed with JavaScript installed.");
}

function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["contact"].elements.length;
        loopCounter++) {
        if (document.forms["contact"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["contact"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function resetForm() {
    clearErrors();
    document.forms["contact"]["firstName"].value = "";
    document.forms["Contact"]["lastName"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["contact"]["firstName"].focus();
}

function validateItems() {
    clearErrors();
    var name1 = document.forms["contact"]["firstName"].value;
    var name2 = document.forms["contact"]["lastName"].value;
    var email = document.forms["contact"]["email"].value;
    var information = document.forms["contact"]["info"].value;
    if (name1 == "") {
        alert("First Name must be filled in.");
        document.forms["contact"]["firstName"]
           .parentElement.className = "form-group has-error";
        document.forms["contact"]["firstName"].focus();
        return false;
    }
   if (name2 == "") {
       alert("Last Name must be filled in.");
       document.forms["contact"]["lastName"]
          .parentElement.className = "form-group has-error"
       document.forms["contact"]["lastName"].focus();
       return false;
   }
   if (email == "") {
     alert("Email must be filled in.");
     document.forms["contact"]["email"]
        .parentElement.className = "form-group has-error"
     document.forms["contact"]["email"].focus();
     return false;
   }
   if (information  == "") {
     alert("Additional Information must be filled in.");
     document.forms["contact"]["info"]
        .parentElement.className = "form-group has-error"
     document.forms["contact"]["info"].focus();
     return false;
   }
   /*
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("addResult").innerText = Number(num1) +
                                                     Number(num2);
   document.getElementById("subtractResult").innerText = num1 - num2;
   document.getElementById("multiplyResult").innerText = num1 * num2;
   document.getElementById("divideResult").innerText = num1 / num2;
   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   */
   return false;
}
