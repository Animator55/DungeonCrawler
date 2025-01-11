import React from 'react'
import "../assets/dice.scss"

type Props = {
    confirm: Function
    overwriteCalc?: Function
    disabled?: boolean
}

export default function Dice({ overwriteCalc,confirm, disabled }: Props) {
    // Variables globales con tipado
    React.useEffect(() => {
        const die = document.querySelector<HTMLDivElement>('.die');
        const sides: number = 20;
        const initialSide: number = 1;
        let lastFace: number | undefined;
        let timeoutId: ReturnType<typeof setTimeout>;
        const animationDuration: number = 3000;

        // Función para generar una cara aleatoria
        function randomFace(): number {
            const face = Math.floor(Math.random() * sides) + initialSide;
            lastFace = face === lastFace ? randomFace() : face;
            return face;
        }

        // Función para rodar hacia una cara específica
        function rollTo(face: string): void {
            clearTimeout(timeoutId);

            if (die) {
                die.setAttribute('data-face', face);
                if(overwriteCalc) overwriteCalc(parseInt(face))
                setTimeout(() => {
                    confirm(face)
                }, 1000)
            }
        }

        // Manejar clics en el botón de aleatorización y el dado
        let dieEl = document.querySelector<HTMLElement>('.die')
        if(dieEl) dieEl.addEventListener('click', event => {
            if (disabled) return
            event.preventDefault();
            document.querySelectorAll<HTMLButtonElement>('.dice-option-button').forEach(option => {
               option.classList.add("fade-out")
            });
            if (die) {
                die.classList.add('rolling');
            }
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                if (die) {
                    die.classList.remove('rolling');
                }
                rollTo(randomFace().toString());
            }, animationDuration);
        }, {once: true});
    })

    return <>
        <div className="content" style={disabled?{opacity: .6}: {}}>
            <div className="die">
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