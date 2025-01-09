import { RankColorSelector } from '../logic/rankColorSelector';
import { calculateXP } from '../logic/calculateXPdrop';
import { generateLifeColor } from '../logic/generateLifeColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb, faCoins, faKey } from '@fortawesome/free-solid-svg-icons';
import { iconSelectorObj } from '../logic/iconSelectorObj';
import { HotBarType } from '../vite-env';

type Props = {
    items: HotBarType
    life:number
    setItems: Function
}

export default function HotBar({items, setItems, life}: Props) {
    let pressTimer: null | number = null;
    let draggingPhase: boolean = false

    const DragPhase = (index: number) => {
        pressTimer = setTimeout(() => {
            let target = document.getElementById("artifact_" + index) as HTMLButtonElement
            if (!target) return
            draggingPhase = true
            target.classList.add("selected")
            const cancel = (e: TouchEvent) => {
                DragPhaseCancel()
                let button = e.target as HTMLButtonElement
                if (!button) return
                if (!button.classList.contains("slot-action")) target.classList.remove("selected")
                document.removeEventListener("touchstart", cancel)
            }
            document.addEventListener("touchstart", cancel)
        }, 400)
    };
    const DragPhaseCancel = () => {
        if (pressTimer !== null) {
            clearTimeout(pressTimer);
            draggingPhase = false
            pressTimer = null;
        }
    };
    let list = []
    for (let i = 0; i < 5; i++) {
        let el = items.artifacts[i]
        let className = el && el.active ? "active" : ""
        className += el && el.durability === 1 && el.totalDurability > 1 ? " artifact-warning" : "" 
        list.push(<div className='slot' key={Math.random()}>
            <button
                id={'artifact_' + i}
                className={className}
                style={el ? { borderColor: RankColorSelector[el.rank], color: RankColorSelector[el.rank] } : {}}
                onTouchStart={() => {
                    DragPhase(i)
                }}
                onTouchEnd={() => {
                    if (!draggingPhase) {
                        if (!el) return
                        setItems({
                            ...items, artifacts: items.artifacts.map((item, j) => {
                                if (i === j) return { ...item, active: !item.active }
                                else return item
                            })
                        })
                    }
                    DragPhaseCancel()
                }}>
                {el && <FontAwesomeIcon icon={iconSelectorObj[el.name.split(" ")[0]]} />}
                {el && <p>{el.power}</p>}
                {/* {el && <div className='durability-bar' style={{ width: (el.durability *100)/el.totalDurability  + "%" }}></div>} */}
            </button>
            {el && <span className='artifact-actions'>
                <li className='slot-action'>Info</li>
                <li className='slot-action' onClick={() => {
                    setItems({
                        ...items, artifacts: items.artifacts.filter((el, j) => {
                            if (i !== j) return el
                        })
                    })
                }}>Drop</li>
            </span>}
        </div>
        )
    }
    let xpResult = calculateXP(items.level)
    let totalForNext = xpResult.xpForNextLevel - xpResult.xpForCurrentLevel
    let progressXP = totalForNext - xpResult.remainingXP
    return <>
        <div className='hot-bar'>
            <div className='top-hot-bar'>
                <div className='life-container'>
                    <div className='life-bar' style={{
                        backgroundColor: generateLifeColor(life),
                        width: life + "%"
                    }}></div>
                </div>
                <div className='unit'><FontAwesomeIcon icon={faCoins} />{items.coins}</div>
                <div className='unit'><FontAwesomeIcon icon={faBomb} />{items.bombs}</div>
                <div className='unit'><FontAwesomeIcon icon={faKey} />{items.keys}</div>
            </div>
            <div className='xp-zone'>
                <p>{xpResult.level}</p>
                <div className='xp-container'>
                    <div className='xp-bar' style={{ width: (progressXP * 100) / totalForNext + "%" }} />
                </div>
            </div>
            <ul>{list}</ul>
        </div>
    </>
}