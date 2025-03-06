function toggleCheckbox() {
    const checkbox = document.getElementById("checkbox");
    const read = document.getElementById("read");
    const continueBtn = document.getElementById("continue");

    if (checkbox.checked) {
        read.classList.add("checked");  // Add checked class to trigger animation
    } else {
        read.classList.remove("checked");  // Remove checked class to reset animation
    }
}