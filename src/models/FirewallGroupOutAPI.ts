/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Policy } from './Policy';
export type FirewallGroupOutAPI = {
    /**
     * Идентификатор группы правил
     */
    id: string;
    /**
     * Дата и время создания
     */
    created_at: string;
    /**
     * Дата и время последнего обновления
     */
    updated_at: string;
    /**
     * Имя группы правил
     */
    name: string;
    /**
     * Описание группы правил
     */
    description: string;
    policy: Policy;
};

