console.log('Hello World!');
window.addEventListener("message", (event) => {
  console.log('Preference Center updated');
  if (event.data && event.data.type === "pref-center:update") {
    console.log("Preference Center updated:", event.data);
  }
});
