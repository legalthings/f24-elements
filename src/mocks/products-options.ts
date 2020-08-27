// eslint-disable-next-line @typescript-eslint/no-unused-vars
const process = {
    product: 'bv',
    package: 'package_complete',
    urgency: 'urgency_standard',
    productType: 'regular-bv',
    step: {
        slug: 'shareholders'
    },
    name: 'BV name',
    shares: [
        {
            type: 'common',
            value: 1.2
        }
    ],
    shareholders: [
        {
            name: 'Shareholder 1',
            type: 'natural',
            address: {},
            shares: [
                {
                    type: 'common',
                    amount: 60
                }
            ]
        },
        {
            name: 'Shareholder 2',
            type: 'natural',
            address: {},
            shares: [
                {
                    type: 'common',
                    amount: 60
                }
            ]
        }
    ]
};

export const startProducts = [
    {
        slug: 'start-incorporation'
    },
    {
        slug: 'start-eenmanszaak'
    },
    {
        slug: 'start-liquidation'
    }
];

export const productsOptions = [
    {
        slug: 'bv',
        products: {
            types: ['regular_bv', 'holding_bv', 'savings_bv'],
            urgency: ['urgency_standard', 'urgency_fast', 'urgency_urgent'],
            packages: ['package_minimum', 'package_plus', 'package_complete']
        }
    },
    {
        slug: 'foundation',
        products: {
            types: ['regular_stichting', 'holding_bv', 'savings_bv'],
            urgency: ['urgency_standard', 'urgency_fast', 'urgency_urgent'],
            packages: ['package_minimum', 'package_plus', 'package_complete']
        }
    },
    {
        slug: 'convert',
        products: {
            types: ['regular_bv', 'holding_bv', 'savings_bv'],
            urgency: ['urgency_standard', 'urgency_fast'],
            packages: ['package_minimum', 'package_plus', 'package_complete']
        }
    }
];

export const productList = [
    {
        type: 'urgency',
        slug: 'urgency_standard',
        price: 0
    },
    {
        type: 'urgency',
        slug: 'urgency_fast',
        price: 99,
        best_seller: true
    },
    {
        type: 'urgency',
        slug: 'urgency_urgent',
        price: 195
    },
    {
        type: 'product_type',
        slug: 'regular_bv',
        price: 300
    },
    {
        type: 'product_type',
        slug: 'holding_bv',
        price: 301
    },
    {
        type: 'product_type',
        slug: 'savings_bv',
        price: 302
    },
    {
        type: 'product',
        slug: 'bv',
        price: 303
    },
    {
        type: 'product',
        slug: 'foundation',
        price: 304
    },
    {
        type: 'product',
        slug: 'convert',
        price: 305
    },
    {
        type: 'package',
        slug: 'package_minimum',
        price: 245
    },
    {
        type: 'package',
        slug: 'package_plus',
        price: 344,
        normal_price: 499,
        best_seller: true
    },
    {
        type: 'package',
        slug: 'package_complete',
        price: 899
    },
    {
        type: 'product_type',
        slug: 'regular_stichting',
        price: 899
    }
];

export const stepsDefinition = {
    currentSlug: 'incorporation-shareholders',
    product: {
        slug: 'bv',
        options: {
            types: 'regular_bv',
            urgency: 'urgency_standard',
            packages: 'package_minimum'
        }
    },
    steps: [
        {
            slug: 'incorporation-shareholders',
            steps: [
                {
                    slug: 'shareholder'

                },
                {
                    slug: 'share-distribution'
                }
            ],
            progress: {
                parentIndex: 0,
                childIndex: 0
            }
        },
        {
            slug: 'incorporation-details',
            steps: [
                {
                    slug: 'organization-details'
                }
            ],
            progress: {
                parentIndex: 0,
                childIndex: 0
            }
        },
        {
            slug: 'incorporation-documents',
            steps: [
                {
                    slug: 'holding-upsell'
                },
                {
                    slug: 'documents'
                }
            ],
            progress: {
                parentIndex: 0,
                childIndex: 0
            }
        },
        {
            slug: 'incorporation-overview',
            steps: [
                {
                    slug: 'overview'
                }
            ]
        },
        {
            slug: 'incorporation-thank-you',
            steps: [
                {
                    slug: 'thank-you'
                }
            ]
        }
    ]
};
