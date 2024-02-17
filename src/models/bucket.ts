/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Хранилище S3
 */
export type bucket = {
    /**
     * Уникальный идентификатор для каждого экземпляра хранилища. Автоматически генерируется при создании.
     */
    id: number;
    /**
     * Удобочитаемое имя, установленное для хранилища.
     */
    name: string;
    /**
     * Статистика использования диска хранилища.
     */
    disk_stats: {
        /**
         * Размер (в Кб) диска хранилища.
         */
        size: number;
        /**
         * Размер (в Кб) использованного пространства диска хранилища.
         */
        used: number;
    };
    /**
     * Тип хранилища.
     */
    type: bucket.type;
    /**
     * Идентификатор тарифа хранилища.
     */
    preset_id: number | null;
    /**
     * Статус хранилища.
     */
    status: bucket.status;
    /**
     * Количество файлов в хранилище.
     */
    object_amount: number;
    /**
     * Регион хранилища.
     */
    location: string;
    /**
     * Адрес хранилища для подключения.
     */
    hostname: string;
    /**
     * Ключ доступа от хранилища.
     */
    access_key: string;
    /**
     * Секретный ключ доступа от хранилища.
     */
    secret_key: string;
};
export namespace bucket {
    /**
     * Тип хранилища.
     */
    export enum type {
        PRIVATE = 'private',
        PUBLIC = 'public',
    }
    /**
     * Статус хранилища.
     */
    export enum status {
        NO_PAID = 'no_paid',
        CREATED = 'created',
        TRANSFER = 'transfer',
    }
}

