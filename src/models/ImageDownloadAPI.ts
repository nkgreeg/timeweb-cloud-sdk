/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UrlStatus } from './UrlStatus';
import type { URLType } from './URLType';
export type ImageDownloadAPI = {
    /**
     * Идентификатор ссылки
     */
    id: string;
    /**
     * Дата и время создания ссылки
     */
    created_at: string;
    /**
     * Идентификатор образа
     */
    image: string;
    /**
     * Тип ссылки
     */
    type: URLType;
    /**
     * Ссылка на скачивание
     */
    url?: string;
    /**
     * Статус создания
     */
    status: UrlStatus;
    /**
     * Прогресс загрузки образа
     */
    progress: number;
};

