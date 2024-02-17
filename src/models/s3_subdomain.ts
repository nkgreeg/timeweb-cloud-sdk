/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Поддомен.
 */
export type s3_subdomain = {
    /**
     * Уникальный идентификатор поддомена.
     */
    id: number;
    /**
     * Поддомен.
     */
    subdomain: string;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда был выдан SSL сертификат.
     */
    cert_released: string;
    /**
     * Количество попыток перевыпустить SSL сертификат.
     */
    tries: number;
    /**
     * Поддомен.
     */
    status: s3_subdomain.status;
};
export namespace s3_subdomain {
    /**
     * Поддомен.
     */
    export enum status {
        SSL_RELEASED = 'ssl_released',
        SSL_NOT_REQUESTED = 'ssl_not_requested',
        SSL_RE_RELEASE_ERROR = 'ssl_re_release_error',
    }
}

