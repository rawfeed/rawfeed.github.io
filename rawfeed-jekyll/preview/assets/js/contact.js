document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    const submitButton = document.getElementById("submitButton");
    const endpoint = ""; // URL Google Apps Script

    // get modal
    function showModal(title, message, type = 'success') {
      const modalEl = document.getElementById('contactMessageModal');
      if (!modalEl) return;
      const modalTitle = modalEl.querySelector('.modal-title');
      const modalBody = modalEl.querySelector('.modal-body');
      const modalContent = modalEl.querySelector('.modal-content');

      modalContent.classList.remove('contact-message-success', 'contact-message-error', 'contact-message-warning');


      // Apply the color according to the type
      if (type === 'success') {
        modalContent.classList.add('contact-message-success');
      } else if (type === 'error') {
        modalContent.classList.add('contact-message-error');
      } else if (type === 'warning') {
        modalContent.classList.add('contact-message-warning');
      }

      modalTitle.innerHTML = title;
      modalBody.innerHTML = message;

      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (typeof grecaptcha === 'undefined' || !grecaptcha.getResponse()) {
        showModal(
          "Warning",
          `Please tick the 'I'm not a robot' box.`,
          "warning"
        );
        return;
      }

      const textarea = document.getElementById('textMessage');
      if (!textarea) return;
      const text = textarea.value.trim();
      if (text.length < "50" ) {
        showModal(
          "Warning",
          "the message must have at least 50 characters.",
          "warning"
        );
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = "sending...wait";

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.result === 'success') {
          form.reset();
          grecaptcha.reset();
          showModal(
            "Message sent",
            "your message has been sent successfully!",
            "success"
          );
        } else {
          showModal(
            "Error",
            "something went wrong while sending your message.",
            "error"
          );
          throw new Error(result.message || "something went wrong while sending your message.");
        }

      } catch (error) {
        console.error("Error sending:", error);
        if (error.message.includes("reCAPTCHA")) {
            showModal(
              "Error",
              "Verification failed. Please reload the page and try again.",
              "error"
            );
        } else {
            showModal(
              "Error",
              "An error occurred while sending the message. Please try again.",
              "error"
            );
        }
        grecaptcha.reset();

      } finally {
        submitButton.disabled = false;
        submitButton.textContent = "send!";
      }
    });
  }
});
