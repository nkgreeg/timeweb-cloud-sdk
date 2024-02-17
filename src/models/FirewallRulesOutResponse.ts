/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FirewallRuleOutAPI } from './FirewallRuleOutAPI';
import type { Meta } from './Meta';
export type FirewallRulesOutResponse = {
    /**
     * Идентификатор запроса
     */
    response_id?: string;
    /**
     * Вспомогательная информация о возвращаемой сущности
     */
    meta: Meta;
    /**
     * Массив объектов Firewall правил
     */
    rules: Array<FirewallRuleOutAPI>;
};

