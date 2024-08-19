import { MenuItem } from "../types"

type MenuItemProp = {
    item : MenuItem
    addItem: (item : MenuItem) => void
}

function MenuItems ({item, addItem} : MenuItemProp) {
  return (
    <>
    <button className=" border-2 border-teal-400 hover:border-teal-200 hover:bg-red-100 w-full p-3 flex justify-between "
    onClick={() => addItem(item)}
    >
         <p>{item.name}</p>
        <p className=" font-black">${item.price}</p>
    
    </button>
   </>
  )
}

export default MenuItems