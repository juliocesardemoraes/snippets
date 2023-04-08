setInterval(function () {
  const data = new Date();
  const resultado = document.querySelector(".snippetInAction");
  resultado.innerText = data.toLocaleString("pt-BR", {
    timeStyle: "medium",
  });
}, 1000);
