/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { domain_payment_period } from './domain_payment_period';
/**
 * Заявка на регистрацию домена
 */
export type domain_register = {
    /**
     * Тип создаваемой заявки.
     */
    action: domain_register.action;
    /**
     * Полное имя домена.
     */
    fqdn: string;
    /**
     * Это логическое значение, которое показывает, включено ли автопродление домена.
     */
    is_autoprolong_enabled?: boolean;
    /**
     * Это логическое значение, которое показывает, включено ли скрытие данных администратора домена для whois. Опция недоступна для доменов в зонах .ru и .рф.
     */
    is_whois_privacy_enabled?: boolean;
    /**
     * Name-серверы для регистрации домена. Если не передавать этот параметр, будут использованы наши стандартные name-серверы. Нужно указать как минимум 2 name-сервера.
     */
    ns?: Array<{
        /**
         * Хост name-сервера.
         */
        host: string;
        /**
         * Список IP-адресов name-сервера
         */
        ips: Array<string>;
    }>;
    period?: domain_payment_period;
    /**
     * Идентификатор администратора, на которого регистрируется домен.
     */
    person_id: number;
};
export namespace domain_register {
    /**
     * Тип создаваемой заявки.
     */
    export enum action {
        REGISTER = 'register',
    }
}

