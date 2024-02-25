/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { availability_zone } from './availability_zone';
import type { config_parameters } from './config_parameters';
import type { db_type } from './db_type';
import type { network } from './network';
export type create_cluster = {
    /**
     * Название кластера базы данных.
     */
    name: string;
    type: db_type;
    /**
     * Пользователь базы данных.
     */
    admin?: {
        /**
         * Имя пользователя базы данных
         */
        login?: string;
        /**
         * Пароль пользователя базы данных
         */
        password?: string;
        /**
         * Хост пользователя
         */
        host?: string;
        /**
         * Список привилегий пользователя базы данных
         */
        privileges?: Array<'ALTER' | 'CREATE_VIEW' | 'CREATE' | 'DELETE' | 'DROP' | 'EVENT' | 'INDEX' | 'INSERT' | 'LOCK_TABLES' | 'REFERENCES' | 'SELECT' | 'SHOW_VIEW' | 'TRUNCATE' | 'UPDATE' | 'READ' | 'WRITE' | 'CONNECTION' | 'FAST' | 'readWrite' | 'ALTER_ROUTINE' | 'CREATE_ROUTINE' | 'TRANSACTION'>;
        /**
         * Описание пользователя базы данных
         */
        description?: string;
    };
    /**
     * База данных
     */
    instance?: {
        /**
         * Название базы данных
         */
        name?: string;
        /**
         * Описание базы данных
         */
        description?: string;
    };
    /**
     * Тип хеширования базы данных (mysql5 | mysql | postgres).
     */
    hash_type?: create_cluster.hash_type;
    /**
     * Идентификатор тарифа.
     */
    preset_id: number;
    config_parameters?: config_parameters;
    network?: network;
    /**
     * Описание кластера базы данных
     */
    description?: string;
    availability_zone?: availability_zone;
};
export namespace create_cluster {
    /**
     * Тип хеширования базы данных (mysql5 | mysql | postgres).
     */
    export enum hash_type {
        CACHING_SHA2 = 'caching_sha2',
        MYSQL_NATIVE = 'mysql_native',
    }
}

