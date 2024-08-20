import { formatCurrency } from "../helpers"
import { OrdenItem } from "../types"

type orderContensProp ={
    order : OrdenItem []
}

const OrderContens = ({order} : orderContensProp) => {

  return (
    <div>
        <h2 className=' font-black text-4xl'>Consumo</h2>

        <div className=" space-y-3 mt-10 ">
        {order.length == 0 ? 
        <p>la orden esta vacia</p>
        : (order.map(
            order => <div className="flex items-center justify-between border-t border-gray-200 py-5  last-of-type:border-b"
                 key={order.id}>
                    <div>
                        <p className=" text-base ">{order.name} - {formatCurrency(order.price)}</p> 
                        <p className=" font-black">Cantidad: {order.quantity} -- {formatCurrency(order.quantity*order.price) }</p>
                    </div>
                
                <button className=" bg-red-600 h-8 w-8 text-white rounded-full font-black ">
                    X
                </button>
            </div>
         ))
        }
        </div>
    </div>
  )
}

export default OrderContens