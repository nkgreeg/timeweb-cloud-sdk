/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Заявка на перенос домена
 */
export type domain_transfer = {
    /**
     * Тип создаваемой заявки.
     */
    action: domain_transfer.action;
    /**
     * Код авторизации для переноса домена.
     */
    auth_code: string;
    /**
     * Полное имя домена.
     */
    fqdn: string;
};
export namespace domain_transfer {
    /**
     * Тип создаваемой заявки.
     */
    export enum action {
        TRANSFER = 'transfer',
    }
}

