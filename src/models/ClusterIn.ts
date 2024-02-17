/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NodeGroupIn } from './NodeGroupIn';
export type ClusterIn = {
    /**
     * Название кластера
     */
    name: string;
    /**
     * Описание кластера
     */
    description?: string;
    /**
     * Описание появится позднее
     */
    ha: boolean;
    /**
     * Версия Kubernetes
     */
    k8s_version: string;
    /**
     * Тип используемого сетевого драйвера в кластере
     */
    network_driver: string;
    /**
     * Логическое значение, которое показывает, использовать ли Ingress в кластере
     */
    ingress: boolean;
    /**
     * Идентификатор тарифа мастер-ноды
     */
    preset_id: number;
    /**
     * Группы воркеров в кластере
     */
    worker_groups?: Array<NodeGroupIn>;
};

