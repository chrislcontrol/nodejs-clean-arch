import { Client } from '../../../domain/entities/client';
import { DBHandler } from '../../database/interfaces/db_handler';
import { CreateClientProps } from './types';

export class PostgresClientRepository {
        private model: string = "client"

    constructor(
        private dbHandler: DBHandler
    ) { }
    
    public async createClient(createClientProps: CreateClientProps): Promise<Client> {
        return this.dbHandler.create(this.model, createClientProps);
    };
}