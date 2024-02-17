/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type create_dns = {
    /**
     * Приоритет DNS-записи.
     */
    priority?: number;
    /**
     * Полное имя поддомена.
     */
    subdomain?: string;
    /**
     * Тип DNS-записи.
     */
    type: create_dns.type;
    /**
     * Значение DNS-записи.
     */
    value: string;
};
export namespace create_dns {
    /**
     * Тип DNS-записи.
     */
    export enum type {
        TXT = 'TXT',
        SRV = 'SRV',
        CNAME = 'CNAME',
        AAAA = 'AAAA',
        MX = 'MX',
        A = 'A',
    }
}

