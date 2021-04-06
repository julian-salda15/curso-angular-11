import { Credit } from "./type";

export const Credits: Array<Credit> = [
    {
        id: '123456789',
        person: {
            firstName: 'Julian',
            lastName: 'Alvarez',
        },
        value: 500000,
        payments: [
            {
                date: new Date(new Date().getFullYear() + "-" + (new Date().getMonth()-2) + "-" + new Date().getDate()),
                value: 50000.
            },
            {
                date: new Date(new Date().getFullYear() + "-" + (new Date().getMonth()-1) + "-" + new Date().getDate()),
                value: 50000.
            },
            {
                date: new Date(new Date().getFullYear() + "-" + (new Date().getMonth()-0) + "-" + new Date().getDate()),
                value: 50000.
            },
            {
                date: new Date(),
                value: 50000.
            }
        ]
    },
    {
        id: '123456790',
        person: {
            firstName: 'Mariana',
            lastName: 'Estrada',
        },
        value: 600000,
        payments: [
            {
            date: new Date(new Date().getFullYear() + "-" + (new Date().getMonth()-1) + "-" + new Date().getDate()),
            value: 50000.
        },
        {
            date: new Date(new Date().getFullYear() + "-" + (new Date().getMonth()-0) + "-" + new Date().getDate()),
            value: 50000.
        },
            {
                date: new Date(),
                value: 60000
            }
        ]
    },
    {
        id: '123456791',
        person: {
            firstName: 'Andres',
            lastName: 'Orozco',
        },
        value: 700000,
        payments: [
            {
                date: new Date(new Date().getFullYear() + "-" + (new Date().getMonth()-0) + "-" + new Date().getDate()),
                value: 50000.
            },
            {
                date: new Date(),
                value: 70000
            }
        ]
    }
]