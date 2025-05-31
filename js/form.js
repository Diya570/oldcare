document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('admissionForm');
    const steps = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('.next-btn');
    const backButtons = document.querySelectorAll('.back-btn');
    const submitButton = document.querySelector('.submit-btn');
    const progressBar = document.querySelector('.progress');

    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === stepIndex);
        });
        updateProgressBar();
        if (stepIndex === steps.length - 1) {
            populatePreview();
        }
    }

    function updateProgressBar() {
        const progress = ((currentStep + 1) / steps.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function validateStep(stepIndex) {
        const currentStepElement = steps[stepIndex];
        const inputs = currentStepElement.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    function validateField(field) {
        const errorElement = document.getElementById(`${field.id}Error`);
        let isValid = true;
        errorElement.textContent = '';

        if (field.required && !field.value.trim()) {
            errorElement.textContent = 'This field is required.';
            isValid = false;
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
            errorElement.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else if ((field.id === 'phoneNumber' || field.id === 'emergencyContactNumber') && !isValidPhoneNumber(field.value)) {
            errorElement.textContent = 'Please enter a valid phone number.';
            isValid = false;
        } else if (field.id === 'dateOfBirth' && !isValidDate(field.value)) {
            errorElement.textContent = 'Please enter a valid date.';
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhoneNumber(phone) {
        return /^\d{10}$/.test(phone.replace(/\D/g, ''));
    }

    function isValidDate(date) {
        const inputDate = new Date(date);
        const currentDate = new Date();
    
        // Set the time portion to 0 for both dates
        inputDate.setHours(0, 0, 0, 0);
        currentDate.setHours(0, 0, 0, 0);
    
        // Check if input date is valid and if it's in the past
        return !isNaN(inputDate.getTime()) && inputDate < currentDate;
    }

    function populatePreview() {
        document.getElementById("previewFullName").textContent = document.getElementById("fullName").value;
        document.getElementById("previewDateOfBirth").textContent = document.getElementById("dateOfBirth").value;
        document.getElementById("previewEmail").textContent = document.getElementById("email").value;
        document.getElementById("previewPhoneNumber").textContent = document.getElementById("phoneNumber").value;
        document.getElementById("previewAllergies").textContent = document.getElementById("allergies").value;
        // Add similar lines for all other fields to display in the preview
        document.getElementById("previewHealthConditions").textContent = document.getElementById("healthConditions").value;
        document.getElementById("previewLevelOfIndependence").textContent = document.getElementById("levelOfIndependence").value;
        document.getElementById("previewDietaryRestrictions").textContent = document.getElementById("dietaryRestrictions").value;
        document.getElementById("previewMobilityAssistance").textContent = document.getElementById("mobilityAssistance").value;
        document.getElementById("previewFinancialResponsibleParty").textContent = document.getElementById("financialResponsibleParty").value;
        document.getElementById("previewPowerOfAttorney").textContent = document.getElementById("powerOfAttorney").value;
        document.getElementById("previewInsuranceInformation").textContent = document.getElementById("insuranceInformation").value;
        document.getElementById("previewAdvanceDirectives").textContent = document.getElementById("advanceDirectives").value;
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep--;
            showStep(currentStep);
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateStep(currentStep)) {
            // Here you would typically send the form data to your server
            alert('Form submitted successfully!');
            // Reset form and go back to first step
            form.reset();
            currentStep = 0;
            showStep(currentStep);
        }
    });

    // Initialize the form
    showStep(currentStep);
});
