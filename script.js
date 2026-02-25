// 1. Menu Mobile
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("ativa");
    // Opcional: muda o ícone de ☰ para ✕
    hamburger.innerText = menu.classList.contains("ativa") ? "✕" : "☰";
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativa");
        hamburger.innerText = "☰";
    });
});

// 2. Botão Voltar ao Topo
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 3. Intersection Observer (Animação de Entrada)
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visivel");
        }
    });
}, observerOptions);

document.querySelectorAll(".animar-entrada").forEach(el => observer.observe(el));

// 4. Formulário Fetch (Formspree)
const form = document.getElementById("form-contato");
const btnSubmit = document.getElementById("btn-submit");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    btnSubmit.disabled = true;
    btnSubmit.innerText = "Enviando...";

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("Mensagem enviada com sucesso! Anderson responderá em breve.");
            form.reset();
        } else {
            alert("Ocorreu um erro ao enviar. Tente novamente.");
        }
    } catch (error) {
        alert("Erro de conexão. Verifique sua internet.");
    } finally {
        btnSubmit.disabled = false;
        btnSubmit.innerText = "Enviar Mensagem";
    }
});