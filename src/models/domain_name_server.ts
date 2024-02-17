/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Name-сервер
 */
export type domain_name_server = {
    /**
     * Это логическое значение, которое показывает включена ли услуга разрешено ли делегирование домена.
     */
    is_delegation_allowed: boolean;
    /**
     * Список name-серверов
     */
    items: Array<{
        /**
         * Хост name-сервера.
         */
        host: string;
        /**
         * Список IP-адресов name-сервера
         */
        ips: Array<string>;
    }>;
    /**
     * Статус добавления name-сервера.
     */
    task_status: domain_name_server.task_status;
};
export namespace domain_name_server {
    /**
     * Статус добавления name-сервера.
     */
    export enum task_status {
        DONE = 'done',
        ACTIVE = 'active',
        FAILED = 'failed',
    }
}

