const tg = window.Telegram.WebApp;
tg.expand();

let phone = null;

document.getElementById("register").onclick = () => {

  alert("После этого отправь номер боту");

  document.getElementById("form").style.display = "block";
};

document.getElementById("done").onclick = async () => {

  const password = document.getElementById("password").value;

  const data = {
    telegram_id: tg.initDataUnsafe.user.id,
    phone: "TEMP_PHONE_FROM_BOT",
    password
  };

  const res = await fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const json = await res.json();

  if (json.success) {
    tg.showAlert("Аккаунт создан ✅");
  } else {
    tg.showAlert("Ошибка");
  }
};