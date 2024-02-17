/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type forwarding_incoming_is_disabled = {
    /**
     * Включена ли пересылка входящик писем
     */
    is_enabled: boolean;
    /**
     * Удалять ли входящие письма
     */
    is_delete_messages?: boolean;
    /**
     * Список адресов для пересылки. Не должен быть пустым при передачи параметра `is_enabled`: `true`
     */
    incoming_list?: Array<string>;
};

