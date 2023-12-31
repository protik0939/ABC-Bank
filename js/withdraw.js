document.getElementById('wd').addEventListener('click', function () {
    if (document.getElementById('wdin').value > "0") {
        if (parseInt(document.getElementById('wdin').value) <= parseInt(document.getElementById('ttlmn').innerText)) {

            document.getElementById('ttlwm').innerText = parseInt(document.getElementById('ttlwm').innerText) + parseInt(document.getElementById('wdin').value)

            document.getElementById('ttlmn').innerText = parseInt(document.getElementById('ttlmn').innerText) - parseInt(document.getElementById('wdin').value)
            document.getElementById('wdin').value = '';
        }
        else {
            alert("You don't have that enough money to withdraw, Try another amount")
            document.getElementById('wdin').value = '';
        }
    }
    else {
        alert("Please insert a valid ammount")
        document.getElementById('wdin').value = '';
    }
})