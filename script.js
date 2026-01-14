let emailValue = '';
document.addEventListener("change", function (e) {
    emailValue = e.detail.value;
});
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
window.addEventListener("click", function (e) {
    if(emailValue && emailValue.length <= 80 && isValidEmail(emailValue)){
        const realButton = event.composedPath().find(el => el.tagName === 'BUTTON');
        if(realButton && realButton.innerHTML == 'Unsubscribe'){
            window.top.location.href = 'https://go.algolia.com/unsubscribeconfirmation.html';
            //window.open('https://go.algolia.com/unsubscribeconfirmation.html');
        }
    }else{
        this.dispatchEvent(new CustomEvent('invalid', {
          cancellable: true
        }));
    }
});
