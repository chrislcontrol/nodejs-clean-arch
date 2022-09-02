import { HttpRequest } from "../../helpers/http_request";
import { HttpResponse } from "../../helpers/http_response";
import { Controller } from "../../interfaces/controller";

export class CreateClientController implements Controller {
    constructor(
        private createClientUseCase: CreateClientUseCase
    ) {}

    async route(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { username, name, email, phone, password } = httpRequest.body


    }

}