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

  // 1. CAPTURA E VALIDAÇÃO DE DADOS (Agora dentro do submit)
  const nome = document.getElementById("nome-contato").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome.length < 3 || mensagem.length < 10) {
    alert("Por favor, preencha seu nome corretamente (min. 3 letras) e uma mensagem com pelo menos 10 caracteres.");
    return; // Para a execução se os dados forem inválidos
  }

  // 2. PREPARAÇÃO PARA ENVIO
  btnSubmit.innerText = "Enviando...";
  btnSubmit.disabled = true;

  const formData = new FormData(this);

  try {
    // 3. ENVIO REAL PARA O FORMSPREE
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
    // 4. RESTAURA O BOTÃO
    btnSubmit.innerText = "Enviar Mensagem";
    btnSubmit.disabled = false;
  }
});

// --- BOTÃO VOLTAR AO TOPO ---
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  const posicaoAtual = window.scrollY || document.documentElement.scrollTop;

  if (posicaoAtual > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});