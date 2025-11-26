// const feedback_input = document.getElementById(`feedback_input`)
// const feedback_button = document.getElementById(`feedback_button`)

// feedback_button.addEventListener("click", function(event) {
// console.log(feedback_input.value)
// feedback_input.value = ``
// })

// console.log(feedback_input, feedback_button)

function triggerAnimation() {
    const feedback_input = document.getElementById(`feedback_input`)
    feedback_input.classList.add('feedback_animate');

    // Optional: Remove the class to allow re-triggering
    feedback_input.addEventListener('animationend', function handler() {
        feedback_input.value = ``
        feedback_input.classList.remove('feedback_animate');
        feedback_input.removeEventListener('animationend', handler); // Remove listener to prevent multiple calls
    });
}