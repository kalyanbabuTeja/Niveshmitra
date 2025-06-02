
        let currentStep = 0;
        const steps = document.querySelectorAll('.step');
        const tabs = document.querySelectorAll('.tab-content');
        const backBtn = document.getElementById('backBtn');
        const nextBtn = document.getElementById('nextBtn');

        function updateUI() {
            steps.forEach((step, index) => {
                step.classList.remove('active', 'completed');
                if (index < currentStep) step.classList.add('completed');
                if (index === currentStep) step.classList.add('active');
            });

            tabs.forEach((tab, index) => {
                tab.classList.toggle('active', index === currentStep);
            });

            backBtn.disabled = currentStep === 0;
            nextBtn.textContent = currentStep === steps.length - 1 ? 'Save' : 'Next';
            
        }

        function nextStep() {
            if (currentStep < steps.length - 1) {
                currentStep++;
                updateUI();
            } else {
                alert("Form submitted!");
            }
        }

        function prevStep() {
            if (currentStep > 0) {
                currentStep--;
                updateUI();
            }
        }

        updateUI();

