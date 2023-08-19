const products = [
{
    id:"1",
    name:"Cortante numeros y signos",
    price:"1200",
    category:"cortantes",
    img:"https://tienda.elnuevoemporio.com.ar/digistore/pictures/Articulo/webp/1530-29580-thumb.webp",
    stock: 15,
    description:"Descripción",
},

{
    id:"2",
    name:"Molde Panettone",
    price:"3500",
    category:"moldes",
    img:"https://tienda.elnuevoemporio.com.ar/digistore/pictures/Articulo/webp/377-83355-medium.webp",
    stock: 30,
    description:"Descripción",
},

{
    id:"3",
    name:"Picos Rusos",
    price:"1000",
    category:"boquillas",
    img:"https://tienda.elnuevoemporio.com.ar/digistore/pictures/Articulo/webp/1115-29113-medium.webp",
    stock: 50,
    description:"Descripción",
},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}