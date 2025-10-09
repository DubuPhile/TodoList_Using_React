import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({newList, setNewList, handleSubmit}) => {
  const InputRef = useRef();
  
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addList'>Add Item</label>
        <input 
            autoFocus 
            ref = {InputRef}
            id ="addList"
            type = "text"
            placeholder='Add List' required
            value={newList}
            onChange = {(e) => setNewList(e.target.value)}
        />
        <button
            type ='submit'
            aria-label='add Item'
            onClick={() => InputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem