//https://de.wikipedia.org/wiki/Buchstabiertafel
const prompt = require('prompt-sync')()
const CH = require(`./tables/CH.json`)
const DE = require(`./tables/DE.json`)
const INT = require(`./tables/INT.json`)

var restart = new Map
restart.set(`start`, true)
restart.set(`language`, true)
restart.set(`input`, true)
restart.set(`quit`, false)

do {
    if (restart.get(`start`) == true) {
        var check = false
        var board = ``
        var input = ``
        var end = ``
    }


    if (restart.get(`language`) == true) {
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


    if (restart.get(`input`) == true) {
        console.log(`What do you want to convert?\nWas soll konvertiert werden?`)
        input = prompt(`> `)
        input = input.toLocaleUpperCase()
        console.log(``)
    }

    
    input.split(``).forEach(letter => {
        switch (board) {
            case `CH`:
                if (CH.letter == ``) console.log(letter)
                else console.log(CH[letter])
                break
    
            case `DE`:
                if (DE.letter == ``) console.log(letter)
                else console.log(DE[letter])
                break
        
            case `INT`:
                if (INT.letter == ``) console.log(letter)
                else console.log(DE[letter])
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
