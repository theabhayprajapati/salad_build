var params = {};
let regex = /([^&=]+)=([^&]*)/g,
    m;
/* get data from google oauth */
while ((m = regex.exec(location.hash))) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}
const sendDataToServer = async (data) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ,MqCFu!wTH{_"d@(Aa2y&/"V$sM_=>`,
        },
        body: JSON.stringify(data),
    };
    const serverLink =
        "https://salad-email-webhook-endpoint.vercel.app/emailhook";
    const response = await fetch(serverLink, options);
    const dataFromServer = await response.json();

    return dataFromServer;
};
const updateUI = () => {
    if (localStorage.getItem("user")) {
    } else {
    }
};
/* get data from google oauth */
if (params.access_token) {
    /* get data from google oauth */
    fetch(
        "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" +
        params.access_token
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            sendDataToServer(data);
            localStorage.setItem("user", JSON.stringify(data));
            updateUI();
            showToast();
        });
} else {
    updateUI();
}

// hide from url
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href.split("#")[0]);
}

function showToast() {
    const createAToast = document.createElement('div');
    createAToast.style.borderRadius = '0px';
    createAToast.style.backgroundColor = 'rgb(6, 194, 112)';
    createAToast.style.padding = '15px';
    createAToast.style.marginRight = 'auto';
    createAToast.style.marginBottom = 'auto';
    createAToast.style.marginLeft = 'auto';
    createAToast.style.marginTop = 'env(safe-area-inset-top)';
    createAToast.style.width = '100%';
    createAToast.style.position = 'fixed';
    createAToast.style.top = '0px';
    createAToast.style.left = '0px';
    createAToast.style.zIndex = '1001';
    createAToast.style.textAlign = 'center';
    createAToast.style.justifyContent = 'center';
    createAToast.style.fontSize = '13px';
    createAToast.style.fontStyle = 'normal';
    createAToast.style.fontWeight = '600';
    createAToast.style.lineHeight = '16px';
    createAToast.style.letterSpacing = '0.4px';
    createAToast.style.color = 'rgb(248, 248, 248)';
    createAToast.innerText = 'Thank you for your interest in our product. We will notify you when it is available.';
    document.body.appendChild(createAToast);
    createAToast.style.display = 'flex';
    setTimeout(() => {
        createAToast.style.display = 'none';
    }, 3000);
}