/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Статус аккаунта
 */
export type status = {
    /**
     * Это логическое значение, которое показывает, заблокирован ли аккаунт.
     */
    is_blocked: boolean;
    /**
     * Это логическое значение, которое показывает, заблокирован ли аккаунт навсегда.
     */
    is_permanent_blocked: boolean;
    /**
     * Это логическое значение, которое показывает, требуется ли отправлять счета на почту.
     */
    is_send_bill_letters: boolean;
    /**
     * Информация о компании.
     */
    company_info: {
        /**
         * Идентификатор компании.
         */
        id: number;
        /**
         * Название компании.
         */
        name: string;
    };
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда последний раз изменялся пароль.
     */
    last_password_changed_at: string;
    /**
     * Идентификатор аккаунта для яндекс метрики.
     */
    ym_client_id: string | null;
};

