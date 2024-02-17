/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MasterPresetOutApi = {
    /**
     * Уникальный идентификатор тарифа
     */
    id: number;
    /**
     * Описание тарифа
     */
    description: string;
    /**
     * Краткое описание тарифа
     */
    description_short: string;
    /**
     * Стоимость
     */
    price: number;
    /**
     * Количество ядер ноды
     */
    cpu: number;
    /**
     * Количество памяти ноды
     */
    ram: number;
    /**
     * Количество пространства на ноде
     */
    disk: number;
    /**
     * Пропускная способность ноды
     */
    network: number;
    /**
     * Тип тарифа
     */
    type?: MasterPresetOutApi.type;
    /**
     * Ограничение по количеству воркер-нод в кластере
     */
    limit?: number;
};
export namespace MasterPresetOutApi {
    /**
     * Тип тарифа
     */
    export enum type {
        MASTER = 'master',
    }
}

