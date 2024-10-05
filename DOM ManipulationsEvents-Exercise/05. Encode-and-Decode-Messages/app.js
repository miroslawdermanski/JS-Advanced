function encodeAndDecodeMessages() {
    
    let encodeSendBtn = document.getElementsByTagName('button')[0]
    encodeSendBtn.addEventListener('click', function(e){

        let message = document.getElementsByTagName('textarea')[0].value
        
        let encodedMsg = message.split('').map((char) => {
            return String.fromCharCode(char.charCodeAt(0) + 1);
        }).join('')

        document.getElementsByTagName('textarea')[1].value = encodedMsg
        document.getElementsByTagName('textarea')[0].value = ''
    })

    let decodeReadBtn = document.getElementsByTagName('button')[1]
    decodeReadBtn.addEventListener('click', function(e) {

        let message = document.getElementsByTagName('textarea')[1].value
        
        let decodedMsg = message.split('').map((char) => {
            return String.fromCharCode(char.charCodeAt(0) - 1);
        }).join('')

        document.getElementsByTagName('textarea')[1].value = decodedMsg
    })
}