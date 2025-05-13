const completeCastings = [
    {
        title: "Niña - Corto Universitario",
        gender: "female",
        fisic: "Aparentar 11 años, Cabello castaño lacio, Ojos marrones",
        description: "Viáticos y Remuneración",
        phone: "5493541695958",
        requiredInfo: "fotos de cuerpo completo y de rostro",
        infoUrl: ""
    },
    {
        title: "Rol Masc. - Corto Universitario",
        gender: "male",
        fisic: "Aparentar 30 años, Rubio/Castaño claro, Ojos claros",
        description: "Viáticos y Remuneración",
        phone: "5493541695958",
        requiredInfo: "fotos de cuerpo completo y de rostro",
        infoUrl: ""
    },
    {
        title: "Rol Fem. - Corto Universitario",
        gender: "female",
        fisic: "Aparentar 31 años, cabello castaño lacio, Ojos marron",
        description: "Viáticos y Remuneración",
        phone: "5493541695958",
        requiredInfo: "fotos de cuerpo completo y de rostro",
        infoUrl: ""
    },
    {
        title: "Rol Masc. - Corto Universitario",
        gender: "male",
        fisic: "Aparentar 25-30 años, tez clara, cabello largo castaño lacio, con barba",
        description: "Remunerado",
        phone: "5493512064750",
        requiredInfo: "fotos de cuerpo completo y de rostro",
        infoUrl: ""
    },
    {
        title: "Rol Masc. - Corto Universitario",
        gender: "male",
        fisic: "Aparentar 21-25 años, tez clara, cabello corto castaño claro, sin barba",
        description: "Remunerado",
        phone: "5493512064750",
        requiredInfo: "fotos de cuerpo completo y de rostro",
        infoUrl: ""
    },
    {
        title: "Rol Fem. - Corto Universitario",
        gender: "female",
        fisic: "Aparentar 21-25 años, tez clara, cabello corto castaño oscuro",
        description: "Remunerado",
        phone: "5493512064750",
        requiredInfo: "fotos de cuerpo completo y de rostro",
        infoUrl: ""
    },
    {
        title: "Rol Fem. - Corto Universitario",
        gender: "female",
        fisic: "Aparentar 21-25 años, tez clara, cabello largo mechas rubias",
        description: "Remunerado",
        phone: "5493512064750",
        requiredInfo: "fotos de cuerpo completo y de rostro",
        infoUrl: ""
    },
    {
        title: "Rol Fem. - Corto Universitario",
        gender: "female",
        fisic: "Aparentar 21-25 años, tez clara, cabello largo castaño oscuro",
        description: "Remunerado",
        phone: "5493512064750",
        requiredInfo: "fotos de cuerpo completo y de rostro",
        infoUrl: ""
    },
];

const refreshCastings = (castings) => {
    const container = document.getElementById("castings-container");
    container.innerHTML = "";

    if (!castings.length) castings = [
        {
            title: "No hay castings compatibles",
            gender: "",
            fisic: "",
            description: "Ningún casting coincide con la búsqueda",
            phone: "",
            requiredInfo: "",
            infoUrl: ""
        }
    ]

    castings.forEach(castingData => {
        const { title, fisic, description, phone, infoUrl, requiredInfo } = castingData;
        const wppMessage = encodeURIComponent(`Hola, ví en la página de Tercer Espacio que tienen un casting abierto para ${title}! En breve te envío ${requiredInfo}`);

        container.innerHTML += `
            <div class="workshop-card">
                <h2>${title}</h2>
                <p>
                ${fisic}
                </p>
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
                    style="${phone ? "" : "visibility: hidden"}"
                    >WhatsApp</a
                >
                </div>
            </div>
            `;
    });
}

const filterByGender = () => {
    const selectedGender = document.querySelector('input[name="role-filter"]:checked').value;
    let filteredData = [];

    if (selectedGender === "any") {
        filteredData = completeCastings;
    }
    else {
        filteredData = completeCastings.filter(casting => casting.gender === selectedGender || casting.gender === "any");
    }
    refreshCastings(filteredData);
}

document.addEventListener("DOMContentLoaded",
    () => {
        document.getElementById("defaultGenderOption").checked = true;
        refreshCastings(completeCastings);

        const radios = document.querySelectorAll('input[name="role-filter"]');
        radios.forEach(radio => {
            radio.addEventListener('change', filterByGender);
        });
    });