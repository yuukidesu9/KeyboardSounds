import definePlugin, { OptionType } from "@utils/types";
import { Settings } from "Vencord";

const packs = {
    "OperaGX": {
        click1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/OperaGX/click1.wav"),
        click2: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/OperaGX/click2.wav"),
        click3: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/OperaGX/click3.wav"),
        backspace1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/OperaGX/backspace.wav"),
        allowedKeys: []
    },
    "osu": {
        caps: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/osu/key-caps.mp3"),
        enter1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/osu/key-confirm.mp3"),
        backspace1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/osu/key-delete.mp3"),
        arrow: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/osu/key-movement.mp3"),
        click1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/osu/key-press-1.mp3"),
        click2: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/osu/key-press-2.mp3"),
        click3: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/osu/key-press-3.mp3"),
        click4: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/osu/key-press-4.mp3"),
        allowedKeys: [
            "CapsLock",
            "ArrowUp",
            "ArrowRight",
            "ArrowLeft",
            "ArrowDown"
        ]
    },
    "Shylily": {
        click1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter1.wav"),
        click2: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter2.wav"),
        click3: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter3.wav"),
        click4: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter4.wav"),
        click5: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter5.wav"),
        click6: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter6.wav"),
        click7: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter7.wav"),
        click8: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter8.wav"),
        click9: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter9.wav"),
        click10: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter10.wav"),
        click11: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter11.wav"),
        click12: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter12.wav"),
        click13: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter13.wav"),
        click14: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter14.wav"),
        click15: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter15.wav"),
        click16: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter16.wav"),
        click17: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter17.wav"),
        click18: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter18.wav"),
        click19: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter19.wav"),
        click20: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter20.wav"),
        click21: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter21.wav"),
        click22: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter22.wav"),
        click23: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter23.wav"),
        click24: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter24.wav"),
        click25: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter25.wav"),
        click26: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter26.wav"),
        click27: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter27.wav"),
        click28: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter28.wav"),
        click29: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter29.wav"),
        click30: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter30.wav"),
        click31: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter31.wav"),
        click32: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter32.wav"),
        click33: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter33.wav"),
        click34: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter34.wav"),
        click35: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter35.wav"),
        click36: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter36.wav"),
        click37: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter37.wav"),
        click38: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter38.wav"),
        click39: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter39.wav"),
        click40: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter40.wav"),
        click41: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter41.wav"),
        click42: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter42.wav"),
        click43: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter43.wav"),
        click44: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter44.wav"),
        click45: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter45.wav"),
        click46: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter46.wav"),
        click47: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter47.wav"),
        click48: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter48.wav"),
        click49: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter49.wav"),
        click50: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter50.wav"),
        click51: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter51.wav"),
        click52: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter52.wav"),
        click53: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter53.wav"),
        click54: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter54.wav"),
        click55: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter55.wav"),
        click56: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter56.wav"),
        click57: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter57.wav"),
        click58: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter58.wav"),
        click59: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter59.wav"),
        click60: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter60.wav"),
        click61: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter61.wav"),
        click62: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter62.wav"),
        click63: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter63.wav"),
        click64: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter64.wav"),
        click65: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter65.wav"),
        click66: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter66.wav"),
        click67: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter67.wav"),
        click68: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter68.wav"),
        click69: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter69.wav"),
        click70: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter70.wav"),
        click71: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter71.wav"),
        click72: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter72.wav"),
        click73: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter73.wav"),
        click74: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter74.wav"),
        click75: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter75.wav"),
        click76: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter76.wav"),
        click77: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter77.wav"),
        click78: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter78.wav"),
        click79: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter79.wav"),
        click80: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter80.wav"),
        click81: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter81.wav"),
        click82: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter82.wav"),
        click83: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter83.wav"),
        click84: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter84.wav"),
        click85: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter85.wav"),
        click86: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter86.wav"),
        click87: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter87.wav"),
        click88: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter88.wav"),
        click89: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter89.wav"),
        click90: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter90.wav"),
        click91: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter91.wav"),
        backspace1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace1.wav"),
        backspace2: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace2.wav"),
        backspace3: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace3.wav"),
        backspace4: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace4.wav"),
        backspace5: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace5.wav"),
        backspace6: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace6.wav"),
        backspace7: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace7.wav"),
        backspace8: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace8.wav"),
        enter1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter1.wav"),
        enter2: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter2.wav"),
        enter3: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter3.wav"),
        enter4: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter4.wav"),
        enter5: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter5.wav"),
        enter6: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter6.wav"),
        enter7: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter7.wav"),
        enter8: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter8.wav"),
        enter9: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter9.wav"),
        enter10: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter10.wav"),
        enter11: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter11.wav"),
        space1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space1.wav"),
        space2: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space2.wav"),
        space3: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space3.wav"),
        space4: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space4.wav"),
        space5: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space5.wav"),
        space6: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space6.wav"),
        space7: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space7.wav"),
        allowedKeys: []
    },
};

