var username;

async function getdata() {
    let accessToken = 'ADD THE API TOKEN FROM=> https://github.com/settings/tokens ';
    let url = `https://api.github.com/users/${username}?access_token=${accessToken}`;

    const headers = {
        'Authorization': `token ${accessToken}`
    };

    try {
        const response = await fetch(url, { headers });
        if (response.ok) {
            const data = await response.json();
            console.log("Get the Information successfully");
            document.getElementById('image_of_user').src = data.avatar_url;
            let infoset = document.getElementById('information');
            infoset.innerHTML = '';
            for (let key of Object.keys(data)) {
                const value = data[key];
                let node = document.createElement('p');
                node.innerHTML = `${key}: ${value}`;
                infoset.appendChild(node);
            }
        } else {
            console.log("Error to get the information of user");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

function getusername() {
    username = document.getElementById('getdata').value;
    document.getElementById('infomationsection').style.display = "flex";
    const div1 = document.getElementById('body');
    div1.style.height = '600vh';
    getdata();
}
