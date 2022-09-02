import { Entity } from "../../../domain/entities/entity";

export interface DBHandler {
    create: (model: any, args: any) => Promise<any>
}