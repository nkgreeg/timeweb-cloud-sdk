/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Обновление заявки на перенос домена
 */
export type free = {
    /**
     * Тип создаваемой заявки.
     */
    money_source: free.money_source;
    /**
     * Идентификатор администратора, на которого зарегистрирован домен.
     */
    person_id?: number;
    /**
     * Код авторизации для переноса домена.
     */
    auth_code: string;
};
export namespace free {
    /**
     * Тип создаваемой заявки.
     */
    export enum money_source {
        FREE = 'free',
    }
}

