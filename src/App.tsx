import { menuItems } from "./db/db"
import MenuItems from "./componentes/MenuItems"
import useOrder from "./hook/userOrder"
import OrderContens from "./componentes/orderContens"

function App() {
 
  const { addItem , order} = useOrder()

  return (
    <>
        <header className=" bg-teal-400 py-5" >
          <h1 className=" text-center text-4xl font-semibold">
            Calculadora de Propinas
          </h1>
        </header>

        <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
         
          <div className="p-5">
            <h2 className=" text-4xl font-black">Menu</h2>
            <div className=" space-y-3 mt-10">
                {menuItems.map(item => 
            ( <MenuItems 
            key={ item.id} 
            item = {item}
            addItem={ addItem}
            />) )}
            </div>
         
          </div>

          <div className=" border border-dashed border-slate-400 p-5 space-y-10 rounded-lg ">
              <OrderContens
              order = {order}
              />

          </div>
        
        </main>
    </>
  )
}

export default App
