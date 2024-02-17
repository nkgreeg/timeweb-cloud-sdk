/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Оплата заявки на продление/регистрацию домена бонусом
 */
export type bonus = {
    /**
     * Тип создаваемой заявки.
     */
    money_source: bonus.money_source;
    /**
     * Идентификатор администратора, на которого зарегистрирован домен.
     */
    person_id?: number;
    /**
     * Идентификатор бонуса.
     */
    bonus_id: number;
};
export namespace bonus {
    /**
     * Тип создаваемой заявки.
     */
    export enum money_source {
        BONUS = 'bonus',
    }
}

