/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { create_vpc } from '../models/create_vpc';
import type { Meta } from '../models/Meta';
import type { response_id } from '../models/response_id';
import type { update_vpc } from '../models/update_vpc';
import type { vpc } from '../models/vpc';
import type { vpc_port } from '../models/vpc_port';
import type { vpc_service } from '../models/vpc_service';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VpcService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Получение списка VPCs
     * Чтобы получить список VPCs, отправьте GET-запрос на `/api/v2/vpcs`.
     * @returns any Объект JSON c ключом `vpcs`
     * @throws ApiError
     */
    public getVpCs(): CancelablePromise<({
        meta: Meta;
        vpcs: Array<vpc>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/vpcs',
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
     * Создание VPC
     * Чтобы создать создать VPC, отправьте POST-запрос в `/api/v2/vpcs`, задав необходимые атрибуты.
     * @param requestBody
     * @returns any Объект JSON c ключом `vpc`
     * @throws ApiError
     */
    public createVpc(
        requestBody: create_vpc,
    ): CancelablePromise<({
        vpc: vpc;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v2/vpcs',
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
     * Получение VPC
     * Чтобы отобразить информацию об отдельном VPC, отправьте запрос GET на `api/v2/vpcs/{vpc_id}`.
     * @param vpcId Идентификатор сети
     * @returns any Ответ будет представлять собой объект JSON с ключом `vpc`.
     * @throws ApiError
     */
    public getVpc(
        vpcId: string,
    ): CancelablePromise<({
        vpc: vpc;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/vpcs/{vpc_id}',
            path: {
                'vpc_id': vpcId,
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
     * Изменение VPC по идентификатору сети
     * Чтобы изменить VPC, отправьте PATCH-запрос на `/api/v2/vpcs/{vpc_id}`
     * @param vpcId Идентификатор сети
     * @param requestBody
     * @returns any Объект JSON c ключом `vpc`
     * @throws ApiError
     */
    public updateVpCs(
        vpcId: string,
        requestBody: update_vpc,
    ): CancelablePromise<({
        vpc: vpc;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v2/vpcs/{vpc_id}',
            path: {
                'vpc_id': vpcId,
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
     * Получение списка сервисов в VPC
     * Чтобы получить список сервисов, отправьте GET-запрос на `/api/v2/vpcs/{vpc_id}/services`.
     * @param vpcId Идентификатор сети
     * @returns any Объект JSON c ключом `services`
     * @throws ApiError
     */
    public getVpcServices(
        vpcId: string,
    ): CancelablePromise<({
        meta: Meta;
        services: Array<vpc_service>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v2/vpcs/{vpc_id}/services',
            path: {
                'vpc_id': vpcId,
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
     * Удаление VPC по идентификатору сети
     * Чтобы удалить VPC, отправьте DELETE-запрос на `/api/v1/vpcs/{vpc_id}`
     * @param vpcId Идентификатор сети
     * @returns void
     * @throws ApiError
     */
    public deleteVpc(
        vpcId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/vpcs/{vpc_id}',
            path: {
                'vpc_id': vpcId,
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
     * Получение списка портов для VPC
     * Чтобы получить список портов для VPC, отправьте GET-запрос на `/api/v1/vpcs/{vpc_id}/ports`.
     * @param vpcId Идентификатор сети
     * @returns any Объект JSON c ключом `vpc_ports`
     * @throws ApiError
     */
    public getVpcPorts(
        vpcId: string,
    ): CancelablePromise<({
        meta: Meta;
        vpc_ports: Array<vpc_port>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/vpcs/{vpc_id}/ports',
            path: {
                'vpc_id': vpcId,
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
