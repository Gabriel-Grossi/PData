let corinthians_filter = match.filter(element => element.homeTeam == "Corinthians" || element.awayTeam == "Corinthians")
function corinthiansMatches() {
    document.querySelector(".matchday").innerHTML = `
                <div class="matchday-item card" style="background:darkblue;">
                    <span><small>${corinthians_filter[0].league}  | ${corinthians_filter[0].date} - ${corinthians_filter[0].time}</small></span>
                    <span>${corinthians_filter[0].homeTeam} ${corinthians_filter[0].homeScore} X ${corinthians_filter[0].awayScore} ${corinthians_filter[0].awayTeam}</span>
                </div>
                <div class="matchday-item card" style="background:darkblue;">
                    <span><small>${corinthians_filter[1].league} | ${corinthians_filter[1].date} - ${corinthians_filter[1].time}</small></span>
                    <span>${corinthians_filter[1].homeTeam} X ${corinthians_filter[1].awayTeam}</span>
                </div>
                <div class="matchday-item card" style="background:darkblue;">
                    <span><small>${corinthians_filter[2].league} | ${corinthians_filter[2].date} - ${corinthians_filter[2].time}</small></span>
                    <span>${corinthians_filter[2].homeTeam} X ${corinthians_filter[2].awayTeam}</span>
                </div>
                <div class="matchday-item card" style="background:darkblue;">
                    <span><small>${corinthians_filter[3].league} | ${corinthians_filter[3].date} - ${corinthians_filter[3].time}</small></span>
                    <span>${corinthians_filter[3].homeTeam} X ${corinthians_filter[3].awayTeam}</span>
                </div>
                <div class="matchday-item card" style="background:darkblue;">
                    <span><small>${corinthians_filter[4].league} | ${corinthians_filter[4].date} - ${corinthians_filter[4].time}</small></span>
                    <span>${corinthians_filter[4].homeTeam} X ${corinthians_filter[4].awayTeam}</span>
                </div>`;
}
corinthiansMatches()

const titlesCorinthians =
{
    "club": "Corinthians",
    "titles": [
        {
            "mundialDeClubes": 2
        },
        {
            "libertadores": 1
        },
        {
            "campeonatoBrasileiro": 8
        },
        {
            "copaDoBrasil": 3
        },
        {
            "campeonatoPaulista": 30
        },
    ],
}

function corinthiansTitles() {
    document.querySelector(".titles").innerHTML = `
    <h3>Títulos</h3>
    <div class="titles-item">
        <span>🏆 Mundial de Clubes: ${titlesCorinthians.titles[0].mundialDeClubes}</span>
    </div>
    <div class="titles-item" >
        <span>🏆 Libertadores: ${titlesCorinthians.titles[1].libertadores}</span>
    </div>
    <div class="titles-item" >
        <span>🏆 Campeonato Brasileiro: ${titlesCorinthians.titles[2].campeonatoBrasileiro}</span>
    </div>
    <div class="titles-item" >
        <span>🏆 Copa do Brasil: ${titlesCorinthians.titles[3].copaDoBrasil}</span>
    </div>
    <div class="titles-item" >
        <span>🏆 Paulista: ${titlesCorinthians.titles[4].campeonatoPaulista}</span>
    </div>
    `;
}

corinthiansTitles()

function handleValuePlayers() {
    $.getJSON(`/scripts/corinthians/corinthians.json`, (obj) => {
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
                `
            )
        });
    });
}

handleValuePlayers()