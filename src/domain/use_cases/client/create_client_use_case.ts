import { CreateClientProps } from "../../../infra/repositories/client/types";
import { Client } from "../../entities/client";
import { ClientRepository } from "../../repositories/client_repository";

export class CreateClientUseCase {
    constructor(
        private clientRepository: ClientRepository
    ) { }
    
    public async create(createClientProps: CreateClientProps): Promise<Client> {
        return this.clientRepository.createClient(createClientProps)
    };
}