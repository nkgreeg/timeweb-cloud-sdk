/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Meta } from '../models/Meta';
import type { response_id } from '../models/response_id';
import type { ssh_key } from '../models/ssh_key';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SshService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Получение списка SSH-ключей
     * Чтобы получить список SSH-ключей, отправьте GET-запрос на `/api/v1/ssh-keys`.
     * @returns any Объект JSON c ключом `ssh_keys`
     * @throws ApiError
     */
    public getKeys(): CancelablePromise<({
        meta: Meta;
        'ssh-keys': Array<ssh_key>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/ssh-keys',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Создание SSH-ключа
     * Чтобы создать создать SSH-ключ, отправьте POST-запрос в `/api/v1/ssh-keys`, задав необходимые атрибуты.
     *
     *
     * @param requestBody
     * @returns any Объект JSON c ключом `ssh-key`
     * @throws ApiError
     */
    public createKey(
        requestBody: {
            /**
             * Тело SSH-ключа
             */
            body: string;
            /**
             * Будет ли выбираться SSH-ключ по умолчанию при создании сервера
             *
             *
             */
            is_default: boolean;
            /**
             * Название SSH-ключа
             */
            name: string;
        },
    ): CancelablePromise<({
        'ssh-key': ssh_key;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/ssh-keys',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение SSH-ключа по уникальному идентификатору
     * Чтобы получить SSH-ключ, отправьте GET-запрос на `/api/v1/ssh-keys/{ssh_key_id}`
     * @param sshKeyId Уникальный идентификатор SSH-ключа
     * @returns any Объект JSON c ключом `ssh_key`
     * @throws ApiError
     */
    public getKey(
        sshKeyId: number,
    ): CancelablePromise<({
        meta: Meta;
        'ssh-key': ssh_key;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/ssh-keys/{ssh_key_id}',
            path: {
                'ssh_key_id': sshKeyId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Изменение SSH-ключа по уникальному идентификатору
     * Чтобы изменить SSH-ключ, отправьте PATCH-запрос на `/api/v1/ssh-keys/{ssh_key_id}`
     * @param sshKeyId Уникальный идентификатор SSH-ключа
     * @param requestBody
     * @returns any Объект JSON c ключом `ssh_key`
     * @throws ApiError
     */
    public updateKey(
        sshKeyId: number,
        requestBody: {
            /**
             * Тело SSH-ключа
             */
            body?: string;
            /**
             * Будет ли выбираться SSH-ключ по умолчанию при создании сервера
             */
            is_default?: boolean;
            /**
             * Название SSH-ключа
             */
            name?: string;
        },
    ): CancelablePromise<({
        meta: Meta;
        'ssh-key': ssh_key;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/ssh-keys/{ssh_key_id}',
            path: {
                'ssh_key_id': sshKeyId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Удаление SSH-ключа по уникальному идентификатору
     * Чтобы удалить SSH-ключ, отправьте DELETE-запрос на `/api/v1/ssh-keys/{ssh_key_id}`
     * @param sshKeyId Уникальный идентификатор SSH-ключа
     * @returns void
     * @throws ApiError
     */
    public deleteKey(
        sshKeyId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/ssh-keys/{ssh_key_id}',
            path: {
                'ssh_key_id': sshKeyId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Добавление SSH-ключей на сервер
     * Чтобы добавить SSH-ключи на сервер, отправьте POST-запрос на `/api/v1/servers/{server_id}/ssh-keys`
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public addKeyToServer(
        serverId: number,
        requestBody: {
            /**
             * Массив уникальных идентификаторов SSH-ключей
             */
            ssh_key_ids: Array<number>;
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/servers/{server_id}/ssh-keys',
            path: {
                'server_id': serverId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Удаление SSH-ключей с сервера
     * Чтобы удалить SSH-ключ с сервера, отправьте DELETE-запрос на `/api/v1/servers/{server_id}/ssh-keys/{ssh_key_id}`
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param sshKeyId Уникальный идентификатор SSH-ключа
     * @returns void
     * @throws ApiError
     */
    public deleteKeyFromServer(
        serverId: number,
        sshKeyId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/servers/{server_id}/ssh-keys/{ssh_key_id}',
            path: {
                'server_id': serverId,
                'ssh_key_id': sshKeyId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
}
