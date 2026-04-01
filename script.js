async function loadConfig() {
    const response = await fetch("/config.json").catch(() => null);
}

// текст кнопки приходит с сервера через bot config
const tg = window.Telegram.WebApp;

document.getElementById("mainBtn").onclick = () => {
    tg.sendData(JSON.stringify({
        action: "button_clicked",
        time: Date.now()
    }));
};