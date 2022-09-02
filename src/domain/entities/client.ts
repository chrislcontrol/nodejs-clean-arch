import { Entity } from "./entity"

export interface Client extends Entity {
    id: string
    createdAt: Date
    modifiedAt: Date
    username: string
    email: string
    password: string
    name: string
};