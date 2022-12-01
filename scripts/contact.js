function phoneMask(event) {
    let computerKey = event.key;
    let phoneNumber = event.target.value.replace(/\D+/g, "");

    if (/^[0-9]$/i.test(computerKey)) {
        phoneNumber = phoneNumber + computerKey;
        let lengthNumber = phoneNumber.length;

        if (lengthNumber >= 12) {
            return false;
        }
        
        if (lengthNumber > 10) {
            phoneNumber = phoneNumber.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (lengthNumber > 5) {
            phoneNumber = phoneNumber.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (lengthNumber > 2) {
            phoneNumber = phoneNumber.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
            phoneNumber = phoneNumber.replace(/^(\d*)/, "($1");
        }

        event.target.value = phoneNumber;
    }

    if (!["Backspace", "Delete"].includes(computerKey)) {
        return false;
    }
}

function formValidate() {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    var name = document.getElementById("nameClient").value;
    var email = document.getElementById("emailClient").value;
    var phone = document.getElementById("phoneClient").value;

    if(!name || name.length < 5) {
        alert("Por favor informe o seu nome completo.");
        name.focus();
        return;
    }

    if(!email || emailRegex.test(email)){
        alert("Por favor informe um email válido.")
        email.focus();
        return;
    }

    if(!phone || phone.length < 11) {
        alert("Por favor informe um número de telefone válido.")
        phone.focus();
        return;
    }
}  

function confirmSubmitedForm() {
    var result = confirm("Deseja enviar suas informações?")
    if(result == true){
        formValidate();
    }
    else {
        return;
    }
}