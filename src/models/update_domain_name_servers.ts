/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type update_domain_name_servers = {
    /**
     * Список новых name-серверов для домена
     */
    name_servers: Array<{
        /**
         * Хост name-сервера.
         */
        host: string;
        /**
         * Список IP-адресов name-сервера
         */
        ips?: Array<string>;
    }>;
};

