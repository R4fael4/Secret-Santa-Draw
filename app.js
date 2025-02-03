let friends = [];

function addFriend() {
    let friendName = document.getElementById("friend").value;

    if (friendName.trim() === "") {
        alert("Please enter a name.");
        return;
    }

    friends.push(friendName);
    document.getElementById("friend").value = "";
    updateList();
}

function updateList() {
    let friendList = document.getElementById("friendList");

    friendList.innerHTML = "";

    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        li.textContent = friends[i];
        friendList.appendChild(li);
    }
}

function drawSecretSanta() {
    if (friends.length === 0) {
        alert("There are no friends to draw.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * friends.length);
    let drawnFriend = friends[randomIndex];

    let result = document.getElementById("result");
    result.innerHTML = `<li>The drawn Secret Santa is: ${drawnFriend}</li>`;
}
