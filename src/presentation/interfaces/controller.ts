import { HttpRequest } from "../helpers/http_request";
import { HttpResponse } from "../helpers/http_response";

export interface Controller {
    route: (httpRequest: HttpRequest) => Promise<HttpResponse>
};