const titlesPalmeiras =
{
    "club": "Palmeiras",
    "titles": [
        {
            "libertadores": 3
        },
        {
            "campeonatoBrasileiro": 10
        },
        {
            "copaDoBrasil": 3
        },
        {
            "campeonatoPaulista": 23
        },
    ],
}

function palmeirasTitles() {
    document.querySelector(".titles").innerHTML = `
    <h3>Títulos</h3>
    <div class="titles-item" >
        <span>🏆 Libertadores: ${titlesPalmeiras.titles[0].libertadores}</span>
    </div>
    <div class="titles-item" >
        <span>🏆 Campeonato Brasileiro: ${titlesPalmeiras.titles[1].campeonatoBrasileiro}</span>
    </div>
    <div class="titles-item" >
        <span>🏆 Copa do Brasil: ${titlesPalmeiras.titles[2].copaDoBrasil}</span>
    </div>
    <div class="titles-item" >
        <span>🏆 Paulista: ${titlesPalmeiras.titles[3].campeonatoPaulista}</span>
    </div>
    `;
}

palmeirasTitles()

function handleValuePlayers() {
    $.getJSON(`/scripts/palmeiras/palmeiras.json`, (obj) => {
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
                `
            )
        });
    });
}

handleValuePlayers()

let palmeiras_filter = match.filter(element => element.homeTeam == "Palmeiras" || element.awayTeam == "Palmeiras")
        function clubMatches() {
            document.querySelector(".matchday").innerHTML = `
                <div class="matchday-item card" style="background: darkblue;">
                    <span><small>${palmeiras_filter[0].league} | ${palmeiras_filter[0].date} - ${palmeiras_filter[0].time}</small></span>
                    <span>${palmeiras_filter[0].homeTeam} ${palmeiras_filter[0].homeScore} X ${palmeiras_filter[0].awayScore} ${palmeiras_filter[0].awayTeam}</span>
                </div>
                <div class="matchday-item card" style="background: darkblue;">
                    <span><small>${palmeiras_filter[1].league} | ${palmeiras_filter[1].date} -  ${palmeiras_filter[1].time}</small></span>
                    <span>${palmeiras_filter[1].homeTeam} X ${palmeiras_filter[1].awayTeam}</span>
                </div>
                <div class="matchday-item card" style="background: darkblue;">
                    <span><small>${palmeiras_filter[2].league} | ${palmeiras_filter[2].date} - ${palmeiras_filter[2].time}</small></span>
                    <span>${palmeiras_filter[2].homeTeam} X ${palmeiras_filter[2].awayTeam}</span>
                </div>
                <div class="matchday-item card" style="background: darkblue;">
                    <span><small>${palmeiras_filter[3].league} | ${palmeiras_filter[3].date} - ${palmeiras_filter[3].time}</small></span>
                    <span>${palmeiras_filter[3].homeTeam} X ${palmeiras_filter[3].awayTeam}</span>
                </div>
                <div class="matchday-item card" style="background: darkblue;">
                    <span><small>${palmeiras_filter[4].league} | ${palmeiras_filter[4].date} - ${palmeiras_filter[4].time}</small></span>
                    <span>${palmeiras_filter[4].homeTeam} X ${palmeiras_filter[4].awayTeam}</span>
                </div>
                `;
        }

        clubMatches()