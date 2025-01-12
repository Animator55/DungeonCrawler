import "../assets/dice.scss"
import PlaySoundMp3 from '../logic/playSound'

type Props = {
    confirm: Function
    overwriteCalc?: Function
    disabled?: boolean
}
let timeoutId: ReturnType<typeof setTimeout>;
let lastFace: number | undefined;
const animationDuration: number = 3000;

export default function Dice({ overwriteCalc, confirm, disabled }: Props) {
    const sides: number = 20;
    const initialSide: number = 1;

    // Función para generar una cara aleatoria
    function randomFace(): number {
        const face = Math.floor(Math.random() * sides) + initialSide;
        lastFace = face === lastFace ? randomFace() : face;
        return face;
    }

    // Función para rodar hacia una cara específica
    function rollTo(face: string): void {
        clearTimeout(timeoutId);
        const die = document.querySelector<HTMLDivElement>('.die');

        if (die) {
            die.setAttribute('data-face', face);
            if (face === "20") PlaySoundMp3("roll20")
            else PlaySoundMp3("rollResult")
            if (overwriteCalc) overwriteCalc(parseInt(face))
            setTimeout(() => {
                confirm(face)
            }, 1000)
        }
    }
    return <>
        <div className="content" style={disabled ? { opacity: .6 } : {}}>
            <div className="die" onClick={event => {
                if (disabled) return
                event.preventDefault();
                document.querySelectorAll<HTMLButtonElement>('.dice-option-button').forEach(option => {
                    option.classList.add("fade-out")
                });
                const die = document.querySelector<HTMLDivElement>('.die');
                if (die) {
                    die.classList.add('rolling');
                }
                clearTimeout(timeoutId);

                setTimeout(() => {
                    PlaySoundMp3("rollDice")
                }, 1000)
                timeoutId = setTimeout(() => {
                    if (die) {
                        die.classList.remove('rolling');
                    }
                    rollTo(randomFace().toString());
                }, animationDuration);
            }}>
                <figure className="face face-1"></figure>
                <figure className="face face-2"></figure>
                <figure className="face face-3"></figure>
                <figure className="face face-4"></figure>
                <figure className="face face-5"></figure>
                <figure className="face face-6"></figure>
                <figure className="face face-7"></figure>
                <figure className="face face-8"></figure>
                <figure className="face face-9"></figure>
                <figure className="face face-10"></figure>
                <figure className="face face-11"></figure>
                <figure className="face face-12"></figure>
                <figure className="face face-13"></figure>
                <figure className="face face-14"></figure>
                <figure className="face face-15"></figure>
                <figure className="face face-16"></figure>
                <figure className="face face-17"></figure>
                <figure className="face face-18"></figure>
                <figure className="face face-19"></figure>
                <figure className="face face-20"></figure>
            </div>
        </div>
    </>
}