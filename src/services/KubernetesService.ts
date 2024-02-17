/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClusterEdit } from '../models/ClusterEdit';
import type { ClusterIn } from '../models/ClusterIn';
import type { ClusterResponse } from '../models/ClusterResponse';
import type { ClustersResponse } from '../models/ClustersResponse';
import type { delete_service_response } from '../models/delete_service_response';
import type { K8SVersionsResponse } from '../models/K8SVersionsResponse';
import type { NetworkDriversResponse } from '../models/NetworkDriversResponse';
import type { NodeCount } from '../models/NodeCount';
import type { NodeGroupIn } from '../models/NodeGroupIn';
import type { NodeGroupResponse } from '../models/NodeGroupResponse';
import type { NodeGroupsResponse } from '../models/NodeGroupsResponse';
import type { NodesResponse } from '../models/NodesResponse';
import type { PresetsResponse } from '../models/PresetsResponse';
import type { ResourcesResponse } from '../models/ResourcesResponse';
import type { response_id } from '../models/response_id';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class KubernetesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Получение списка кластеров
     * Чтобы получить список кластеров, отправьте GET-запрос на `/api/v1/k8s/clusters`.
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @returns any Список кластеров
     * @throws ApiError
     */
    public getClusters(
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<(ClustersResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/k8s/clusters',
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
     * Создание кластера
     * Чтобы создать кластер, отправьте POST-запрос на `/api/v1/k8s/clusters`.
     * @param requestBody
     * @returns any Информация о кластере
     * @throws ApiError
     */
    public createCluster(
        requestBody: ClusterIn,
    ): CancelablePromise<(ClusterResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/k8s/clusters',
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
     * Получение информации о кластере
     * Чтобы получить информацию о кластере, отправьте GET-запрос в `/api/v1/k8s/clusters/{cluster_id}`
     * @param clusterId Уникальный идентификатор кластера
     * @returns any Информация о кластере
     * @throws ApiError
     */
    public getCluster(
        clusterId: number,
    ): CancelablePromise<(ClusterResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/k8s/clusters/{cluster_id}',
            path: {
                'cluster_id': clusterId,
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
     * Удаление кластера
     * Чтобы удалить кластер, отправьте DELETE-запрос в `/api/v1/k8s/clusters/{cluster_id}`
     * @param clusterId Уникальный идентификатор кластера
     * @param hash Хеш, который совместно с кодом авторизации надо отправить для удаления, если включено подтверждение удаления сервисов через Телеграм.
     * @param code Код подтверждения, который придет к вам в Телеграм, после запроса удаления, если включено подтверждение удаления сервисов.
     *
     * При помощи API токена сервисы можно удалять без подтверждения, если параметр токена `is_able_to_delete` установлен в значение `true`
     * @returns any Объект JSON c ключом `cluster_delete`
     * @throws ApiError
     */
    public deleteCluster(
        clusterId: number,
        hash?: string,
        code?: string,
    ): CancelablePromise<({
        cluster_delete: delete_service_response;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/k8s/clusters/{cluster_id}',
            path: {
                'cluster_id': clusterId,
            },
            query: {
                'hash': hash,
                'code': code,
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
     * Обновление информации о кластере
     * Чтобы обновить информацию о кластере, отправьте PATCH-запрос в `/api/v1/k8s/clusters/{cluster_id}`
     * @param clusterId Уникальный идентификатор кластера
     * @param requestBody
     * @returns any Информация о кластере
     * @throws ApiError
     */
    public updateCluster(
        clusterId: number,
        requestBody: ClusterEdit,
    ): CancelablePromise<(ClusterResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/k8s/clusters/{cluster_id}',
            path: {
                'cluster_id': clusterId,
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
     * Получение ресурсов кластера
     * Чтобы получить ресурсы кластера, отправьте GET-запрос в `/api/v1/k8s/clusters/{cluster_id}/resources`.
     * @param clusterId Уникальный идентификатор кластера
     * @returns any Список ресурсов
     * @throws ApiError
     */
    public getClusterResources(
        clusterId: number,
    ): CancelablePromise<(ResourcesResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/k8s/clusters/{cluster_id}/resources',
            path: {
                'cluster_id': clusterId,
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
     * Получение файла kubeconfig
     * Чтобы получить файл kubeconfig, отправьте GET-запрос в `/api/v1/k8s/clusters/{cluster_id}/kubeconfig`.
     * @param clusterId Уникальный идентификатор кластера
     * @returns string Загрузка конфигурации подключения к кластеру
     * @throws ApiError
     */
    public getClusterKubeconfig(
        clusterId: number,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/k8s/clusters/{cluster_id}/kubeconfig',
            path: {
                'cluster_id': clusterId,
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
     * Получение групп нод кластера
     * Чтобы получить группы нод кластера, отправьте GET-запрос в `/api/v1/k8s/clusters/{cluster_id}/groups`.
     * @param clusterId Уникальный идентификатор кластера
     * @returns any Список групп нод
     * @throws ApiError
     */
    public getClusterNodeGroups(
        clusterId: number,
    ): CancelablePromise<(NodeGroupsResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/k8s/clusters/{cluster_id}/groups',
            path: {
                'cluster_id': clusterId,
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
     * Создание группы нод
     * Чтобы создать группу нод кластера, отправьте POST-запрос в `/api/v1/k8s/clusters/{cluster_id}/groups`.
     * @param clusterId Уникальный идентификатор кластера
     * @param requestBody
     * @returns any Информация о группе нод
     * @throws ApiError
     */
    public createClusterNodeGroup(
        clusterId: number,
        requestBody: NodeGroupIn,
    ): CancelablePromise<(NodeGroupResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/k8s/clusters/{cluster_id}/groups',
            path: {
                'cluster_id': clusterId,
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
     * Получение информации о группе нод
     * Чтобы получить информацию о группе нод, отправьте GET-запрос в `/api/v1/k8s/clusters/{cluster_id}/groups/{group_id}`.
     * @param clusterId Уникальный идентификатор кластера
     * @param groupId Уникальный идентификатор группы
     * @returns any Информация о группе нод
     * @throws ApiError
     */
    public getClusterNodeGroup(
        clusterId: number,
        groupId: number,
    ): CancelablePromise<(NodeGroupResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/k8s/clusters/{cluster_id}/groups/{group_id}',
            path: {
                'cluster_id': clusterId,
                'group_id': groupId,
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
     * Удаление группы нод
     * Чтобы удалить группу нод, отправьте DELETE-запрос в `/api/v1/k8s/clusters/{cluster_id}/groups/{group_id}`.
     * @param clusterId Уникальный идентификатор кластера
     * @param groupId Уникальный идентификатор группы
     * @returns void
     * @throws ApiError
     */
    public deleteClusterNodeGroup(
        clusterId: number,
        groupId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/k8s/clusters/{cluster_id}/groups/{group_id}',
            path: {
                'cluster_id': clusterId,
                'group_id': groupId,
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
     * Получение списка нод, принадлежащих группе
     * Чтобы получить список нод принадлежащих группе, отправьте GET-запрос в `/api/v1/k8s/clusters/{cluster_id}/groups/{group_id}/nodes`.
     * @param clusterId Уникальный идентификатор кластера
     * @param groupId Уникальный идентификатор группы
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение, относительно начала списка.
     * @returns any Список нод
     * @throws ApiError
     */
    public getClusterNodesFromGroup(
        clusterId: number,
        groupId: number,
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<(NodesResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/k8s/clusters/{cluster_id}/groups/{group_id}/nodes',
            path: {
                'cluster_id': clusterId,
                'group_id': groupId,
            },
            query: {
                'limit': limit,
                'offset': offset,
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
     * Увеличение количества нод в группе на указанное количество
     * Чтобы увеличить количество нод в группе на указанное значение, отправьте POST-запрос на `/api/v1/k8s/clusters/{cluster_id}/groups/{group_id}/nodes`
     * @param clusterId Уникальный идентификатор кластера
     * @param groupId Уникальный идентификатор группы
     * @param requestBody
     * @returns any Список нод
     * @throws ApiError
     */
    public increaseCountOfNodesInGroup(
        clusterId: number,
        groupId: number,
        requestBody: NodeCount,
    ): CancelablePromise<(NodesResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/k8s/clusters/{cluster_id}/groups/{group_id}/nodes',
            path: {
                'cluster_id': clusterId,
                'group_id': groupId,
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
     * Уменьшение количества нод в группе на указанное количество
     * Чтобы уменьшить количество нод в группе на указанное значение, отправьте DELETE-запрос в `/api/v1/k8s/clusters/{cluster_id}/groups/{group_id}/nodes`.
     * @param clusterId Уникальный идентификатор кластера
     * @param groupId Уникальный идентификатор группы
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public reduceCountOfNodesInGroup(
        clusterId: number,
        groupId: number,
        requestBody: NodeCount,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/k8s/clusters/{cluster_id}/groups/{group_id}/nodes',
            path: {
                'cluster_id': clusterId,
                'group_id': groupId,
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
     * Получение списка нод
     * Чтобы получить список нод, отправьте GET-запрос в `/api/v1/k8s/clusters/{cluster_id}/nodes`.
     * @param clusterId Уникальный идентификатор кластера
     * @returns any Список нод
     * @throws ApiError
     */
    public getClusterNodes(
        clusterId: number,
    ): CancelablePromise<(NodesResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/k8s/clusters/{cluster_id}/nodes',
            path: {
                'cluster_id': clusterId,
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
     * Удаление ноды
     * Чтобы удалить ноду, отправьте DELETE-запрос в `/api/v1/k8s/clusters/{cluster_id}/nodes/{node_id}`.
     * @param clusterId Уникальный идентификатор кластера
     * @param nodeId Уникальный идентификатор группы нод
     * @returns void
     * @throws ApiError
     */
    public deleteClusterNode(
        clusterId: number,
        nodeId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/k8s/clusters/{cluster_id}/nodes/{node_id}',
            path: {
                'cluster_id': clusterId,
                'node_id': nodeId,
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
     * Получение списка версий k8s
     * Чтобы получить список версий k8s, отправьте GET-запрос в `/api/v1/k8s/k8s_versions`.
     * @returns any Список версий k8s
     * @throws ApiError
     */
    public getK8SVersions(): CancelablePromise<(K8SVersionsResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/k8s/k8s_versions',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение списка сетевых драйверов k8s
     * Чтобы получить список сетевых драйверов k8s, отправьте GET-запрос в `/api/v1/k8s/network_drivers`.
     * @returns any Список сетевых драйверов k8s
     * @throws ApiError
     */
    public getK8SNetworkDrivers(): CancelablePromise<(NetworkDriversResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/k8s/network_drivers',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение списка тарифов
     * Чтобы получить список тарифов, отправьте GET-запрос в `/api/v1/presets/k8s`.
     * @returns any Список тарифов
     * @throws ApiError
     */
    public getKubernetesPresets(): CancelablePromise<(PresetsResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/presets/k8s',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
}
