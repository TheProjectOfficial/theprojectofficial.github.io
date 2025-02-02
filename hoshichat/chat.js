// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs_4EmMMcts0XmdIsg2Uj9YLrDBTYHxxA",
  authDomain: "chatapphub-45d33.firebaseapp.com",
  databaseURL: "https://chatapphub-45d33-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatapphub-45d33",
  storageBucket: "chatapphub-45d33.firebasestorage.app",
  messagingSenderId: "428110613186",
  appId: "1:428110613186:web:1afa66c38a8df72e29895b"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database(app);

// Send message to Firebase
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
        
        // Save message to Firebase
        firebase.database().ref("messages").push({
            message: message,
            timestamp: Date.now()
        });

        // Clear input field
        messageInput.value = "";
    }
}

// Listen for new messages from Firebase
firebase.database().ref("messages").on("child_added", (snapshot) => {
    const message = snapshot.val().message;
    const chatBox = document.getElementById("chat-box");
    
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add("received-message");
    
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
});
