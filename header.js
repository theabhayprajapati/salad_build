console.log("%cJOIN US!", "font-size: 40px; font-weight: bold; color: blue; text-shadow: 2px 2px yellow;");
console.log("%cWe are looking for talented individuals to join our team.", "font-size: 20px; font-weight: bold;");
console.log("%cHere's what we offer:", "font-size: 20px; font-weight: bold;");
console.log("%c- Positive and supportive work culture", "font-size: 16px;");
console.log("%c- Flexible work hours", "font-size: 16px;");
console.log("%c- Opportunities for growth and advancement", "font-size: 16px;");
console.log("%c- The chance to make a real impact at a growing startup", "font-size: 16px;");
console.log("%c- Collaborative and inclusive work environment", "font-size: 16px;");
console.log("%cInterested in joining us? Contact us at karishma@grabasalad.com", "font-size: 16px; font-style: italic;");
var params = {};
let regex = /([^&=]+)=([^&]*)/g, m;
/* get data from google oauth */
while (m = regex.exec(location.hash)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
} 
const sendDataToServer = async (data) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ,MqCFu!wTH{_"d@(Aa2y&/"V$sM_=>`
        },
        body: JSON.stringify(data)
    }
    const serverLink = "https://salad-email-webhook-endpoint.vercel.app/emailhook";
    const response = await fetch(serverLink, options);
    const dataFromServer = await response.json();
   
    return dataFromServer;
}
const updateUI = () => {
    if (localStorage.getItem('user')) { 
    } else { 
    }
}
/* get data from google oauth */
if (params.access_token) {
    /* get data from google oauth */
    fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + params.access_token)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) { 
      		sendDataToServer(data);
            localStorage.setItem('user', JSON.stringify(data));
            updateUI();
        });
} else {
    updateUI();
}


// hide from url    
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href.split('#')[0]);
}
