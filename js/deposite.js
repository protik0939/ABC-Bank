document.getElementById('dep').addEventListener('click', function(){
    if(document.getElementById('depin').value > "0")
    {
        document.getElementById('ttldm').innerText = parseInt(document.getElementById('ttldm').innerText) + parseInt(document.getElementById('depin').value)
        document.getElementById('ttlmn').innerText = parseInt(document.getElementById('ttlmn').innerText) + parseInt(document.getElementById('depin').value)
        document.getElementById('depin').value = '';
    }
    else
    {
        alert("Please insert a valid ammount")
        document.getElementById('depin').value = '';
    }
})