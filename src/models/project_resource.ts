/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { project } from './project';
/**
 * Ресурс проекта
 */
export type project_resource = {
    /**
     * Уникальный идентификатор для каждого ресурса проекта. Автоматически генерируется при создании.
     */
    id: number;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда был создан ресурс.
     */
    created_at: string;
    /**
     * Идентификатор ресурса проекта (сервера, хранилища, кластера, балансировщика, базы данных или выделенного сервера).
     */
    resource_id: number;
    project: project;
    /**
     * Тип ресурса проекта
     */
    type: project_resource.type;
};
export namespace project_resource {
    /**
     * Тип ресурса проекта
     */
    export enum type {
        SERVER = 'server',
        BALANCER = 'balancer',
        DATABASE = 'database',
        KUBERNETES = 'kubernetes',
        STORAGE = 'storage',
        DEDICATED = 'dedicated',
    }
}

