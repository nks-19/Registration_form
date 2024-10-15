// Form Validation Script
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Reset all error messages
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.style.display = 'none');

    let valid = true;

    // Full Name Validation
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    // Email Validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    // Password Validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    }

    // Date of Birth Validation
    const dob = document.getElementById('dob').value;
    if (dob === '') {
        document.getElementById('dobError').style.display = 'block';
        valid = false;
    }

    // Gender Validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').style.display = 'block';
        valid = false;
    }

    // Terms and Conditions Validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').style.display = 'block';
        valid = false;
    }

    if (valid) {
        // Handle form submission (e.g., send data to the server)
        alert('Registration Successful!');
        // Reset form
        document.getElementById('userForm').reset();
    }
});

// Optional: Real-time Validation (Enhancement)
const inputs = document.querySelectorAll('#userForm input');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        const errorElement = document.getElementById(`${input.id}Error`);
        if (errorElement) {
            if (input.type === 'checkbox' && !input.checked) {
                errorElement.style.display = 'block';
            } else if (input.type !== 'radio') {
                if (input.value.trim() !== '') {
                    errorElement.style.display = 'none';
                }
            }
        }
    });
});

// Ensure Terms and Conditions label toggles the checkbox
document.querySelector('label[for="terms"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('terms').click();
});
