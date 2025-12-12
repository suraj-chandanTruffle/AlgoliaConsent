console.log('Hello World!');
document.addEventListener("change", function (e) {
    console.log("Preference Center updated:", e);
});
document.addEventListener("submit", (e) => {
    console.log("Preference Center form submit triggered.");
});
document.addEventListener("*", function (e) {
    if (e instanceof CustomEvent) {
        console.log("Custom event:", e.type, e.detail);
    }
});
document.addEventListener("custom", (e) => {
    console.log("Custom event:", e.type, e.detail);
});
document.addEventListener("unsubscribeButton", (e) => {
    console.log("unsubscribeButton.");
});
document.addEventListener("unsubscribe", (e) => {
    console.log("unsubscribe.");
});
document.addEventListener("unsubscribebutton", (e) => {
    console.log("unsubscribebutton.");
});
document.addEventListener("button", (e) => {
    console.log("button.");
});
