document.addEventListener('DOMContentLoaded', function () {

    var botones = document.querySelectorAll('.categorias button');
    var logos = document.querySelectorAll('.logo-item');

    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function () {

            for (var j = 0; j < botones.length; j++) {
                botones[j].classList.remove('active');
            }

            this.classList.add('active');

            var categoria = this.getAttribute('data-cat').toLowerCase();

            for (var k = 0; k < logos.length; k++) {
                var logo = logos[k];

                if (categoria === "todos") {
                    logo.style.display = "";
                } else {
                    if (logo.classList.contains(categoria)) {
                        logo.style.display = "";
                    } else {
                        logo.style.display = "none";
                    }
                }
            }

        });
    }

});





