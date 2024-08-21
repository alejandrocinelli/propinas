import { useMemo } from "react"
import { OrdenItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProp = {
    reduce(arg0: (total: any, item: any) => any, arg1: number): any
    order: OrdenItem[]
}

const OrderTotals = ( {order} : OrderTotalProp ) => {
   
    const subtotalAcount = useMemo(() => 
        order.reduce((total, item) => total + (item.quantity * item.price), 0), 
        [order]
      );
  return (
    <div className=" space-y-3">
        <h2 className="font-black text-2xl ">Totales y Propinas</h2>
        <p> Subtotal a pagar {""}
            <span className="font-black"> {formatCurrency(subtotalAcount)}</span>
        </p>
        <p> Propinas {""}
            <span className="font-black"> $0</span>
        </p>
        <p> Total a pagar {""}
            <span className="font-black"> $0</span>
        </p>
    </div>
  )
}

export default OrderTotals