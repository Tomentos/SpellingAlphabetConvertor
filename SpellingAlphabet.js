const prompt = require('prompt-sync')();

var restart = new Map
restart.set(`start`, true)
restart.set(`language`, true)
restart.set(`input`, true)
restart.set(`quit`, false)

//https://de.wikipedia.org/wiki/Buchstabiertafel
var CH = new Map()
CH.set(`A`, "Anna")
CH.set(`B`, "Berta")
CH.set(`C`, "Cäsar / Charly")
CH.set(`D`, "Daniel")
CH.set(`E`, "Emil")
CH.set(`F`, "Friedrich")
CH.set(`G`, "Gustav")
CH.set(`H`, "Heinrich")
CH.set(`I`, "Ida")
CH.set(`J`, "Jakob")
CH.set(`K`, "Kaiser")
CH.set(`L`, "Leopold")
CH.set(`M`, "Marie")
CH.set(`N`, "Niklaus")
CH.set(`O`, "Otto")
CH.set(`P`, "Peter")
CH.set(`Q`, "Quasi")
CH.set(`R`, "Rosa")
CH.set(`S`, "Sophie")
CH.set(`T`, "Theodor")
CH.set(`U`, "Ulrich")
CH.set(`V`, "Viktor")
CH.set(`W`, "Wilhelm")
CH.set(`X`, "Xaver")
CH.set(`Y`, "Yverdon")
CH.set(`Z`, "Zürich")

var DE = new Map()
DE.set(`A`, "Anton")
DE.set(`B`, "Berta")
DE.set(`C`, "Cäsar")
DE.set(`D`, "Dora")
DE.set(`E`, "Emil")
DE.set(`F`, "Friedrich")
DE.set(`G`, "Gustav")
DE.set(`H`, "Heinrich")
DE.set(`I`, "Ida")
DE.set(`J`, "Julius")
DE.set(`K`, "Kaufmann")
DE.set(`L`, "Ludwig")
DE.set(`M`, "Martha")
DE.set(`N`, "Nordpol")
DE.set(`O`, "Otto")
DE.set(`P`, "Paula")
DE.set(`Q`, "Quelle")
DE.set(`R`, "Richard")
DE.set(`S`, "Samuel")
DE.set(`T`, "Theodor")
DE.set(`U`, "Ulrich")
DE.set(`V`, "Viktor")
DE.set(`W`, "Wilhelm")
DE.set(`X`, "Xanthippe")
DE.set(`Y`, "Ypsilon")
DE.set(`Z`, "Zacharias")

var INT = new Map()
INT.set(`A`, "Alfa")
INT.set(`B`, "Bravo")
INT.set(`C`, "Charlie")
INT.set(`D`, "Delta")
INT.set(`E`, "Echo")
INT.set(`F`, "Foxtrot")
INT.set(`G`, "Golf")
INT.set(`H`, "Hotel")
INT.set(`I`, "India")
INT.set(`J`, "Juliett")
INT.set(`K`, "Kilo")
INT.set(`L`, "Lima")
INT.set(`M`, "Mike")
INT.set(`N`, "November")
INT.set(`O`, "Oscar")
INT.set(`P`, "Papa")
INT.set(`Q`, "Quebec")
INT.set(`R`, "Romeo")
INT.set(`S`, "Sierra")
INT.set(`T`, "Tango")
INT.set(`U`, "Uniform")
INT.set(`V`, "Victor")
INT.set(`W`, "Whiskey")
INT.set(`X`, "X-Ray")
INT.set(`Y`, "Yankee")
INT.set(`Z`, "Zulu")

do {
    if (restart.get(`start`) === true) {
        var check = new Boolean(false)
        var board = ``
        var input = ``
        var end = ``
    }

    if (restart.get(`language`) === true) {
        do {
            console.log(`\nWhat language board do you want to use?\nWelche Sprache soll benutzt werden?\nCH (Swiss / Schweiz)\nDE (Germany / Deutschland)\nINT (International)`)
            board = prompt(`> `)
            board = board.toLocaleUpperCase()
            switch (board) {
                case `CH`:
                    check = true
                    break

                case `DE`:
                    check = true
                    break

                case `INT`:
                    check = true
                    break

                default:
                    check = false
                    console.log(`\nPlease use a valid option\nBitte benutzen sie eine gültige Antowrt`)
                    break
            }
        }while(check != true)
        console.log(`\nSet language board to ${board}\nSprache wurde auf ${board} geändert\n`)
    }

    if (restart.get(`input`) === true) {
        console.log(`What do you want to convert?\nWas soll konvertiert werden?`)
        input = prompt(`> `)
        input = input.toLocaleUpperCase()
        console.log(``)
    }

    input.split(``).forEach(letter => {
        switch (board) {
            case `CH`:
                if (CH.get(letter) === undefined) console.log(letter)
                else console.log(CH.get(letter))
                break
    
            case `DE`:
                if (DE.get(letter) === undefined) console.log(letter)
                else console.log(DE.get(letter))
                break
        
            case `INT`:
                if (INT.get(letter) === undefined) console.log(letter)
                else console.log(INT.get(letter))
                break
        }
    })

    console.log(`\nWhat do you want to do?\nr = start over\nl = change language\ni = change word\nq = quit\nIf no valid answer is chosen, the application will automatically quit\n\nWas nun?\nr = neu starten\nl = Sprache ändern\ni = Wort ändern\nq = schliessen\nSollte keine gültige Auswahl getroffen werden, wird die Applikation automatisch geschlossen`)
    end = prompt(`> `)
    end = end.toLocaleLowerCase()
    console.log(``)
    switch (end) {
        case `r`:
            restart.set(`start`, true)
            restart.set(`language`, true)
            restart.set(`input`, true)
            restart.set(`quit`, false)
            break

        case `l`:
            restart.set(`start`, false)
            restart.set(`language`, true)
            restart.set(`input`, false)
            restart.set(`quit`, false)
            break

        case `i`:
            restart.set(`start`, false)
            restart.set(`language`, false)
            restart.set(`input`, true)
            restart.set(`quit`, false)
            break

        default:
            restart.set(`start`, false)
            restart.set(`language`, false)
            restart.set(`input`, false)
            restart.set(`quit`, true)
            break
    }
}while(restart.get(`quit`) != true)
