/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageUrlAuth } from './ImageUrlAuth';
import type { URLType } from './URLType';
export type ImageUrlIn = {
    /**
     * Тип ссылки
     */
    type?: URLType;
    /**
     * Имя файла для загрузки в облачное хранилище
     */
    filename?: string;
    /**
     * Данные для аутентификации в облачном хранилище
     */
    auth?: ImageUrlAuth;
};

