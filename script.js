// --- MENU MOBILE ---
const button = document.getElementById("hamburger");
const menu = document.getElementById("menu");

button.addEventListener("click", () => {
  menu.classList.toggle("ativa");
});

const links = document.querySelectorAll(".menu a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativa");
  });
});

// --- FORMULÁRIO COM FETCH ---
const formContato = document.getElementById("form-contato");
const btnSubmit = document.getElementById("btn-submit");

formContato.addEventListener("submit", async function (event) {
  event.preventDefault();
  btnSubmit.innerText = "Enviando...";
  btnSubmit.disabled = true;

  const formData = new FormData(this);

  try {
    const response = await fetch(this.action, {
      method: this.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("Obrigado, Anderson recebeu sua mensagem com sucesso!");
      formContato.reset();
    } else {
      alert("Ops! Houve um problema ao enviar.");
    }
  } catch (error) {
    alert("Erro de conexão.");
  } finally {
    btnSubmit.innerText = "Enviar Mensagem";
    btnSubmit.disabled = false;
  }
});

// --- BOTÃO VOLTAR AO TOPO ---
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  // Pegamos o valor do scroll de forma robusta para todos os navegadores
  const posicaoAtual = window.scrollY || document.documentElement.scrollTop;

  if (posicaoAtual > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});
