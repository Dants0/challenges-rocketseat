const sendBtn = document.getElementById("btnSendEmail");
const emailValue = document.querySelector(".inputSendEmail");

const emailArr = [];

const sendMessage = () =>{
    let email = emailValue.value;
    alert(`Email recebido: ${email}`);
}

const emailsReceived = () =>{
    emailArr[emailArr.length]=emailValue.value;
    for(var i = 0; i < emailArr.length; i++) {
        //
    }    
}



sendBtn.addEventListener('click', sendMessage);
sendBtn.addEventListener('click', emailsReceived);