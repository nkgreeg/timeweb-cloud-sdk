/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Проект
 */
export type project = {
    /**
     * Уникальный идентификатор для каждого проекта. Автоматически генерируется при создании.
     */
    id: number;
    /**
     * Идентификатор пользователя.
     */
    account_id: string;
    /**
     * Идентификатор аватара пользователя. Описание методов работы с аватарами появится позднее.
     */
    avatar_id: string | null;
    /**
     * Описание проекта.
     */
    description: string;
    /**
     * Удобочитаемое имя проекта.
     */
    name: string;
    /**
     * Это логическое значение, которое показывает, выбран ли проект по умолчанию для создания новых сущностей.
     */
    is_default: boolean;
};

