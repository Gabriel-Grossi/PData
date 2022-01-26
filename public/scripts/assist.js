const assists = [
    {
        "id": 1,
        "name": "Gustavo Scarpa",
        "club": "Palmeiras",
        "stats": 13
    },
    {
        "id": 2,
        "name": "Vitinho",
        "club": "Flamengo",
        "stats": 8
    },
    {
        "id": 3,
        "name": "Artur",
        "club": "Red Bull Bragantino",
        "stats": 8
    },
    {
        "id": 4,
        "name": "Lucas Crispim",
        "club": "Fortaleza",
        "stats": 7
    },
    {
        "id": 5,
        "name": "Edenilson",
        "club": "Internacional",
        "stats": 7
    },
    {
        "id": 6,
        "name": "Hulk",
        "club": "Atlético Mineiro",
        "stats": 7
    },
    {
        "id": 7,
        "name": "Rafinha",
        "club": "Grêmio",
        "stats": 7
    },
    {
        "id": 8,
        "name": "Terans",
        "club": "Athletico Paranaense",
        "stats": 7
    },
    {
        "id": 9,
        "name": "Arrascaeta",
        "club": "Flamengo",
        "stats": 6
    },
    {
        "id": 10,
        "name": "Ferreirinha",
        "club": "Grêmio",
        "stats": 6
    },
    
]

function highlightsTemplate(assists) {
    return`
    <div class="top-score-item">
        <div class="photo">
            <span class="material-icons">
                person
            </span>
        </div>
        <div class="player">
            <div class="player-name">
                <p>${assists.name}</p>
            </div>
            <div class="player-club"><small>${assists.club}</small></div>
        </div>
        <div class="stats">
            <p>${assists.stats}</p>
        </div>
    </div>
    `;
}

document.querySelector(".top-assist").innerHTML = `
${assists.map(highlightsTemplate).join("")}`;