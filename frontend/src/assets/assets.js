import logo from './logo.png'
import basket_icon from './basket_icon.png'
import search_icon from './search_icon.png'
import rating_starts from './rating_starts.png'
import add_icon_white from './add_icon_white.png'
import remove_icon_red from './remove_icon_red.png'
import add_icon_green from './add_icon_green.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import linkedin_icon from './linkedin_icon.png'
import cross_icon from './cross_icon.png'
import profile_icon from './profile_icon.png'
import logout_icon from './logout_icon.png'
import bag_icon from './bag_icon.png'

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
    search_icon,
    rating_starts,
    add_icon_white,
    remove_icon_red,
    add_icon_green,
    facebook_icon,
    twitter_icon,
    linkedin_icon,
    cross_icon,
    profile_icon,
    logout_icon,
    bag_icon
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
        _id: 0,
        nombre: "BCAA 1000mg 400 capsulas",
        precio: 150,
        descripcion: 'Aminoácidos de cadena ramificada para mayor rendimiento',
        imagen_producto: BCAA,
        categoria: 'Suplementos'
    },
    {
        _id: 1,
        nombre: "SuperLipo Quema Grasas 120 tabletas",
        precio: 99,
        descripcion: 'Suplemento para quemar grasas',
        imagen_producto: SuperLipo,
        categoria: 'Suplementos'
    },
    {
        _id: 2,
        nombre: "Creatina Monohidratada",
        precio: 200,
        descripcion: 'Para mayor fuerza muscular y rendimiento físico',
        imagen_producto: CreatinaUN,
        categoria: 'Suplementos'
    },
    {
        _id: 3,
        nombre: "Colágeno hidrolizado Complementa",
        precio:65,
        descripcion: 'Beneficia al funcionamiento de huesos, articulaciones, tendones y piel',
        imagen_producto: Colageno,
        categoria: 'Suplementos'
    }

]