import DataTable from 'react-data-table-component';
import product1 from "./assets/eco_smart_wifi_balline.png";
import product2 from "./assets/Orman_metalik.png";
import product3 from "./assets/DN25-1.jpg";
import product4 from "./assets/GJ.lidhse 26-1.jpg";
import product5 from "./assets/termostrat1.jpg";
import product6 from "./assets/kolektor_1_ITAP.png";
import product7 from "./assets/set per mbushje.zbrazje.ajrosje.jpeg"
import product8 from "./assets/1-horganyzott-BB-hollander.jpg";
import product9 from "./assets/Kthes e zinktuar 1.jpg";
import product10 from "./assets/Gypi 5 shtresor.png";
import product11 from "./assets/Aluminum foil.jpg";
import product12 from "./assets/shina.jpg";
import product13 from "./assets/Klipsa.png";
import product14 from "./assets/kabllo per termostrat.jpg";
import product15 from "./assets/Shiriti metalik.jpg";
import product16 from "./assets/Gozhda betoni.png";

export const rreshtat = [
    {
        name: 'Produkti',
        selector: row => <img width={150} height={150} object-fit={0} src={row.productImage}/>,
    },
    {
    name: 'Emri',
    selector: row => row.productName
    },
    {
        name: 'Njesia',
        selector: row => row.njesia
    },
    {
        name: 'çmimi',
        selector: row => row.price
    },

]

export const PRODUCTS = [
    {
        id: 1,
        productName: 'Kaldaja Elektrike Modulare Q=15 kW',
        price: 999.0,
        njesia: 'Copë:',
        productImage: product1,
        
    },

    {
        id: 2,
        productName: 'Kaldaja Elektrike Modulare Q=12 kW',
        price: 999.0,
        njesia: 'Copë:',
        productImage: product1,
        
    },

    {
        id: 3,
        productName: 'Kaldaja Elektrike Modulare Q=9.0 kW',
        price: 999.0,
        njesia: 'Copë:',
        productImage: product1,
        
    },

    {
        id: 4,
        productName: 'Ormani metalik 650x450x110mm',
        price: 1999.0,
        njesia: 'Copë:',
        productImage: product2
    },

    {
        id: 5,
        productName: 'Valvol sferike me holander DN 25 - 1"',
        price: 799.0,
        njesia: 'Copë:',
        productImage: product3
    },

    {
        id: 6,
        productName: 'Gj. Lidhese 26 - 1"',
        price: 799.0,
        njesia: 'Copë:',
        productImage: product4
    },

    {
        id: 7,
        productName: 'Termostrat (kabllo 2x0.75 mm2)',
        price: 799.0,
        njesia: 'Copë:',
        productImage: product5
    },

    {
        id: 8,
        productName: 'Kolektoret 1" ITAP',
        price: 799.0,
        njesia: 'Vrim:',
        productImage: product6
    },

    {
        id: 9,
        productName: 'Seti per mbushje/zbrazje dhe ajrosje',
        price: 799.0,
        njesia: 'Setë:',
        productImage: product7
    },

    {
        id: 10,
        productName: 'Holander 1" I zinktuar',
        price: 799.0,
        njesia: 'Copë:',
        productImage: product8
    },

    {
        id: 11,
        productName: 'Kthes Niple e zinkuar 1"',
        price: 799.0,
        njesia: 'Copë:',
        productImage: product9
    },

    {
        id: 12,
        productName: 'Gypi 5 shtresor (t=95°C dhe p=10 bar pe-rt 16x2 mm)',
        price: 799.0,
        njesia: 'm:',
        productImage: product10
    },

    {
        id: 13,
        productName: 'Gypi 5 shtresor (t=95°C dhe p=10 bar pe-rt 26x3 mm)',
        price: 799.0,
        njesia: 'm:',
        productImage: product10
    },

    {
        id: 14,
        productName: 'Alufolia termike',
        price: 799.0,
        njesia: 'm²:',
        productImage: product11
    },

    {
        id: 15,
        productName: 'Shina per perforcimin e gypave',
        price: 799.0,
        njesia: 'm:',
        productImage: product12
    },

    {
        id: 16,
        productName: 'Mberthyese per fiksimin e gypave',
        price: 799.0,
        njesia: 'Copë:',
        productImage: product13
    },

    {
        id: 17,
        productName: 'Kabllo per termostrat (3x1.5mm)',
        price: 799.0,
        njesia: 'm:',
        productImage: product14
    },

    {
        id: 18,
        productName: 'Shiriti metalik',
        price: 799.0,
        njesia: 'Copë:',
        productImage: product15
    },

    {
        id: 19,
        productName: 'Gozhda betoni M6',
        price: 799.0,
        njesia: 'Copë:',
        productImage: product16
    },

]