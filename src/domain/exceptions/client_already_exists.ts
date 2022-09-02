import { APIException } from './api_exception';
import { ExceptionCodeEnum } from './exception_code_enum';

export class ClientAlreadyExists extends APIException {
    public message = "Client already exists.";
    public status = 409;
    public code = ExceptionCodeEnum.ClientAlreadyExists;
};