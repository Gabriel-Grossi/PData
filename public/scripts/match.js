
const match = [
    {
        "id": 1,
        "homeTeam": "Grêmio Novorizontino",
        "awayTeam": "Palmeiras",
        "homeScore":0,
        "awayScore":2,
        "league": "Paulistão",
        "date": "23/01/2022",
        "time": "16:00"
    },
    {
        "id": 2,
        "homeTeam": "Corinthians",
        "awayTeam": "Ferroviária",
        "homeScore":0,
        "awayScore":0,
        "league": "Paulistão",
        "date": "25/01/2022",
        "time": "21:00"
    },
    {
        "id": 4,
        "homeTeam": "Inter de Limeira",
        "awayTeam": "Santos",
        "homeScore":null,
        "awayScore":null,
        "league": "Paulistão",
        "date": "26/01/2022",
        "time": "19:00"
    },
    {
        "id": 5,
        "homeTeam": "Palmeiras",
        "awayTeam": "Ponte Preta",
        "homeScore":null,
        "awayScore":null,
        "league": "Paulistão",
        "date": "26/01/2022",
        "time": "21:35"
    },
    {
        "id": 8,
        "homeTeam": "Guarani",
        "awayTeam": "São Paulo",
        "homeScore":null || "",
        "awayScore":null || "",
        "league": "Paulistão",
        "date": "27/01/2022",
        "time": "21:30"
    },
    {
        "id": 9,
        "homeTeam": "Santo André",
        "awayTeam": "Corinthians",
        "homeScore":null,
        "awayScore":null,
        "league": "Paulistão",
        "date": "27/01/2022",
        "time": "21:30"
    },
    {
        "id": 9,
        "homeTeam": "São Bernardo",
        "awayTeam": "Palmeiras",
        "homeScore":null,
        "awayScore":null,
        "league": "Paulistão",
        "date": "29/01/2022",
        "time": "21:30"
    },
    {
        "id": 3,
        "homeTeam": "São Paulo",
        "awayTeam": "Ituano",
        "homeScore":null,
        "awayScore":null,
        "league": "Paulistão",
        "date": "30/01/2022",
        "time": "16:00"
    },
    {
        "id": 10,
        "homeTeam": "Corinthians",
        "awayTeam": "Santos",
        "homeScore":null,
        "awayScore":null,
        "league": "Paulistão",
        "date": "02/02/2022",
        "time": "21:35"
    },
    {
        "id": 3,
        "homeTeam": "RB Bragantino",
        "awayTeam": "São Paulo",
        "homeScore":null,
        "awayScore":null,
        "league": "Paulistão",
        "date": "03/02/2022",
        "time": "21:30"
    },
    {
        "id": 11,
        "homeTeam": "São Paulo",
        "awayTeam": "Corinthians",
        "homeScore":null || "",
        "awayScore":null || "",
        "league": "Paulistão",
        "date": "06/03/2022",
        "time": "19:00"
    },
    {
        "id": 12,
        "homeTeam": "São Paulo",
        "awayTeam": "Palmeiras",
        "homeScore":null || "",
        "awayScore":null || "",
        "league": "Paulistão",
        "date": "10/03/2022",
        "time": "21:30"
    },
    {
        "id": 12,
        "homeTeam": "Palmeiras",
        "awayTeam": "Corinthians",
        "homeScore":null,
        "awayScore":null,
        "league": "Paulistão",
        "date": "17/03/2022",
        "time": "20:30"
    },
]

function matchTemplate(match) {
    return `
    <div class="matchday-item card">
        <span>${match.homeTeam} <b>X</b> ${match.awayTeam}</span>
        <span><small>${match.league} | ${match.date} - ${match.time}</small></span>
    </div>
    `;
}

document.querySelector(".matchday").innerHTML = `${match.map(matchTemplate).join("")}`;

