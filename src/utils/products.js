const products = [
    {
        id: 1,
        name: "Sorrentinos de ricota, jamón y nuez x 15u",
        price: 900,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456932/IMG-0673_prlrgt.jpg",
        category: {
            name: "Pastas",
            id: 1,
        }
    },
    {
        id: 2,
        name: "Sorrentinos de pollo, espinaca y muzzarella x 15u",
        price: 900,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456930/IMG-0670_ibvq3r.jpg",
        category: {
            name: "Pastas",
            id: 1,
        }
    },
    {
        id: 3,
        name: "Sorrentinos de ricota, verdura, muzzarella y reggianito x 15u",
        price: 900,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456942/IMG-0665_ktuqbs.jpg",
        category: {
            name: "Pastas",
            id: 1,
        }
    },
    {
        id: 4,
        name: "Ñoquis de papa x 1Kg",
        price: 850,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456934/IMG-0684_zozl1i.jpg",
        category: {
            name: "Pastas",
            id: 1,
        }
    },
    {
        id: 5,
        name: "Queso reggianito rallado x 250g",
        price: 500,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456928/IMG-0650_zwawxa.jpg",
        category: {
            name: "Extras",
            id: 2,
        }
    },
    {
        id: 6,
        name: "Crema Tregar x 350g",
        price: 500,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456944/IMG-0647_fmnjbg.jpg",
        category: {
            name: "Extras",
            id: 2,
        }
    },
    {
        id: 7,
        name: "Salsa fileto x 250g",
        price: 500,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456940/IMG-0648_esbijv.jpg",
        category: {
            name: "Extras",
            id: 2,
        }
    },
    {
        id: 8,
        name: "Tiramisú x 300g",
        price: 650,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456928/IMG-0638_i5m9je.jpg",
        category: {
            name: "Extras",
            id: 2,
        }
    },
    {
        id: 9,
        name: "Vino tinto Benjamín Nieto Senetiner Malbec x 750mL",
        price: 750,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456938/IMG-0712_czklpl.jpg",
        category: {
            name: "Bebidas",
            id: 3,
        }
    },
    {
        id: 10,
        name: "Vino blanco Benjamín Nieto Senetiner Dulce x 750mL",
        price: 750,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456930/IMG-0713_yfke3z.jpg",
        category: {
            name: "Bebidas",
            id: 3,
        }
    },
    {
        id: 11,
        name: "Coca-Cola regular x 1,5L",
        price: 450,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456940/IMG-0716_fg8nwg.jpg",
        category: {
            name: "Bebidas",
            id: 3,
        }
    },
    {
        id: 12,
        name: "Aquarius pomelo x 1,5L",
        price: 400,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456945/IMG-0715_k5tepx.jpg",
        category: {
            name: "Bebidas",
            id: 3,
        }
    },
    {
        id: 13,
        name: "Cepita naranja x 1L",
        price: 350,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        image: "https://res.cloudinary.com/dlc8f2ajd/image/upload/v1670456947/IMG-0714_ycuq8g.jpg",
        category: {
            name: "Bebidas",
            id: 3,
        }
    }
]

module.exports = {
    products,
}