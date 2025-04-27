document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        fetch('https://formspree.io/f/mnndngrd', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                thankYouMessage.style.display = "block";
                form.reset();
            } else {
                alert('Error sending message. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
