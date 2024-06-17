import { formatCurrency } from "../helpers"
import {  OrderItem } from "../types"
import { Dispatch } from "react"
import { OrderAction } from "../reducers/order-reducer"

type OrderContentsProps={
    order:OrderItem[],
    dispatch: Dispatch<OrderAction>
}

export default function OrderContents( {order,dispatch} : OrderContentsProps) {
  return (
    <div>
        <h2 className=' font-black  text-4xl text-center'> Consumo</h2>

        <div className="space-y-3 mt-10">
            { order.map(item=>(
                    <div 
                        key={item.id}
                        className=" flex  justify-between border-t border-gray-200  py-5  peer-last-of-type:end items-center"
                    >

                             <div>
                            <p className=" text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className=" font-black"> Cantidad:{item.cantidad} {formatCurrency(item.price * item.cantidad)}</p>
                            </div>
                            <button className=" bg-red-600 h-8 w-8 rounded-full text-white font-black" onClick={() => {     
                                return( dispatch({type:'remove-item',payload:{item:item.id}}) )   
                            }}>
                                X</button>
                         
                    </div>
                ))  //El operador ternario evalua si hay elemento o no, al ver que hay los va agregando

        
            
            }

        </div>
    </div>
  )
}
