/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Строка, указывающая название уведомления.
 */
export enum notification_setting_type {
    BALANCER_DELETION_CONFIRMATION = 'balancer_deletion_confirmation',
    DB_DELETION_CONFIRMATION = 'db_deletion_confirmation',
    S3_DELETION_CONFIRMATION = 's3_deletion_confirmation',
    K8S_DELETION_CONFIRMATION = 'k8s_deletion_confirmation',
    SERVER_DELETION_CONFIRMATION = 'server_deletion_confirmation',
    SERVER_DISK_ALMOST_FILLING_UP = 'server_disk_almost_filling_up',
    SERVER_BACKUP_CREATED = 'server_backup_created',
    SERVER_BACKUP_CREATION_ERROR = 'server_backup_creation_error',
    SERVER_INSTALL = 'server_install',
    SERVER_REINSTALL = 'server_reinstall',
    SERVER_RESET_PASSWORD_SUCCESS = 'server_reset_password_success',
    SERVER_RESET_PASSWORD_ERROR = 'server_reset_password_error',
    SERVER_CLONING = 'server_cloning',
    LOW_BALANCE_INFO = 'low_balance_info',
    ACCOUNT_BLOCKED = 'account_blocked',
    MONEY_TRANSFER = 'money_transfer',
    AUTO_PAYMENT_SUCCESS = 'auto_payment_success',
    AUTO_PAYMENT_ERROR = 'auto_payment_error',
}
