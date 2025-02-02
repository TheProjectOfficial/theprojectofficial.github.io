function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();
    
    if (message !== "") {
        const chatBox = document.getElementById("chat-box");
        
        // Create a new message div
        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        messageDiv.classList.add("user-message");
        
        // Add message to chat box
        chatBox.appendChild(messageDiv);
        
        // Scroll chat box to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Clear input field
        messageInput.value = "";
    }
}
