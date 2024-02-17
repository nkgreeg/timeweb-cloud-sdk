/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type remove_ips = {
    /**
     * IP-адрес.
     */
    value: string;
    /**
     * Результат удаления IP-адреса.
     */
    status: remove_ips.status;
};
export namespace remove_ips {
    /**
     * Результат удаления IP-адреса.
     */
    export enum status {
        SUCCESS = 'success',
        NOT_FOUND = 'not_found',
    }
}

