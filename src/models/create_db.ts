/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { config_parameters } from './config_parameters';
import type { db_type } from './db_type';
import type { network } from './network';
export type create_db = {
    /**
     * Логин для подключения к базе данных.
     */
    login?: string;
    /**
     * Пароль для подключения к базе данных.
     */
    password: string;
    /**
     * Название базы данных.
     */
    name: string;
    type: db_type;
    /**
     * Тип хеширования базы данных (mysql5 | mysql | postgres).
     */
    hash_type?: create_db.hash_type;
    /**
     * Идентификатор тарифа.
     */
    preset_id: number;
    config_parameters?: config_parameters;
    network?: network;
};
export namespace create_db {
    /**
     * Тип хеширования базы данных (mysql5 | mysql | postgres).
     */
    export enum hash_type {
        CACHING_SHA2 = 'caching_sha2',
        MYSQL_NATIVE = 'mysql_native',
    }
}

