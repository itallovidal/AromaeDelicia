export function filtraValores(valorItem: number, valorFiltro: string) {
    switch (valorFiltro){
        case "$":
            return valorItem >= 0 && valorItem <= 10
        case "$$":
            return valorItem > 10 && valorItem <= 15
        case "$$$":
            return valorItem > 15 && valorItem < 20
        case "$$$$":
            return valorItem >= 20
    }
}

export function filtraTempo(valorItem: number, valorFiltro: string) {
    switch (valorFiltro){
        case "+15min":
            return valorItem >= 15 && valorItem <= 25
        case "+25min":
            return valorItem > 25 && valorItem <= 35
        case "+35min":
            return valorItem > 35 
    }
}
