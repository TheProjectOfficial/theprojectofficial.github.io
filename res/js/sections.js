function getRandomColor() {
    const colors = ["#aaa", "#8888ff", "#ff88ff", "#88ff88", "#ff8888", "#ffff88"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomizeColors() {
    let color = getRandomColor(); // Generate one color for all elements
    document.getElementById("box").style.borderColor = color;
    document.getElementById("title").style.color = color;
    document.getElementById("description").style.color = color;
}

randomizeColors(); // Call function on page load