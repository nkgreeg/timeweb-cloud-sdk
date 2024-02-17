/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Правило для балансировщика
 */
export type rule = {
    /**
     * Уникальный идентификатор для каждого экземпляра правила для балансировщика. Автоматически генерируется при создании.
     */
    id: number;
    /**
     * Протокол балансировщика.
     */
    balancer_proto: rule.balancer_proto;
    /**
     * Порт балансировщика.
     */
    balancer_port: number;
    /**
     * Протокол сервера.
     */
    server_proto: rule.server_proto;
    /**
     * Порт сервера.
     */
    server_port: number;
};
export namespace rule {
    /**
     * Протокол балансировщика.
     */
    export enum balancer_proto {
        HTTP = 'http',
        HTTP2 = 'http2',
        HTTPS = 'https',
        TCP = 'tcp',
    }
    /**
     * Протокол сервера.
     */
    export enum server_proto {
        HTTP = 'http',
        HTTP2 = 'http2',
        HTTPS = 'https',
        TCP = 'tcp',
    }
}

