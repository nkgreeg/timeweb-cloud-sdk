/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Добавленный поддомен.
 */
export type added_subdomain = {
    /**
     * Поддомен.
     */
    subdomain: string;
    /**
     * Результат добавления поддомена.
     */
    status: added_subdomain.status;
};
export namespace added_subdomain {
    /**
     * Результат добавления поддомена.
     */
    export enum status {
        SUCCESS = 'success',
        EMPTY_CNAME = 'empty_cname',
        DUPLICATE = 'duplicate',
        FAILED = 'failed',
    }
}

