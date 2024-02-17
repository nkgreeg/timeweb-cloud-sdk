/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type update_rule = {
    /**
     * Протокол балансировщика.
     */
    balancer_proto: update_rule.balancer_proto;
    /**
     * Порт балансировщика.
     */
    balancer_port: number;
    /**
     * Протокол сервера.
     */
    server_proto: update_rule.server_proto;
    /**
     * Порт сервера.
     */
    server_port: number;
};
export namespace update_rule {
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

