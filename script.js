var swiper = new Swiper(".mySwiper", {
    loop: true, // Mantiene el carrusel infinito
    autoplay: {
        delay: 3000, // Cambia cada 3 segundos
        disableOnInteraction: true // Se detiene si el usuario interactúa
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoHeight: true, // Ajusta la altura según cada imagen
    slidesPerView: 1, // Muestra solo una imagen a la vez
    centeredSlides: false, // Evita que Swiper sobreponga imágenes
    spaceBetween: 0, // Sin espacio extra entre imágenes
    loopAdditionalSlides: 2, // Se asegura de incluir todas las imágenes en el loop
    observer: true, // Detecta cambios en el DOM y actualiza el carrusel
    observeParents: true, // Asegura que los cambios en los elementos padres también sean detectados
})

document.addEventListener("DOMContentLoaded", function () {
    const languageButton = document.getElementById("languageButton");
    const languageMenu = document.querySelector(".language-menu");
    const currentFlag = document.getElementById("currentFlag");
    const currentLang = document.getElementById("currentLang");
    
    // Mostrar/ocultar el menú al hacer clic en el botón
    languageButton.addEventListener("click", function () {
        languageMenu.style.display = languageMenu.style.display === "block" ? "none" : "block";
    });

    // Cambiar idioma al seleccionar una opción
    document.querySelectorAll(".language-menu li").forEach(item => {
        item.addEventListener("click", function () {
            const selectedLang = this.getAttribute("data-lang");

            // Actualizar la UI del botón
            currentFlag.src = `flags/${selectedLang}.png`;
            currentLang.textContent = selectedLang.toUpperCase();

            // Aplicar el idioma seleccionado
            changeLanguage(selectedLang);

            // Ocultar el menú después de la selección
            languageMenu.style.display = "none";
        });
    });

    // Detectar clics fuera del menú para cerrarlo
    document.addEventListener("click", function (event) {
        if (!languageButton.contains(event.target) && !languageMenu.contains(event.target)) {
            languageMenu.style.display = "none";
        }
    });

    // Aplicar idioma guardado al cargar la página
    detectLanguage();
});

// Traducciones
const translations = {
    es: {
        title: "Mi Portafolio Profesional",
        home: "Inicio",
        certificates: "Certificaciones",
        projects: "Proyectos",
        about: "Acerca de mí",
        contact: "Contacto",
        greet: "Gracias por visitar mi sitio web!"
    },
    en: {
        title: "My Professional Portfolio",
        home: "Home",
        certificates: "Certificates",
        projects: "Projects",
        about: "About me",
        contact: "Contact",
        greet: "Thank you for visiting my website!"
    }
};

// Función para cambiar el idioma y guardarlo en localStorage
function changeLanguage(language) {
    if (!translations[language]) return; // Evita errores si el idioma no está en la lista

    // Aplicar las traducciones a los elementos de la página
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("home").textContent = translations[language].home;
    document.getElementById("certificates").textContent = translations[language].certificates;
    document.getElementById("projects").textContent = translations[language].projects;
    document.getElementById("about").textContent = translations[language].about;
    document.getElementById("contact").textContent = translations[language].contact;
    document.getElementById("greet").textContent = translations[language].greet;

    // Actualizar el botón con la bandera e idioma seleccionado
    document.getElementById("currentLang").textContent = language.toUpperCase();
    document.getElementById("currentFlag").src = `flags/${language}.png`;

    // Guardar preferencia en localStorage
    localStorage.setItem("selectedLanguage", language);
}

// Detectar idioma del navegador o usar el guardado
function detectLanguage() {
    let userLanguage = localStorage.getItem("selectedLanguage") || navigator.language.slice(0, 2);
    
    if (!translations[userLanguage]) {
        userLanguage = "en"; // Por defecto inglés si el idioma no está soportado
    }

    changeLanguage(userLanguage);
}

// Mostrar u ocultar el menú de idiomas
document.getElementById("languageButton").addEventListener("click", function () {
    document.querySelector(".language-menu").classList.toggle("show");
});

// Selección de idioma
document.querySelectorAll(".language-menu li").forEach(item => {
    item.addEventListener("click", function () {
        const selectedLang = this.getAttribute("data-lang");
        changeLanguage(selectedLang);
        document.querySelector(".language-menu").classList.remove("show"); // Ocultar el menú después de seleccionar
    });
});

// Detectar idioma al cargar la página
window.onload = detectLanguage;

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("show"); // Activa o desactiva el menú
    });});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".swiper-slide img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modal.style.visibility = "visible"; // Hace visible el modal
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        modal.style.visibility = "hidden"; // Oculta completamente el modal
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modal.style.visibility = "hidden"; 
        }
    });
});