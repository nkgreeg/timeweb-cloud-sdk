/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type forwarding_outgoing_is_enabled = {
    /**
     * Включена ли пересылка исходящих писем. \
     * Если передан параметр `is_enabled`: `false`, то значение передавать нельзя
     */
    is_enabled?: boolean;
    /**
     * Адрес для пересылки исходящих писем. \
     * Если передан параметр `is_enabled`: `false`, то значение передавать нельзя
     */
    outgoing_to?: string;
};

