/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { bind_floating_ip } from '../models/bind_floating_ip';
import type { create_floating_ip } from '../models/create_floating_ip';
import type { floating_ip } from '../models/floating_ip';
import type { Meta } from '../models/Meta';
import type { response_id } from '../models/response_id';
import type { update_floating_ip } from '../models/update_floating_ip';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IpService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Получение списка плавающих IP
     * Чтобы получить список плавающих IP, отправьте GET-запрос на `/api/v1/floating-ips`.
     * @returns any Объект JSON c ключом `ips`
     * @throws ApiError
     */
    public getFloatingIps(): CancelablePromise<({
        meta: Meta;
        ips: Array<floating_ip>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/floating-ips',
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
     * Создание плавающего IP
     * Чтобы создать создать плавающий IP, отправьте POST-запрос в `/api/v1/floating-ip`, задав необходимые атрибуты.
     * @param requestBody
     * @returns any Объект JSON c ключом `ip`
     * @throws ApiError
     */
    public createFloatingIp(
        requestBody: create_floating_ip,
    ): CancelablePromise<({
        ip: floating_ip;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/floating-ips',
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
     * Получение плавающего IP
     * Чтобы отобразить информацию об отдельном плавающем IP, отправьте запрос GET на `api/v1/floating-ips/{floating_ip_id}`.
     * @param floatingIpId Идентификатор плавающего IP
     * @returns any Ответ будет представлять собой объект JSON с ключом `ip`.
     * @throws ApiError
     */
    public getFloatingIp(
        floatingIpId: string,
    ): CancelablePromise<({
        ip: floating_ip;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/floating-ips/{floating_ip_id}',
            path: {
                'floating_ip_id': floatingIpId,
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
     * Изменение плавающего IP по идентификатору
     * Чтобы изменить плавающий IP, отправьте PATCH-запрос на `/api/v1/floating-ips/{floating_ip_id}`
     * @param floatingIpId Идентификатор плавающего IP
     * @param requestBody
     * @returns any Объект JSON c ключом `ip`
     * @throws ApiError
     */
    public updateFloatingIp(
        floatingIpId: string,
        requestBody: update_floating_ip,
    ): CancelablePromise<({
        ip: floating_ip;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/floating-ips/{floating_ip_id}',
            path: {
                'floating_ip_id': floatingIpId,
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
     * Удаление плавающего IP по идентификатору
     * Чтобы удалить плавающий IP, отправьте DELETE-запрос на `/api/v1/floating-ips/{floating_ip_id}`
     * @param floatingIpId Идентификатор плавающего IP
     * @returns any Плавающий IP успешно удален
     * @throws ApiError
     */
    public deleteFloatingIp(
        floatingIpId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/floating-ips/{floating_ip_id}',
            path: {
                'floating_ip_id': floatingIpId,
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
     * Привязать IP к сервису
     * Чтобы привязать IP к сервису, отправьте POST-запрос на `/api/v1/floating-ip/{floating_ip_id}/bind`.
     * @param floatingIpId Идентификатор плавающего IP
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public bindFloatingIp(
        floatingIpId: string,
        requestBody: bind_floating_ip,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/floating-ips/{floating_ip_id}/bind',
            path: {
                'floating_ip_id': floatingIpId,
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
     * Отвязать IP от сервиса
     * Чтобы отвязать IP от сервиса, отправьте POST-запрос на `/api/v1/floating-ip/{floating_ip_id}/unbind`.
     * @param floatingIpId Идентификатор плавающего IP
     * @returns void
     * @throws ApiError
     */
    public unbindFloatingIp(
        floatingIpId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/floating-ips/{floating_ip_id}/unbind',
            path: {
                'floating_ip_id': floatingIpId,
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
