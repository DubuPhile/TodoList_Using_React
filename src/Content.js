import ItemList from "./itemList"

const Content = ({ lists, handleChecked, handleDelete }) => {
  return (
    <main>
        {lists.length ? (
            <ItemList 
                lists = {lists}
                handleChecked ={handleChecked}
                handleDelete = {handleDelete}
            />
        ): <h3 style = {{marginTop:'2rem', marginBottom: "2rem" }}>Your List is Empty</h3>}
    </main>
  )
}

export default Content