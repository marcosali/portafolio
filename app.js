let menuVisible = false;

        function mostrarOcultarMenu() {
            var nav = document.getElementById("nav");
            
            if (menuVisible) {
                nav.classList.remove("responsive");
            } else {
                nav.classList.add("responsive");
            }
            
            menuVisible = !menuVisible;
        }

        function seleccionar() {
            var nav = document.getElementById("nav");
            nav.classList.remove("responsive");
            menuVisible = false;
        }

        function efectoHabilidades() {
            var skills = document.getElementById("skills");
            var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;

            if (distanciaSkills >= 300) {
                var habilidades = document.getElementsByClassName("progreso");
                habilidades[0].classList.add("javascript");
                habilidades[1].classList.add("htmlcss");
                habilidades[2].classList.add("photoshop");
                habilidades[3].classList.add("python");
                habilidades[4].classList.add("comunicacion");
                habilidades[5].classList.add("trabajo");
                habilidades[6].classList.add("creatividad");
                habilidades[7].classList.add("dedicacion");
            }
        }

        window.addEventListener('scroll', function () {
            efectoHabilidades();
        });

