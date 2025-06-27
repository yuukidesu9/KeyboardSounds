import definePlugin, { OptionType } from "@utils/types";
import { Settings } from "Vencord";

const packs = {
    "OperaGX": {
        click1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/OperaGX/click1.mp3"),
        click2: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/OperaGX/click2.mp3"),
        click3: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/OperaGX/click3.mp3"),
        backspace1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/OperaGX/backspace.mp3"),
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
        click1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter1.mp3"),
        click2: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter2.mp3"),
        click3: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter3.mp3"),
        click4: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter4.mp3"),
        click5: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter5.mp3"),
        click6: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter6.mp3"),
        click7: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter7.mp3"),
        click8: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter8.mp3"),
        click9: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter9.mp3"),
        click10: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter10.mp3"),
        click11: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter11.mp3"),
        click12: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter12.mp3"),
        click13: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter13.mp3"),
        click14: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter14.mp3"),
        click15: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter15.mp3"),
        click16: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter16.mp3"),
        click17: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter17.mp3"),
        click18: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter18.mp3"),
        click19: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter19.mp3"),
        click20: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter20.mp3"),
        click21: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter21.mp3"),
        click22: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter22.mp3"),
        click23: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter23.mp3"),
        click24: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter24.mp3"),
        click25: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter25.mp3"),
        click26: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter26.mp3"),
        click27: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter27.mp3"),
        click28: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter28.mp3"),
        click29: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter29.mp3"),
        click30: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter30.mp3"),
        click31: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter31.mp3"),
        click32: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter32.mp3"),
        click33: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter33.mp3"),
        click34: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter34.mp3"),
        click35: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter35.mp3"),
        click36: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter36.mp3"),
        click37: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter37.mp3"),
        click38: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter38.mp3"),
        click39: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter39.mp3"),
        click40: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter40.mp3"),
        click41: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter41.mp3"),
        click42: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter42.mp3"),
        click43: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter43.mp3"),
        click44: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter44.mp3"),
        click45: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter45.mp3"),
        click46: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter46.mp3"),
        click47: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter47.mp3"),
        click48: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter48.mp3"),
        click49: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter49.mp3"),
        click50: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter50.mp3"),
        click51: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter51.mp3"),
        click52: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter52.mp3"),
        click53: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter53.mp3"),
        click54: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter54.mp3"),
        click55: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter55.mp3"),
        click56: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter56.mp3"),
        click57: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter57.mp3"),
        click58: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter58.mp3"),
        click59: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter59.mp3"),
        click60: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter60.mp3"),
        click61: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter61.mp3"),
        click62: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter62.mp3"),
        click63: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter63.mp3"),
        click64: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter64.mp3"),
        click65: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter65.mp3"),
        click66: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter66.mp3"),
        click67: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter67.mp3"),
        click68: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter68.mp3"),
        click69: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter69.mp3"),
        click70: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter70.mp3"),
        click71: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter71.mp3"),
        click72: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter72.mp3"),
        click73: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter73.mp3"),
        click74: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter74.mp3"),
        click75: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter75.mp3"),
        click76: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter76.mp3"),
        click77: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter77.mp3"),
        click78: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter78.mp3"),
        click79: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter79.mp3"),
        click80: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter80.mp3"),
        click81: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter81.mp3"),
        click82: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter82.mp3"),
        click83: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter83.mp3"),
        click84: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter84.mp3"),
        click85: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter85.mp3"),
        click86: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter86.mp3"),
        click87: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter87.mp3"),
        click88: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter88.mp3"),
        click89: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter89.mp3"),
        click90: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter90.mp3"),
        click91: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/typing/letter91.mp3"),
        backspace1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace1.mp3"),
        backspace2: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace2.mp3"),
        backspace3: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace3.mp3"),
        backspace4: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace4.mp3"),
        backspace5: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace5.mp3"),
        backspace6: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace6.mp3"),
        backspace7: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace7.mp3"),
        backspace8: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/backspace/backspace8.mp3"),
        enter1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter1.mp3"),
        enter2: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter2.mp3"),
        enter3: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter3.mp3"),
        enter4: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter4.mp3"),
        enter5: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter5.mp3"),
        enter6: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter6.mp3"),
        enter7: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter7.mp3"),
        enter8: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter8.mp3"),
        enter9: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter9.mp3"),
        enter10: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter10.mp3"),
        enter11: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/enter/enter11.mp3"),
        space1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space1.mp3"),
        space2: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space2.mp3"),
        space3: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space3.mp3"),
        space4: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space4.mp3"),
        space5: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space5.mp3"),
        space6: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space6.mp3"),
        space7: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/Shylily/space/space7.mp3"),
        allowedKeys: []
    },
    "🗿": {
        enter1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/moyai/moyai-loud.mp3"),
        backspace1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/moyai/moyai-veryloud.mp3"),
        click1: new Audio("https://github.com/yuukidesu9/KeyboardSounds/raw/main/sounds/moyai/moyai.mp3"),
    }
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
