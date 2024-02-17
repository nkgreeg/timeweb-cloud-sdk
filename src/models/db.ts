/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { availability_zone } from './availability_zone';
import type { config_parameters } from './config_parameters';
import type { db_type } from './db_type';
/**
 * База данных
 */
export type db = {
    /**
     * Уникальный идентификатор для каждого экземпляра базы данных. Автоматически генерируется при создании.
     */
    id: number;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда была создана база данных.
     */
    created_at: string;
    /**
     * Идентификатор пользователя.
     */
    account_id: string;
    /**
     * Логин для подключения к базе данных.
     */
    login: string;
    /**
     * Локация сервера.
     */
    location?: db.location;
    /**
     * Пароль для подключения к базе данных.
     */
    password: string;
    /**
     * Название базы данных.
     */
    name: string;
    /**
     * Хост.
     */
    host: string | null;
    type: db_type;
    /**
     * Тип хеширования базы данных (mysql5 | mysql | postgres).
     */
    hash_type: db.hash_type | null;
    /**
     * Порт
     */
    port: number;
    /**
     * IP-адрес сетевого интерфейса IPv4.
     */
    ip: string | null;
    /**
     * IP-адрес локального сетевого интерфейса IPv4.
     */
    local_ip: string | null;
    /**
     * Текущий статус базы данных.
     */
    status: db.status;
    /**
     * Идентификатор тарифа.
     */
    preset_id: number;
    /**
     * Статистика использования диска базы данных.
     */
    disk_stats: {
        /**
         * Размер (в Кб) диска базы данных.
         */
        size: number;
        /**
         * Размер (в Кб) использованного пространства диска базы данных.
         */
        used: number;
    } | null;
    config_parameters: config_parameters;
    /**
     * Это логическое значение, которое показывает, доступна ли база данных только по локальному IP адресу.
     */
    is_only_local_ip_access: boolean;
    availability_zone: availability_zone;
};
export namespace db {
    /**
     * Локация сервера.
     */
    export enum location {
        RU_1 = 'ru-1',
        RU_2 = 'ru-2',
        PL_1 = 'pl-1',
        KZ_1 = 'kz-1',
    }
    /**
     * Тип хеширования базы данных (mysql5 | mysql | postgres).
     */
    export enum hash_type {
        CACHING_SHA2 = 'caching_sha2',
        MYSQL_NATIVE = 'mysql_native',
    }
    /**
     * Текущий статус базы данных.
     */
    export enum status {
        STARTED = 'started',
        STARTING = 'starting',
        STOPED = 'stoped',
        NO_PAID = 'no_paid',
    }
}

