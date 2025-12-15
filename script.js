console.log('Hello World!');
document.addEventListener("change", function (e) {
    console.log("Preference Center updated:", e);
});
document.addEventListener("commit", function () {
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
document.addEventListener("focus", function () {
    console.log("Preference Center focus:");
});
document.addEventListener("blur", function () {
    console.log("Preference Center blur:"2);
});
document.addEventListener("textchange", function (e) {
    console.log("Preference Center textchange:", e);
});
document.addEventListener("invalid", function (e) {
    console.log("Preference Center endreached:", e);
});
document.addEventListener("open", function () {
    console.log("Preference Center endreached:");
});
document.addEventListener("updatecolor", function (e) {
    console.log("Preference Center endreached:");
});document.addEventListener("updateselectedcolor", function (e) {
    console.log("Preference Center endreached:");
});
