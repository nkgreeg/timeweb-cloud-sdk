/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type presets_balancer = {
    /**
     * Уникальный идентификатор для каждого экземпляра тарифа базы данных.
     */
    id: number;
    /**
     * Описание тарифа.
     */
    description: string;
    /**
     * Краткое описание тарифа.
     */
    description_short: string;
    /**
     * Пропускная способность тарифа.
     */
    bandwidth: number;
    /**
     * Количество реплик.
     */
    replica_count: number;
    /**
     * Запросов в секунду.
     */
    request_per_second: string;
    /**
     * Стоимость тарифа базы данных.
     */
    price: number;
    /**
     * Географическое расположение тарифа.
     */
    location: presets_balancer.location;
};
export namespace presets_balancer {
    /**
     * Географическое расположение тарифа.
     */
    export enum location {
        RU_1 = 'ru-1',
        PL_1 = 'pl-1',
        KZ_1 = 'kz-1',
    }
}

