/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * База данных
 */
export type create_db_auto_backups = {
    /**
     * Количество копий для хранения. Минимальное количество `1`, максимальное `99`
     */
    copy_count: number;
    /**
     * Дата начала создания первого автобэкапа. Значение в формате `ISO8601`. Время не учитывается.
     */
    creation_start_at: string;
    /**
     * Периодичность создания автобэкапов
     */
    interval: create_db_auto_backups.interval;
    /**
     * День недели, в который будут создаваться автобэкапы. Работает только со значением `interval`: `week`. Доступные значение от `1 `до `7`.
     */
    day_of_week: number;
};
export namespace create_db_auto_backups {
    /**
     * Периодичность создания автобэкапов
     */
    export enum interval {
        DAY = 'day',
        WEEK = 'week',
        MONTH = 'month',
    }
}

