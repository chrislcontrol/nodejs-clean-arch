import { Request, Response, Router } from "express";

export const routes = Router();

routes.post('/clients', (request: Request, respose: Response) => {
    respose.send("Home!")
});