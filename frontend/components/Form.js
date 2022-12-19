import React,{useState} from 'react'

export default function Form(props) {
  const {doSubmit,current} = props;
  const [newToDo, setNewToDo] = useState("");
  const handleChange = (event) => {
    setNewToDo(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newToDo);
    doSubmit([
      ...current,
      {isim: newToDo,
      id: Date.now(),
      tamamlandi: false}
    ]);
    setNewToDo("")

  }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="newTodo" placeholder="type to do" onChange={handleChange} value={newToDo} />
        <input type="submit" value="ekle" disabled={newToDo === ""} />
      </form>
    )
}
