console.log('Hello World!');
document.addEventListener("change", function (e) {
    console.log("Preference Center updated:", e);
    
});
let qwr = document.addEventListener("commit");
console.log('chgchfufvu',qwr);
document.addEventListener("commit", () => {
    console.log("Preference Center commited:");
});
window.addEventListener("commit", () => {
    console.log("Preference Center commited:");
});
window.addEventListener("select", function (e) {
    console.log("Preference Center selected:", e);
});
window.addEventListener("privatebuttonregister", function (e) {
    console.log("Preference Center privatebuttonregistered:", e);
});
window.addEventListener("GET_LINK_INFO_EVENT", function (e) {
    console.log("Preference Center GET_LINK_INFO_EVENT:", e);
});
window.addEventListener("formfieldchange", function (e) {
    console.log("Preference Center formfieldchange:", e);
});
window.addEventListener("endreached", function (e) {
    console.log("Preference Center endreached:", e);
});
window.addEventListener("focus", (e) => {
    console.log("Preference Center focus:");
});
window.addEventListener("blur", (e) => {
    console.log("Preference Center blur:");
});
window.addEventListener("textchange", function (e) {
    console.log("Preference Center textchange:", e);
});
window.addEventListener("invalid", function (e) {
    console.log("Preference Center invalid:", e);
});
window.addEventListener("open", (e) => {
    console.log("Preference Center open:");
});
window.addEventListener("emailTextInput", function (e) {
    console.log("Preference Center emailTextInput:");
});
window.addEventListener("textinput", function (e) {
    console.log("Preference Center textinput:", e);
});
window.addEventListener("input", function (e) {
    console.log("Preference Center textinput:", e);
});
document.addEventListener("click", function (e) {
    console.log("Preference Center click:", e);
    console.log("Preference Center clicked:", e.target.localName);
});
document.addEventListener("clickEvent", function (e) {
    console.log("Preference Center clickEvent:", e);
});
