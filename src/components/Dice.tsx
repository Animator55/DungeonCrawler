import React from 'react'
import "../assets/dice.scss"

type Props = {
    confirm: Function
}

export default function Dice({ confirm }: Props) {
    // Variables globales con tipado
    React.useEffect(() => {
        const die = document.querySelector<HTMLDivElement>('.die');
        const sides: number = 20;
        const initialSide: number = 1;
        let lastFace: number | undefined;
        let timeoutId: ReturnType<typeof setTimeout>;
        const animationDuration: number = 3000;

        // Función para manejar clics en los enlaces
        document.querySelectorAll<HTMLAnchorElement>('ul > li > a').forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                reset();
                rollTo(link.getAttribute('href') || '');
            });
        });

        // Función para generar una cara aleatoria
        function randomFace(): number {
            const face = Math.floor(Math.random() * sides) + initialSide;
            lastFace = face === lastFace ? randomFace() : face;
            return face;
        }

        // Función para rodar hacia una cara específica
        function rollTo(face: string): void {
            clearTimeout(timeoutId);

            document.querySelectorAll<HTMLAnchorElement>('ul > li > a').forEach(link => {
                link.classList.remove('active');
            });
            const targetLink = document.querySelector<HTMLAnchorElement>(`[href='${face}']`);
            if (targetLink) {
                targetLink.classList.add('active');
            }

            if (die) {
                die.setAttribute('data-face', face);
                setTimeout(() => {
                    confirm(face)
                }, 1000)
            }
        }

        // Función para reiniciar el estado del dado
        function reset(): void {
            if (die) {
                die.removeAttribute('data-face');
                die.classList.remove('rolling');
            }
        }

        // Manejar clics en el botón de aleatorización y el dado
        document.querySelectorAll<HTMLElement>('.randomize, .die').forEach(element => {
            element.addEventListener('click', event => {
                event.preventDefault();
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
            });
        });
    })

    return <>
        <div className="content">
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