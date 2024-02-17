/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * База данных
 */
export type database_instance = {
    /**
     * Уникальный идентификатор для каждого экземпляра базы данных. Автоматически генерируется при создании.
     */
    id: number;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда была создана база данных.
     */
    created_at: string;
    /**
     * Название базы данных.
     */
    name: string;
    /**
     * Описание базы данных
     */
    description: string;
};

