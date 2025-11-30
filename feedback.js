function triggerAnimation() {
    const feedback_input = document.getElementById(`feedback_input`)
    feedback_input.style.animationName = `trash_animation`
    feedback_input.style.animationDuration = `6s`
    feedback_input.style.animationTimingFunction = `linear`
    feedback_input.disabled = true
    feedback_input.addEventListener('animationend', function handler() {
        feedback_input.style.animation = ``
        feedback_input.value = ``
        feedback_input.disabled = false
        feedback_input.removeEventListener('animationend', handler)
    })
}