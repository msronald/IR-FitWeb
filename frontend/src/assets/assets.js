import logo from './logo.png'
import basket_icon from './basket_icon.png'
import search_icon from './search_icon.png'

import Accesorios from './Accesorios.jpg'
import Suplementos from './suplementos.jpg'
import PesasYBarras from './Pesas-Y-Barras.jpg'
import Equipamiento from './Equipamiento.jpg'

import BCAA from './BCAA-Optimum-Nutrition.png'
import SuperLipo from './BioTechUSA-Quema-Grasas.jpg'
import CreatinaUN from './Creatina-Ultimate-Nutrition.jpg'
import Colageno from './colageno-polvo-400x400.png'



export const assets ={
    logo,
    basket_icon,
    search_icon
}

export const categorias_productos =[
    {
        nombre_categoria: "Accesorios",
        imagen_categoria: Accesorios 
    },
    {
        nombre_categoria: "Suplementos",
        imagen_categoria: Suplementos
    },
    {
        nombre_categoria: "Pesas y barras",
        imagen_categoria: PesasYBarras
    },
    {
        nombre_categoria: "Equipamiento",
        imagen_categoria: Equipamiento
    }
]

export const lista_productos = [
    {
        nombre_producto: "Suplemento1",
        imagen_producto: BCAA
    },
    {
        nombre_producto: "Suplemento2",
        imagen_producto: SuperLipo
    },
    {
        nombre_producto: "Suplemento3",
        imagen_producto: CreatinaUN
    },
    {
        nombre_producto: "Suplemento4",
        imagen_producto: Colageno
    }

]