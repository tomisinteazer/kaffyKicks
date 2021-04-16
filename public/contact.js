window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate the contact number value
        let user_name = document.getElementById("user_name").value.toString();
        let email = document.getElementById("user_email").value.toString();
        let phone = document.getElementById("phone").value.toString();
        let message = document.getElementById("message").value.toString();
        var templateParams = {
            to_name: "Master",
            from_name: user_name,
            user_email: email,
            user_phone: phone,
            message_message: message,


        };

        emailjs.send('tomisinteazer_gmail_com', "template_aCmSgGJh", templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("message sent we will contact you soon");
            }, function (err) {
                alert("failed ");

                console.log('FAILED...', err);
            });
    });
}