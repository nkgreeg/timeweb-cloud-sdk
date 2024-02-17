/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type remove_countries = {
    /**
     * Страна.
     */
    value: string;
    /**
     * Результат удаления страны.
     */
    status: remove_countries.status;
};
export namespace remove_countries {
    /**
     * Результат удаления страны.
     */
    export enum status {
        SUCCESS = 'success',
        NOT_FOUND = 'not_found',
    }
}

