const keys = {
    "a": "resources/A.mp3",
    "s": "resources/S.mp3",
    "d": "resources/D.mp3",
    "f": "resources/F.mp3",
    "g": "resources/G.mp3",
    "h": "resources/H.mp3",
    "j": "resources/J.mp3",
    "w": "resources/W.mp3",
    "e": "resources/E.mp3",
    "t": "resources/T.mp3",
    "y": "resources/Y.mp3",
    "u": "resources/U.mp3"
}

document.addEventListener("keydown", function(event)
    {
        let key = event.key.toLowerCase();

        if (key in keys)
        {
            let audio = new Audio(keys[key]);
            audio.play();
        }
    }
);