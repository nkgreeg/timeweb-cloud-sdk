/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FirewallGroupOutAPI } from './FirewallGroupOutAPI';
import type { Meta } from './Meta';
export type FirewallGroupsOutResponse = {
    /**
     * Идентификатор запроса
     */
    response_id?: string;
    /**
     * Вспомогательная информация о возвращаемой сущности
     */
    meta: Meta;
    /**
     * Массив объектов Групп правил
     */
    groups: Array<FirewallGroupOutAPI>;
};

