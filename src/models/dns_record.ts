/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * DNS-запись.
 */
export type dns_record = {
    /**
     * Тип DNS-записи.
     */
    type: dns_record.type;
    /**
     * Идентификатор DNS-записи.
     */
    id?: number | null;
    /**
     * Данные DNS-записи.
     */
    data: {
        /**
         * Приоритет DNS-записи.
         */
        priority?: number;
        /**
         * Поддомен.
         */
        subdomain?: string | null;
        /**
         * Значение DNS-записи.
         */
        value: string;
    };
};
export namespace dns_record {
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

