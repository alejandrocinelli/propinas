import { useState } from "react";
import { MenuItem, OrdenItem } from "../types";

export default function useOrder () {

    const [order, setOrder]  = useState <OrdenItem[]> ([])

    const addItem = (item : MenuItem) => {
        console.log("adding..." + item.name)
    }
    return {
        addItem
    }

}

