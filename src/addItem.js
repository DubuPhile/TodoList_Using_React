import { FaPlus } from "react-icons/fa"

const addItem = ({newList, setNewList, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addList'>Add Item</label>
        <input 
            autoFocus id ="addList"
            type = "text"
            placeholder='Add List' required
            value={newList}
            onChange = {(e) => setNewList(e.target.value)}
        />
        <button
            type ='submit'
            aria-label='add Item'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default addItem