import { useMemo } from 'react'

import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type OrderTotalProps={
  order:OrderItem[],
  tip:number,
  placeOrder: () =>void

}

export default function OrderTotals( {order,tip,placeOrder}:OrderTotalProps) {

  const subTotalAmmount = useMemo(() =>order.reduce((total,item)=>total + 
  (item.cantidad *item.price),0),[order])

  const tipAmount= useMemo(()=>subTotalAmmount * tip,[tip,order])
  const totalAmount= useMemo(()=>subTotalAmmount +tipAmount,[tip,order])

  return (
  <>
    
    <div className=' space-y-3'>
        <h2 className=' font-black  text-2xl'> Totales y Propinas:</h2>
        <p>Subtotal a pagar:
            <span className=' font-bold'> {formatCurrency(subTotalAmmount)}</span>
        </p>

        <p>Propina:
            <span className=' font-bold'> {formatCurrency(tipAmount)}</span>
        </p>

        <p>Total a Pagar:
            <span className=' font-bold'> {formatCurrency(totalAmount)}</span>
        </p>

    </div>

    <button
    className=' w-full  bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10'
    disabled={totalAmount===0}
    onClick={placeOrder}
    >
      Guardar Orden
    </button>
    
  </>
  )
}
