export const data = {
    products: [{
        category: 'Grocery & Staples',
        variations: [
            {
                price: 70,
                value: 1
            }
        ],
        unit: 'Kg',
        subcategory: 'Pulses',
        productimage: 'https://firebasestorage.googleapis.com/v0/b/allsirsa.appspot.com/o/15da1e5f-e87e-4d16-b83f-f39f556018fc?alt=media&token=c69e4bc8-0a6f-478e-8b1e-c333df05f0c0',
        sid: 1,
        id: 11,
        title: 'Arhar dal'
    }, {
        category: 'Personal Care',
        id: 12,
        variations: [
            {
                price: 70,
                value: 20
            }
        ],
        unit: 'ml',
        subcategory: 'Face Care',
        productimage: 'https://firebasestorage.googleapis.com/v0/b/allsirsa.appspot.com/o/15da1e5f-e87e-4d16-b83f-f39f556018fc?alt=media&token=c69e4bc8-0a6f-478e-8b1e-c333df05f0c0',
        sid: 2,
        title: 'Himalya Face Pack'
    }, {
        category: 'Biscuits, Snacks & Chocolates',
        id: 13,
        variations: [
            {
                price: 25,
                value: 25
            }
        ],
        unit: 'ml',
        subcategory: 'Juices & Drinks',
        productimage: 'https://firebasestorage.googleapis.com/v0/b/allsirsa.appspot.com/o/15da1e5f-e87e-4d16-b83f-f39f556018fc?alt=media&token=c69e4bc8-0a6f-478e-8b1e-c333df05f0c0',
        sid: 3,
        title: 'Fruit Juice'
    }],
    sellers: [
        {
            categories: [
                'milk',
                'pulses',
                'groceries'
            ],
            name: 'Ratu',
            phone: '999'
            , id: 1,
        },
        {
            phone: '777',
            categories: [
                'milk'
            ],
            name: 'Chandra',
            id: 2,
        }
    ],
    categories: {
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
}