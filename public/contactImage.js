let image = document.getElementsByTagName("img");
pic = []

for (imag of image) {
    pic.push(imag)
}
pic.forEach(e => {
    e.onclick = () => {
        window.location.replace("contact.html")

    };

});