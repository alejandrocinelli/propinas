import { useState } from "react";
import { MenuItem, OrdenItem } from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrdenItem[]>([]);

    const addItem = (item: MenuItem) => {
        
        const itemExist = order.find(ordenItem => ordenItem.id === item.id)
        if(itemExist) {
            const udpateOrder = order.map(orderItem => orderItem.id === item.id
                 ? { ...orderItem, quantity : orderItem.quantity + 1} : orderItem
             )
             setOrder(udpateOrder)
             //console.log(order)
        }

        else {
            const newOrder = { ...item, quantity: 1 };
        setOrder([...order, newOrder]);
        
        }

    };

    return {
        addItem, order
    };
}
