/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Диск сервера
 */
export type server_disk = {
    /**
     * Уникальный идентификатор диска.
     */
    id: number;
    /**
     * Размер диска (в Мб).
     */
    size: number;
    /**
     * Количество использованной памяти диска (в Мб).
     */
    used: number;
    /**
     * Тип диска.
     */
    type: string;
    /**
     * Является ли диск примонтированным.
     */
    is_mounted: boolean;
    /**
     * Является ли диск системным.
     */
    is_system: boolean;
    /**
     * Системное название диска.
     */
    system_name: string;
    /**
     * Статус диска.
     */
    status: string;
};

