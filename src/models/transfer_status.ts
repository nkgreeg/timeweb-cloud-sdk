/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Статус трансфера.
 */
export type transfer_status = {
    /**
     * Общий статус трансфера.
     */
    status: transfer_status.status;
    /**
     * Количество попыток.
     */
    tries: number;
    /**
     * Общее количество затронутых объектов.
     */
    total_count: number;
    /**
     * Общий размер затронутых объектов.
     */
    total_size: number;
    /**
     * Количество перемещенных объектов.
     */
    uploaded_count: number;
    /**
     * Размер перемещенных объектов.
     */
    uploaded_size: number;
    errors: Array<{
        /**
         * Текст ошибки.
         */
        value: string;
        /**
         * Количество попыток.
         */
        try: number;
    }>;
};
export namespace transfer_status {
    /**
     * Общий статус трансфера.
     */
    export enum status {
        STARTED = 'started',
        SUSPENDED = 'suspended',
        FAILED = 'failed',
    }
}

