/*---Highlights---*/

const player = [
    {
        "id": 1,
        "name": "Hulk",
        "club": "Atlético Mineiro",
        "stats": 19
    },
    {
        "id": 2,
        "name": "Gilberto",
        "club": "Bahia",
        "stats": 15
    },
    {
        "id": 3,
        "name": "Michael",
        "club": "Flamengo",
        "stats": 14
    },
    {
        "id": 4,
        "name": "Ademir",
        "club": "América Mineiro",
        "stats": 13
    },
    {
        "id": 5,
        "name": "Artur",
        "club": "RB Bragantino",
        "stats": 13
    },
    {
        "id": 6,
        "name": "Gabriel",
        "club": "Flamengo",
        "stats": 12
    },
    {
        "id": 7,
        "name": "Ytalo",
        "club": "RB Bragantino",
        "stats": 12
    },
    {
        "id": 8,
        "name": "Yuri Alberto",
        "club": "Internacional",
        "stats": 12
    },
    {
        "id": 9,
        "name": "Edenilson",
        "club": "Internacional",
        "stats": 11
    },
    {
        "id": 10,
        "name": "Bruno Henrique",
        "club": "Flamengo",
        "stats": 11
    },
    
]

function highlightsTemplate(player) {
    return`
    <div class="top-score-item">
        <div class="photo">
            <span class="material-icons">
                person
            </span>
        </div>
        <div class="player">
            <div class="player-name">
                <p>${player.name}</p>
            </div>
            <div class="player-club"><small>${player.club}</small></div>
        </div>
        <div class="stats">
            <p>${player.stats}</p>
        </div>
    </div>
    `;
}

document.querySelector(".top-score").innerHTML = `
${player.map(highlightsTemplate).join("")}`;