function printBill() {
    hidePrintButton();
    window.print();
    showPrintButton();
}

// Function to show the button
function showPrintButton() {
    document.getElementById("printButton").style.display = "block";
}

// Function to hide the button
function hidePrintButton() {
    document.getElementById("printButton").style.display = "none";
}