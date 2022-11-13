import donut1 from '../images/donuts/donut1.png';
import donut2 from '../images/donuts/donut2.png';
import donut3 from '../images/donuts/donut3.png';
import donut4 from '../images/donuts/donut4.png';
import donut5 from '../images/donuts/donut5.png';
import donut6 from '../images/donuts/donut6.png';
import donut7 from '../images/donuts/donut7.png';
import dessert1 from '../images/desserts/dessert1.png';
import dessert2 from '../images/desserts/dessert2.png';
import dessert3 from '../images/desserts/dessert3.png';
import dessert4 from '../images/desserts/dessert4.png';
import dessert5 from '../images/desserts/dessert5.png';
import dessert6 from '../images/desserts/dessert6.png';
import cookie1 from '../images/cookies/cookie1.png';
import cookie2 from '../images/cookies/cookie2.png';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { GoPackage } from 'react-icons/go';
import { GiDoughRoller } from 'react-icons/gi';

export const products = ['donuts', 'desserts', 'cookies'];

const donutList = [
    {
        img: donut1,
        name: 'Glazed Donut',
        price: '2.49',
        id: 1
    },
    {
        img: donut2,
        name: 'Chocolate Donut',
        price: '2.79',
        id: 2
    },
    {
        img: donut3,
        name: 'Nutella Filled Donut',
        price: '3.29',
        id: 3
    },
    {
        img: donut4,
        name: 'Tiramisu Filled Donut',
        price: '3.49',
        id: 4
    },
    {
        img: donut5,
        name: 'Blueberry Donut',
        price: '2.79',
        id: 5
    },
    {
        img: donut6,
        name: 'Pistachio Donut',
        price: '2.89',
        id: 6
    },
    {
        img: donut7,
        name: 'Coconut Donut',
        price: '2.69',
        id: 7
    }
];

const desertList = [
    {
        img: dessert1,
        name: 'Raspberry Cheesecake',
        price: '3.49',
        id: 8
    },
    {
        img: dessert2,
        name: 'Lemon Cheesecake',
        price: '3.79',
        id: 9
    },
    {
        img: dessert3,
        name: 'Caramel Cheesecake',
        price: '3.39',
        id: 10
    },
    {
        img: dessert4,
        name: 'Oreo Cheesecake',
        price: '3.89',
        id: 11
    },
    {
        img: dessert5,
        name: 'Tiramisu',
        price: '3.99',
        id: 12
    },
    {
        img: dessert6,
        name: 'Banoffee Pie',
        price: '3.99',
        id: 13
    }
];

const cookieList = [
    {
        img: cookie1,
        name: 'Vanilla Cookie',
        price: '1.49',
        id: 14
    },
    {
        img: cookie2,
        name: 'Chocolate Cookie',
        price: '1.79',
        id: 15
    }
];

export const sections = [donutList, desertList, cookieList];

export const features = [
    {
        icon: <MdOutlineDeliveryDining />,
        title: 'Nationwide Delivery',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        button: 'Shop Now'
    },
    {
        icon: <GoPackage />,
        title: 'Carefully Packaged',
        desc: 'Quisque fermentum tellus nunc, sed pretium libero efficitur in. Nulla id finibus quam.',
        button: 'More Info'
    },
    {
        icon: <GiDoughRoller />,
        title: 'Made by Hand',
        desc: 'Quisque iaculis lacus at elit elementum ullamcorper.',
        button: 'Learn More'
    }
];