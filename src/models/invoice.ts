/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Оплата заявки на продление/регистрацию домена при помощи платежной системы
 */
export type invoice = {
    /**
     * Тип создаваемой заявки.
     */
    money_source: invoice.money_source;
    /**
     * Идентификатор администратора, на которого зарегистрирован домен.
     */
    person_id?: number;
    /**
     * Тип платежной системы.
     */
    payment_type: invoice.payment_type;
    /**
     * Идентификационный номер плательщика
     */
    payer_id: number;
};
export namespace invoice {
    /**
     * Тип создаваемой заявки.
     */
    export enum money_source {
        INVOICE = 'invoice',
    }
    /**
     * Тип платежной системы.
     */
    export enum payment_type {
        RECEIPT = 'receipt',
        CARD = 'card',
        MOBILE_CARD = 'mobile-card',
        WM = 'wm',
        WEBMONEY = 'webmoney',
        YANDEX = 'yandex',
        YA = 'ya',
        INVOICE = 'invoice',
        SOFORT = 'sofort',
        QIWI_WALLET = 'qiwi_wallet',
        WECHAT = 'wechat',
    }
}

