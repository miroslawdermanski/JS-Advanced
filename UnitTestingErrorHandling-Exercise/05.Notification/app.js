function notify(message) {
  
  let divNotificationEl = document.getElementById('notification')
  divNotificationEl.innerText = message
  divNotificationEl.style.display = "block"
  divNotificationEl.addEventListener('click', function (e){
    e.target.style.display = "none"
  })
}