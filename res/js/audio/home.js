// Sound files
const hoverSound = new Audio("https://new.systemspace.network/res/audio/sfx/hover.ogg"); // Replace with actual path
const leaveSound = new Audio("https://new.systemspace.network/res/audio/sfx/mouseleave.ogg"); // Replace with actual path
const pressSound = new Audio("https://new.systemspace.network/res/audio/sfx/click.ogg");
const inputFocusSound = new Audio("https://new.systemspace.network/res/audio/sfx/select.ogg"); // New audio for input focus
const typingSound = new Audio("https://new.systemspace.network/res/audio/sfx/type.ogg"); // New audio for typing
const inputBlurSound = new Audio("https://new.systemspace.network/res/audio/sfx/bighover.ogg"); // New audio for losing focus

// Audio files for alternating playback
const audio1 = new Audio(""); // Replace with actual path for audio 1
const audio2 = new Audio(""); // Replace with actual path for audio 2

//Ambience
const Ambience = new Audio("");

Ambience.volume = 0.5;
Ambience.loop = true;

audio1.volume = 0.3;
audio2.volume = 0.3;

// Flag to track if audio has been played
let audio1Played = false;
let audio2Played = false;

// Function to play the first audio and set up the sequence
function playAudio1() {
  audio1.play().catch((e) => console.warn("Audio play prevented:", e)); // Catch autoplay restrictions
  audio1Played = true; // Set flag to true when audio1 starts playing
  // Set event listener to play audio2 when audio1 finishes
  audio1.onended = playAudio2;
}

// Function to play the second audio and set up the sequence
function playAudio2() {
  audio2.play().catch((e) => console.warn("Audio play prevented:", e)); // Catch autoplay restrictions
  audio2Played = true; // Set flag to true when audio2 starts playing
  // Set event listener to play audio1 when audio2 finishes
  audio2.onended = playAudio1;
}

// Function to start the audio loop
function startAudioLoop() {
  if (!audio1Played) {
    playAudio1(); // Start with audio1 if it hasn't been played yet
    Ambience.play();
  }
}

// Function to play hover-related sound (for buttons, links, etc.)
function playSound(audio) {
  audio.currentTime = 0; // Restart audio
  audio.play().catch((e) => console.warn("Audio play prevented:", e)); // Catch autoplay restrictions
}

// List of important elements (interactive elements)
const interactiveElements = ["button", "a", "input", "select", "textarea", "button-big", "checkbox-container"];

// Function to add event listeners to all interactive elements for hover sounds
function addHoverSounds() {
  interactiveElements.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      // Trigger hover sound on mouse enter (or any other interaction)
      element.addEventListener("mouseenter", () => playSound(hoverSound));
      element.addEventListener("mouseleave", () => playSound(leaveSound));
      element.addEventListener("mousedown", () => playSound(pressSound)); // Play sound when pressed

      // Special case for input elements, play focus sound when input is focused
      if (element.tagName.toLowerCase() === 'input') {
        element.addEventListener("focus", () => playSound(inputFocusSound)); // Play sound when input is focused
        element.addEventListener("input", () => playSound(typingSound)); // Play sound when typing
        element.addEventListener("blur", () => playSound(inputBlurSound)); // Play sound when input loses focus
      }
    });
  });
}

// Run function when DOM is loaded
document.addEventListener("DOMContentLoaded", addHoverSounds);

// Start the audio loop when the user interacts (e.g., click anywhere on the page)
document.addEventListener("click", startAudioLoop);
