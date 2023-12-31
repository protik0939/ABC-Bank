document.getElementById('loginbtn').addEventListener('click', function () {
    if (document.getElementById('eml').value == 'protik0939@gmail.com' && document.getElementById('psd').value == '12345') {
        location.href = "bank.html";
    }
    else {
        if (document.getElementById('eml').value == 'protik0939@gmail.com' && document.getElementById('psd').value != '12345') {
            alert("Your password in wrong")
        }
        else {
            alert("Seems that you don't belongs to this bank")
        }
    }
})