/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An object consists of data and its descriptive metadata.
 */
export type s3_object = {
    /**
     * Название файла или папки.
     */
    key?: string;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда была сделана последняя модификация файла или папки.
     */
    last_modified?: string;
    /**
     * Тег.
     */
    etag?: string;
    /**
     * Размер (в байтах) файла или папки.
     */
    size?: number;
    /**
     * Класс хранилища.
     */
    storage_class?: string;
    /**
     * Алгоритм
     */
    checksum_algorithm?: Array<string>;
    /**
     * Информация о владельце файла или папки.
     */
    owner?: {
        /**
         * Идентификатор владельца файла.
         */
        id?: string;
        /**
         * Имя владельца файла.
         */
        display_name?: string;
    };
    /**
     * Тип (файл или папка).
     */
    type: s3_object.type;
};
export namespace s3_object {
    /**
     * Тип (файл или папка).
     */
    export enum type {
        FILE = 'file',
        DIRECTORY = 'directory',
    }
}

