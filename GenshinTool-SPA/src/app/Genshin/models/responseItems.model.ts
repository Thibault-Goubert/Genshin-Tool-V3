export class ResponseItems<T>{
    items!: T[];
}

export class ResponseItem<T>{
    item!: T[];
    message!: string;
    status!: number;
}