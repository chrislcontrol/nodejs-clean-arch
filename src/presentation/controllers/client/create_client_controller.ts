import { CreateClientUseCase } from "../../../domain/use_cases/client/create_client_use_case";
import { HttpRequest } from "../../helpers/http_request";
import { HttpResponse } from "../../helpers/http_response";
import { Controller } from "../../interfaces/controller";

export class CreateClientController implements Controller {
    constructor(
        private createClientUseCase: CreateClientUseCase
    ) { }

    async route(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { username, name, email, phone, password } = httpRequest.body
        const client = await this.createClientUseCase.create({ username, name, email, phone, password })
        return new HttpResponse(client, 201)
    }

}