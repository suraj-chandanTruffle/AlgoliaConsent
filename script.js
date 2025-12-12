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

// ======= CONFIGURE YOUR CALLBACKS HERE =======

// Fires ONLY when user clicked "Unsubscribe From All"
function onUnsubscribeAll() {
   console.log("🔥 USER CLICKED: Unsubscribe From All");
}

// Fires ONLY when user clicked "Save Preferences"
function onSavePreferences() {
   console.log("💾 USER CLICKED: Save Preferences");
}

// Fires whenever save completes (either save or unsubscribe)
function onAnySuccess() {
   console.log("✔ SUCCESS: Preference Center saved");
}



// ======= INTERNAL LOGIC (DO NOT MODIFY) =======

// Wait until the main Preference Center component appears
function waitForPrefCenter(callback) {
    const check = setInterval(() => {
        const el = document.querySelector("runtime_platform_prefcenter-main-app");
        if (el) {
            clearInterval(check);
            callback(el);
        }
    }, 200);
}

// Intercept fetch() to detect save requests & classify unsubscribe vs save
function interceptFetch() {
    const originalFetch = window.fetch;

    window.fetch = async (...args) => {
        const req = args[1] || {};
        const isPrefSave =
            args[0].includes("/preferencecenter") &&
            req.method === "POST";

        // Detect SAVE vs UNSUBSCRIBE from body content
        if (isPrefSave) {
            try {
                const bodyText = await req.body.text();
                const isUnsub = bodyText.includes('"value":"out"');

                window._pc_lastClick = isUnsub ? "unsubscribe" : "save";
            } catch (e) {
                window._pc_lastClick = "unknown";
            }
        }

        return originalFetch(...args);
    };
}

// Observe DOM change for success message
function observeSuccess(prefCenterEl) {
    const observer = new MutationObserver(() => {
        const success = prefCenterEl.querySelector('[data-form-handled="true"]');
        if (success) {
            // Always fire the general success callback
            onAnySuccess();

            // Fire specific event based on last fetch payload
            if (window._pc_lastClick === "unsubscribe") {
                onUnsubscribeAll();
            } else if (window._pc_lastClick === "save") {
                onSavePreferences();
            } else {
                console.log("ℹ Save completed (could not classify)");
            }

            // Optional: stop observing
            observer.disconnect();
        }
    });

    observer.observe(prefCenterEl, { childList: true, subtree: true });
}


// ======= INIT =======

interceptFetch();
waitForPrefCenter((prefCenter) => {
    console.log("Preference Center detected");
    observeSuccess(prefCenter);
});

