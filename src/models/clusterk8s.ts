/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Кластер
 */
export type clusterk8s = {
    /**
     * Уникальный идентификатор для каждого экземпляра крастера. Автоматически генерируется при создании.
     */
    id: number;
    /**
     * Удобочитаемое имя, установленное для кластера.
     */
    name: string;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда был создан кластер.
     */
    created_at: string;
    /**
     * Статус кластера.
     */
    status: clusterk8s.status;
    /**
     * Описание кластера.
     */
    description: string;
    /**
     * Описание появится позднее.
     */
    ha: boolean;
    /**
     * Версия k8s.
     */
    k8s_version: string;
    /**
     * Описание появится позднее.
     */
    network_driver: string;
    /**
     * Описание появится позднее.
     */
    ingress: boolean;
    /**
     * Количество ядер процессора кластера.
     */
    cpu: number;
    /**
     * Количество (в Мб) оперативной памяти кластера.
     */
    ram: number;
    /**
     * Размер (в Гб) диска кластера.
     */
    disk: number;
    /**
     * Тип сервиса кластера.
     */
    preset_id: number;
};
export namespace clusterk8s {
    /**
     * Статус кластера.
     */
    export enum status {
        INSTALLING = 'installing',
        PROVISIONING = 'provisioning',
        ACTIVE = 'active',
        UNPAID = 'unpaid',
    }
}

