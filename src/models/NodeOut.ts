/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type NodeOut = {
    /**
     * Уникальный идентификатор ноды
     */
    id: number;
    /**
     * Дата и время создания ноды в формате ISO8601
     */
    created_at: string;
    /**
     * Тип ноды
     */
    type: string;
    /**
     * Идентификатор группы нод
     */
    group_id: number;
    /**
     * Статус
     */
    status: string;
    /**
     * Идентификатор тарифа ноды
     */
    preset_id: number;
    /**
     * Количество ядер
     */
    cpu: number;
    /**
     * Количество памяти
     */
    ram: number;
    /**
     * Количество пространства
     */
    disk: number;
    /**
     * Пропускная способность сети
     */
    network: number;
    /**
     * Ip-адрес ноды
     */
    node_ip: string;
};

