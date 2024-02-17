/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api_key } from '../models/api_key';
import type { create_api_key } from '../models/create_api_key';
import type { created_api_key } from '../models/created_api_key';
import type { edit_api_key } from '../models/edit_api_key';
import type { Meta } from '../models/Meta';
import type { refresh_api_key } from '../models/refresh_api_key';
import type { response_id } from '../models/response_id';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Получение списка выпущенных токенов
     * Чтобы получить список выпущенных токенов, отправьте GET-запрос на `/api/v1/auth/api-keys`.
     * @returns any Объект JSON c ключом `api_keys`
     * @throws ApiError
     */
    public getTokens(): CancelablePromise<({
        meta: Meta;
        api_keys: Array<api_key>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/auth/api-keys',
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
     * Создание токена
     * Чтобы создать токен, отправьте POST-запрос на `/api/v1/auth/api-keys`, задав необходимые атрибуты.
     *
     * Токен будет создан с использованием предоставленной информации. Тело ответа будет содержать объект JSON с информацией о созданном токене.
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `api_key`.
     * @throws ApiError
     */
    public createToken(
        requestBody: create_api_key,
    ): CancelablePromise<({
        api_key: created_api_key;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/auth/api-keys',
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
     * Изменить токен
     * Чтобы изменить токен, отправьте PATCH-запрос на `/api/v1/auth/api-keys/{token_id}`, задав необходимые атрибуты.
     * @param tokenId Идентификатор токена
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `api_key`.
     * @throws ApiError
     */
    public updateToken(
        tokenId: string,
        requestBody: edit_api_key,
    ): CancelablePromise<({
        api_key: api_key;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/auth/api-keys/{token_id}',
            path: {
                'token_id': tokenId,
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
     * Перевыпустить токен
     * Чтобы перевыпустить токен, отправьте PUT-запрос на `/api/v1/auth/api-keys/{token_id}`, задав необходимые атрибуты.
     * @param tokenId Идентификатор токена
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `api_key`.
     * @throws ApiError
     */
    public reissueToken(
        tokenId: string,
        requestBody: refresh_api_key,
    ): CancelablePromise<({
        api_key: created_api_key;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/auth/api-keys/{token_id}',
            path: {
                'token_id': tokenId,
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
     * Удалить токен
     * Чтобы удалить токен, отправьте DELETE-запрос на `/api/v1/auth/api-keys/{token_id}`.
     * @param tokenId Идентификатор токена
     * @returns void
     * @throws ApiError
     */
    public deleteToken(
        tokenId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/auth/api-keys/{token_id}',
            path: {
                'token_id': tokenId,
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
