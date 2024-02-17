/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type backup = {
    /**
     * Идентификатор резервной копии.
     */
    id: number;
    /**
     * Название резервной копии.
     */
    name: string;
    /**
     * Комментарий.
     */
    comment: string | null;
    /**
     * Дата создания.
     */
    created_at: string;
    /**
     * Статус бэкапа.
     */
    status: backup.status;
    /**
     * Размер резервной копии (Мб).
     */
    size: number;
    /**
     * Тип бэкапа.
     */
    type: backup.type;
    /**
     * Прогресс создания бэкапа. Значение будет меняться в статусе бэкапа `create` от 0 до 99, для остальных статусов всегда будет возвращаться 0.
     */
    progress: number;
};
export namespace backup {
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

