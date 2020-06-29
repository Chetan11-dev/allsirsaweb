import firebase from 'firebase'
import { ModelOrder } from './../models/ModelOrder'
import Product from './../../components/product/Product'
import { ModelProduct as ModelProduct } from '../models/ModelProduct'
import { ModelCategoryList } from '../models/ModelCategory'


const sellers = [
    {
        categories: [
            'milk',
            'pulses',
            'groceries'
        ],
        name: 'Ratu',
        phone: '999'
        , id: '1',
    },
    {
        phone: '777',
        categories: [
            'milk'
        ],
        name: 'Chandra',
        id: '2',
    }
]

const products: ModelProduct[] = [{
    category: 'grocery & staples',
    variations: [
        {
            price: 70,
            value: 1
        }
    ],
    unit: 'kg',
    subcategory: 'pulses',
    productimage: 'https://firebasestorage.googleapis.com/v0/b/allsirsa.appspot.com/o/15da1e5f-e87e-4d16-b83f-f39f556018fc?alt=media&token=c69e4bc8-0a6f-478e-8b1e-c333df05f0c0',
    sid: '1',
    id: '11',
    title: 'arhar dal'
}, {
    category: 'personal care',
    id: '12',
    variations: [
        {
            price: 70,
            value: 20
        }
    ],
    unit: 'ml',
    subcategory: 'face care',
    productimage: 'https://firebasestorage.googleapis.com/v0/b/allsirsa.appspot.com/o/15da1e5f-e87e-4d16-b83f-f39f556018fc?alt=media&token=c69e4bc8-0a6f-478e-8b1e-c333df05f0c0',
    sid: '2',
    title: 'himalya face pack'
}, {
    category: 'biscuits, snacks & chocolates',
    id: '13',
    variations: [
        {
            price: 25,
            value: 25
        }
    ],
    unit: 'ml',
    subcategory: 'juices & drinks',
    productimage: 'https://firebasestorage.googleapis.com/v0/b/allsirsa.appspot.com/o/15da1e5f-e87e-4d16-b83f-f39f556018fc?alt=media&token=c69e4bc8-0a6f-478e-8b1e-c333df05f0c0',
    sid: '3',
    title: 'fruit juice'
}]

const orders: ModelOrder[] = [{
    sid: '1',
    id: '25',
    units: 2,
    product: products[1],
    status: 'pending',
    createdAt: new firebase.firestore.Timestamp(1562524200, 0),
}, {
    sid: '1',
    id: '26',
    units: 2,
    product: products[1],
    status: 'pending',
    createdAt: new firebase.firestore.Timestamp(1562524200, 0),
}]

const categories: ModelCategoryList = {
    categories: [
        {
            image: 'imagee',
            name: 'Grocery & Staples',
            subcategories: [
                'Pulses',
                'Atta & Other Flours',
                'Rice & Other Grains',
                'Dry Fruits & Nuts',
                'Edible Oils',
                'Ghee & Vanaspati',
                'Spices',
                'Salt & Sugar',
                'Organic Staples'
            ]
        },
        {
            image: 'imagee',
            name: 'Personal Care',
            subcategories: [
                'Safety Must Haves',
                'Bath & Body',
                'Hair Care',
                'Skin Care',
                'Oral Care',
                'Fragrances',
                'Face Care',
                'Feminine Hygiene',
                'Men\'s Grooming',
                'Health And Wellness',
                'Cosmetics'
            ]
        },
        {
            image: 'imagee',
            subcategories: [
                'Chocolates & Candies',
                'Namkeen & Snacks',
                'Chips & Crisps',
                'Sweets',
                'Biscuits & Chocolates Offers Cold Drinks',
                'Juices & Drinks',
                'Tea & Coffee',
                'Health & Energy Drinks',
                'Water & Soda',
                'Milk Drinks'
            ],
            name: 'Biscuits, Snacks & Chocolates'
        },
        {
            name: 'Household Items',
            image: 'imagee',
            subcategories: [
                'Household Best Offers',
                'Laundry Detergents',
                'Dishwashers',
                'Cleaners',
                'Repellents',
                'Pooja Needs',
                'Home & Car Fresheners',
                'Tissues & Disposables',
                'Shoe Care',
                'Disinfectants'
            ]
        }
    ]
}



export const data = {
    orders,
    products,
    sellers,
    categories
}