/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { domain_payment_period } from './domain_payment_period';
import type { domain_prime_type } from './domain_prime_type';
/**
 * Заявка на продление/регистрацию/трансфер домена.
 */
export type domain_request = {
    /**
     * Идентификатор пользователя
     */
    account_id: string;
    /**
     * Код авторизации для переноса домена.
     */
    auth_code: string | null;
    /**
     * Дата создания заявки.
     */
    date: string;
    /**
     * Идентификационный номер бандла, в который входит данная заявка (null - если заявка не входит ни в один бандл).
     */
    domain_bundle_id: string | null;
    /**
     * Код ошибки трансфера домена.
     */
    error_code_transfer: string | null;
    /**
     * Полное имя домена.
     */
    fqdn: string;
    /**
     * Идентификатор группы доменных зон.
     */
    group_id: number;
    /**
     * Идентификатор заявки.
     */
    id: number;
    /**
     * Это логическое значение, которое показывает включена ли услуга "Антиспам" для домена
     */
    is_antispam_enabled: boolean;
    /**
     * Это логическое значение, которое показывает, включено ли автопродление домена.
     */
    is_autoprolong_enabled: boolean;
    /**
     * Это логическое значение, которое показывает, включено ли скрытие данных администратора домена для whois. Опция недоступна для доменов в зонах .ru и .рф.
     */
    is_whois_privacy_enabled: boolean;
    /**
     * Информационное сообщение о заявке.
     */
    message: string | null;
    /**
     * Источник (способ) оплаты заявки.
     */
    money_source: domain_request.money_source | null;
    period: domain_payment_period;
    /**
     * Идентификационный номер персоны для заявки на регистрацию.
     */
    person_id: number;
    prime: domain_prime_type | null;
    /**
     * Количество дней до конца регистрации домена, за которые мы уведомим о необходимости продления.
     */
    soon_expire: number;
    /**
     * Это значение используется для сортировки доменных зон в панели управления.
     */
    sort_order: number;
    /**
     * Тип заявки.
     */
    type: domain_request.type;
};
export namespace domain_request {
    /**
     * Источник (способ) оплаты заявки.
     */
    export enum money_source {
        USE = 'use',
        BONUS = 'bonus',
        INVOICE = 'invoice',
    }
    /**
     * Тип заявки.
     */
    export enum type {
        REQUEST = 'request',
        PROLONG = 'prolong',
        TRANSFER = 'transfer',
    }
}

