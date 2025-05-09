document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("workshops-container");
    const workshops = [
        { title: "Actuación", img: "actuacion.png", description: "Taller de actuación centrado en la libertad creativa y el autoconocimiento a través de juegos teatrales, explorando la técnica actoral, el vínculo con el entorno y con el espectador. ", phone: "54926645601195492664560119", infoUrl: "https://www.instagram.com/p/DGRdwTQxJQi/" },
        { title: "Canto y Autoconfianza", img: "canto-autoconfianza.png", description: "En este proyecto, el objetivo principal es crear un ambiente de confianza y libertad donde los alumnos puedan explorar, fortalecer y expandir su potencial vocal sin sentirse limitados.", phone: "5493583403712", infoUrl: "https://www.instagram.com/p/DGeTgGwRpao/" },
        { title: "Canto Grupal", img: "canto-grupal.png", description: "Este taller busca acercar la experiencia del canto a personas que quieran iniciarse en esta actividad de manera grupal, explorando la voz desde de manera lúdica y creativa. ", phone: "5493512106403", infoUrl: "https://www.instagram.com/p/DGUETEAxXP8/" },
        { title: "Danza y Composición", img: "danza-composición.png", description: "Un espacio de entrenamiento, juego e investigación con el cuerpo y su vasto mundo de posibilidades físicas, ritmicas, plásticas y compositivas.", phone: "5493512448291", infoUrl: "https://www.instagram.com/p/DHZgpybxJ3I/" },
        { title: "Guitarra", img: "guitarra.png", description: "Clases de guitarra para principiantes y avanzadxs. Explorá acordes, rasgueos y composición con una enseñanza personalizada centrada en tus gustos musicales y tu propio ritmo de aprendizaje.", phone: "5493585131673", infoUrl: "https://www.instagram.com/p/DH4dzsUR14N/" },
        { title: "Formación Actoral", img: "kike.png", description: "Kike Giungi brinda una propuesta de trabajo creativo en un ambiente seguro y comprometido, integrando herramientas actorales con prácticas escénicas y material teórico. ", phone: "5493516147287", infoUrl: "https://www.instagram.com/p/DG4BfKvxQfE/" },
        { title: "Impro Teatral", img: "impro.png", description: "Este taller explorará cómo el silencio, la pausa y el espacio en blanco pueden ser las más poderosas herramientas de creación escénica. ", phone: "5493517391987", infoUrl: "https://www.instagram.com/p/DGor2Awxkk7/" },
        { title: "Piano Creativo", img: "piano.png", description: "Abarcaremos diferentes formas de interpretar canciones ajenas y propias, experimentaremos diferentes sensaciones y expresiones de música. ", phone: "5493543314343", infoUrl: "https://www.instagram.com/p/DGO7d8wxuQi/" },
        { title: "Violín", img: "violín.png", description: "Clases de violín personalizadas para todos los niveles. Aprendé técnica del arco, escalas y repertorio a elección con un enfoque práctico y pedagógico inspirado en Freire.", phone: "5493585131673", infoUrl: "https://www.instagram.com/p/DH4dzsUR14N/" },
    ]

    workshops.forEach(workshopData => {
        const { title, img, description, phone, infoUrl } = workshopData;
        const wppMessage = encodeURI(`Hola! Me interesa el taller de ${title} que dan en Tercer Espacio`);

        container.innerHTML += `
            <div class="workshop-card">
                <img
                src="../assets/workshops/${img}"
                class="workshop-img"
                alt="Imagen para el taller de ${title}"
                />
                <h2>${title}</h2>
                <p>
                ${description}
                </p>
                <div class="workshop-buttons">
                <a
                    href="${infoUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="${infoUrl ? "" : "visibility: hidden"}"
                    >Más info</a
                >
                <a
                    title="Chatear con la persona encargada por WhatsApp"
                    href="https://wa.me/${phone}?text=${wppMessage}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="wpp-btn"
                    >WhatsApp</a
                >
                </div>
            </div>
            `;
    })
});