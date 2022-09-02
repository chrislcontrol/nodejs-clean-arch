import { Router } from "express";
import { createClientComposer } from '../presentation/composers/client/create_client_composer';
import { ExpressAdapter } from './../infra/adapters/express_adapter';

export const routes = Router();
export const expressAdapter = new ExpressAdapter();

routes.post('/clients', (req, res) => expressAdapter.handle(req, res, createClientComposer()));