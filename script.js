// --- MENU MOBILE ---
const button = document.getElementById("hamburger");
const menu = document.getElementById("menu");

button.addEventListener("click", () => menu.classList.toggle("ativa"));

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("ativa"));
});

// --- FORMULÁRIO COM FETCH ---
const formContato = document.getElementById("form-contato");
const btnSubmit = document.getElementById("btn-submit");

formContato.addEventListener("submit", async function (event) {
  event.preventDefault();
  btnSubmit.innerText = "Enviando...";
  btnSubmit.disabled = true;

  try {
    const response = await fetch(this.action, {
      method: this.method,
      body: new FormData(this),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("Obrigado, Anderson recebeu sua mensagem!");
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
  const posicaoAtual = window.scrollY || document.documentElement.scrollTop;
  backToTop.classList.toggle("show", posicaoAtual > 300);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- ANIMAÇÃO DE ENTRADA (NOVO) ---
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visivel");
    }
  });
}, observerOptions);

// Seleciona o que você quer animar
document.querySelectorAll("section, .projeto-card, .habilidades-card").forEach(el => {
  el.classList.add("animar-entrada");
  observer.observe(el);
});