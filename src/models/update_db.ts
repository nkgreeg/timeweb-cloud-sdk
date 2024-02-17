/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { config_parameters } from './config_parameters';
/**
 * Дополнительные параметры конфигурации базы данных.
 */
export type update_db = {
    /**
     * Пароль для подключения к базе данных.
     */
    password?: string;
    /**
     * Название базы данных.
     */
    name?: string;
    /**
     * Идентификатор тарифа.
     */
    preset_id?: number;
    config_parameters?: config_parameters;
    /**
     * Использовать или нет внешний IP.
     */
    is_external_ip?: boolean;
};

