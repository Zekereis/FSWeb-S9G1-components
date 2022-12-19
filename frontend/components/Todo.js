import React from 'react'


export default function Todo(props) {
  const { item , updateIt,mevcutlar} = props;
  const handleClick = () => {
    const mevcutlarCpoy = [ ...mevcutlar];
    mevcutlarCpoy.filter(oge => oge.id === item.id)[0].tamamlandi = !item.tamamlandi;
    updateIt(mevcutlarCpoy);
  }
    return (
      <div>
        <li onClick={handleClick}>{item.isim} {item.tamamlandi ? "(ok)" : ""}</li>
      </div>
    )
}
