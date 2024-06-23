let apiUrl = 'http://localhost:3323/startChat'; // Initial API endpoint
let token = null; // Initialize token to null

function sendMessage() {
    let userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;

    appendMessage('user', userInput); // Show user message in chat box
    document.getElementById('user-input').value = ''; // Clear input field

    // Determine API endpoint based on conversation state
    let endpoint = token ? 'ask' : 'startChat';
    apiUrl = `http://localhost:3323/${endpoint}`;

    // Prepare request body
    let requestBody = {};
    if (endpoint === 'startChat') {
        requestBody = {
            link: 'http://localhost:3325' // Example link, replace with actual value
        };
    } else {
        requestBody = {
            token: token,
            message: userInput
        };
    }

    // Send user message to API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(data => {
        if (endpoint === 'startChat') {
            token = data.token; // Store token received from /startChat
        }
        appendMessage('bot', data.message); // Display API response in chat box
    })
    .catch(error => {
        console.error('Error sending message to API:', error);
        appendMessage('bot', 'Sorry, something went wrong.'); // Handle errors
    });
}

function appendMessage(sender, message) {
    let chatBox = document.getElementById('chat-box');
    let messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll chat to bottom
}
