const titlesSP =
{
    "club": "São Paulo",
    "titles": [
        {
            "mundialDeClubes": 3
        },
        {
            "libertadores": 3
        },
        {
            "sulamericana": 3
        },
        {
            "campeonatoBrasileiro": 6
        },
        {
            "campeonatoPaulista": 23
        },
    ],
}

function saoPauloTitles() {
    document.querySelector(".titles").innerHTML = `
    <h3>Títulos</h3>
    <div class="titles-item" >
        <span>🏆 Mundial de Clubes: ${titlesSP.titles[0].mundialDeClubes}</span>
    </div>
    <div class="titles-item" >
        <span>🏆 Libertadores: ${titlesSP.titles[1].libertadores}</span>
    </div>
    <div class="titles-item" >
        <span>🏆 Sulamericana: ${titlesSP.titles[2].sulamericana}</span>
    </div>
    <div class="titles-item" >
        <span>🏆 Campeonato Brasileiro: ${titlesSP.titles[3].campeonatoBrasileiro}</span>
    </div>
    <div class="titles-item" >
        <span>🏆 Paulista: ${titlesSP.titles[4].campeonatoPaulista}</span>
    </div>
    `;
}

saoPauloTitles()

function handleValuePlayers() {
    $.getJSON(`/scripts/saopaulo/saopaulo.json`, (obj) => {
        $.each(obj, (key, value) => {
            $(".mvp").append(
                `
                    <h3>Valor de Mercado</h3>
                    <div class = 'mvp-item'>
                        <div class="mvp-item-description">
                            <h4>${value.player[0].name}</h4>
                            <small>${value.player[0].position}</small>
                        </div>
                        <h4 class="marketValue">${value.player[0].marketValue}</h4>
                    </div>
                    <div class = 'mvp-item'>
                        <div class="mvp-item-description">
                            <h4>${value.player[1].name}</h4>
                            <small>${value.player[1].position}</small>
                        </div>
                        <h4 class="marketValue">${value.player[1].marketValue}</h4>
                    </div>
                    <div class = 'mvp-item'>
                        <div class="mvp-item-description">
                            <h4>${value.player[2].name}</h4>
                            <small>${value.player[2].position}</small>
                        </div>
                        <h4 class="marketValue">${value.player[2].marketValue}</h4>
                    </div>
                    <div class = 'mvp-item'>
                        <div class="mvp-item-description">
                            <h4>${value.player[3].name}</h4>
                            <small>${value.player[3].position}</small>
                        </div>
                        <h4 class="marketValue">${value.player[3].marketValue}</h4>
                    </div>
                    <div class = 'mvp-item'>
                        <div class="mvp-item-description">
                            <h4>${value.player[4].name}</h4>
                            <small>${value.player[4].position}</small>
                        </div>
                        <h4 class="marketValue">${value.player[4].marketValue}</h4>
                    </div>
                    <div class = 'mvp-item'>
                        <div class="mvp-item-description">
                            <h4>${value.player[5].name}</h4>
                            <small>${value.player[5].position}</small>
                        </div>
                        <h4 class="marketValue">${value.player[5].marketValue}</h4>
                    </div>
                    <div class = 'mvp-item'>
                        <div class="mvp-item-description">
                            <h4>${value.player[6].name}</h4>
                            <small>${value.player[6].position}</small>
                        </div>
                        <h4 class="marketValue">${value.player[6].marketValue}</h4>
                    </div>
                    <div class = 'mvp-item'>
                        <div class="mvp-item-description">
                            <h4>${value.player[7].name}</h4>
                            <small>${value.player[7].position}</small>
                        </div>
                        <h4 class="marketValue">${value.player[7].marketValue}</h4>
                    </div>
                    <div class = 'mvp-item'>
                        <div class="mvp-item-description">
                            <h4>${value.player[8].name}</h4>
                            <small>${value.player[8].position}</small>
                        </div>
                        <h4 class="marketValue">${value.player[8].marketValue}</h4>
                    </div>
                    <div class = 'mvp-item'>
                        <div class="mvp-item-description">
                            <h4>${value.player[9].name}</h4>
                            <small>${value.player[9].position}</small>
                        </div>
                        <h4 class="marketValue">${value.player[9].marketValue}</h4>
                    </div>
                    <div class = 'mvp-item'>
                        <div class="mvp-item-description">
                            <h4>${value.player[10].name}</h4>
                            <small>${value.player[10].position}</small>
                        </div>
                        <h4 class="marketValue">${value.player[10].marketValue}</h4>
                    </div>
                    <div class = 'mvp-item'>
                        <div class="mvp-item-description">
                            <h4>${value.player[11].name}</h4>
                            <small>${value.player[11].position}</small>
                        </div>
                        <h4 class="marketValue">${value.player[11].marketValue}</h4>
                    </div>
                `
            )
        });
    });
}

handleValuePlayers()

let spFilter = match.filter(element => element.homeTeam == "São Paulo" || element.awayTeam == "São Paulo")

function clubMatches() {
    document.querySelector(".matchday").innerHTML = `
        <div class="matchday-item card" style="background:darkblue;">
            <span><small>${spFilter[0].league} | ${spFilter[0].date} - ${spFilter[0].time}</small></span>
            <span>${spFilter[0].homeTeam} ${spFilter[0].homeScore} X ${spFilter[0].awayScore} ${spFilter[0].awayTeam}</span>
        </div>
        <div class="matchday-item card" style="background:darkblue;">
            <span><small>${spFilter[1].league} | ${spFilter[1].date} -  ${spFilter[1].time}</small></span>
            <span>${spFilter[1].homeTeam} X ${spFilter[1].awayTeam}</span>
        </div>
        <div class="matchday-item card" style="background:darkblue;">
            <span><small>${spFilter[2].league} | ${spFilter[2].date} - ${spFilter[2].time}</small></span>
            <span>${spFilter[2].homeTeam} X ${spFilter[2].awayTeam}</span>
        </div>
        <div class="matchday-item card" style="background:darkblue;">
            <span><small>${spFilter[3].league} | ${spFilter[3].date} - ${spFilter[3].time}</small></span>
            <span>${spFilter[3].homeTeam} X ${spFilter[3].awayTeam}</span>
        </div>
   `;
}

clubMatches()