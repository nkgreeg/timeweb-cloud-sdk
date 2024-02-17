/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageStatus } from './ImageStatus';
import type { OS } from './OS';
export type ImageOutAPI = {
    /**
     * Идентификатор образа
     */
    id: string;
    /**
     * Статус образа
     */
    status: ImageStatus;
    /**
     * Дата и время создания
     */
    created_at: string;
    /**
     * Дата и время удаления
     */
    deleted_at: string;
    /**
     * Размер в мегабайтах
     */
    size: number;
    /**
     * Имя образа
     */
    name: string;
    /**
     * Описание образа
     */
    description: string;
    /**
     * Идентификатор связанного с образом диска
     */
    disk_id: number;
    /**
     * Локация, в которой создан образ
     */
    location?: string;
    /**
     * Операционная система образа
     */
    os: OS;
    /**
     * Процент создания образа
     */
    progress: number;
    /**
     * Признак указывающий на то является ли образ кастомным
     */
    is_custom: boolean;
};

