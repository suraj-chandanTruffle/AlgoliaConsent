console.log('Hello World!');
document.addEventListener("change", function (e) {
    console.log("Preference Center updated:", e);
});
document.addEventListener("commit", (e) => {
    console.log("Preference Center commited:");
});
document.addEventListener("select", function (e) {
    console.log("Preference Center selected:", e);
});
document.addEventListener("privatebuttonregister", function (e) {
    console.log("Preference Center privatebuttonregistered:", e);
});
document.addEventListener("GET_LINK_INFO_EVENT", function (e) {
    console.log("Preference Center GET_LINK_INFO_EVENT:", e);
});
document.addEventListener("formfieldchange", function (e) {
    console.log("Preference Center formfieldchange:", e);
});
document.addEventListener("endreached", function (e) {
    console.log("Preference Center endreached:", e);
});
document.addEventListener("focus", (e) => {
    console.log("Preference Center focus:");
});
document.addEventListener("blur", (e) => {
    console.log("Preference Center blur:");
});
document.addEventListener("textchange", function (e) {
    console.log("Preference Center textchange:", e);
});
document.addEventListener("invalid", function (e) {
    console.log("Preference Center invalid:", e);
});
document.addEventListener("open", (e) => {
    console.log("Preference Center open:");
});
document.addEventListener("updatecolor", function (e) {
    console.log("Preference Center updatecolor:");
});
document.addEventListener("updateselectedcolor", function (e) {
    console.log("Preference Center updateselectedcolor:");
});
document.addEventListener("textinput", function (e) {
    console.log("Preference Center textinput:", e);
});
document.addEventListener("input", function (e) {
    console.log("Preference Center textinput:", e);
});
document.addEventListener("click", function (e) {
    console.log("Preference Center click:", e);
});
document.addEventListener("clickEvent", function (e) {
    console.log("Preference Center clickEvent:", e);
});
