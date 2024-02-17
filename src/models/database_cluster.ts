/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { config_parameters } from './config_parameters';
import type { db_type } from './db_type';
/**
 * Кластер базы данных
 */
export type database_cluster = {
    /**
     * Уникальный идентификатор для каждого экземпляра базы данных. Автоматически генерируется при создании.
     */
    id: number;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда была создана база данных.
     */
    created_at: string;
    /**
     * Локация сервера.
     */
    location: database_cluster.location | null;
    /**
     * Название кластера базы данных.
     */
    name: string;
    /**
     * Список сетей кластера базы данных.
     */
    networks: Array<any>;
    type: db_type;
    /**
     * Тип хеширования кластера базы данных (mysql5 | mysql | postgres).
     */
    hash_type: database_cluster.hash_type | null;
    /**
     * Порт
     */
    port: number | null;
    /**
     * Текущий статус кластера базы данных.
     */
    status: database_cluster.status;
    /**
     * Идентификатор тарифа.
     */
    preset_id: number;
    /**
     * Статистика использования диска кластера базы данных.
     */
    disk_stats: {
        /**
         * Размер (в Кб) диска кластера базы данных.
         */
        size: number;
        /**
         * Размер (в Кб) использованного пространства диска кластера базы данных.
         */
        used: number;
    } | null;
    config_parameters: config_parameters;
    /**
     * Доступность публичного IP-адреса
     */
    is_enabled_public_network: boolean;
};
export namespace database_cluster {
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
     * Тип хеширования кластера базы данных (mysql5 | mysql | postgres).
     */
    export enum hash_type {
        CACHING_SHA2 = 'caching_sha2',
        MYSQL_NATIVE = 'mysql_native',
    }
    /**
     * Текущий статус кластера базы данных.
     */
    export enum status {
        STARTED = 'started',
        STARTING = 'starting',
        STOPPED = 'stopped',
        NO_PAID = 'no_paid',
    }
}

