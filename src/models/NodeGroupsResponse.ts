/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from './Meta';
import type { NodeGroupOut } from './NodeGroupOut';
export type NodeGroupsResponse = {
    /**
     * Идентификатор запроса
     */
    response_id?: string;
    /**
     * Вспомогательная информация о возвращаемой сущности
     */
    meta: Meta;
    /**
     * Массив объектов Группа нод
     */
    node_groups: Array<NodeGroupOut>;
};

