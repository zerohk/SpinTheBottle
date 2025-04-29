let spinButton = document.querySelector("#spin");
let status = document.querySelector("#status");
spinButton.addEventListener("click", () => {
    status.innerHTML = "Spinning...";
    let selectedPlayer = "Selected player: " + randomPlayer();
    setTimeout(() => {
        // 更新状态文本显示选中的玩家
        status.innerHTML = selectedPlayer;
    }, 2000);
});

const randomPlayer = () => {
    // return "Player " + (Math.floor(Math.random() * 6) + 1);
    // 获取无序列表中姓名
    let userlist = getListInfo();
    return userlist[Math.floor(Math.random() * userlist.length)];
}


let addPlayer = document.querySelector("#add-player");
let inputField = document.querySelector("#player-name");
let playerName;
let playerList = document.querySelector("#players");
addPlayer.addEventListener("click", () => {
    // 使用 value 获取输入框的值，而不是 textContent
    playerName = inputField.value;
    // 如果已经存在，则弹出提示
    // 如果存在，更新status的值
    if (getListInfo().includes(playerName)) {
        // alert("Player name already exists!");
        status.innerHTML = "Player already exists!";
        // 清空输入框？
        inputField.value = "";
    }
    // 只有输入框不为空才添加到列表
    else if (!(playerName.length === 0)) {
        let li = document.createElement("li");
        li.textContent = playerName;
        playerList.appendChild(li);
        // 更改 status 的值，清空输入框
        status.innerHTML = "Spin the bottle!";
        inputField.value = "";
    }
});

// 返回一个包含无序列表所有元素的数组
const getListInfo = () => {
    let ul = document.querySelector("#players");
    const itemList = ul.children;
    const userList = [];
    for (let i = 0; i < itemList.length; i++) {
        userList.push(itemList[i].textContent);
    }
    return userList;
};