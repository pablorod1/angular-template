export enum Roles {
    ADMINISTRATOR = 'ADMINISTRATOR',
    SELLER = 'SELLER',
    CUSTOMER = 'CUSTOMER'
}

export interface Role {
    id: number;
    name: string;
    uid: string; //ADMINISTRATOR, SELLER, CUSTOMER
    extends?: number | null; // añadir permisos de otros ids.
}

export interface User {
    id: number;
    name: string;
    role: Role;
}