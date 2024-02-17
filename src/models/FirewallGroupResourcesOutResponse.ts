/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FirewallGroupResourceOutAPI } from './FirewallGroupResourceOutAPI';
import type { Meta } from './Meta';
export type FirewallGroupResourcesOutResponse = {
    /**
     * Идентификатор запроса
     */
    response_id?: string;
    /**
     * Вспомогательная информация о возвращаемой сущности
     */
    meta: Meta;
    resources: Array<FirewallGroupResourceOutAPI>;
};

