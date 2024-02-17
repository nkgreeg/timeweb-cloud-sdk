/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type update_cluster = {
    /**
     * Название кластера базы данных.
     */
    name?: string;
    /**
     * Идентификатор тарифа.
     */
    preset_id?: number;
    /**
     * Описание кластера базы данных
     */
    description?: string;
    /**
     * Доступность публичного IP-адреса
     */
    is_enabled_public_network?: boolean;
};

