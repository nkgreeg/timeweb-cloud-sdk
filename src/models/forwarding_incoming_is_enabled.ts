/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type forwarding_incoming_is_enabled = {
    /**
     * Включена ли пересылка входящик писем
     */
    is_enabled?: boolean;
    /**
     * Удалять ли входящие письма. \
     * Если передан параметр `is_enabled`: `false`, то значение передавать нельзя
     */
    is_delete_messages?: boolean;
    /**
     * Список адресов для пересылки. \
     * Если передан параметр `is_enabled`: `false`, то значение передавать нельзя
     */
    incoming_list?: Array<string>;
};

