import { ClientService } from './client.service';
import { LoadingService } from "./loading.service";
import { HttpExceptionHandlerService } from './http-exception-handler.service';

export const services = [
    LoadingService,
    ClientService,
    HttpExceptionHandlerService
];

export * from './client.service';
export * from './http-exception-handler.service';
export * from './loading.service';