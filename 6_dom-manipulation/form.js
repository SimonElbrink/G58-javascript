// JavaScript form validation and submission

document.getElementById('reg-btn').addEventListener('click', validateAndSubmit);
document.getElementById('reset-btn').addEventListener('click', resetForm);

function validateAndSubmit() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();


    // Simple validation
    if (!firstName || !lastName || !isValidEmail(email)) {
        // Display validation error messages
        if (!firstName) {
            document.getElementById('firstName').classList.add('is-invalid');
        } else {
            // Clear existing validation classes
            document.getElementById('firstName').classList.remove('is-invalid');
        }

        if (!lastName) {
            document.getElementById('lastName').classList.add('is-invalid');
        } else {
            document.getElementById('lastName').classList.remove('is-invalid');
        }

        if (!isValidEmail(email)) {
            document.getElementById('email').classList.add('is-invalid');
        } else {
            document.getElementById('email').classList.remove('is-invalid');
        }

        // Prevent form submission if validation fails
        return;
    }

    // Form is valid, you can submit the form or perform other actions here
    console.log('Form submitted successfully!');
    showTable();
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


// JavaScript form reset
function resetForm() {
    document.getElementById('registrationForm').reset();
    // Clear existing validation classes
    document.getElementById('firstName').classList.remove('is-invalid');
    document.getElementById('lastName').classList.remove('is-invalid');
    document.getElementById('email').classList.remove('is-invalid');
}
