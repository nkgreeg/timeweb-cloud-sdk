/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type add_ips = {
    /**
     * IP-адрес.
     */
    value: string;
    /**
     * Результат добавления IP-адреса.
     */
    status: add_ips.status;
};
export namespace add_ips {
    /**
     * Результат добавления IP-адреса.
     */
    export enum status {
        SUCCESS = 'success',
        CONFLICT = 'conflict',
    }
}

