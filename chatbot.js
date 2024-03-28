// CSV file path
const CSV_FILE_PATH = 'data.csv';

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    appendMessage('user', userInput);
    document.getElementById('user-input').value = '';

    // Simulate response (you would replace this with GPT-3 or another AI service)
    const botResponse = 'This is a placeholder response from the virtual doctor.';

    setTimeout(() => {
        appendMessage('bot', botResponse);
    }, 500);
}

// Function to append a message to the chat box
function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
}

// Load CSV data (if needed)
// function loadData() {
//     fetch(CSV_FILE_PATH)
//         .then(response => response.text())
//         .then(data => {
//             // Process CSV data
//         });
// }

// Initialize
// loadData();
