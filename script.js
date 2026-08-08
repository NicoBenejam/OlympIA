document.getElementById("contact-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = this;
    const formMsg = document.getElementById("form-msg");

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            form.reset();

            document.getElementById("nombre").value = "";
            document.getElementById("email").value = "";
            document.getElementById("mensaje").value = "";

            formMsg.textContent = "✅ Gracias por tu mensaje. Te contactaremos pronto.";
        } else {
            formMsg.textContent = "❌ Ha ocurrido un error. Inténtalo de nuevo.";
        }

    } catch (error) {
        formMsg.textContent = "❌ Ha ocurrido un error. Inténtalo de nuevo.";
    }
});