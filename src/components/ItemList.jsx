import Item from './Item'

const ItemList=({items}) => {
    return (
        <>
            {items.map(prod =><Item key ={prod.id}{...prod}/> )}
        </>
    )
}
export default ItemList