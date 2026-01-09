
// Answer1

function showAlert() {
    alert("Link was clicked!");
}

function showMessage() {
    alert("Thanks for purchasing a mobile from us!");
}

function deleteRow(button) {
    button.parentNode.parentNode.remove();
}

function changeImage(img) {
    img.src = "https://via.placeholder.com/200?text=Image+2";
}

function resetImage(img) {
    img.src = "https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FSAMSUNG_GALAXY_S26_ULTRA_5_G_9232e2ad7e.png&w=256&q=75";
}