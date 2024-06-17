import { MenuItem, OrderItem } from "../types";

export type OrderAction=
  {type: "add-item", payload:{item:MenuItem}} |
  {type: "remove-item", payload:{item:MenuItem['id']}} |
  {type: "place-order"}|
  {type: 'add-tip', payload: {value:number}}


export type OrderState={
    order:OrderItem[],
    tip:number
}

export const initialState= {
    order:[],
    tip: 0
}

export const orderReducer= (
    state:OrderState= initialState,
    action:OrderAction
    ) => {
        if (action.type ==='add-item') {

            const itemExist=state.order.find(orderItem=>orderItem.id === action.payload.item.id)
            let order: OrderItem[] =[]

            if (itemExist) {
                order=state.order.map(orderItem=> orderItem.id=== action.payload.item.id ? 
                    {...orderItem,cantidad:orderItem.cantidad+1}  : 
                   orderItem
                )
             
                
            }
            else{
                const newItem: OrderItem  ={...action.payload.item, cantidad:1 }
                order=[...state.order, newItem]
            }

            return {
                ...state,
                order
            }
            
        }
        if (action.type ==='add-tip') {
            return {
                ...state
            }
        }
        if (action.type ==='place-order') {
            return {
                ...state
            }
            
        }
        if (action.type ==='remove-item') {

           let order=state.order.filter(item =>item.id !==action.payload.item)
            return {
                ...state,
                order
            }
        }

        return state
    
    }