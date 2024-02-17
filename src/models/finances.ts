/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Платежная информация
 */
export type finances = {
    /**
     * Баланс аккаунта.
     */
    balance: number;
    /**
     * Валюта, которая используется на аккаунте.
     */
    currency: string;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда заканчивается скидка для аккаунта.
     */
    discount_end_date_at: string | null;
    /**
     * Процент скидки для аккаунта.
     */
    discount_percent: number;
    /**
     * Стоимость услуг на аккаунте в час.
     */
    hourly_cost: number;
    /**
     * Абонентская плата в час (с учетом скидок).
     */
    hourly_fee: number;
    /**
     * Стоимость услуг на аккаунте в месяц.
     */
    monthly_cost: number;
    /**
     * Абонентская плата в месяц (с учетом скидок).
     */
    monthly_fee: number;
    /**
     * Общая сумма платежей на аккаунте.
     */
    total_paid: number;
    /**
     * Сколько часов работы услуг оплачено на аккаунте.
     */
    hours_left: number | null;
    /**
     * Информация о карте, используемой для автоплатежей.
     */
    autopay_card_info: string | null;
};

