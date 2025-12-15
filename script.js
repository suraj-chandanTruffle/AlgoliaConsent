console.log('Hello World!');
document.addEventListener("change", function (e) {
    console.log("Preference Center updated:", e);
});
document.addEventListener("commit", function (e) {
    console.log("Preference Center commited:", e);
});
document.addEventListener("select", function (e) {
    console.log("Preference Center selected:", e);
});
document.addEventListener("privatebuttonregister", function (e) {
    console.log("Preference Center privatebuttonregistered:", e);
});
