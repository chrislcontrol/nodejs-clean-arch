import { PrismaDBHandler } from './../../../infra/database/prisma/prisma_db_handler';
import { DBHandler } from './../../../infra/database/interfaces/db_handler';
import { ClientRepository } from './../../../domain/repositories/client_repository';
import { PostgresClientRepository } from '../../../infra/repositories/client/postgres_client_repository';
import { CreateClientUseCase } from '../../../domain/use_cases/client/create_client_use_case';
import { CreateClientController } from '../../controllers/client/create_client_controller';

export function createClientComposer(): CreateClientController {
    const dbHandler: DBHandler = new PrismaDBHandler()
    const repository: ClientRepository = new PostgresClientRepository(dbHandler)
    const useCase: CreateClientUseCase = new CreateClientUseCase(repository)
    const controller: CreateClientController = new CreateClientController(useCase)

    return controller

};