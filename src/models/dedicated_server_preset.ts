/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Выделенный сервер
 */
export type dedicated_server_preset = {
    /**
     * Уникальный идентификатор тарифа выделенного сервера.
     */
    id: number;
    /**
     * Описание характеристик тарифа выделенного сервера.
     */
    description: string;
    /**
     * Это логическое значение, которое показывает, доступен ли IPMI у данного тарифа.
     */
    is_ipmi_enabled: boolean;
    /**
     * Объект, содержащий информацию о процессоре выделенного сервера.
     */
    cpu: {
        /**
         * Описание характеристик процессора выделенного сервера.
         */
        description: string;
        /**
         * Краткое описание характеристик процессора выделенного сервера.
         */
        description_short: string;
        /**
         * Количество ядер процессора выделенного сервера.
         */
        count: number;
    };
    /**
     * Объект, содержащий информацию о диске выделенного сервера.
     */
    disk: {
        /**
         * Описание характеристик диска выделенного сервера.
         */
        description: string;
        /**
         * Количество дисков выделенного сервера.
         */
        count: number;
    };
    /**
     * Стоимость тарифа выделенного сервера
     */
    price?: number;
    /**
     * Объект, содержащий информацию об ОЗУ выделенного сервера.
     */
    memory: {
        /**
         * Описание характеристик ОЗУ выделенного сервера.
         */
        description: string;
        /**
         * Количество ОЗУ выделенного сервера.
         */
        count: number;
        /**
         * Размер (в Мб) ОЗУ выделенного сервера.
         */
        size: number;
    };
    /**
     * Локация.
     */
    location: dedicated_server_preset.location;
};
export namespace dedicated_server_preset {
    /**
     * Локация.
     */
    export enum location {
        RU_1 = 'ru-1',
        RU_2 = 'ru-2',
        KZ_1 = 'kz-1',
        PL_1 = 'pl-1',
    }
}

