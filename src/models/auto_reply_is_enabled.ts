/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type auto_reply_is_enabled = {
    /**
     * Включен ли автоответчик на входящие письма
     */
    is_enabled?: boolean;
    /**
     * Сообщение автоответчика на входящие письма. \
     * Если передан параметр `is_enabled`: `false`, то значение передавать нельзя
     */
    message?: string;
    /**
     * Тема сообщения автоответчика на входящие письма. \
     * Если передан параметр `is_enabled`: `false`, то значение передавать нельзя
     */
    subject?: string;
};

