/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ClusterOut = {
    /**
     * Уникальный идентификатор кластера
     */
    id: number;
    /**
     * Название
     */
    name: string;
    /**
     * Дата и время создания кластера в формате ISO8601
     */
    created_at: string;
    /**
     * Статус
     */
    status: string;
    /**
     * Описание
     */
    description: string;
    /**
     * Описание появится позже
     */
    ha: boolean;
    /**
     * Версия Kubernetes
     */
    k8s_version: string;
    /**
     * Используемый сетевой драйвер
     */
    network_driver: string;
    /**
     * Логическое значение, показывающее, включен ли Ingress
     */
    ingress: boolean;
    /**
     * Идентификатор тарифа мастер-ноды
     */
    preset_id: number;
    /**
     * Общее количество ядер
     */
    cpu?: number;
    /**
     * Общее количество памяти
     */
    ram?: number;
    /**
     * Общее дисковое пространство
     */
    disk?: number;
};

