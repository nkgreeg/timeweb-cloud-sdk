/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Тариф
 */
export type presets_storage = {
    /**
     * Уникальный идентификатор для каждого экземпляра тарифа хранилища.
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
     * Описание диска хранилища.
     */
    disk: number;
    /**
     * Стоимость тарифа хранилища.
     */
    price: number;
    /**
     * Географическое расположение тарифа.
     */
    location: presets_storage.location;
};
export namespace presets_storage {
    /**
     * Географическое расположение тарифа.
     */
    export enum location {
        RU_1 = 'ru-1',
        PL_1 = 'pl-1',
        KZ_1 = 'kz-1',
    }
}

