/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { auto_reply_is_disabled } from './auto_reply_is_disabled';
import type { auto_reply_is_enabled } from './auto_reply_is_enabled';
import type { forwarding_incoming_is_disabled } from './forwarding_incoming_is_disabled';
import type { forwarding_incoming_is_enabled } from './forwarding_incoming_is_enabled';
import type { forwarding_outgoing_is_disabled } from './forwarding_outgoing_is_disabled';
import type { forwarding_outgoing_is_enabled } from './forwarding_outgoing_is_enabled';
import type { spam_filter_is_disabled } from './spam_filter_is_disabled';
import type { spam_filter_is_enabled } from './spam_filter_is_enabled';
/**
 * Изменение почтового ящика
 */
export type update_mailbox = {
    /**
     * Автоответчик на входящие письма
     */
    auto_reply?: (auto_reply_is_disabled | auto_reply_is_enabled);
    /**
     * Спам-фильтр
     */
    spam_filter?: (spam_filter_is_disabled | spam_filter_is_enabled);
    /**
     * Пересылка входящик писем.
     */
    forwarding_incoming?: (forwarding_incoming_is_disabled | forwarding_incoming_is_enabled);
    /**
     * Пересылка исходящих писем
     */
    forwarding_outgoing?: (forwarding_outgoing_is_disabled | forwarding_outgoing_is_enabled);
    /**
     * Комментарий к почтовому ящику
     */
    comment?: string;
    /**
     * Пароль почтового ящика
     */
    password?: string;
};

