// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Add event listener to the quiz form
    const form = document.getElementById("quizForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the default form submission
            var result = document.getElementById("result");
            // Get the selected radio button
            const selectedOption = document.querySelector('input[name="quiz_option"]:checked');
            if (selectedOption) {
                
                var resultContainer = document.getElementById("resultContainer");
                var description = document.getElementById("description");
                // Compare selected answer with the correct answer
                if (selectedOption.value === question.correctAnswer) {
                    result.innerText = "Correct!";
                    description.innerHTML = question.description;
                    result.className ="alert-success alert text-success";
                } else {
                    result.innerText = "Incorrect. The correct answer is: " + question.correctAnswer;
                    description.innerHTML = question.description;
                    result.className ="alert alert-danger w-auto text-danger";
                }
            } else {
                result.innerText = "Please select an option!";
                result.className = "alert alert-danger w-auto text-danger";
            }
        });
    }
});
