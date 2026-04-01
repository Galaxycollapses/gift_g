// ===============================
// Telegram Mini App script
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ script.js loaded");

    // Получаем Telegram WebApp объект
    const tg = window.Telegram?.WebApp;

    // Кнопка из HTML
    const button = document.getElementById("mainBtn");

    if (!button) {
        console.error("❌ Кнопка mainBtn не найдена");
        return;
    }

    // ===============================
    // ТЕКСТ КНОПКИ
    // ===============================

    const BUTTON_TEXT = "Нажми меня"; // позже можно брать из config

    button.innerText = BUTTON_TEXT;

    // ===============================
    // ИНИЦИАЛИЗАЦИЯ TELEGRAM
    // ===============================

    if (tg) {
        tg.ready();          // сообщаем Telegram что приложение готово
        tg.expand();         // разворачивает Mini App
        console.log("✅ Telegram WebApp detected");
    } else {
        console.log("⚠️ Открыто вне Telegram (режим браузера)");
    }

    // ===============================
    // НАЖАТИЕ КНОПКИ
    // ===============================

    button.addEventListener("click", () => {

        console.log("🔥 Кнопка нажата");

        const data = {
            action: "button_clicked",
            time: Date.now()
        };

        // если открыто внутри Telegram
        if (tg) {
            tg.sendData(JSON.stringify(data));
            console.log("📤 Данные отправлены боту:", data);
        } else {
            console.log("📤 (test mode)", data);
        }
    });

});