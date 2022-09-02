import { Client } from "../../entities/client";
import { ClientRepository } from "../../repositories/client_repository";

export class CreateClientUseCase {
    constructor(
        private clientRepository: ClientRepository
    ) { }
    
    public create(createClietParams): Promise<Client> {
        this.clientRepository.createClient(createClietParams)
            .then()
    }
}