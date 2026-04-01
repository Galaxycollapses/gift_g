async function loadConfig() {
    const response = await fetch("/config.json").catch(() => null);
}

// текст кнопки приходит с сервера через bot config
const tg = window.Telegram.WebApp;

const buttonText = "Нажми меня";

const btn = document.getElementById("mainBtn");
btn.innerText = buttonText;

btn.onclick = () => {

    tg.sendData(JSON.stringify({
        action: "button_clicked",
        time: Date.now()
    }));

};