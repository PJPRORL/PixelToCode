import * as Validators from './validators.js';

// --- Theme Toggle Logic ---
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
htmlEl.classList.add(savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';


themeToggle.addEventListener('click', () => {
    if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        htmlEl.classList.add('light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        htmlEl.classList.remove('light');
        htmlEl.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// --- Exercise Validation Logic ---
document.querySelectorAll('button[data-validate]').forEach(button => {
    button.addEventListener('click', () => {
        const exerciseId = button.dataset.validate;
        const exerciseSection = document.getElementById(exerciseId);
        const textarea = exerciseSection.querySelector('textarea');
        const resultDiv = exerciseSection.querySelector('.result');

        const validatorFunctionName = `validate_${exerciseId.replace(/-/g, '_')}`;
        
        const validator = Validators[validatorFunctionName];

        if (validator) {
            const result = validator(textarea.value);
            resultDiv.innerHTML = result.message;
            if (result.ok) {
                resultDiv.className = 'result success';
            } else {
                resultDiv.className = 'result error';
            }
        } else {
            resultDiv.textContent = `Validator '${validatorFunctionName}' niet gevonden.`;
            resultDiv.className = 'result error';
        }
    });
});
