/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageOutAPI } from './ImageOutAPI';
import type { Meta } from './Meta';
export type ImagesOutResponse = {
    /**
     * Идентификатор запроса
     */
    response_id?: string;
    /**
     * Вспомогательная информация о возвращаемой сущности
     */
    meta: Meta;
    /**
     * Массив объектов Образ
     */
    images: Array<ImageOutAPI>;
};

