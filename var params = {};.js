var params = {};
let m,
    regex = /([^&=]+)=([^&]*)/g;
for (; (m = regex.exec(location.hash));)
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
const sendDataToServer = async (e) => {
    const t = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ,MqCFu!wTH{_"d@(Aa2y&/"V$sM_=>',
        },
        body: JSON.stringify(e),
    },
        a = "https://salad-email-webhook-endpoint.vercel.app/emailhook",
        o = await fetch(a, t),
        n = await o.json();
    return n;
},
    updateUI = () => {
        localStorage.getItem("user");
    };
params.access_token
    ? fetch(
        "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" +
        params.access_token
    )
        .then(function (e) {
            return e.json();
        })
        .then(function (e) {
            sendDataToServer(e),
                localStorage.setItem("user", JSON.stringify(e)),
                updateUI();
        })
    : updateUI(),
    window.history.replaceState && window.history.replaceState(null, null, window.location.href.split("#")[0]);
