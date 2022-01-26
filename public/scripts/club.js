function handleLoadClub() {
    $.getJSON("scripts/club.json", (obj) => {
        $.each(obj, (key, value) => {
            $(".results").append(
                `
                <a href=${value.route}>
                    <ul class = 'results-item'>
                        <li>${value.club}</li>
                    </ul>
                </a>
                `
            )
        });
    });
}

handleLoadClub()



//document.querySelector(".main").addEventListener('click', () => {});