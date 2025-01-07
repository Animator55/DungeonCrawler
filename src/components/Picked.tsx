type Props = {
    loot: any[]
}

export default function Picked({loot}: Props) {
  return <div className="pick-ups" style={{animationDelay: (loot.length * (300 + 100) + 100)+ "ms"}}>
    {loot.map((el, i)=>{
        return <li key={Math.random()} style={{animationDelay: i * 100 + "ms"}}>
            +1 {el.name}
        </li>
    })}
  </div>
}