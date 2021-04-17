export class Response<T>{

    codigoHttp: number;
    descripcion: string;
    listResponse?: Array<T>;
    objectResponse?: T;
    
}