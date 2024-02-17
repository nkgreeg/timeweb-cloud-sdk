/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FirewallGroupInAPI } from '../models/FirewallGroupInAPI';
import type { FirewallGroupOutResponse } from '../models/FirewallGroupOutResponse';
import type { FirewallGroupResourceOutResponse } from '../models/FirewallGroupResourceOutResponse';
import type { FirewallGroupResourcesOutResponse } from '../models/FirewallGroupResourcesOutResponse';
import type { FirewallGroupsOutResponse } from '../models/FirewallGroupsOutResponse';
import type { FirewallRuleInAPI } from '../models/FirewallRuleInAPI';
import type { FirewallRuleOutResponse } from '../models/FirewallRuleOutResponse';
import type { FirewallRulesOutResponse } from '../models/FirewallRulesOutResponse';
import type { ResourceType } from '../models/ResourceType';
import type { response_id } from '../models/response_id';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FirewallService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Получение групп правил
     * Чтобы получить групп правил для аккаунта, отправьте GET запрос на `/api/v1/firewall/groups`
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @returns any Список групп правил
     * @throws ApiError
     */
    public getGroups(
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<(FirewallGroupsOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/firewall/groups',
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Создание группы правил
     * Чтобы создать группу правил, отправьте POST запрос на `/api/v1/firewall/groups`
     * @param requestBody
     * @param policy Тип группы правил
     * @returns any Группа правил создана
     * @throws ApiError
     */
    public createGroup(
        requestBody: FirewallGroupInAPI,
        policy?: 'DROP' | 'ACCEPT',
    ): CancelablePromise<(FirewallGroupOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/firewall/groups',
            query: {
                'policy': policy,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение информации о группе правил
     * Чтобы получить информацию о группе правил, отправьте GET запрос на `/api/v1/firewall/groups/{group_id}`
     * @param groupId Идентификатор группы правил
     * @returns any Информация о группе правил
     * @throws ApiError
     */
    public getGroup(
        groupId: string,
    ): CancelablePromise<(FirewallGroupOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/firewall/groups/{group_id}',
            path: {
                'group_id': groupId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Удаление группы правил
     * Чтобы удалить группу правил, отправьте DELETE запрос на `/api/v1/firewall/groups/{group_id}`
     * @param groupId Идентификатор группы правил
     * @returns void
     * @throws ApiError
     */
    public deleteGroup(
        groupId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/firewall/groups/{group_id}',
            path: {
                'group_id': groupId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Обновление группы правил
     * Чтобы изменить группу правил, отправьте PATCH запрос на `/api/v1/firewall/groups/{group_id}`
     * @param groupId Идентификатор группы правил
     * @param requestBody
     * @returns any Группа правил обновлена
     * @throws ApiError
     */
    public updateGroup(
        groupId: string,
        requestBody: FirewallGroupInAPI,
    ): CancelablePromise<(FirewallGroupOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/firewall/groups/{group_id}',
            path: {
                'group_id': groupId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение слинкованных ресурсов
     * Чтобы получить слинкованных ресурсов для группы правил, отправьте GET запрос на `/api/v1/firewall/groups/{group_id}/resources`
     * @param groupId Идентификатор группы правил
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @returns any Список слинкованных ресурсов
     * @throws ApiError
     */
    public getGroupResources(
        groupId: string,
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<(FirewallGroupResourcesOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/firewall/groups/{group_id}/resources',
            path: {
                'group_id': groupId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Линковка ресурса в firewall group
     * Чтобы слинковать ресурс с группой правил, отправьте POST запрос на `/api/v1/firewall/groups/{group_id}/resources/{resource_id}`
     * @param groupId Идентификатор группы правил
     * @param resourceId Идентификатор ресурса
     * @param resourceType
     * @returns any Ресурс добавлен к группе
     * @throws ApiError
     */
    public addResourceToGroup(
        groupId: string,
        resourceId: string,
        resourceType?: ResourceType,
    ): CancelablePromise<(FirewallGroupResourceOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/firewall/groups/{group_id}/resources/{resource_id}',
            path: {
                'group_id': groupId,
                'resource_id': resourceId,
            },
            query: {
                'resource_type': resourceType,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Отлинковка ресурса из firewall group
     * Чтобы отлинковать ресурс от группы правил, отправьте DELETE запрос на `/api/v1/firewall/groups/{group_id}/resources/{resource_id}`
     * @param groupId Идентификатор группы правил
     * @param resourceId Идентификатор ресурса
     * @param resourceType
     * @returns void
     * @throws ApiError
     */
    public deleteResourceFromGroup(
        groupId: string,
        resourceId: string,
        resourceType?: ResourceType,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/firewall/groups/{group_id}/resources/{resource_id}',
            path: {
                'group_id': groupId,
                'resource_id': resourceId,
            },
            query: {
                'resource_type': resourceType,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение списка правил
     * Чтобы получить список правил в группе, отправьте GET запрос на `/api/v1/firewall/groups/{group_id}/rules`
     * @param groupId Идентификатор группы правил
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @returns any Список правил
     * @throws ApiError
     */
    public getGroupRules(
        groupId: string,
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<(FirewallRulesOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/firewall/groups/{group_id}/rules',
            path: {
                'group_id': groupId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Создание firewall правила
     * Чтобы создать правило в группе, отправьте POST запрос на `/api/v1/firewall/groups/{group_id}/rules`
     * @param groupId Идентификатор группы правил
     * @param requestBody
     * @returns any Правило создано
     * @throws ApiError
     */
    public createGroupRule(
        groupId: string,
        requestBody: FirewallRuleInAPI,
    ): CancelablePromise<(FirewallRuleOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/firewall/groups/{group_id}/rules',
            path: {
                'group_id': groupId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение информации о правиле
     * Чтобы получить инфомрацию о правиле, отправьте GET запрос на `/api/v1/firewall/groups/{group_id}/rules/{rule_id}`
     * @param ruleId Идентификатор правила
     * @param groupId Идентификатор группы правил
     * @returns any Информация о правиле
     * @throws ApiError
     */
    public getGroupRule(
        ruleId: string,
        groupId: string,
    ): CancelablePromise<(FirewallRuleOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/firewall/groups/{group_id}/rules/{rule_id}',
            path: {
                'rule_id': ruleId,
                'group_id': groupId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Удаление firewall правила
     * Чтобы удалить правило, отправьте DELETE запрос на `/api/v1/firewall/groups/{group_id}/rules/{rule_id}`
     * @param groupId Идентификатор группы правил
     * @param ruleId Идентификатор правила
     * @returns void
     * @throws ApiError
     */
    public deleteGroupRule(
        groupId: string,
        ruleId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/firewall/groups/{group_id}/rules/{rule_id}',
            path: {
                'group_id': groupId,
                'rule_id': ruleId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Обновление firewall правила
     * Чтобы изменить правило, отправьте PATCH запрос на `/api/v1/firewall/groups/{group_id}/rules/{rule_id}`
     * @param groupId Идентификатор группы правил
     * @param ruleId Идентификатор правила
     * @param requestBody
     * @returns any Правило обновлено
     * @throws ApiError
     */
    public updateGroupRule(
        groupId: string,
        ruleId: string,
        requestBody: FirewallRuleInAPI,
    ): CancelablePromise<(FirewallRuleOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/firewall/groups/{group_id}/rules/{rule_id}',
            path: {
                'group_id': groupId,
                'rule_id': ruleId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                404: `Не найдено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение групп правил для ресурса
     * Чтобы получить список групп правил, с которыми слинкован ресурс, отправьте GET запрос на `/api/v1/firewall/service/{resource_type}/{resource_id}`
     * @param resourceId Идентификатор ресурса
     * @param resourceType
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @returns any Список групп правил
     * @throws ApiError
     */
    public getRulesForResource(
        resourceId: string,
        resourceType: ResourceType,
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<(FirewallGroupsOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/firewall/service/{resource_type}/{resource_id}',
            path: {
                'resource_id': resourceId,
                'resource_type': resourceType,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
}
