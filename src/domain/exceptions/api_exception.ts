import { ExceptionCodeEnum } from "./exception_code_enum";

export class APIException extends Error {
    constructor(
        message: string = "Bad request.",
        public status = 400,
        public code = ExceptionCodeEnum.Default
    ) {super(message)}

}