/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type create_admin = {
    /**
     * Имя пользователя базы данных
     */
    login: string;
    /**
     * Пароль пользователя базы данных
     */
    password: string;
    /**
     * Хост пользователя
     */
    host?: string;
    /**
     * Уникальный идентификатор инстанса базы данных для приминения привилегий. В данных момент поле доступно только для кластеров MySQL. Если поле не передано, то привилегии будут применены ко всем инстансам
     */
    instance_id?: number;
    /**
     * Список привилегий пользователя базы данных
     */
    privileges: Array<'ALTER' | 'CREATE_VIEW' | 'CREATE' | 'DELETE' | 'DROP' | 'EVENT' | 'INDEX' | 'INSERT' | 'LOCK_TABLES' | 'REFERENCES' | 'SELECT' | 'SHOW_VIEW' | 'TRUNCATE' | 'UPDATE' | 'READ' | 'WRITE' | 'CONNECTION' | 'FAST' | 'readWrite' | 'ALTER_ROUTINE' | 'CREATE_ROUTINE' | 'TRANSACTION'>;
    /**
     * Описание пользователя базы данных
     */
    description?: string;
};

