/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageDownloadAPI } from './ImageDownloadAPI';
import type { Meta } from './Meta';
export type ImageDownloadsResponse = {
    /**
     * Идентификатор запроса
     */
    response_id?: string;
    /**
     * Вспомогательная информация о возвращаемой сущности
     */
    meta: Meta;
    /**
     * Массив объектов "Ссылка на загрузку"
     */
    downloads: Array<ImageDownloadAPI>;
};

