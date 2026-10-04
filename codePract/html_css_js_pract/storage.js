const username = document.getElementById("username");
const email = document.getElementById("email");
const address = document.getElementById("address");

const localBtn = document.getElementById("localBtn");
const sessionBtn = document.getElementById("sessionBtn");
const showBtn = document.getElementById("showBtn");

const result = document.getElementById("result");

const clearLocalBtn = document.getElementById("clearLocalBtn");
const clearSessionBtn = document.getElementById("clearSessionBtn");
const clearAllBtn = document.getElementById("clearAllBtn");


// Save in LocalStorage
localBtn.addEventListener("click", () => {

    const user = {
        username: username.value,
        email: email.value,
        address: address.value
    };

    localStorage.setItem("user", JSON.stringify(user));

    result.textContent = "User saved in LocalStorage";
});


// Save in SessionStorage
sessionBtn.addEventListener("click", () => {

    const user = {
        username: username.value,
        email: email.value,     
        address: address.value
    };

    sessionStorage.setItem("user", JSON.stringify(user));

    result.textContent = "User saved in SessionStorage";
});


// Get data from both storage
showBtn.addEventListener("click", () => {

    const localData = localStorage.getItem("user");
    const sessionData = sessionStorage.getItem("user");

    const localUser = localData
        ? JSON.parse(localData)
        : null;

    const sessionUser = sessionData
        ? JSON.parse(sessionData)
        : null;

    console.log("LocalStorage:", localUser);
    console.log("SessionStorage:", sessionUser);

    result.textContent = `
        Local: ${localUser?.username || "No data"} |
        Session: ${sessionUser?.username || "No data"}
    `;
});


clearLocalBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    result.textContent = "LocalStorage cleared";
});

clearSessionBtn.addEventListener("click", () => {
    sessionStorage.removeItem("user");
    result.textContent = "SessionStorage cleared";
});

clearAllBtn.addEventListener("click", () => {
    localStorage.clear();
    sessionStorage.clear();
    result.textContent = "All Storage cleared";
});