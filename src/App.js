import { useState } from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './footer';
import AddItem from './addItem.js';
import ProgressBar from './progressBar.js';
function App() {
  const [lists, setLists] = useState(JSON.parse(localStorage.getItem('todoList')));
  const [newList, setNewList] = useState('');

  const addList = (list) => {
    const id = lists.length ? lists[lists.length -1].id + 1 : 1;
    const myNewList = {id, isChecked:false, todoList: list};
    const listItems = [...lists, myNewList];
    setAndSaveList(listItems);
  }
  const completedCount = lists.filter(list => list.isChecked).length;
  const totalCount = lists.length;
  const progress = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const setAndSaveList = (newList) => {
    setLists(newList);
    localStorage.setItem('todoList', JSON.stringify(newList));
  }

  const handleChecked = (id) => {
    const listItems = lists.map((list) => list.id === id ? {...list, isChecked: !list.isChecked} : list);
    setAndSaveList(listItems);
  };

  const handleDelete = (id) => {
    const listItems = lists.filter((list) => list.id !== id);
    setAndSaveList(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedNewList = newList.toLowerCase();
    const OldList = lists.find(list => list.todoList.toLowerCase() === formattedNewList)
    if(!newList || OldList) return alert('This is already on the List');
    addList(newList);
    setNewList('');
  }
  return (
    <>
    <Header title='TodoList'
    />
    <AddItem 
      newList = {newList}
      setNewList = {setNewList}
      handleSubmit = {handleSubmit}
    />
    <Content
      lists = {lists.filter(list => ((list.todoList).toLowerCase()).includes(newList.toLowerCase()))}
      handleChecked = {handleChecked}
      handleDelete={handleDelete}
    />
    <ProgressBar progress={progress} />
    <Footer length = {lists.length}/>
    </>
  )
}

export default App;
