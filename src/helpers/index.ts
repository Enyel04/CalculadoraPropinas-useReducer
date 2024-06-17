export function formatCurrency(cantidad:number) {
    return new Intl.NumberFormat("en-US" ,{
    style: "currency", currency:"USD"
    }).format(cantidad) 

    //Exto toma el valor para volverlo a dolar
}