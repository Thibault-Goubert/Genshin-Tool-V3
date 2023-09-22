export class ResponseItems<T>{
    items!: T[];
    message!: string;
    status!: number;
}

export class ResponseItem<T>{
    item!: T;
    message!: string;
    status!: number;
}