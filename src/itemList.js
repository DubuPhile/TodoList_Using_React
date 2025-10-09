import { FaTrashAlt } from "react-icons/fa";

const itemList = ({ lists, handleChecked, handleDelete }) => {
  return (
    <ul>
        {lists.map((list) => (
            <li className = "list" key = {list.id}>
                <input
                    type ="checkbox"
                    onChange = {() => handleChecked(list.id)}
                    checked = {list.isChecked}
                />
                <label
                    style = {(list.isChecked) ? {textDecoration: "line-through"}: null}
                    onDoubleClick={() => handleChecked(list.id)}
                >{list.todoList}</label>
                <FaTrashAlt
                    onClick={() => handleDelete(list.id)}
                    role = "button"
                    tabIndex = "0"
                    aria-label={`delete ${list.todoList}`}
                />
            </li>
        ))}
    </ul>
  )
}

export default itemList