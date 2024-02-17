/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type add_countries = {
    /**
     * Страна.
     */
    value: string;
    /**
     * Результат добавления страны.
     */
    status: add_countries.status;
};
export namespace add_countries {
    /**
     * Результат добавления страны.
     */
    export enum status {
        SUCCESS = 'success',
        CONFLICT = 'conflict',
    }
}

