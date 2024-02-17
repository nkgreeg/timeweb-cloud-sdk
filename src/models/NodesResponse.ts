/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from './Meta';
import type { NodeOut } from './NodeOut';
export type NodesResponse = {
    /**
     * Идентификатор запроса
     */
    response_id?: string;
    /**
     * Вспомогательная информация о возвращаемой сущности
     */
    meta: Meta;
    /**
     * Массив объектов Нода
     */
    nodes: Array<NodeOut>;
};

