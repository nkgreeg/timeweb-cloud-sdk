/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Оплата заявки на продление/регистрацию домена с баланса аккаунта
 */
export type use = {
    /**
     * Тип создаваемой заявки.
     */
    money_source: use.money_source;
    /**
     * Идентификатор администратора, на которого зарегистрирован домен.
     */
    person_id?: number;
};
export namespace use {
    /**
     * Тип создаваемой заявки.
     */
    export enum money_source {
        USE = 'use',
    }
}

