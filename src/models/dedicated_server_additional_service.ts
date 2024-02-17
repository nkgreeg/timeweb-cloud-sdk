/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Дополнительная услуга для выделенного сервера
 */
export type dedicated_server_additional_service = {
    /**
     * Уникальный идентификатор дополнительной услуги для выделенного сервера.
     */
    id: number;
    /**
     * Стоимость (в рублях) дополнительной услуги для выделенного сервера.
     */
    price: number;
    /**
     * Период оплаты.
     */
    period: dedicated_server_additional_service.period;
    /**
     * Описание дополнительной услуги выделенного сервера.
     */
    description: string;
    /**
     * Краткое описание дополнительной услуги выделенного сервера.
     */
    short_description: string;
    /**
     * Уникально имя дополнительной услуги выделенного сервера.
     */
    name: string;
};
export namespace dedicated_server_additional_service {
    /**
     * Период оплаты.
     */
    export enum period {
        P1D = 'P1D',
        P1M = 'P1M',
        P3M = 'P3M',
        P6M = 'P6M',
        P1Y = 'P1Y',
        FOREVER = 'forever',
    }
}

