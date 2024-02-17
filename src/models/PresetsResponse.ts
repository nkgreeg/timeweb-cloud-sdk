/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MasterPresetOutApi } from './MasterPresetOutApi';
import type { Meta } from './Meta';
import type { WorkerPresetOutApi } from './WorkerPresetOutApi';
export type PresetsResponse = {
    /**
     * Идентификатор запроса
     */
    response_id?: string;
    /**
     * Вспомогательная информация о возвращаемой сущности
     */
    meta: Meta;
    /**
     * Массив тарифов k8s
     */
    k8s_presets: Array<(WorkerPresetOutApi | MasterPresetOutApi)>;
};

