/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Доменная зона.
 */
export type top_level_domain = {
    /**
     * Список доступных периодов для регистрации/продления доменов со стоимостью.
     */
    allowed_buy_periods: Array<{
        /**
         * Период регистрации/продления домена.
         */
        period: string;
        /**
         * Цена регистрации/продления домена.
         */
        price: number;
    }>;
    /**
     * Количество дней до истечение срока регистрации, когда можно продлять домен.
     */
    early_renew_period: number | null;
    /**
     * Количество дней, которые действует льготный период когда вы ещё можете продлить домен, после окончания его регистрации
     */
    grace_period: number;
    /**
     * Идентификатор доменной зоны.
     */
    id: number;
    /**
     * Это логическое значение, которое показывает, опубликована ли доменная зона.
     */
    is_published: boolean;
    /**
     * Это логическое значение, которое показывает, зарегистрирована ли доменная зона.
     */
    is_registered: boolean;
    /**
     * Это логическое значение, которое показывает, включено ли по умолчанию скрытие данных администратора для доменной зоны.
     */
    is_whois_privacy_default_enabled: boolean;
    /**
     * Это логическое значение, которое показывает, доступно ли управление скрытием данных администратора для доменной зоны.
     */
    is_whois_privacy_enabled: boolean;
    /**
     * Имя доменной зоны.
     */
    name: string;
    /**
     * Цена регистрации домена
     */
    price: number;
    /**
     * Цена продления домена.
     */
    prolong_price: number;
    /**
     * Регистратор доменной зоны.
     */
    registrar: top_level_domain.registrar;
    /**
     * Цена услуги трансфера домена.
     */
    transfer: number;
    /**
     * Цена услуги скрытия данных администратора для доменной зоны.
     */
    whois_privacy_price: number;
};
export namespace top_level_domain {
    /**
     * Регистратор доменной зоны.
     */
    export enum registrar {
        NIC = 'NIC',
        PDR = 'PDR',
        R01 = 'R01',
        TIMEWEB = 'timeweb',
        TIMEWEB_VIRTREG = 'TimewebVirtreg',
        WEBNAMES = 'Webnames',
        UNKNOWN = 'unknown',
    }
}

