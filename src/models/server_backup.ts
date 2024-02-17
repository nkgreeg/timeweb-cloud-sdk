/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type server_backup = {
    /**
     * Уникальный идентификатор бэкапа сервера.
     */
    id: number;
    /**
     * Название бэкапа.
     */
    name: string;
    /**
     * Комментарий к бэкапу.
     */
    comment: string | null;
    /**
     * Дата создания бэкапа.
     */
    created_at: string;
    /**
     * Статус бэкапа.
     */
    status: server_backup.status;
    /**
     * Размер бэкапа (в Мб).
     */
    size: number;
    /**
     * Тип бэкапа.
     */
    type: server_backup.type;
    /**
     * Прогресс создания бэкапа. Значение будет меняться в статусе бэкапа `create` от 0 до 99, для остальных статусов всегда будет возвращаться 0.
     */
    progress: number;
};
export namespace server_backup {
    /**
     * Статус бэкапа.
     */
    export enum status {
        PRECREATE = 'precreate',
        DELETE = 'delete',
        SHUTDOWN = 'shutdown',
        RECOVER = 'recover',
        CREATE = 'create',
        FAIL = 'fail',
        DONE = 'done',
    }
    /**
     * Тип бэкапа.
     */
    export enum type {
        MANUAL = 'manual',
        AUTO = 'auto',
    }
}

