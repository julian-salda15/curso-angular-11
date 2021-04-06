export type Person = {
    firstName: string;
    lastName?: string;
}

export type Payment = {
    date: Date;
    value: number;
}

export type Credit = {
    id: string;
    person: Person;
    value: number;
    payments: Array<Payment>;
}