import { Request } from 'express';
import { Controller } from '../../presentation/interfaces/controller';
import { HttpRequest } from '../../presentation/helpers/http_request';


export class ExpressAdapter {
    public async handle(request: Request, controller: Controller) {
        const httpRequest = new HttpRequest(request.body, request.headers)
        return await controller.route(httpRequest)
    };
}