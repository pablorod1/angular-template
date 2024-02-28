export interface User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    phone: number;
    since: number;
    salary: number;
    role: string;
}

export const regularData: User[] = [
    { id: 1, name: 'Juan', lastName: 'García', email: 'juangarcia@example.com', phone: 123456789, since: 20220101, salary: 50000, role: 'Admin' },
    { id: 2, name: 'María', lastName: 'López', email: 'marialopez@example.com', phone: 987654321, since: 20220115, salary: 45000, role: 'Client' },
    { id: 3, name: 'Carlos', lastName: 'Martínez', email: 'carlosmartinez@example.com', phone: 555555555, since: 20220201, salary: 48000, role: 'Seller' },
    { id: 4, name: 'Ana', lastName: 'Rodríguez', email: 'anarodriguez@example.com', phone: 333333333, since: 20220210, salary: 52000, role: 'Admin' },
    { id: 5, name: 'David', lastName: 'Pérez', email: 'davidperez@example.com', phone: 777777777, since: 20220305, salary: 47000, role: 'Client' },
    { id: 6, name: 'Laura', lastName: 'Sánchez', email: 'laurasanchez@example.com', phone: 999999999, since: 20220401, salary: 49000, role: 'Seller' },
    { id: 7, name: 'Sergio', lastName: 'Gómez', email: 'sergiogomez@example.com', phone: 444444444, since: 20220415, salary: 51000, role: 'Admin' },
    { id: 8, name: 'Paula', lastName: 'Ruiz', email: 'paularuiz@example.com', phone: 222222222, since: 20220501, salary: 46000, role: 'Client' },
    { id: 9, name: 'Miguel', lastName: 'Hernández', email: 'miguelhernandez@example.com', phone: 888888888, since: 20220515, salary: 50000, role: 'Seller' },
    { id: 10, name: 'Elena', lastName: 'Fernández', email: 'elenafernandez@example.com', phone: 666666666, since: 20220601, salary: 53000, role: 'Admin' }
];
