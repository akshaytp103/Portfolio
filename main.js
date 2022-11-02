function sendIt() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    const api_id = AKfycbwJZdr2dmmVB1wESDaqSeJ3EdcDQVr7r8Z-sPTHGCWHbKnffkQQaOBDmWHT77FE70uT
    const uri = `https://script.google.com/macros/s/AKfycbwJZdr2dmmVB1wESDaqSeJ3EdcDQVr7r8Z-sPTHGCWHbKnffkQQaOBDmWHT77FE70uT/exec`
    const encoded_data = encodeURI(JSON.stringify({ name: name, email: email, message: message }))
    const request = `${uri}?data=${encoded_data}`
    fetch(request).then(resp => resp.json()).then(data => console.log(data))
}


