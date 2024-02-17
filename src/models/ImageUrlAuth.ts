/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ImageUrlAuth = {
    /**
     * Токен доступа к API облачного хранилища
     */
    access_token: string;
    /**
     * Токен обновления доступов к API
     */
    refresh_token?: string;
    /**
     * Время истечения работы токена доступа
     */
    expiry?: string;
    /**
     * Тип токена доступа
     */
    token_type?: string;
};

