import { Dispatch } from "react"
import { OrderAction } from "../reducers/order-reducer"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPorcentajeFormProps ={

    dispatch: Dispatch<OrderAction>,
    tip:number
  }

  //Recorar siempre agregar los elementos dentro de la funcion, es como POO

export default function TipPorcentajeForm({dispatch,tip}:TipPorcentajeFormProps) {
  return (
    <div>
      <h3 className=" font-black text-2xl">Propina:</h3>

      <form >
        {tipOptions.map(tipOption=>(
            <div key={tipOption.id} className="flex gap-2">
                <label htmlFor={tipOption.id}>{tipOption.label}</label>
                <input 
                    type="radio" 
                    name="tip" 
                    value={tipOption.value} 
                    id={tipOption.id}
                    onChange={e=> dispatch({type:'add-tip',payload:{value:+e.target.value}})}
                    checked={tipOption.value===tip}
                    />
            </div>
        ))}
        
      </form>
    </div>
  )
}
