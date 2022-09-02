import { Client } from "../entities/client";

export interface ClientRepository {
    createClient: () => Promise<Client>
};