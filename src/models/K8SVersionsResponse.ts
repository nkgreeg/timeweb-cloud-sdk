/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from './Meta';
export type K8SVersionsResponse = {
    /**
     * Идентификатор запроса
     */
    response_id?: string;
    /**
     * Вспомогательная информация о возвращаемой сущности
     */
    meta: Meta;
    /**
     * Массив версий k8s
     */
    k8s_versions: Array<string>;
};