const ignoredKeys = [
    "CapsLock",
    "ShiftLeft",
    "ShiftRight",
    "ControlLeft",
    "ControlRight",
    "AltLeft",
    "AltRight",
    "MetaLeft",
    "MetaRight",
    "ArrowUp",
    "ArrowRight",
    "ArrowLeft",
    "ArrowDown",
    "MediaPlayPause",
    "MediaStop",
    "MediaTrackNext",
    "MediaTrackPrevious",
    "MediaSelect",
    "MediaEject",
    "MediaVolumeUp",
    "MediaVolumeDown",
    "AudioVolumeUp",
    "AudioVolumeDown"
];

const getActiveSoundPack = () => Settings.plugins.KeyboardSounds.pack;

const keydown = (e: KeyboardEvent) => {
    const currentPack = packs[getActiveSoundPack()];
    if (ignoredKeys.includes(e.code) && !currentPack.allowedKeys.includes(e.code)) return;

    for (const sound of Object.values(currentPack))
        if (sound instanceof Audio) sound.pause();

    switch (e.code) {
        case "Enter":
            const enterSoundsCount = Object.keys(currentPack).filter(key => key.startsWith("enter")).length;
            const enter = currentPack[`enter${Math.floor(Math.random() * enterSoundsCount) + 1}`];
            enter.currentTime = 0;
            enter.play();
            break;
        case "Backspace":
            const backspaceSoundsCount = Object.keys(currentPack).filter(key => key.startsWith("backspace")).length;
            const backspace = currentPack[`backspace${Math.floor(Math.random() * backspaceSoundsCount) + 1}`];
            backspace.currentTime = 0;
            backspace.play();
            break;
        case "Space":
            const spaceSoundsCount = Object.keys(currentPack).filter(key => key.startsWith("space")).length;
            const space = currentPack[`space${Math.floor(Math.random() * spaceSoundsCount) + 1}`];
            space.currentTime = 0;
            space.play();
            break;
        case "CapsLock":
            currentPack.caps.currentTime = 0;
            currentPack.caps.play();
            break;
        case "ArrowUp":
        case "ArrowRight":
        case "ArrowLeft":
        case "ArrowDown":
            currentPack.arrow.currentTime = 0;
            currentPack.arrow.play();
            break;
        default:
            const clickSoundsCount = Object.keys(currentPack).filter(key => key.startsWith("click")).length;
            const click = currentPack[`click${Math.floor(Math.random() * clickSoundsCount) + 1}`];
            click.currentTime = 0;
            click.play();
            break;
    }
};

export default definePlugin({
    name: "KeyboardSounds",
    description: "Adds the Opera GX Keyboard Sounds to Discord, plus some more.",
    authors: [{ name: "yuukidesu9", id: 291936579847716866n }],
    start: () => {
        const volume = Settings.plugins.KeyboardSounds.volume;
        const currentPack = packs[getActiveSoundPack()];
        for (const sound of Object.values(currentPack))
            if (sound instanceof Audio) sound.volume = volume / 100;
        document.addEventListener("keydown", keydown);
    },
    stop: () => document.removeEventListener("keydown", keydown),
    options: {
        pack: {
            description: "Select the Sound Pack you want to use",
            type: OptionType.SELECT,
            options: Object.keys(packs).map((pack, i) => {
                return {
                    label: pack,
                    value: pack,
                    default: i === 0
                }
            }),
            onChange: () => {
                const volume = Settings.plugins.KeyboardSounds.volume;
                const currentPack = packs[getActiveSoundPack()];
                for (const sound of Object.values(currentPack))
                    if (sound instanceof Audio) sound.volume = volume / 100;
            }
        },
        volume: {
            description: "Volume",
            type: OptionType.SLIDER,
            markers: [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            stickToMarkers: false,
            default: 100,
            onChange: value => {
                const currentPack = packs[getActiveSoundPack()];
                for (const sound of Object.values(currentPack))
                    if (sound instanceof Audio) sound.volume = value / 100;
            }
        }
    }
});
