import { Request, Response } from 'express';
import { HttpRequest } from '../../presentation/helpers/http_request';
import { Controller } from '../../presentation/interfaces/controller';


export class ExpressAdapter {
    public async handle(
        request: Request,
        response: Response,
        controller: Controller
    ) {

        const httpRequest = new HttpRequest(request.body, request.headers)
        controller.route(httpRequest)
            .then(res => response.status(res.status).json(res.body))
            .catch(error => response.status(error.status).json({
                "message": error.message,
                "code": error.code
            }))
    };
}