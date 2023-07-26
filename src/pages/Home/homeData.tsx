import cafe1_src from '../../assets/Home/cafe-1.jpg'
import cafe2_src from '../../assets/Home/cafe-2.jpg'

import type_src1 from '../../assets/Home/xicara1.png'
import type_src2 from '../../assets/Home/xicara2.png'
import type_src3 from '../../assets/Home/xicara3.png'

import res_src1 from '../../assets/Home/botafogo.jpg'
import res_src2 from '../../assets/Home/mineirao.jpg'
import res_src3 from '../../assets/Home/iguatemi.jpg'

export const misturaItens = [
    {src: cafe1_src, text: 'amor'},
    {src: cafe2_src, text: 'perfeição'},
]

export const cafeTypes = [
    {src: type_src1, type: 'Paulista',  text: 'O Café Paulista carrega consigo um senso de tradição e história, uma homenagem à rica herança cafeeira do Brasil. É uma bebida que transcende o simples ato de tomar café, tornando-se parte da identidade e cultura do povo paulista.'},

    {src: type_src2, type: 'Carioca',  text: 'Primeiramente, o método de preparo mais comum é o espresso. Apreciado por sua praticidade e intensidade, o café espresso é uma escolha popular entre os cariocas que apreciam um sabor forte e marcante em uma pequena dose. '},
    {src: type_src3, type: 'Mineiro',  text: 'O "cafezinho", carinhosamente chamado, é um verdadeiro símbolo da hospitalidade mineira. Servido em xícaras pequenas e geralmente adoçado, o cafezinho é a forma de compartilhar momentos de convívio com amigos e familiares.'},
]

export const restaurantes = [
    {src: res_src1, name: 'Botafogo',  text: 'Localizada em uma das regiões mais vibrantes e culturais da cidade, esta cafeteria é um verdadeiro refúgio para os apreciadores de café e para aqueles que buscam momentos de relaxamento e inspiração.'},

    {src: res_src2, name: 'Mineirão',  text: 'Evocando o clima acolhedor das tradicionais fazendas de Minas Gerais, as paredes com tijolos aparentes e as cores quentes criam uma atmosfera convidativa, transportando os clientes para o interior mineiro sem sair do Rio de Janeiro.'},

    {src: res_src3, name: 'Iguatemi',  text: 'A decoração da Café Encanto é aconchegante e convidativa, com um toque moderno e elegante. A paleta de cores é composta por tons suaves e naturais, criando um ambiente relaxante e tranquilo, ideal para momentos de pausa e descontração. '},
]
