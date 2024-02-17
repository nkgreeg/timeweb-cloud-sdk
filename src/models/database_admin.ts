/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Пользователь базы данных
 */
export type database_admin = {
    /**
     * Уникальный идентификатор для каждого экземпляра пользователя базы данных. Автоматически генерируется при создании.
     */
    id: number;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда была создана база данных.
     */
    created_at: string;
    /**
     * Имя пользователя базы данных
     */
    login: string;
    /**
     * Пароль пользователя базы данных
     */
    password: string;
    /**
     * Описанеие пользователя базы данных
     */
    description: string;
    /**
     * Хост пользователя
     */
    host: string | null;
    instances: Array<{
        /**
         * Уникальный идентификатор базы данных
         */
        instance_id: number;
        /**
         * Список привилегий пользователя базы данных
         */
        privileges: Array<'ALTER' | 'CREATE_VIEW' | 'CREATE' | 'DELETE' | 'DROP' | 'EVENT' | 'INDEX' | 'INSERT' | 'LOCK_TABLES' | 'REFERENCES' | 'SELECT' | 'SHOW_VIEW' | 'TRUNCATE' | 'UPDATE' | 'READ' | 'WRITE' | 'CONNECTION' | 'FAST' | 'readWrite' | 'ALTER_ROUTINE' | 'CREATE_ROUTINE' | 'TRANSACTION'>;
    }>;
};

