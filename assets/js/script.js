// EmailJS Configuration
(function() {
    emailjs.init({
        publicKey: "i6OQPGHNlmtVzq8BX",
    });
})();

// Send Mail Function
function sendMail(event) {
    event.preventDefault();

    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');
    const form = document.getElementById('contact-form');

    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<svg class="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg> Sending...';

    // Get form values
    const templateParams = {
        from_name: document.getElementById('from_name').value,
        from_email: document.getElementById('from_email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
    };

    // Send email via EmailJS
    emailjs.send('service_lifewithindraa', 'template_contact', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            formStatus.className = 'text-center mt-4 p-4 rounded-lg bg-success/10 border border-success/30 text-success';
            formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
            formStatus.classList.remove('hidden');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i data-lucide="send" class="w-5 h-5"></i><span data-i18n="contact_send">Send Message</span>';
            lucide.createIcons();
            setTimeout(() => formStatus.classList.add('hidden'), 5000);
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            formStatus.className = 'text-center mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500';
            formStatus.textContent = 'Failed to send message. Please try again or contact via WhatsApp.';
            formStatus.classList.remove('hidden');
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i data-lucide="send" class="w-5 h-5"></i><span data-i18n="contact_send">Send Message</span>';
            lucide.createIcons();
            setTimeout(() => formStatus.classList.add('hidden'), 5000);
        });

    return false;
}
