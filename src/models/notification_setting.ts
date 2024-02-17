/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { notification_setting_channel } from './notification_setting_channel';
import type { notification_setting_type } from './notification_setting_type';
/**
 * Статус аккаунта
 */
export type notification_setting = {
    /**
     * Каналы отправки уведомления.
     */
    channels: {
        email: notification_setting_channel;
        sms: notification_setting_channel;
        telegram: notification_setting_channel;
    };
    /**
     * Строка, указывающая название группы уведомления. Может быть «security», «monitoring» или «finances».
     */
    group: notification_setting.group;
    type: notification_setting_type;
};
export namespace notification_setting {
    /**
     * Строка, указывающая название группы уведомления. Может быть «security», «monitoring» или «finances».
     */
    export enum group {
        SECURITY = 'security',
        MONITORING = 'monitoring',
        FINANCES = 'finances',
    }
}

