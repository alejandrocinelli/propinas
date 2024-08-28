import { useMemo } from "react"
import { OrdenItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProp = {
    reduce(arg0: (total: any, item: any) => any, arg1: number): any
    order: OrdenItem[]
    tips : number
    placeOrder: () => void
}

const OrderTotals = ( {order , tips , placeOrder} : OrderTotalProp ) => {
   
    const subtotalAcount = useMemo(() => 
        order.reduce((total, item) => total + (item.quantity * item.price), 0), 
        [order]
      );

      const tipsAcount = useMemo(() => 
      subtotalAcount*tips , 
        [tips ,order])
        const totalPay = useMemo(() => tipsAcount + subtotalAcount, [tips , order])
  return (
    <>
    <div className=" space-y-3">
        <h2 className="font-black text-2xl ">Totales y Propinas</h2>
        <p> Subtotal a pagar {""}
            <span className="font-black"> ${formatCurrency(subtotalAcount)}</span>
        </p>
        <p> Propinas {""}
            <span className="font-black"> ${formatCurrency(tipsAcount)}</span>
        </p>
        <p> Total a pagar {""}
            <span className="font-black"> ${formatCurrency(totalPay)}</span>
        </p>
    </div>
    <button className=" w-full bg-black text-white p-2 disable:opacity-10 uppercase mt-10 font-bold  rounded-md"
    disabled = {totalPay  === 0}
    onClick={placeOrder}
    >
         Guardar Orden
    </button>
</>

  )
}

export default OrderTotals