/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Location } from './Location';
import type { OS } from './OS';
export type ImageInAPI = {
    /**
     * Имя образа
     */
    name?: string;
    /**
     * Описание образа
     */
    description?: string;
    /**
     * Идентификатор диска, для которого создается образ
     */
    disk_id?: number;
    /**
     * Cсылка для загрузки образа
     */
    upload_url?: string;
    /**
     * Локация, в которой будет создан образ
     */
    location?: Location;
    /**
     * Операционная система образа
     */
    os?: OS;
};

