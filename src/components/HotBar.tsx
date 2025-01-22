import { RankColorSelector } from '../logic/rankColorSelector';
import { calculateXP } from '../logic/calculateXPdrop';
import { generateLifeColor } from '../logic/generateLifeColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faCoins, faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import { iconSelectorObj } from '../logic/iconSelectorObj';
import { HotBarType } from '../vite-env';
import PlaySoundMp3 from '../logic/playSound';
import React from 'react';

type Props = {
    items: HotBarType | undefined
    life: number
    setItems: Function
}

export default function HotBar({ items, setItems, life }: Props) {
    const [inspect, setInspect] = React.useState<number | undefined>(undefined)
    let pressTimer: null | number = null;
    let draggingPhase: boolean = false

    const DragPhase = (index: number) => {
        pressTimer = setTimeout(() => {
            draggingPhase = true
            setInspect(index)
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
    
    let durabilityVision=false
    if(items && items.artifacts.length !== 0) for(let i=0; i<items.artifacts.length;i++){
        if(items.artifacts[i].vision && items.artifacts[i].active) durabilityVision = true
    }
    for (let i = 0; i < 5; i++) {
        let el = items ? items.artifacts[i] : undefined
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
                        if (!el || !items) return
                        setItems({
                            ...items, artifacts: items.artifacts.map((item, j) => {
                                if (i === j) return { ...item, active: !item.active }
                                else return item
                            })
                        })
                        PlaySoundMp3("equip")
                    }
                    DragPhaseCancel()
                }}> 
                {el && iconSelectorObj[el.name.split(" ")[0]]}
                {el && <p>{el.power}</p>}
                {el && durabilityVision && <div className='durability-bar' style={{ width: (el.durability * 100) / el.totalDurability + "%" }}></div>}
            </button>
            {el && <span className='artifact-actions'>
                <li className='slot-action' onClick={() => {
                    if (!items) return
                    setItems({
                        ...items, artifacts: items.artifacts.filter((el, j) => {
                            if (i !== j) return el
                        })
                    })
                }}><FontAwesomeIcon icon={faTrash} />Tirar</li>
                <li className='slot-action' onClick={() => { setInspect(i) }}><FontAwesomeIcon icon={faMagnifyingGlass} />Info</li>
            </span>}
        </div>
        )
    }
    let xpResult = calculateXP(items ? items.level : 0)
    let totalForNext = xpResult.xpForNextLevel - xpResult.xpForCurrentLevel
    let progressXP = totalForNext - xpResult.remainingXP
    return <>
        {(inspect !== undefined && items) ? <div id='inspecting' className='shop-content'>
            <div className='inspect-div'
                style={{ color: RankColorSelector[items.artifacts[inspect].rank!] }}>
                <p>Rank {items.artifacts[inspect].rank}</p>
                <div className='icon'>
                    {iconSelectorObj[items.artifacts[inspect].name.split(" ")[0]]}
                </div>
                <div className='inspect-title'>
                    <FontAwesomeIcon icon={faCaretRight} />
                    <h3>{items.artifacts[inspect].name}</h3>
                    <FontAwesomeIcon icon={faCaretLeft} />
                </div>
                <hr></hr>
                <p>{items.artifacts[inspect].description}</p>
                <div className='inspect-action-zone'>
                    <button onClick={() => { PlaySoundMp3("routerButton"); 
                        setItems({
                            ...items, artifacts: items.artifacts.filter((el, j) => {
                                if (inspect !== j) return el
                            })
                        })
                        setInspect(undefined)
                    }}>Tirar</button>
                    <button onClick={() => { PlaySoundMp3("routerButton"); 
                        setInspect(undefined)
                    }}>Cerrar</button>
                </div>
            </div>
        </div>: null}
        <div className='hot-bar'>
            <div className='top-hot-bar'>
                <div className={life <= 10 ? 'life-container life-warning' : 'life-container'}>
                    <div className='life-bar' style={{
                        backgroundColor: generateLifeColor(life),
                        width: life + "%"
                    }}></div>
                </div>
                <div className='unit'><FontAwesomeIcon icon={faCoins} />{items ? items.coins : 0}</div>
                {/* <div className='unit'><FontAwesomeIcon icon={faBomb} />{items.bombs}</div>
                <div className='unit'><FontAwesomeIcon icon={faKey} />{items.keys}</div> */}
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