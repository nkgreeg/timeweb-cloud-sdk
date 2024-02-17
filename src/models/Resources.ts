/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Resource } from './Resource';
export type Resources = {
    /**
     * Количество нод
     */
    nodes?: number;
    /**
     * Процессорный ресурс
     */
    cores?: Resource;
    /**
     * Ресурс по памяти
     */
    memory?: Resource;
    /**
     * Поды в кластере
     */
    pods?: Resource;
};

