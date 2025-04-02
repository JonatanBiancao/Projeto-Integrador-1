function validateForm() {
    const formResult = document.getElementById('formResult');
    formResult.style.display = 'block'; 

    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked');

    let isValid = true;
    let errorMessages = [];

    // Validations
    if (name.length < 3) {
        errorMessages.push("Nome deve ter pelo menos 3 caracteres");
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessages.push("Email inválido");
        isValid = false;
    }

    if (!contactMethod) {
        errorMessages.push("Selecione um método de contato preferido");
        isValid = false;
    }

    // Display result
    if (isValid) {
        formResult.innerHTML = `
            <div class="success-message">
                <h3>Formulário enviado com sucesso!</h3>
                <p>Obrigado por entrar em contato, ${name}.</p>
                <p>Entraremos em contato via ${contactMethod.value} em breve.</p>
            </div>`;
        formResult.style.backgroundColor = '#d4edda';
        formResult.style.border = '1px solid #c3e6cb';
        formResult.style.color = '#155724';
    } else {
        formResult.innerHTML = `
            <div class="error-message">
                <h3>Por favor, corrija os seguintes erros:</h3>
                <ul>
                    ${errorMessages.map(msg => `<li>${msg}</li>`).join('')}
                </ul>
            </div>`;
        formResult.style.backgroundColor = '#f8d7da';
        formResult.style.border = '1px solid #f5c6cb';
        formResult.style.color = '#721c24';
    }

    return false;
}

document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = '#ff9d00';
            link.style.fontWeight = 'bold';
        }
    });
    
    if (document.getElementById('contactForm')) {
        const formInputs = document.querySelectorAll('input, select, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = '#0a2351';
                this.style.boxShadow = '0 0 5px rgba(10, 35, 81, 0.3)';
            });
            
            input.addEventListener('blur', function() {
                this.style.borderColor = '#ddd';
                this.style.boxShadow = 'none';
            });
        });
    }
});
