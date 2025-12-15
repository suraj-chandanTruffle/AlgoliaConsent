let emailValue = '';
document.addEventListener("change", function (e) {
    emailValue = e.detail.value;
});
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
window.addEventListener("click", function (e) {
    if(emailValue && isValidEmail(emailValue)){
        const realButton = event.composedPath().find(el => el.tagName === 'BUTTON');
        if(realButton && realButton.innerHTML == 'Unsubscribe'){
            window.location.href = 'https://go.algolia.com/unsubscribeconfirmation.html';
        }
    }
});
