/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { domain_payment_period } from './domain_payment_period';
import type { domain_prime_type } from './domain_prime_type';
/**
 * Заявка на продление домена
 */
export type domain_prolong = {
    /**
     * Тип создаваемой заявки.
     */
    action: domain_prolong.action;
    /**
     * Полное имя домена.
     */
    fqdn: string;
    /**
     * Это логическое значение, которое показывает включена ли услуга "Антиспам" для домена
     */
    is_antispam_enabled?: boolean;
    /**
     * Это логическое значение, которое показывает, включено ли автопродление домена.
     */
    is_autoprolong_enabled?: boolean;
    /**
     * Это логическое значение, которое показывает, включено ли скрытие данных администратора домена для whois. Опция недоступна для доменов в зонах .ru и .рф.
     */
    is_whois_privacy_enabled?: boolean;
    period?: domain_payment_period;
    /**
     * Идентификатор администратора, на которого зарегистрирован домен.
     */
    person_id?: number;
    prime?: domain_prime_type;
};
export namespace domain_prolong {
    /**
     * Тип создаваемой заявки.
     */
    export enum action {
        PROLONG = 'prolong',
    }
}

