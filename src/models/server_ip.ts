/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * IP-адрес сервера
 */
export type server_ip = {
    /**
     * Тип IP-адреса сети.
     */
    type: server_ip.type;
    /**
     * IP-адрес сети.
     */
    ip: string;
    /**
     * Запись имени узла.
     */
    ptr: string;
    /**
     * Является ли сеть основной.
     */
    is_main: boolean;
};
export namespace server_ip {
    /**
     * Тип IP-адреса сети.
     */
    export enum type {
        IPV4 = 'ipv4',
        IPV6 = 'ipv6',
    }
}

