let invoice = {
    name: "João",
    age: 26,
    products: {
        0: ["Mouse 2xwm", 29.99],
        1: ["Teclado mecanico", 129.99],
        2: ["Monitor", 899.99]
    },
    taxes: "98.99"
}

generateInvoice(invoice)

function generateInvoice(invoice){
	console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("------------")

    for(let index in invoice.products) {
        let[productName, productPrice] = invoice.products[index] //Estamos pegando os valores do NomeProduto e ValorProduto e guardando nas variaves.
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}