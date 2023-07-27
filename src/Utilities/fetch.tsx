export async function getProducts(categoria : string){
    const response = await fetch('/data/data.json')
    const data = await response.json()
    return data[categoria]
}