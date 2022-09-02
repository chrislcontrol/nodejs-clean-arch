import { CreateClientProps } from './../../infra/repositories/client/types';
import { Client } from "../entities/client";

export interface ClientRepository {
    createClient: (createClientProps: CreateClientProps) => Promise<Client>
};