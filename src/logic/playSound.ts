import attack1 from '../assets/sounds/attack-to-enemy-1.mp3'
import attack2 from '../assets/sounds/attack-to-enemy-2.mp3'
import attackPlayer from '../assets/sounds/attack-to-player.mp3'
import buy from '../assets/sounds/buy-item.mp3'
import boss from '../assets/sounds/goblin-boss.mp3'
import goblin from '../assets/sounds/goblin-normal.mp3'
import goblinDiying from '../assets/sounds/goblin-diying.mp3'
import steps from '../assets/sounds/footsteps.mp3'
import inspect from '../assets/sounds/inspect.mp3'
import equip from '../assets/sounds/item-equip.mp3'
import loot from '../assets/sounds/loot-chest.mp3'
import roll20 from '../assets/sounds/roll-20.mp3'
import rollDice from '../assets/sounds/roll-dice.mp3'
import rollResult from '../assets/sounds/roll-result.mp3'
import routerBack from '../assets/sounds/router-back.mp3'
import routerForward from '../assets/sounds/router-forward.mp3'
import routerButton from '../assets/sounds/router-button.mp3'
import tension from '../assets/sounds/tension.mp3'
import wandering from '../assets/sounds/wandering.mp3'

type Sounds = {
    [key: string]: string
}

export default function PlaySoundMp3(sound:
    "attack1" |
    "attack2" |
    "attackPlayer" |
    "buy" |
    "boss" |
    "goblin" |
    "goblinDiying" |
    "inspect" |
    "equip" |
    "steps" |
    "loot" |
    "roll20" |
    "rollDice" |
    "rollResult" |
    "routerBack" |
    "routerForward" |
    "routerButton" |
    "tension" |
    "wandering" 
) {
    let sounds: Sounds = {
        "attack1": attack1,
        "attack2": attack2,
        "attackPlayer": attackPlayer,
        "buy": buy,
        "boss": boss,
        "goblin": goblin,
        "goblinDiying": goblinDiying,
        "inspect": inspect,
        "equip": equip,
        "steps": steps,
        "loot": loot,
        "roll20": roll20,
        "rollDice": rollDice,
        "rollResult": rollResult,
        "routerBack": routerBack,
        "routerForward": routerForward,
        "routerButton": routerButton,
        "tension": tension,
        "wandering": wandering,
    }
    let audio = new Audio(sounds[sound])
    if(sound === "goblin") audio.volume = 0.4
    else if(sound === "boss") audio.volume = 0.4
    audio.play()
    return audio
}