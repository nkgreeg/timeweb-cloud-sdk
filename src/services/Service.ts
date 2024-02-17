/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { add_countries } from '../models/add_countries';
import type { add_ips } from '../models/add_ips';
import type { auto_backup } from '../models/auto_backup';
import type { backup } from '../models/backup';
import type { balancer } from '../models/balancer';
import type { bonus } from '../models/bonus';
import type { bucket } from '../models/bucket';
import type { clusterk8s } from '../models/clusterk8s';
import type { create_admin } from '../models/create_admin';
import type { create_balancer } from '../models/create_balancer';
import type { create_cluster } from '../models/create_cluster';
import type { create_db } from '../models/create_db';
import type { create_dedicated_server } from '../models/create_dedicated_server';
import type { create_dns } from '../models/create_dns';
import type { create_instance } from '../models/create_instance';
import type { create_project } from '../models/create_project';
import type { create_rule } from '../models/create_rule';
import type { create_server } from '../models/create_server';
import type { database_admin } from '../models/database_admin';
import type { database_cluster } from '../models/database_cluster';
import type { database_instance } from '../models/database_instance';
import type { db } from '../models/db';
import type { dedicated_server } from '../models/dedicated_server';
import type { dedicated_server_additional_service } from '../models/dedicated_server_additional_service';
import type { dedicated_server_preset } from '../models/dedicated_server_preset';
import type { delete_service_response } from '../models/delete_service_response';
import type { dns_record } from '../models/dns_record';
import type { domain } from '../models/domain';
import type { domain_info } from '../models/domain_info';
import type { domain_name_server } from '../models/domain_name_server';
import type { domain_prolong } from '../models/domain_prolong';
import type { domain_register } from '../models/domain_register';
import type { domain_request } from '../models/domain_request';
import type { domain_transfer } from '../models/domain_transfer';
import type { finances } from '../models/finances';
import type { free } from '../models/free';
import type { ImageDownloadResponse } from '../models/ImageDownloadResponse';
import type { ImageDownloadsResponse } from '../models/ImageDownloadsResponse';
import type { ImageInAPI } from '../models/ImageInAPI';
import type { ImageOutResponse } from '../models/ImageOutResponse';
import type { ImagesOutResponse } from '../models/ImagesOutResponse';
import type { ImageUpdateAPI } from '../models/ImageUpdateAPI';
import type { ImageUrlIn } from '../models/ImageUrlIn';
import type { invoice } from '../models/invoice';
import type { mailbox } from '../models/mailbox';
import type { Meta } from '../models/Meta';
import type { notification_setting } from '../models/notification_setting';
import type { notification_setting_type } from '../models/notification_setting_type';
import type { presets_balancer } from '../models/presets_balancer';
import type { presets_dbs } from '../models/presets_dbs';
import type { project } from '../models/project';
import type { project_resource } from '../models/project_resource';
import type { quota } from '../models/quota';
import type { remove_countries } from '../models/remove_countries';
import type { remove_ips } from '../models/remove_ips';
import type { resource_transfer } from '../models/resource_transfer';
import type { response_id } from '../models/response_id';
import type { rule } from '../models/rule';
import type { server_backup } from '../models/server_backup';
import type { server_disk } from '../models/server_disk';
import type { server_ip } from '../models/server_ip';
import type { server_log } from '../models/server_log';
import type { servers_configurator } from '../models/servers_configurator';
import type { servers_os } from '../models/servers_os';
import type { servers_preset } from '../models/servers_preset';
import type { servers_software } from '../models/servers_software';
import type { setting_condition } from '../models/setting_condition';
import type { status } from '../models/status';
import type { subdomain } from '../models/subdomain';
import type { top_level_domain } from '../models/top_level_domain';
import type { update_admin } from '../models/update_admin';
import type { update_balancer } from '../models/update_balancer';
import type { update_cluster } from '../models/update_cluster';
import type { update_db } from '../models/update_db';
import type { update_domain } from '../models/update_domain';
import type { update_domain_name_servers } from '../models/update_domain_name_servers';
import type { update_instance } from '../models/update_instance';
import type { update_mailbox } from '../models/update_mailbox';
import type { update_project } from '../models/update_project';
import type { update_rule } from '../models/update_rule';
import type { update_server } from '../models/update_server';
import type { UploadSuccessfulResponse } from '../models/UploadSuccessfulResponse';
import type { use } from '../models/use';
import type { vds } from '../models/vds';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Получение платежной информации
     * Чтобы получить платежную информацию, отправьте GET-запрос на `/api/v1/account/finances`.
     * @returns any Объект JSON c ключом `finances`
     * @throws ApiError
     */
    public getFinances(): CancelablePromise<({
        finances: finances;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/account/finances',
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
     * Получение статуса аккаунта
     * Чтобы получить статус аккаунта, отправьте GET-запрос на `/api/v1/account/status`.
     * @returns any Объект JSON c ключом `status`
     * @throws ApiError
     */
    public getAccountStatus(): CancelablePromise<({
        status: status;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/account/status',
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
     * Получение настроек уведомлений аккаунта
     * Чтобы получить статус аккаунта, отправьте GET запрос на `/api/v1/account/notification-settings`.
     * @returns any Объект JSON c ключом `notification_settings`
     * @throws ApiError
     */
    public getNotificationSettings(): CancelablePromise<({
        notification_settings: Array<notification_setting>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/account/notification-settings',
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
     * Изменение настроек уведомлений аккаунта
     * Чтобы изменить настройки уведомлений аккаунта, отправьте PATCH запрос на `/api/v1/account/notification-settings`.
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `notification_settings`.
     * @throws ApiError
     */
    public updateNotificationSettings(
        requestBody: {
            /**
             * Настройки каналов уведомлений.
             */
            settings?: Array<{
                /**
                 * Название канала уведомлений.
                 */
                channels: {
                    telegram?: setting_condition;
                    sms?: setting_condition;
                    email?: setting_condition;
                };
                type: notification_setting_type;
            }>;
        },
    ): CancelablePromise<({
        notification_settings: Array<notification_setting>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/account/notification-settings',
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
     * Получение списка образов
     * Чтобы получить список образов, отправьте GET запрос на `/api/v1/images`
     * @param limit
     * @param offset
     * @returns any Объект JSON c ключом images
     * @throws ApiError
     */
    public getImages(
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<(ImagesOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/images',
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
     * Создание образа
     * Чтобы создать образ, отправьте POST запрос в `/api/v1/images`, задав необходимые атрибуты.
     *
     * Для загрузки собственного образа вам нужно отправить параметры `location`, `os` и не указывать `disk_id`. Поддерживается два способа загрузки:
     * 1. По ссылке. Для этого укажите `upload_url` с ссылкой на загрузку образа
     * 2. Из файла. Для этого воспользуйтесь методом POST `/api/v1/images/{image_id}`
     * Образ будет создан с использованием предоставленной информации.
     *
     * Тело ответа будет содержать объект JSON с информацией о созданном образе.
     * @param requestBody
     * @returns any Образ создан
     * @throws ApiError
     */
    public createImage(
        requestBody: ImageInAPI,
    ): CancelablePromise<(ImageOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/images',
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
     * Получение информации о образе
     * Чтобы получить образ, отправьте запрос GET в `/api/v1/images/{image_id}`.
     * @param imageId Идентификатор образа
     * @returns any Информация о образе
     * @throws ApiError
     */
    public getImage(
        imageId: string,
    ): CancelablePromise<(ImageOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/images/{image_id}',
            path: {
                'image_id': imageId,
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
     * Загрузка образа
     * Чтобы загрузить свой образ, отправьте POST запрос в `/api/v1/images/{image_id}`, отправив файл как `multipart/form-data`, указав имя файла в заголовке `Content-Disposition`.
     *
     * Перед загрузкой, нужно создать образ используя POST `/api/v1/images`, указав параметры `location`, `os`
     *
     * Тело ответа будет содержать объект JSON с информацией о загруженном образе.
     * @param imageId
     * @param contentDisposition
     * @returns any Информация о загрузке
     * @throws ApiError
     */
    public uploadImage(
        imageId: string,
        contentDisposition?: string,
    ): CancelablePromise<(UploadSuccessfulResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/images/{image_id}',
            path: {
                'image_id': imageId,
            },
            headers: {
                'content-disposition': contentDisposition,
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
     * Удаление образа
     * Чтобы удалить образ, отправьте запрос DELETE в `/api/v1/images/{image_id}`.
     * @param imageId Идентификатор образа
     * @returns void
     * @throws ApiError
     */
    public deleteImage(
        imageId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/images/{image_id}',
            path: {
                'image_id': imageId,
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
     * Обновление информации о образе
     * Чтобы обновить только определенные атрибуты образа, отправьте запрос PATCH в `/api/v1/images/{image_id}`.
     * @param imageId Идентификатор образа
     * @param requestBody
     * @returns any Образ обновлен
     * @throws ApiError
     */
    public updateImage(
        imageId: string,
        requestBody: ImageUpdateAPI,
    ): CancelablePromise<(ImageOutResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/images/{image_id}',
            path: {
                'image_id': imageId,
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
     * Получение информации о ссылках на скачивание образов
     * Чтобы получить информацию о ссылках на скачивание образов, отправьте запрос GET в `/api/v1/images/{image_id}/download-url`.
     * @param imageId Идентификатор образа
     * @param limit
     * @param offset
     * @returns any Информация о ссылке на загрузку
     * @throws ApiError
     */
    public getImageDownloadUrLs(
        imageId: string,
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<(ImageDownloadsResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/images/{image_id}/download-url',
            path: {
                'image_id': imageId,
            },
            query: {
                'limit': limit,
                'offset': offset,
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
     * Создание ссылки на скачивание образа
     * Чтобы создать ссылку на скачивание образа, отправьте запрос POST в `/api/v1/images/{image_id}/download-url`.
     * @param imageId Идентификатор образа
     * @param requestBody
     * @returns any Ссылка успешно создана
     * @throws ApiError
     */
    public createImageDownloadUrl(
        imageId: string,
        requestBody: ImageUrlIn,
    ): CancelablePromise<(ImageDownloadResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/images/{image_id}/download-url',
            path: {
                'image_id': imageId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                404: `Не найдено`,
                409: `Образ уже загружен в облачное хранилище`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение информации о ссылке на скачивание образа
     * Чтобы получить информацию о ссылке на скачивание образа, отправьте запрос GET в `/api/v1/images/{image_id}/download-url/{image_url_id}`.
     * @param imageId Идентификатор образа
     * @param imageUrlId Идентификатор ссылки
     * @returns any Информация о ссылке на загрузку
     * @throws ApiError
     */
    public getImageDownloadUrl(
        imageId: string,
        imageUrlId: string,
    ): CancelablePromise<(ImageDownloadResponse & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/images/{image_id}/download-url/{image_url_id}',
            path: {
                'image_id': imageId,
                'image_url_id': imageUrlId,
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
     * Удаление ссылки на образ
     * Чтобы удалить ссылку на образ, отправьте DELETE запрос в `/api/v1/images/{image_id}/download-url/{image_url_id}`.
     * @param imageId Идентификатор образа
     * @param imageUrlId Идентификатор ссылки
     * @returns void
     * @throws ApiError
     */
    public deleteImageDownloadUrl(
        imageId: string,
        imageUrlId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/images/{image_id}/download-url/{image_url_id}',
            path: {
                'image_id': imageId,
                'image_url_id': imageUrlId,
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
     * Получение списка всех бaлансировщиков
     * Чтобы получить список всех бaлансировщиков на вашем аккаунте, отправьте GET-запрос на `/api/v1/balancers`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `balancers`.
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @returns any Ответ будет представлять собой объект JSON c ключом `balancers`.
     * @throws ApiError
     */
    public getBalancers(
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<({
        meta: Meta;
        balancers: Array<balancer>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/balancers',
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
     * Создание бaлансировщика
     * Чтобы создать бaлансировщик на вашем аккаунте, отправьте POST-запрос на `/api/v1/balancers`, задав необходимые атрибуты.
     *
     * Балансировщик будет создан с использованием предоставленной информации. Тело ответа будет содержать объект JSON с информацией о созданном балансировщике.
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `balancer`.
     * @throws ApiError
     */
    public createBalancer(
        requestBody: create_balancer,
    ): CancelablePromise<({
        balancer: balancer;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/balancers',
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
     * Получение бaлансировщика
     * Чтобы отобразить информацию об отдельном балансировщике, отправьте запрос GET на `api/v1/balancers/{balancer_id}`.
     *
     * @param balancerId Идентификатор балансировщика
     * @returns any Ответ будет представлять собой объект JSON с ключом `balancer`.
     * @throws ApiError
     */
    public getBalancer(
        balancerId: number,
    ): CancelablePromise<({
        balancer: balancer;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/balancers/{balancer_id}',
            path: {
                'balancer_id': balancerId,
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
     * Обновление балансировщика
     * Чтобы обновить только определенные атрибуты балансировщика, отправьте запрос PATCH в `api/v1/balancers/{balancer_id}`.
     *
     * @param balancerId Идентификатор балансировщика
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON с ключом `balancer`.
     * @throws ApiError
     */
    public updateBalancer(
        balancerId: number,
        requestBody: update_balancer,
    ): CancelablePromise<({
        balancer: balancer;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/balancers/{balancer_id}',
            path: {
                'balancer_id': balancerId,
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
     * Удаление балансировщика
     * Чтобы удалить балансировщик, отправьте запрос DELETE в `api/v1/balancers/{balancer_id}`.
     *
     * @param balancerId Идентификатор балансировщика
     * @param hash Хеш, который совместно с кодом авторизации надо отправить для удаления, если включено подтверждение удаления сервисов через Телеграм.
     * @param code Код подтверждения, который придет к вам в Телеграм, после запроса удаления, если включено подтверждение удаления сервисов.
     *
     * При помощи API токена сервисы можно удалять без подтверждения, если параметр токена `is_able_to_delete` установлен в значение `true`
     * @returns any Объект JSON c ключом `balancer_delete`
     * @throws ApiError
     */
    public deleteBalancer(
        balancerId: number,
        hash?: string,
        code?: string,
    ): CancelablePromise<({
        balancer_delete: delete_service_response;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/balancers/{balancer_id}',
            path: {
                'balancer_id': balancerId,
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
     * Получение списка IP-адресов балансировщика
     * Чтобы добавить `IP`-адреса к балансировщику, отправьте запрос GET в `api/v1/balancers/{balancer_id}/ips`.
     *
     * @param balancerId Идентификатор балансировщика
     * @returns any Ответ будет представлять собой объект JSON c ключом `ips`.
     * @throws ApiError
     */
    public getBalancerIPs(
        balancerId: number,
    ): CancelablePromise<({
        meta: Meta;
        ips: Array<string>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/balancers/{balancer_id}/ips',
            path: {
                'balancer_id': balancerId,
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
     * Добавление IP-адресов к балансировщику
     * Чтобы добавить `IP`-адреса к балансировщику, отправьте запрос POST в `api/v1/balancers/{balancer_id}/ips`.
     *
     * @param balancerId Идентификатор балансировщика
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public addIPsToBalancer(
        balancerId: number,
        requestBody: {
            ips: Array<string>;
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/balancers/{balancer_id}/ips',
            path: {
                'balancer_id': balancerId,
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
     * Удаление IP-адресов из балансировщика
     * Чтобы удалить `IP`-адреса из балансировщика, отправьте запрос DELETE в `api/v1/balancers/{balancer_id}/ips`.
     *
     * @param balancerId Идентификатор балансировщика
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public deleteIPsFromBalancer(
        balancerId: number,
        requestBody: {
            ips: Array<string>;
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/balancers/{balancer_id}/ips',
            path: {
                'balancer_id': balancerId,
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
     * Получение правил балансировщика
     * Чтобы получить правила балансировщика, отправьте запрос GET в `api/v1/balancers/{balancer_id}/rules`.
     *
     * @param balancerId Идентификатор балансировщика
     * @returns any Ответ будет представлять собой объект JSON c ключом `rules`.
     * @throws ApiError
     */
    public getBalancerRules(
        balancerId: number,
    ): CancelablePromise<({
        meta: Meta;
        rules: Array<rule>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/balancers/{balancer_id}/rules',
            path: {
                'balancer_id': balancerId,
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
     * Создание правила для балансировщика
     * Чтобы создать правило для балансировщика, отправьте запрос POST в `api/v1/balancers/{balancer_id}/rules`.
     *
     * @param balancerId Идентификатор балансировщика
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `rule`.
     * @throws ApiError
     */
    public createBalancerRule(
        balancerId: number,
        requestBody: create_rule,
    ): CancelablePromise<({
        rule: rule;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/balancers/{balancer_id}/rules',
            path: {
                'balancer_id': balancerId,
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
     * Обновление правила для балансировщика
     * Чтобы обновить правило для балансировщика, отправьте запрос PATCH в `api/v1/balancers/{balancer_id}/rules/{rule_id}`.
     *
     * @param balancerId Идентификатор балансировщика
     * @param ruleId Идентификатор правила для балансировщика
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `rule`.
     * @throws ApiError
     */
    public updateBalancerRule(
        balancerId: number,
        ruleId: number,
        requestBody: update_rule,
    ): CancelablePromise<({
        rule: rule;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/balancers/{balancer_id}/rules/{rule_id}',
            path: {
                'balancer_id': balancerId,
                'rule_id': ruleId,
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
     * Удаление правила для балансировщика
     * Чтобы удалить правило для балансировщика, отправьте запрос DELETE в `api/v1/balancers/{balancer_id}/rules/{rule_id}`.
     *
     * @param balancerId Идентификатор балансировщика
     * @param ruleId Идентификатор правила для балансировщика
     * @returns void
     * @throws ApiError
     */
    public deleteBalancerRule(
        balancerId: number,
        ruleId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/balancers/{balancer_id}/rules/{rule_id}',
            path: {
                'balancer_id': balancerId,
                'rule_id': ruleId,
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
     * Получение списка тарифов для балансировщика
     * Чтобы получить список тарифов для балансировщика, отправьте GET-запрос на `/api/v1/presets/balancers`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `balancers_presets`.
     * @returns any Тарифы успешно получены
     * @throws ApiError
     */
    public getBalancersPresets(): CancelablePromise<({
        meta: Meta;
        balancers_presets: Array<presets_balancer>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/presets/balancers',
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
     * Создание кластера базы данных
     * Чтобы создать кластер базы данных на вашем аккаунте, отправьте POST-запрос на `/api/v1/databases`.
     *
     * Вместе с кластером будет создан один инстанс базы данных и один пользователь.
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `db`.
     * @throws ApiError
     */
    public createDatabaseCluster(
        requestBody: create_cluster,
    ): CancelablePromise<({
        db: database_cluster;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/databases',
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
     * Получение списка кластеров баз данных
     * Чтобы получить список кластеров баз данных, отправьте GET-запрос на `/api/v1/databases`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `dbs`.
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @returns any Ответ будет представлять собой объект JSON c ключом `dbs`.
     * @throws ApiError
     */
    public getDatabaseClusters(
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<({
        meta: Meta;
        dbs: Array<database_cluster>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/databases',
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
     * Изменение кластера базы данных
     * Чтобы изменить кластер базы данных на вашем аккаунте, отправьте PATCH-запрос на `/api/v1/databases/{db_cluster_id}`.
     * @param dbClusterId Идентификатор кластера базы данных
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `db`.
     * @throws ApiError
     */
    public updateDatabaseCluster(
        dbClusterId: number,
        requestBody: update_cluster,
    ): CancelablePromise<({
        db: database_cluster;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/databases/{db_cluster_id}',
            path: {
                'db_cluster_id': dbClusterId,
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
     * Удаление кластера базы данных
     * Чтобы удалить кластер базы данных, отправьте DELETE-запрос на `/api/v1/databases/{db_cluster_id}`.
     * @param dbClusterId Идентификатор кластера базы данных
     * @param hash Хеш, который совместно с кодом авторизации надо отправить для удаления, если включено подтверждение удаления сервисов через Телеграм.
     * @param code Код подтверждения, который придет к вам в Телеграм, после запроса удаления, если включено подтверждение удаления сервисов.
     *
     * При помощи API токена сервисы можно удалять без подтверждения, если параметр токена `is_able_to_delete` установлен в значение `true`
     * @returns any Объект JSON c ключом `hash`
     * @throws ApiError
     */
    public deleteDatabaseCluster(
        dbClusterId: number,
        hash?: string,
        code?: string,
    ): CancelablePromise<({
        /**
         * Хеш, который совместно с кодом авторизации надо будет отправить для удаления
         */
        hash: string;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/databases/{db_cluster_id}',
            path: {
                'db_cluster_id': dbClusterId,
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
     * Получение кластера базы данных
     * Чтобы получить кластер базы данных на вашем аккаунте, отправьте GET-запрос на `/api/v1/databases/{db_cluster_id}`.
     * @param dbClusterId Идентификатор кластера базы данных
     * @returns any Ответ будет представлять собой объект JSON c ключом `db`.
     * @throws ApiError
     */
    public getDatabaseCluster(
        dbClusterId: number,
    ): CancelablePromise<({
        db: database_cluster;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/databases/{db_cluster_id}',
            path: {
                'db_cluster_id': dbClusterId,
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
     * Создание пользователя базы данных
     * Чтобы создать пользователя базы данных, отправьте POST-запрос на `/api/v1/databases/{db_cluster_id}/admins`.
     * @param dbClusterId Идентификатор кластера базы данных
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `admin`.
     * @throws ApiError
     */
    public createDatabaseUser(
        dbClusterId: number,
        requestBody: create_admin,
    ): CancelablePromise<({
        admin: database_admin;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/databases/{db_cluster_id}/admins',
            path: {
                'db_cluster_id': dbClusterId,
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
     * Получение списка пользователей базы данных
     * Чтобы получить список пользователей базы данных на вашем аккаунте, отправьте GET-запрос на `/api/v1/databases/{db_cluster_id}/admins`.
     * @param dbClusterId Идентификатор кластера базы данных
     * @returns any Ответ будет представлять собой объект JSON c ключом `admins`.
     * @throws ApiError
     */
    public getDatabaseUsers(
        dbClusterId: number,
    ): CancelablePromise<({
        meta: Meta;
        admins: Array<database_admin>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/databases/{db_cluster_id}/admins',
            path: {
                'db_cluster_id': dbClusterId,
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
     * Изменение пользователя базы данных
     * Чтобы изменить пользователя базы данных на вашем аккаунте, отправьте PATCH-запрос на `/api/v1/databases/{db_cluster_id}/admins/{admin_id}`.
     * @param dbClusterId Идентификатор кластера базы данных
     * @param adminId Идентификатор пользователя базы данных
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `admin`.
     * @throws ApiError
     */
    public updateDatabaseUser(
        dbClusterId: number,
        adminId: number,
        requestBody: update_admin,
    ): CancelablePromise<({
        admin: database_admin;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/databases/{db_cluster_id}/admins/{admin_id}',
            path: {
                'db_cluster_id': dbClusterId,
                'admin_id': adminId,
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
     * Удаление пользователя базы данных
     * Чтобы удалить пользователя базы данных на вашем аккаунте, отправьте DELETE-запрос на `/api/v1/databases/{db_cluster_id}/admins/{admin_id}`.
     * @param dbClusterId Идентификатор кластера базы данных
     * @param adminId Идентификатор пользователя базы данных
     * @returns void
     * @throws ApiError
     */
    public deleteDatabaseUser(
        dbClusterId: number,
        adminId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/databases/{db_cluster_id}/admins/{admin_id}',
            path: {
                'db_cluster_id': dbClusterId,
                'admin_id': adminId,
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
     * Получение пользователя базы данных
     * Чтобы получить пользователя базы данных на вашем аккаунте, отправьте GET-запрос на `/api/v1/databases/{db_cluster_id}/admins/{admin_id}`.
     * @param dbClusterId Идентификатор кластера базы данных
     * @param adminId Идентификатор пользователя базы данных
     * @returns any Ответ будет представлять собой объект JSON c ключом `admin`.
     * @throws ApiError
     */
    public getDatabaseUser(
        dbClusterId: number,
        adminId: number,
    ): CancelablePromise<({
        admin: database_admin;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/databases/{db_cluster_id}/admins/{admin_id}',
            path: {
                'db_cluster_id': dbClusterId,
                'admin_id': adminId,
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
     * Создание инстанса базы данных
     * Чтобы создать инстанс базы данных, отправьте POST-запрос на `/api/v1/databases/{db_cluster_id}/instances`.\
     *
     * Существующие пользователи не будут иметь доступа к новой базе данных после создания. Вы можете изменить привилегии для пользователя через <a href='#tag/Bazy-dannyh/operation/updateDatabaseUser'>метод изменения пользователя</a>
     * @param dbClusterId Идентификатор кластера базы данных
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `instance`.
     * @throws ApiError
     */
    public createDatabaseInstance(
        dbClusterId: number,
        requestBody: create_instance,
    ): CancelablePromise<({
        instance: database_instance;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/databases/{db_cluster_id}/instances',
            path: {
                'db_cluster_id': dbClusterId,
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
     * Получение списка инстансов баз данных
     * Чтобы получить список баз данных на вашем аккаунте, отправьте GET-запрос на `/api/v1/databases/{db_cluster_id}/instances`.
     * @param dbClusterId Идентификатор кластера базы данных
     * @returns any Ответ будет представлять собой объект JSON c ключом `instances`.
     * @throws ApiError
     */
    public getDatabaseInstances(
        dbClusterId: number,
    ): CancelablePromise<({
        meta: Meta;
        instances: Array<database_instance>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/databases/{db_cluster_id}/instances',
            path: {
                'db_cluster_id': dbClusterId,
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
     * Изменение инстанса базы данных
     * Чтобы изменить инстанс базы данных, отправьте PATCH-запрос на `/api/v1/databases/{db_cluster_id}/instances/{instance_id}`.
     * @param dbClusterId Идентификатор кластера базы данных
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `instance`.
     * @throws ApiError
     */
    public updateDatabaseInstance(
        dbClusterId: number,
        requestBody: update_instance,
    ): CancelablePromise<({
        instance: database_instance;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/databases/{db_cluster_id}/instances/{instance_id}',
            path: {
                'db_cluster_id': dbClusterId,
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
     * Удаление инстанса базы данных
     * Чтобы удалить инстанс базы данных, отправьте DELETE-запрос на `/api/v1/databases/{db_cluster_id}/instances/{instance_id}`.
     * @param dbClusterId Идентификатор кластера базы данных
     * @param instanceId Идентификатор инстанса базы данных
     * @returns void
     * @throws ApiError
     */
    public deleteDatabaseInstance(
        dbClusterId: number,
        instanceId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/databases/{db_cluster_id}/instances/{instance_id}',
            path: {
                'db_cluster_id': dbClusterId,
                'instance_id': instanceId,
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
     * Получение инстанса базы данных
     * Чтобы получить инстанс базы данных, отправьте GET-запрос на `/api/v1/databases/{db_cluster_id}/instances/{instance_id}`.
     * @param dbClusterId Идентификатор кластера базы данных
     * @param instanceId Идентификатор инстанса базы данных
     * @returns any Ответ будет представлять собой объект JSON c ключом `instance`.
     * @throws ApiError
     */
    public getDatabaseInstance(
        dbClusterId: number,
        instanceId: number,
    ): CancelablePromise<({
        instance: database_instance;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/databases/{db_cluster_id}/instances/{instance_id}',
            path: {
                'db_cluster_id': dbClusterId,
                'instance_id': instanceId,
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
     * @deprecated
     * Получение списка всех баз данных
     * Чтобы получить список всех баз данных на вашем аккаунте, отправьте GET-запрос на `/api/v1/dbs`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `dbs`.
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @returns any Ответ будет представлять собой объект JSON c ключом `dbs`.
     * @throws ApiError
     */
    public getDatabases(
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<({
        meta: Meta;
        dbs: Array<db>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dbs',
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
     * @deprecated
     * Создание базы данных
     * Чтобы создать базу данных на вашем аккаунте, отправьте POST-запрос на `/api/v1/dbs`, задав необходимые атрибуты.
     *
     * База данных будет создана с использованием предоставленной информации. Тело ответа будет содержать объект JSON с информацией о созданной базе данных.
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `db`.
     * @throws ApiError
     */
    public createDatabase(
        requestBody: create_db,
    ): CancelablePromise<({
        db: db;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/dbs',
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
     * @deprecated
     * Получение базы данных
     * Чтобы отобразить информацию об отдельной базе данных, отправьте запрос GET на `api/v1/dbs/{db_id}`.
     *
     * @param dbId Идентификатор базы данных
     * @returns any Ответ будет представлять собой объект JSON с ключом `db`.
     * @throws ApiError
     */
    public getDatabase(
        dbId: number,
    ): CancelablePromise<({
        db: db;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dbs/{db_id}',
            path: {
                'db_id': dbId,
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
     * @deprecated
     * Обновление базы данных
     * Чтобы обновить только определенные атрибуты базы данных, отправьте запрос PATCH в `api/v1/dbs/{db_id}`.
     *
     * @param dbId Идентификатор базы данных
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON с ключом `db`.
     * @throws ApiError
     */
    public updateDatabase(
        dbId: number,
        requestBody: update_db,
    ): CancelablePromise<({
        db: db;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/dbs/{db_id}',
            path: {
                'db_id': dbId,
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
     * @deprecated
     * Удаление базы данных
     * Чтобы удалить базу данных, отправьте запрос DELETE в `api/v1/dbs/{db_id}`.
     *
     * @param dbId Идентификатор базы данных
     * @param hash Хеш, который совместно с кодом авторизации надо отправить для удаления, если включено подтверждение удаления сервисов через Телеграм.
     * @param code Код подтверждения, который придет к вам в Телеграм, после запроса удаления, если включено подтверждение удаления сервисов.
     *
     * При помощи API токена сервисы можно удалять без подтверждения, если параметр токена `is_able_to_delete` установлен в значение `true`
     * @returns any Объект JSON c ключом `database_delete`
     * @throws ApiError
     */
    public deleteDatabase(
        dbId: number,
        hash?: string,
        code?: string,
    ): CancelablePromise<({
        database_delete: delete_service_response;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/dbs/{db_id}',
            path: {
                'db_id': dbId,
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
     * Получение настроек автобэкапов базы данных
     * Чтобы получить список настроек автобэкапов базы данных, отправьте запрос GET в `api/v1/dbs/{db_id}/auto-backups`
     * @param dbId Идентификатор базы данных
     * @returns any Ответ будет представлять собой объект JSON с ключом `auto_backups_settings`.
     * @throws ApiError
     */
    public getDatabaseAutoBackupsSettings(
        dbId: number,
    ): CancelablePromise<({
        meta: Meta;
        auto_backups_settings: Array<auto_backup>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dbs/{db_id}/auto-backups',
            path: {
                'db_id': dbId,
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
     * Изменение настроек автобэкапов базы данных
     * Чтобы изменить список настроек автобэкапов базы данных, отправьте запрос PATCH в `api/v1/dbs/{db_id}/auto-backups`
     * @param dbId Идентификатор базы данных
     * @param requestBody При значении `is_enabled`: `true`, поля `copy_count`, `creation_start_at`, `interval` являются обязательными
     * @returns any Ответ будет представлять собой объект JSON с ключом `auto_backups_settings`.
     * @throws ApiError
     */
    public updateDatabaseAutoBackupsSettings(
        dbId: number,
        requestBody?: auto_backup,
    ): CancelablePromise<({
        meta: Meta;
        auto_backups_settings: Array<auto_backup>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/dbs/{db_id}/auto-backups',
            path: {
                'db_id': dbId,
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
     * Список бэкапов базы данных
     * Чтобы получить список бэкапов базы данных, отправьте запрос GET в `api/v1/dbs/{db_id}/backups`.
     *
     * @param dbId Идентификатор базы данных
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @returns any Ответ будет представлять собой объект JSON с ключом `backups`.
     * @throws ApiError
     */
    public getDatabaseBackups(
        dbId: number,
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<({
        meta: Meta;
        backups: Array<backup>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dbs/{db_id}/backups',
            path: {
                'db_id': dbId,
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
     * Создание бэкапа базы данных
     * Чтобы создать бэкап базы данных, отправьте запрос POST в `api/v1/dbs/{db_id}/backups`.
     *
     * @param dbId Идентификатор базы данных
     * @returns any Ответ будет представлять собой объект JSON с ключом `backup`.
     * @throws ApiError
     */
    public createDatabaseBackup(
        dbId: number,
    ): CancelablePromise<({
        backup: backup;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/dbs/{db_id}/backups',
            path: {
                'db_id': dbId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Удаление бэкапа базы данных
     * Чтобы удалить бэкап базы данных, отправьте запрос DELETE в `api/v1/dbs/{db_id}/backups/{backup_id}`.
     *
     * @param dbId Идентификатор базы данных
     * @param backupId Идентификатор резевной копии
     * @returns void
     * @throws ApiError
     */
    public deleteDatabaseBackup(
        dbId: number,
        backupId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/dbs/{db_id}/backups/{backup_id}',
            path: {
                'db_id': dbId,
                'backup_id': backupId,
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
     * Получение бэкапа базы данных
     * Чтобы получить бэкап базы данных, отправьте запрос GET в `api/v1/dbs/{db_id}/backups/{backup_id}`.
     *
     * @param dbId Идентификатор базы данных
     * @param backupId Идентификатор резевной копии
     * @returns any Ответ будет представлять собой объект JSON с ключом `backup`.
     * @throws ApiError
     */
    public getDatabaseBackup(
        dbId: number,
        backupId: number,
    ): CancelablePromise<({
        backup: backup;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dbs/{db_id}/backups/{backup_id}',
            path: {
                'db_id': dbId,
                'backup_id': backupId,
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
     * Восстановление базы данных из бэкапа
     * Чтобы восстановить базу данных из бэкапа, отправьте запрос PUT в `api/v1/dbs/{db_id}/backups/{backup_id}`.
     *
     * @param dbId Идентификатор базы данных
     * @param backupId Идентификатор резевной копии
     * @returns void
     * @throws ApiError
     */
    public restoreDatabaseFromBackup(
        dbId: number,
        backupId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/dbs/{db_id}/backups/{backup_id}',
            path: {
                'db_id': dbId,
                'backup_id': backupId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение списка тарифов для баз данных
     * Чтобы получить список тарифов для баз данных, отправьте GET-запрос на `/api/v1/presets/dbs`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `databases_presets`.
     * @returns any Тарифы успешно получены.
     * @throws ApiError
     */
    public getDatabasesPresets(): CancelablePromise<({
        meta: Meta;
        databases_presets: Array<presets_dbs>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/presets/dbs',
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
     * Получение списка выделенных серверов
     * Чтобы получить список всех выделенных серверов на вашем аккаунте, отправьте GET-запрос на `/api/v1/dedicated-servers`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `dedicated_servers`.
     * @returns any Объект JSON c ключом `dedicated_servers`
     * @throws ApiError
     */
    public getDedicatedServers(): CancelablePromise<({
        meta: Meta;
        dedicated_servers: Array<dedicated_server>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dedicated-servers',
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
     * Создание выделенного сервера
     * Чтобы создать выделенный сервер, отправьте POST-запрос в `api/v1/dedicated-servers`, задав необходимые атрибуты.
     *
     * Выделенный сервер будет создан с использованием предоставленной информации. Тело ответа будет содержать объект JSON с информацией о созданном выделенном сервере.
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public createDedicatedServer(
        requestBody: create_dedicated_server,
    ): CancelablePromise<({
        dedicated_server: dedicated_server;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/dedicated-servers',
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
     * Получение выделенного сервера
     * Чтобы отобразить информацию об отдельном выделенном сервере, отправьте запрос GET на `api/v1/dedicated-servers/{dedicated_id}`.
     *
     * @param dedicatedId Уникальный идентификатор выделенного сервера.
     * @returns any Ответ будет представлять собой объект JSON с ключом `dedicated_server`.
     * @throws ApiError
     */
    public getDedicatedServer(
        dedicatedId: number,
    ): CancelablePromise<({
        dedicated_server: dedicated_server;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dedicated-servers/{dedicated_id}',
            path: {
                'dedicated_id': dedicatedId,
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
     * Обновление выделенного сервера
     * Чтобы обновить только определенные атрибуты выделенного сервера, отправьте запрос PATCH в `api/v1/dedicated-servers/{dedicated_id}`.
     *
     * @param dedicatedId Уникальный идентификатор выделенного сервера.
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON с ключом `dedicated_server`.
     * @throws ApiError
     */
    public updateDedicatedServer(
        dedicatedId: number,
        requestBody?: {
            /**
             * Удобочитаемое имя выделенного сервера. Максимальная длина — 255 символов, имя должно быть уникальным.
             */
            name?: string;
            /**
             * Комментарий к выделенному серверу. Максимальная длина — 255 символов.
             */
            comment?: string;
        },
    ): CancelablePromise<({
        dedicated_server: dedicated_server;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/dedicated-servers/{dedicated_id}',
            path: {
                'dedicated_id': dedicatedId,
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
     * Удаление выделенного сервера
     * Чтобы удалить выделенный сервер, отправьте запрос DELETE в `api/v1/dedicated-servers/{dedicated_id}`.
     *
     * @param dedicatedId Уникальный идентификатор выделенного сервера.
     * @returns void
     * @throws ApiError
     */
    public deleteDedicatedServer(
        dedicatedId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/dedicated-servers/{dedicated_id}',
            path: {
                'dedicated_id': dedicatedId,
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
     * Получение списка тарифов для выделенного сервера
     * Чтобы получить список всех тарифов выделенных серверов, отправьте GET-запрос на `/api/v1/presets/dedicated-servers`.
     * @param location Получение тарифов определенной локации.
     * @returns any Объект JSON c ключем `dedicated_servers_presets`
     * @throws ApiError
     */
    public getDedicatedServersPresets(
        location?: 'ru-1' | 'ru-2' | 'kz-1' | 'pl-1',
    ): CancelablePromise<({
        meta: Meta;
        dedicated_servers_presets: Array<dedicated_server_preset>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/presets/dedicated-servers',
            query: {
                'location': location,
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
     * Получение дополнительных услуг для выделенного сервера
     * Чтобы получить список всех дополнительных услуг для выделенных серверов, отправьте GET-запрос на `/api/v1/presets/dedicated-servers/{preset_id}/additional-services`.
     * @param presetId Уникальный идентификатор тарифа выделенного сервера.
     * @returns any Объект JSON c ключем `dedicated_server_additional_services`
     * @throws ApiError
     */
    public getDedicatedServerPresetAdditionalServices(
        presetId: number,
    ): CancelablePromise<({
        meta: Meta;
        dedicated_server_additional_services: Array<dedicated_server_additional_service>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/presets/dedicated-servers/{preset_id}/additional-services',
            path: {
                'preset_id': presetId,
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
     * Получение списка серверов
     * Чтобы получить список серверов, отправьте GET-запрос на `/api/v1/servers`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `servers`.
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @returns any Объект JSON c ключом `servers`
     * @throws ApiError
     */
    public getServers(
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<({
        meta: Meta;
        servers: Array<vds>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/servers',
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
     * Создание сервера
     * Чтобы создать сервер, отправьте POST-запрос в `api/v1/servers`, задав необходимые атрибуты. Обязательно должен присутствовать один из параметров `configuration` или `preset_id`, а также `image_id` или `os_id`.
     *
     * Cервер будет создан с использованием предоставленной информации. Тело ответа будет содержать объект JSON с информацией о созданном сервере.
     * @param requestBody
     * @returns any Объект JSON c ключом `server`
     * @throws ApiError
     */
    public createServer(
        requestBody: create_server,
    ): CancelablePromise<({
        server: vds;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/servers',
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
     * Получение сервера
     * Чтобы получить сервер, отправьте запрос GET в `/api/v1/servers/{server_id}`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @returns any Объект JSON c ключом `server`
     * @throws ApiError
     */
    public getServer(
        serverId: number,
    ): CancelablePromise<({
        server: vds;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/servers/{server_id}',
            path: {
                'server_id': serverId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Удаление сервера
     * Чтобы удалить сервер, отправьте запрос DELETE в `/api/v1/servers/{server_id}`.\
     * Обратите внимание, если на аккаунте включено удаление серверов по смс, то вернется ошибка 423.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param hash Хеш, который совместно с кодом авторизации надо отправить для удаления, если включено подтверждение удаления сервисов через Телеграм.
     * @param code Код подтверждения, который придет к вам в Телеграм, после запроса удаления, если включено подтверждение удаления сервисов.
     *
     * При помощи API токена сервисы можно удалять без подтверждения, если параметр токена `is_able_to_delete` установлен в значение `true`
     * @returns any Объект JSON c ключом `server_delete`
     * @throws ApiError
     */
    public deleteServer(
        serverId: number,
        hash?: string,
        code?: string,
    ): CancelablePromise<({
        server_delete: delete_service_response;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/servers/{server_id}',
            path: {
                'server_id': serverId,
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
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Изменение сервера
     * Чтобы обновить только определенные атрибуты сервера, отправьте запрос PATCH в `/api/v1/servers/{server_id}`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param requestBody
     * @returns any Объект JSON c ключом `server`
     * @throws ApiError
     */
    public updateServer(
        serverId: number,
        requestBody: update_server,
    ): CancelablePromise<({
        server: vds;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/servers/{server_id}',
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
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Выполнение действия над сервером
     * Чтобы выполнить действие над сервером, отправьте POST-запрос на `/api/v1/servers/{server_id}/action`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public performActionOnServer(
        serverId: number,
        requestBody: {
            action: 'hard_reboot' | 'hard_shutdown' | 'install' | 'reboot' | 'remove' | 'reset_password' | 'shutdown' | 'start' | 'clone';
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/servers/{server_id}/action',
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
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Клонирование сервера
     * Чтобы клонировать сервер, отправьте POST-запрос на `/api/v1/servers/{server_id}/clone`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @returns any Объект JSON c ключом `server`
     * @throws ApiError
     */
    public cloneServer(
        serverId: number,
    ): CancelablePromise<({
        server: vds;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/servers/{server_id}/clone',
            path: {
                'server_id': serverId,
            },
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
     * Получение статистики сервера
     * Чтобы получить статистику сервера, отправьте GET-запрос на `/api/v1/servers/{server_id}/statistics`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param dateFrom Дата начала сбора статистики. Строка в формате ISO 8061, закодированная в ASCII, пример: `2023-05-25%202023-05-25T14%3A35%3A38`
     * @param dateTo Дата окончания сбора статистики. Строка в формате ISO 8061, закодированная в ASCII, пример: `2023-05-26%202023-05-25T14%3A35%3A38`
     * @returns any Объект JSON c ключами `cpu`, `disk`, `network_traffic`, `ram`
     * @throws ApiError
     */
    public getServerStatistics(
        serverId: number,
        dateFrom: string,
        dateTo: string,
    ): CancelablePromise<({
        cpu: Array<any>;
        network_traffic: Array<any>;
        /**
         * Статистика основного диска
         */
        disk: Array<any>;
        ram: Array<any>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/servers/{server_id}/statistics',
            path: {
                'server_id': serverId,
            },
            query: {
                'date_from': dateFrom,
                'date_to': dateTo,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение списка операционных систем
     * Чтобы получить список всех операционных систем, отправьте GET-запрос на `/api/v1/os/servers`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `servers_os`.
     * @returns any Объект JSON c ключом `servers_os`
     * @throws ApiError
     */
    public getOsList(): CancelablePromise<({
        meta: Meta;
        servers_os: Array<servers_os>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/os/servers',
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
     * Получение списка тарифов серверов
     * Чтобы получить список всех тарифов серверов, отправьте GET-запрос на `/api/v1/presets/servers`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `server_presets`.
     * @returns any Объект JSON c ключом `server_presets`
     * @throws ApiError
     */
    public getServersPresets(): CancelablePromise<({
        meta: Meta;
        server_presets: Array<servers_preset>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/presets/servers',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение списка конфигураторов серверов
     * Чтобы получить список всех конфигураторов серверов, отправьте GET-запрос на `/api/v1/configurator/servers`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `server_configurators`.
     * @returns any Объект JSON c ключом `server_configurators`
     * @throws ApiError
     */
    public getConfigurators(): CancelablePromise<({
        meta: Meta;
        server_configurators: Array<servers_configurator>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/configurator/servers',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение списка ПО из маркетплейса
     * Чтобы получить список ПО из маркетплейса, отправьте GET-запрос на `/api/v1/software/servers`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `servers_software`.
     * @returns any Объект JSON c ключом `servers_software`
     * @throws ApiError
     */
    public getSoftware(): CancelablePromise<({
        meta: Meta;
        servers_software: Array<servers_software>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/software/servers',
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
     * Выбор типа загрузки операционной системы сервера
     * Чтобы изменить тип загрузки операционной системы сервера, отправьте POST-запрос на `/api/v1/servers/{server_id}/boot-mode`. \
     * После смены типа загрузки сервер будет перезапущен.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public updateServerOsBootMode(
        serverId: number,
        requestBody?: {
            /**
             * Тип загрузки операционной системы. \
             * Параметры: `default` – стандартный режим, `single` – однопользовательский режим, `recovery_disk` – загрузка с диска восстановления.
             */
            boot_mode: 'default' | 'single' | 'recovery_disk';
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/servers/{server_id}/boot-mode',
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
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Изменение правил маршрутизации трафика сервера (NAT)
     * Чтобы измененить правила маршрутизации трафика сервера (NAT), отправьте PATCH-запрос на `/api/v1/servers/{server_id}/local-networks/nat-mode`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public updateServerNat(
        serverId: number,
        requestBody?: {
            /**
             * Правило для маршрутизации трафика. \
             * Досутпные правила: `dnat_and_snat` – разрешен входящий и исходящий трафик, `snat` – разрешен только исходящий трафик, `no_nat` – разрешен трафик только в локальной сети.
             */
            nat_mode: 'dnat_and_snat' | 'snat' | 'no_nat';
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/servers/{server_id}/local-networks/nat-mode',
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
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение списка IP-адресов сервера
     * Чтобы получить список IP-адресов сервера, отправьте GET-запрос на `/api/v1/servers/{server_id}/ips`. \
     * На данный момент IPv6 доступны только для локации `ru-1`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @returns any Объект JSON c ключом `server_ips`
     * @throws ApiError
     */
    public getServerIPs(
        serverId: number,
    ): CancelablePromise<({
        meta: Meta;
        server_ips: Array<server_ip>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/servers/{server_id}/ips',
            path: {
                'server_id': serverId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Добавление IP-адреса сервера
     * Чтобы добавить IP-адрес сервера, отправьте POST-запрос на `/api/v1/servers/{server_id}/ips`. \
     * На данный момент IPv6 доступны только для серверов с локацией `ru-1`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param requestBody
     * @returns any Объект JSON c ключом `server_ip`
     * @throws ApiError
     */
    public addServerIp(
        serverId: number,
        requestBody: {
            /**
             * Тип IP-адреса
             */
            type: 'ipv4' | 'ipv6';
            /**
             * PTR-запись IP-адреса
             */
            ptr?: string;
        },
    ): CancelablePromise<({
        server_ip: server_ip;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/servers/{server_id}/ips',
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
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Удаление IP-адреса сервера
     * Чтобы удалить IP-адрес сервера, отправьте DELETE-запрос на `/api/v1/servers/{server_id}/ips`. Нельзя удалить основной IP-адрес
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public deleteServerIp(
        serverId: number,
        requestBody: {
            /**
             * IP-адрес (IPv4 или IPv6)
             */
            ip: string;
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/servers/{server_id}/ips',
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
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Изменение IP-адреса сервера
     * Чтобы изменить IP-адрес сервера, отправьте POST-запрос на `/api/v1/servers/{server_id}/ips`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param requestBody
     * @returns any Объект JSON c ключом `server_ip`
     * @throws ApiError
     */
    public updateServerIp(
        serverId: number,
        requestBody: {
            /**
             * IP-адрес (IPv4 или IPv6)
             */
            ip: string;
            /**
             * PTR-запись IP-адреса
             */
            ptr: string;
        },
    ): CancelablePromise<({
        server_ip: server_ip;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/servers/{server_id}/ips',
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
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение списка логов сервера
     * Чтобы получить список логов сервера, отправьте GET-запрос на `/api/v1/servers/{server_id}/logs`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @param order Сортировка элементов по дате
     * @returns any Объект JSON c ключом `server_logs`
     * @throws ApiError
     */
    public getServerLogs(
        serverId: number,
        limit: number = 100,
        offset?: number,
        order: 'asc' | 'desc' = 'asc',
    ): CancelablePromise<({
        meta: Meta;
        server_logs: Array<server_log>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/servers/{server_id}/logs',
            path: {
                'server_id': serverId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'order': order,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение списка дисков сервера
     * Чтобы получить список дисков сервера, отправьте GET-запрос на `/api/v1/servers/{server_id}/disks`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @returns any Объект JSON c ключом `server_disks`
     * @throws ApiError
     */
    public getServerDisks(
        serverId: number,
    ): CancelablePromise<({
        meta: Meta;
        server_disks: Array<server_disk>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/servers/{server_id}/disks',
            path: {
                'server_id': serverId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Создание диска сервера
     * Чтобы создать диск сервера, отправьте POST-запрос на `/api/v1/servers/{server_id}/disks`. Системный диск создать нельзя.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param requestBody
     * @returns any Успешное создание диска сервера
     * @throws ApiError
     */
    public createServerDisk(
        serverId: number,
        requestBody?: {
            /**
             * Минимальный размер 5120. Максимальный размер 512000. Шаг 5120
             */
            size: number;
        },
    ): CancelablePromise<({
        server_disk: server_disk;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/servers/{server_id}/disks',
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
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение диска сервера
     * Чтобы получить диск сервера, отправьте GET-запрос на `/api/v1/servers/{server_id}/disks/{disk_id}`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param diskId Уникальный идентификатор диска сервера.
     * @returns any Успешное получение диска сервера
     * @throws ApiError
     */
    public getServerDisk(
        serverId: number,
        diskId: number,
    ): CancelablePromise<({
        server_disk: server_disk;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/servers/{server_id}/disks/{disk_id}',
            path: {
                'server_id': serverId,
                'disk_id': diskId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Изменение параметров диска сервера
     * Чтобы изменить параметры диска сервера, отправьте PATCH-запрос на `/api/v1/servers/{server_id}/disks/{disk_id}`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param diskId Уникальный идентификатор диска сервера.
     * @param requestBody
     * @returns any Успешное изменение параметров диска сервера
     * @throws ApiError
     */
    public updateServerDisk(
        serverId: number,
        diskId: number,
        requestBody?: {
            /**
             * Минимальный размер 5120. Максимальный размер 512000. Шаг 5120. Нельзя передавать значение меньше текущего размера диска.
             */
            size: number;
        },
    ): CancelablePromise<({
        server_disk: server_disk;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/servers/{server_id}/disks/{disk_id}',
            path: {
                'server_id': serverId,
                'disk_id': diskId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Удаление диска сервера
     * Чтобы удалить диск сервера, отправьте DELETE-запрос на `/api/v1/servers/{server_id}/disks/{disk_id}`. Нельзя удалять системный диск.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param diskId Уникальный идентификатор диска сервера.
     * @returns void
     * @throws ApiError
     */
    public deleteServerDisk(
        serverId: number,
        diskId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/servers/{server_id}/disks/{disk_id}',
            path: {
                'server_id': serverId,
                'disk_id': diskId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получить настройки автобэкапов диска сервера
     * Чтобы полученить настройки автобэкапов диска сервера, отправьте GET-запрос на `/api/v1/servers/{server_id}/disks/{disk_id}/auto-backups`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param diskId Уникальный идентификатор диска сервера.
     * @returns any Объект JSON c ключом `auto_backups_settings`
     * @throws ApiError
     */
    public getServerDiskAutoBackupSettings(
        serverId: number,
        diskId: number,
    ): CancelablePromise<({
        auto_backups_settings: auto_backup;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/servers/{server_id}/disks/{disk_id}/auto-backups',
            path: {
                'server_id': serverId,
                'disk_id': diskId,
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
     * Изменение настроек автобэкапов диска сервера
     * Чтобы изменить настройки автобэкапов диска сервера, отправьте PATCH-запрос на `/api/v1/servers/{server_id}/disks/{disk_id}/auto-backups`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param diskId Уникальный идентификатор диска сервера.
     * @param requestBody При значении `is_enabled`: `true`, поля `copy_count`, `creation_start_at`, `interval` являются обязательными
     * @returns any Объект JSON c ключом `auto_backups_settings`
     * @throws ApiError
     */
    public updateServerDiskAutoBackupSettings(
        serverId: number,
        diskId: number,
        requestBody?: auto_backup,
    ): CancelablePromise<({
        auto_backups_settings: auto_backup;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/servers/{server_id}/disks/{disk_id}/auto-backups',
            path: {
                'server_id': serverId,
                'disk_id': diskId,
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
     * Создание бэкапа диска сервера
     * Чтобы создать бэкап диска сервера, отправьте POST-запрос на `/api/v1/servers/{server_id}/disks/{disk_id}/backups`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `backup`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param diskId Уникальный идентификатор диска сервера.
     * @param requestBody
     * @returns any Объект JSON c ключом `backup`
     * @throws ApiError
     */
    public createServerDiskBackup(
        serverId: number,
        diskId: number,
        requestBody?: {
            /**
             * Комментарий к бэкапу.
             */
            comment?: string;
        },
    ): CancelablePromise<({
        backup?: server_backup;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/servers/{server_id}/disks/{disk_id}/backups',
            path: {
                'server_id': serverId,
                'disk_id': diskId,
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
     * Получение списка бэкапов диска сервера
     * Чтобы получить список бэкапов диска сервера, отправьте GET-запрос на `/api/v1/servers/{server_id}/disks/{disk_id}/backups`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `backups`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param diskId Уникальный идентификатор диска сервера.
     * @returns any Объект JSON c ключом `backups`
     * @throws ApiError
     */
    public getServerDiskBackups(
        serverId: number,
        diskId: number,
    ): CancelablePromise<({
        meta: Meta;
        backups: Array<server_backup>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/servers/{server_id}/disks/{disk_id}/backups',
            path: {
                'server_id': serverId,
                'disk_id': diskId,
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
     * Изменение бэкапа диска сервера
     * Чтобы изменить бэкап диска сервера, отправьте PATCH-запрос на `/api/v1/servers/{server_id}/disks/{disk_id}/backups/{backup_id}`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param diskId Уникальный идентификатор диска сервера.
     * @param backupId Уникальный идентификатор бэкапа сервера.
     * @param requestBody
     * @returns any Объект JSON c ключом `backup`
     * @throws ApiError
     */
    public updateServerDiskBackup(
        serverId: number,
        diskId: number,
        backupId: number,
        requestBody?: {
            /**
             * Комментарий к бэкапу.
             */
            comment: string;
        },
    ): CancelablePromise<({
        backup: server_backup;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/servers/{server_id}/disks/{disk_id}/backups/{backup_id}',
            path: {
                'server_id': serverId,
                'disk_id': diskId,
                'backup_id': backupId,
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
     * Удаление бэкапа диска сервера
     * Чтобы удалить бэкап диска сервера, отправьте DELETE-запрос на `/api/v1/servers/{server_id}/disks/{disk_id}/backups/{backup_id}`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param diskId Уникальный идентификатор диска сервера.
     * @param backupId Уникальный идентификатор бэкапа сервера.
     * @returns void
     * @throws ApiError
     */
    public deleteServerDiskBackup(
        serverId: number,
        diskId: number,
        backupId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/servers/{server_id}/disks/{disk_id}/backups/{backup_id}',
            path: {
                'server_id': serverId,
                'disk_id': diskId,
                'backup_id': backupId,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение бэкапа диска сервера
     * Чтобы получить бэкап диска сервера, отправьте GET-запрос на `/api/v1/servers/{server_id}/disks/{disk_id}/backups/{backup_id}`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `backup`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param diskId Уникальный идентификатор диска сервера.
     * @param backupId Уникальный идентификатор бэкапа сервера.
     * @returns any Объект JSON c ключом `backup`
     * @throws ApiError
     */
    public getServerDiskBackup(
        serverId: number,
        diskId: number,
        backupId: number,
    ): CancelablePromise<({
        backup: server_backup;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/servers/{server_id}/disks/{disk_id}/backups/{backup_id}',
            path: {
                'server_id': serverId,
                'disk_id': diskId,
                'backup_id': backupId,
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
     * Выполнение действия над бэкапом диска сервера
     * Чтобы выполнить действие над бэкапом диска сервера, отправьте POST-запрос на `/api/v1/servers/{server_id}/disks/{disk_id}/backups/{backup_id}/action`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @param diskId Уникальный идентификатор диска сервера.
     * @param backupId Уникальный идентификатор бэкапа сервера.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public performActionOnBackup(
        serverId: number,
        diskId: number,
        backupId: number,
        requestBody?: {
            /**
             * Действие над бэкапом.
             */
            action: 'restore' | 'mount' | 'unmount';
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/servers/{server_id}/disks/{disk_id}/backups/{backup_id}/action',
            path: {
                'server_id': serverId,
                'disk_id': diskId,
                'backup_id': backupId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                403: `Запрещено`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Отмонтирование ISO образа и перезагрузка сервера
     * Чтобы отмонтировать ISO образ и перезагрузить сервер, отправьте POST-запрос на `/api/v1/servers/{server_id}/image-unmount`.
     * @param serverId Уникальный идентификатор облачного сервера.
     * @returns any ISO образ в процессе отмонтирования
     * @throws ApiError
     */
    public imageUnmountAndServerReload(
        serverId: number,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/servers/{server_id}/image-unmount',
            path: {
                'server_id': serverId,
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
     * Получение списка проектов
     * Чтобы получить список всех проектов на вашем аккаунте, отправьте GET-запрос на `/api/v1/dedicated-servers`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `projects`.
     * @returns any Объект JSON c ключом `projects`
     * @throws ApiError
     */
    public getProjects(): CancelablePromise<({
        projects: Array<project>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Создание проекта
     * Чтобы создать проект, отправьте POST-запрос в `api/v1/projects`, задав необходимые атрибуты.
     *
     * Проект будет создан с использованием предоставленной информации. Тело ответа будет содержать объект JSON с информацией о созданном проекте.
     * @param requestBody
     * @returns any Объект JSON c ключом `project`
     * @throws ApiError
     */
    public createProject(
        requestBody: create_project,
    ): CancelablePromise<({
        project: project;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/projects',
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
     * Получение проекта по идентификатору
     * Чтобы получить проект по идентификатору, отправьте GET-запрос на `/api/v1/projects/{project_id}`.
     * @param projectId Уникальный идентификатор проекта.
     * @returns any Объект JSON c ключом `project`
     * @throws ApiError
     */
    public getProject(
        projectId: number,
    ): CancelablePromise<({
        project: project;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/{project_id}',
            path: {
                'project_id': projectId,
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
     * Удаление проекта
     * Чтобы удалить проект, отправьте запрос DELETE в `api/v1/projects/{project_id}`.
     * @param projectId Уникальный идентификатор проекта.
     * @returns void
     * @throws ApiError
     */
    public deleteProject(
        projectId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/projects/{project_id}',
            path: {
                'project_id': projectId,
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
     * Изменение проекта
     * Чтобы изменить проект, отправьте запрос PUT в `api/v1/projects/{project_id}`.
     * @param projectId Уникальный идентификатор проекта.
     * @param requestBody
     * @returns any Объект JSON c ключом `project`
     * @throws ApiError
     */
    public updateProject(
        projectId: number,
        requestBody: update_project,
    ): CancelablePromise<({
        project: project;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/projects/{project_id}',
            path: {
                'project_id': projectId,
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
     * Получение списка балансировщиков проекта
     * Чтобы получить список балансировщиков проекта, отправьте GET-запрос на `/api/v1/projects/{project_id}/resources/balancers`.
     * @param projectId Уникальный идентификатор проекта.
     * @returns any Объект JSON c ключом `balancers`
     * @throws ApiError
     */
    public getProjectBalancers(
        projectId: number,
    ): CancelablePromise<({
        balancers: Array<balancer>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/{project_id}/resources/balancers',
            path: {
                'project_id': projectId,
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
     * Добавление балансировщика в проект
     * Чтобы добавить балансировщик в проект, отправьте POST-запрос на `/api/v1/projects/{project_id}/resources/balancers`, задав необходимые атрибуты.
     *
     * Балансировщик будет добавлен в указанный проект. Тело ответа будет содержать объект JSON с информацией о добавленном балансировщике.
     * @param projectId Уникальный идентификатор проекта.
     * @param requestBody
     * @returns any Объект JSON c ключом `resource`
     * @throws ApiError
     */
    public addBalancerToProject(
        projectId: number,
        requestBody: {
            /**
             * Идентификатор добавляемого балансировщика.
             */
            resource_id: number;
        },
    ): CancelablePromise<({
        resource: project_resource;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/projects/{project_id}/resources/balancers',
            path: {
                'project_id': projectId,
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
     * Получение списка хранилищ проекта
     * Чтобы получить список хранилищ проекта, отправьте GET-запрос на `/api/v1/projects/{project_id}/resources/buckets`.
     * @param projectId Уникальный идентификатор проекта.
     * @returns any Объект JSON c ключом `buckets`
     * @throws ApiError
     */
    public getProjectStorages(
        projectId: number,
    ): CancelablePromise<({
        buckets: Array<bucket>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/{project_id}/resources/buckets',
            path: {
                'project_id': projectId,
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
     * Добавление хранилища в проект
     * Чтобы добавить хранилище в проект, отправьте POST-запрос на `/api/v1/projects/{project_id}/resources/buckets`, задав необходимые атрибуты.
     *
     * Хранилище будет добавлено в указанный проект. Тело ответа будет содержать объект JSON с информацией о добавленном хранилище.
     * @param projectId Уникальный идентификатор проекта.
     * @param requestBody
     * @returns any Объект JSON c ключом `resource`
     * @throws ApiError
     */
    public addStorageToProject(
        projectId: number,
        requestBody: {
            /**
             * Идентификатор добавляемого хранилища.
             */
            resource_id: number;
        },
    ): CancelablePromise<({
        resource: project_resource;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/projects/{project_id}/resources/buckets',
            path: {
                'project_id': projectId,
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
     * Получение списка кластеров проекта
     * Чтобы получить список кластеров проекта, отправьте GET-запрос на `/api/v1/projects/{project_id}/resources/clusters`.
     * @param projectId Уникальный идентификатор проекта.
     * @returns any Объект JSON c ключом `clusters`
     * @throws ApiError
     */
    public getProjectClusters(
        projectId: number,
    ): CancelablePromise<({
        clusters: Array<clusterk8s>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/{project_id}/resources/clusters',
            path: {
                'project_id': projectId,
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
     * Добавление кластера в проект
     * Чтобы добавить кластер в проект, отправьте POST-запрос на `/api/v1/projects/{project_id}/resources/clusters`, задав необходимые атрибуты.
     *
     * Кластер будет добавлен в указанный проект. Тело ответа будет содержать объект JSON с информацией о добавленном кластере.
     * @param projectId Уникальный идентификатор проекта.
     * @param requestBody
     * @returns any Объект JSON c ключом `resource`
     * @throws ApiError
     */
    public addClusterToProject(
        projectId: number,
        requestBody: {
            /**
             * Идентификатор добавляемого кластера.
             */
            resource_id: number;
        },
    ): CancelablePromise<({
        resource: project_resource;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/projects/{project_id}/resources/clusters',
            path: {
                'project_id': projectId,
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
     * Получение списка серверов проекта
     * Чтобы получить список серверов проекта, отправьте GET-запрос на `/api/v1/projects/{project_id}/resources/servers`.
     * @param projectId Уникальный идентификатор проекта.
     * @returns any Объект JSON c ключом `servers`
     * @throws ApiError
     */
    public getProjectServers(
        projectId: number,
    ): CancelablePromise<({
        servers: Array<vds>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/{project_id}/resources/servers',
            path: {
                'project_id': projectId,
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
     * Добавление сервера в проект
     * Чтобы добавить сервер в проект, отправьте POST-запрос на `/api/v1/projects/{project_id}/resources/servers`, задав необходимые атрибуты.
     *
     * Сервер будет добавлен в указанный проект. Тело ответа будет содержать объект JSON с информацией о добавленном сервере.
     * @param projectId Уникальный идентификатор проекта.
     * @param requestBody
     * @returns any Объект JSON c ключом `resource`
     * @throws ApiError
     */
    public addServerToProject(
        projectId: number,
        requestBody: {
            /**
             * Идентификатор добавляемого сервера.
             */
            resource_id: number;
        },
    ): CancelablePromise<({
        resource: project_resource;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/projects/{project_id}/resources/servers',
            path: {
                'project_id': projectId,
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
     * Получение списка баз данных проекта
     * Чтобы получить список баз данных проекта, отправьте GET-запрос на `/api/v1/projects/{project_id}/resources/databases`.
     * @param projectId Уникальный идентификатор проекта.
     * @returns any Объект JSON c ключом `databases`
     * @throws ApiError
     */
    public getProjectDatabases(
        projectId: number,
    ): CancelablePromise<({
        databases: Array<db>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/{project_id}/resources/databases',
            path: {
                'project_id': projectId,
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
     * Добавление базы данных в проект
     * Чтобы добавить базу данных в проект, отправьте POST-запрос на `/api/v1/projects/{project_id}/resources/databases`, задав необходимые атрибуты.
     *
     * База данных будет добавлена в указанный проект. Тело ответа будет содержать объект JSON с информацией о добавленной базе данных.
     * @param projectId Уникальный идентификатор проекта.
     * @param requestBody
     * @returns any Объект JSON c ключом `resource`
     * @throws ApiError
     */
    public addDatabaseToProject(
        projectId: number,
        requestBody: {
            /**
             * Идентификатор добавляемой базы данных.
             */
            resource_id: number;
        },
    ): CancelablePromise<({
        resource: project_resource;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/projects/{project_id}/resources/databases',
            path: {
                'project_id': projectId,
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
     * Получение списка выделенных серверов проекта
     * Чтобы получить список выделенных серверов проекта, отправьте GET-запрос на `/api/v1/projects/{project_id}/resources/dedicated`.
     * @param projectId Уникальный идентификатор проекта.
     * @returns any Объект JSON c ключом `dedicated_servers`
     * @throws ApiError
     */
    public getProjectDedicatedServers(
        projectId: number,
    ): CancelablePromise<({
        dedicated_servers: Array<dedicated_server>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/{project_id}/resources/dedicated',
            path: {
                'project_id': projectId,
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
     * Добавление выделенного сервера в проект
     * Чтобы добавить выделенный сервер в проект, отправьте POST-запрос на `/api/v1/projects/{project_id}/resources/dedicated`, задав необходимые атрибуты.
     *
     * Выделенный сервер будет добавлен в указанный проект. Тело ответа будет содержать объект JSON с информацией о добавленном выделенном сервере.
     * @param projectId Уникальный идентификатор проекта.
     * @param requestBody
     * @returns any Объект JSON c ключом `resource`
     * @throws ApiError
     */
    public addDedicatedServerToProject(
        projectId: number,
        requestBody: {
            /**
             * Идентификатор добавляемого выделенного сервера.
             */
            resource_id: number;
        },
    ): CancelablePromise<({
        resource: project_resource;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/projects/{project_id}/resources/dedicated',
            path: {
                'project_id': projectId,
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
     * Получение всех ресурсов проекта
     * Чтобы получить все ресурсы проекта, отправьте GET-запрос на `/api/v1/projects/{project_id}/resources`.
     * @param projectId Уникальный идентификатор проекта.
     * @returns any Объект JSON c ключами: `servers`, `balancers`, `buckets`, `clusters`, `databases`, `dedicated_servers`
     * @throws ApiError
     */
    public getAllProjectResources(
        projectId: number,
    ): CancelablePromise<({
        servers: Array<vds>;
        balancers: Array<balancer>;
        buckets: Array<bucket>;
        clusters: Array<clusterk8s>;
        databases: Array<db>;
        dedicated_servers: Array<dedicated_server>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/{project_id}/resources',
            path: {
                'project_id': projectId,
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
     * Получение списка всех балансировщиков на аккаунте
     * Чтобы получить список всех балансировщиков на аккаунте, отправьте GET-запрос на `/api/v1/projects/resources/balancers`.
     * @returns any Объект JSON c ключом `balancers`
     * @throws ApiError
     */
    public getAccountBalancers(): CancelablePromise<({
        balancers: Array<balancer>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/resources/balancers',
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
     * Получение списка всех серверов на аккаунте
     * Чтобы получить список всех серверов на аккаунте, отправьте GET-запрос на `/api/v1/projects/resources/servers`.
     * @returns any Объект JSON c ключом `servers`
     * @throws ApiError
     */
    public getAccountServers(): CancelablePromise<({
        servers: Array<vds>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/resources/servers',
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
     * Получение списка всех хранилищ на аккаунте
     * Чтобы получить список всех хранилищ на аккаунте, отправьте GET-запрос на `/api/v1/projects/resources/buckets`.
     * @returns any Объект JSON c ключом `buckets`
     * @throws ApiError
     */
    public getAccountStorages(): CancelablePromise<({
        buckets: Array<bucket>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/resources/buckets',
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
     * Получение списка всех кластеров на аккаунте
     * Чтобы получить список всех кластеров на аккаунте, отправьте GET-запрос на `/api/v1/projects/resources/clusters`.
     * @returns any Объект JSON c ключом `clusters`
     * @throws ApiError
     */
    public getAccountClusters(): CancelablePromise<({
        clusters: Array<clusterk8s>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/resources/clusters',
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
     * Получение списка всех баз данных на аккаунте
     * Чтобы получить список всех баз данных на аккаунте, отправьте GET-запрос на `/api/v1/projects/resources/databases`.
     * @returns any Объект JSON c ключом `databases`
     * @throws ApiError
     */
    public getAccountDatabases(): CancelablePromise<({
        databases: Array<db>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/resources/databases',
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
     * Получение списка всех выделенных серверов на аккаунте
     * Чтобы получить список всех выделенных серверов на аккаунте, отправьте GET-запрос на `/api/v1/projects/resources/dedicated`.
     * @returns any Объект JSON c ключом `dedicated_servers`
     * @throws ApiError
     */
    public getAccountDedicatedServers(): CancelablePromise<({
        dedicated_servers: Array<dedicated_server>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/projects/resources/dedicated',
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
     * Перенести ресурс в другой проект
     * Чтобы перенести ресурс в другой проект, отправьте запрос PUT в `api/v1/projects/{project_id}/resources/transfer`.
     *
     * @param projectId Уникальный идентификатор проекта.
     * @param requestBody
     * @returns any Объект JSON c ключом `resource`
     * @throws ApiError
     */
    public transferResourceToAnotherProject(
        projectId: number,
        requestBody: resource_transfer,
    ): CancelablePromise<({
        resource: project_resource;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/projects/{project_id}/resources/transfer',
            path: {
                'project_id': projectId,
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
     * Получить информацию о ограничениях авторизации пользователя
     * Чтобы получить информацию о ограничениях авторизации пользователя, отправьте GET-запрос на `/api/v1/auth/access`.
     *
     * Тело ответа будет представлять собой объект JSON с ключами `is_ip_restrictions_enabled`, `is_country_restrictions_enabled` и `white_list`.
     * @returns any Объект JSON c ключами `is_ip_restrictions_enabled`, `is_country_restrictions_enabled` и `white_list`
     * @throws ApiError
     */
    public getAuthAccessSettings(): CancelablePromise<({
        /**
         * Это логическое значение, которое показывает, включено ли ограничение доступа по IP-адресу.
         */
        is_ip_restrictions_enabled: boolean;
        /**
         * Это логическое значение, которое показывает, включено ли ограничение доступа по стране.
         */
        is_country_restrictions_enabled: boolean;
        white_list: {
            /**
             * Список разрешенных IP-адресов.
             */
            ips: Array<string>;
            /**
             * Список разрешенных стран.
             */
            countries: Array<string>;
        };
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/auth/access',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Включение/отключение ограничений по стране
     * Чтобы включить/отключить ограничения по стране, отправьте POST-запрос в `api/v1/access/countries/enabled`, передав в теле запроса параметр `is_enabled`
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public updateAuthRestrictionsByCountries(
        requestBody: {
            /**
             * Это логическое значение, которое показывает, включены ли ограничения по IP-адресу.
             */
            is_enabled: boolean;
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/auth/access/countries/enabled',
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
     * Получение списка стран
     * Чтобы получить список стран, отправьте GET-запрос на `/api/v1/auth/access/countries`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `countries`.
     * @returns any Объект JSON c ключом `countries`
     * @throws ApiError
     */
    public getCountries(): CancelablePromise<({
        /**
         * Список стран, приходит в виде объекта, где ключ - код страны в формате Alpha-2 ISO 3166-1, а значение - название страны в удобочитаемом формате.
         */
        countries: Record<string, any>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/auth/access/countries',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Добавление стран в список разрешенных
     * Чтобы добавить страны в список разрешенных, отправьте POST-запрос в `api/v1/access/countries`, передав в теле запроса параметр `countries` со списком стран.
     * @param requestBody
     * @returns any Объект JSON c ключом `countries`
     * @throws ApiError
     */
    public addCountriesToAllowedList(
        requestBody: {
            /**
             * Список разрешенных стран
             */
            countries: Array<string>;
        },
    ): CancelablePromise<({
        countries: add_countries;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/auth/access/countries',
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
     * Удаление стран из списка разрешенных
     * Чтобы удалить страны из списка разрешенных, отправьте DELETE-запрос в `api/v1/access/countries`, передав в теле запроса параметр `countries` со списком стран.
     * @param requestBody
     * @returns any Объект JSON c ключом `countries`
     * @throws ApiError
     */
    public deleteCountriesFromAllowedList(
        requestBody: {
            /**
             * Список удаляемых из списка разрешенных стран.
             */
            countries: Array<string>;
        },
    ): CancelablePromise<({
        countries: remove_countries;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/auth/access/countries',
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
     * Включение/отключение ограничений по IP-адресу
     * Чтобы включить/отключить ограничения по IP-адресу, отправьте POST-запрос в `api/v1/access/ips/enabled`, передав в теле запроса параметр `is_enabled`
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public updateAuthRestrictionsByIp(
        requestBody: {
            /**
             * Это логическое значение, которое показывает, включены ли ограничения по IP-адресу.
             */
            is_enabled: boolean;
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/auth/access/ips/enabled',
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
     * Добавление IP-адресов в список разрешенных
     * Чтобы добавить IP-адреса в список разрешенных, отправьте POST-запрос в `api/v1/access/ips`, передав в теле запроса параметр `ips` со списком IP-адресов.
     * @param requestBody
     * @returns any Объект JSON c ключом `ips`
     * @throws ApiError
     */
    public addIPsToAllowedList(
        requestBody: {
            /**
             * Список разрешенных IP-адресов.
             */
            ips: Array<string>;
        },
    ): CancelablePromise<({
        ips: add_ips;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/auth/access/ips',
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
     * Удаление IP-адресов из списка разрешенных
     * Чтобы удалить IP-адреса из списка разрешенных, отправьте DELETE-запрос в `api/v1/access/ips`, передав в теле запроса параметр `ips` со списком IP-адресов.
     * @param requestBody
     * @returns any Объект JSON c ключом `ips`.
     * @throws ApiError
     */
    public deleteIPsFromAllowedList(
        requestBody: {
            /**
             * Список удаляемых из списка разрешенных IP-адресов.
             */
            ips: Array<string>;
        },
    ): CancelablePromise<({
        ips: remove_ips;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/auth/access/ips',
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
     * Получение списка почтовых ящиков аккаунта
     * Чтобы получить список почтовых ящиков аккаунта, отправьте GET-запрос на `/api/v1/mail`.
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @param search Поиск почтового ящика по названию
     * @returns any Ответ будет представлять собой объект JSON c ключом `mailboxes`.
     * @throws ApiError
     */
    public getMailboxes(
        limit: number = 100,
        offset?: number,
        search?: string,
    ): CancelablePromise<({
        meta: Meta;
        mailboxes: Array<mailbox>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/mail',
            query: {
                'limit': limit,
                'offset': offset,
                'search': search,
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
     * Получение квоты почты аккаунта
     * Чтобы получить квоту почты аккаунта, отправьте GET-запрос на `/api/v1/mail/quota`.
     * @returns any Ответ будет представлять собой объект JSON c ключом `quota`.
     * @throws ApiError
     */
    public getMailQuota(): CancelablePromise<({
        quota: quota;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/mail/quota',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Изменение квоты почты аккаунта
     * Чтобы получить инфомацию по квоте почты аккаунта, отправьте GET-запрос на `/api/v1/mail/quota`.
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `quota`.
     * @throws ApiError
     */
    public updateMailQuota(
        requestBody: {
            /**
             * Общее количество места на почте (в Мб).
             */
            total: number;
        },
    ): CancelablePromise<({
        quota: quota;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/mail/quota',
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
     * Получение списка почтовых ящиков домена
     * Чтобы получить список почтовых ящиков домена, отправьте GET-запрос на `/api/v1/mail/domains/{domain}`.
     * @param domain Полное имя домена
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @param search Поиск почтового ящика по названию
     * @returns any Ответ будет представлять собой объект JSON c ключом `mailboxes`.
     * @throws ApiError
     */
    public getDomainMailboxes(
        domain: string,
        limit: number = 100,
        offset?: number,
        search?: string,
    ): CancelablePromise<({
        meta: Meta;
        mailboxes: Array<mailbox>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/mail/domains/{domain}',
            path: {
                'domain': domain,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'search': search,
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
     * Создание почтового ящика
     * Чтобы создать почтовый ящик, отправьте POST-запрос на `/api/v1/mail/domains/{domain}`.
     * @param domain Полное имя домена
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `mailbox`.
     * @throws ApiError
     */
    public createDomainMailbox(
        domain: string,
        requestBody: {
            /**
             * Название почтового ящика
             */
            mailbox: string;
            /**
             * Пароль почтового ящика
             */
            password: string;
            /**
             * Комментарий почтового ящика
             */
            comment?: string;
        },
    ): CancelablePromise<({
        mailbox: mailbox;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/mail/domains/{domain}',
            path: {
                'domain': domain,
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
     * Получение почтовой информации о домене
     * Чтобы получить почтовую информацию о домене, отправьте GET-запрос на `/api/v1/mail/domains/{domain}/info`.
     * @param domain Полное имя домена
     * @returns any Ответ будет представлять собой объект JSON c ключом `domain_info`.
     * @throws ApiError
     */
    public getDomainMailInfo(
        domain: string,
    ): CancelablePromise<({
        domain_info: domain_info;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/mail/domains/{domain}/info',
            path: {
                'domain': domain,
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
     * Изменение почтовой информации о домене
     * Чтобы изменить почтовую информацию о домене, отправьте PATCH-запрос на `/api/v1/mail/domains/{domain}/info`.
     * @param domain Полное имя домена
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `domain_info`.
     * @throws ApiError
     */
    public updateDomainMailInfo(
        domain: string,
        requestBody: {
            /**
             * Адрес для сбора почты с ошибочных ящиков
             */
            email: string;
        },
    ): CancelablePromise<({
        domain_info: domain_info;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/mail/domains/{domain}/info',
            path: {
                'domain': domain,
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
     * Получение почтового ящика
     * Чтобы получить почтовый ящик, отправьте GET-запрос на `/api/v1/mail/domains/{domain}/mailboxes/{mailbox}`.
     * @param domain Полное имя домена
     * @param mailbox Название почтового ящика
     * @returns any Ответ будет представлять собой объект JSON c ключом `mailbox`.
     * @throws ApiError
     */
    public getMailbox(
        domain: string,
        mailbox: string,
    ): CancelablePromise<({
        mailbox: mailbox;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/mail/domains/{domain}/mailboxes/{mailbox}',
            path: {
                'domain': domain,
                'mailbox': mailbox,
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
     * Изменение почтового ящика
     * Чтобы изменить почтовый ящик, отправьте PATCH-запрос на `/api/v1/mail/domains/{domain}/mailboxes/{mailbox}`.
     * @param domain Полное имя домена
     * @param mailbox Название почтового ящика
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `mailbox`.
     * @throws ApiError
     */
    public updateMailbox(
        domain: string,
        mailbox: string,
        requestBody: update_mailbox,
    ): CancelablePromise<({
        mailbox: mailbox;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/mail/domains/{domain}/mailboxes/{mailbox}',
            path: {
                'domain': domain,
                'mailbox': mailbox,
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
     * Удаление почтового ящика
     * Чтобы удалить почтовый ящик, отправьте DELETE-запрос на `/api/v1/mail/domains/{domain}/mailboxes/{mailbox}`.
     * @param domain Полное имя домена
     * @param mailbox Название почтового ящика
     * @returns void
     * @throws ApiError
     */
    public deleteMailbox(
        domain: string,
        mailbox: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/mail/domains/{domain}/mailboxes/{mailbox}',
            path: {
                'domain': domain,
                'mailbox': mailbox,
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
     * Получение списка всех доменов
     * Чтобы получить список всех доменов на вашем аккаунте, отправьте GET-запрос на `/api/v1/domains`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `domains`.
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @param idnName Интернационализированное доменное имя.
     * @param linkedIp Привязанный к домену IP-адрес.
     * @param order Порядок доменов.
     * @param sort Сортировка доменов.
     * @returns any Ответ будет представлять собой объект JSON c ключом `domains`.
     * @throws ApiError
     */
    public getDomains(
        limit: number = 100,
        offset?: number,
        idnName?: string,
        linkedIp?: string,
        order?: 'asc' | 'dsc',
        sort?: 'idn_name',
    ): CancelablePromise<({
        meta: Meta;
        domains: Array<domain>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/domains',
            query: {
                'limit': limit,
                'offset': offset,
                'idn_name': idnName,
                'linked_ip': linkedIp,
                'order': order,
                'sort': sort,
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
     * Получение информации о домене
     * Чтобы отобразить информацию об отдельном домене, отправьте запрос GET на `/api/v1/domains/{fqdn}`.
     * @param fqdn Полное имя домена.
     * @returns any Ответ будет представлять собой объект JSON c ключом `domain`.
     * @throws ApiError
     */
    public getDomain(
        fqdn: string,
    ): CancelablePromise<({
        domain: domain;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/domains/{fqdn}',
            path: {
                'fqdn': fqdn,
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
     * Включение/выключение автопродления домена
     * Чтобы включить/выключить автопродление домена, отправьте запрос PATCH на `/api/v1/domains/{fqdn}`, передав в теле запроса параметр `is_autoprolong_enabled`
     * @param fqdn Полное имя домена.
     * @param requestBody
     * @returns any Объект JSON c ключом `domain`
     * @throws ApiError
     */
    public updateDomainAutoProlongation(
        fqdn: string,
        requestBody: update_domain,
    ): CancelablePromise<({
        domain: domain;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/domains/{fqdn}',
            path: {
                'fqdn': fqdn,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Удаление домена
     * Чтобы удалить домен, отправьте запрос DELETE на `/api/v1/domains/{fqdn}`.
     * @param fqdn Полное имя домена.
     * @returns void
     * @throws ApiError
     */
    public deleteDomain(
        fqdn: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/domains/{fqdn}',
            path: {
                'fqdn': fqdn,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получить информацию обо всех пользовательских DNS-записях домена или поддомена
     * Чтобы получить информацию обо всех пользовательских DNS-записях домена или поддомена, отправьте запрос GET на `/api/v1/domains/{fqdn}/dns-records`.
     * @param fqdn Полное имя домена или поддомена.
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @returns any Ответ будет представлять собой объект JSON c ключом `dns_records`.
     * @throws ApiError
     */
    public getDomainDnsRecords(
        fqdn: string,
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<({
        meta: Meta;
        dns_records: Array<dns_record>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/domains/{fqdn}/dns-records',
            path: {
                'fqdn': fqdn,
            },
            query: {
                'limit': limit,
                'offset': offset,
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
     * Добавить информацию о DNS-записи для домена или поддомена
     * Чтобы добавить информацию о DNS-записи для домена или поддомена, отправьте запрос POST на `/api/v1/domains/{fqdn}/dns-records`, задав необходимые атрибуты.
     *
     * DNS-запись будет добавлена с использованием предоставленной информации. Тело ответа будет содержать объект JSON с информацией о добавленной DNS-записи.
     * @param fqdn Полное имя домена или поддомена.
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `dns_record`.
     * @throws ApiError
     */
    public createDomainDnsRecord(
        fqdn: string,
        requestBody: create_dns,
    ): CancelablePromise<({
        dns_record: dns_record;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/domains/{fqdn}/dns-records',
            path: {
                'fqdn': fqdn,
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
     * Обновить информацию о DNS-записи домена или поддомена
     * Чтобы обновить информацию о DNS-записи для домена или поддомена, отправьте запрос PATCH на `/api/v1/domains/{fqdn}/dns-records/{record_id}`, задав необходимые атрибуты.
     *
     * DNS-запись будет обновлена с использованием предоставленной информации. Тело ответа будет содержать объект JSON с информацией об добавленной DNS-записи.
     * @param fqdn Полное имя домена или поддомена.
     * @param recordId Идентификатор DNS-записи домена или поддомена.
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `dns_record`.
     * @throws ApiError
     */
    public updateDomainDnsRecord(
        fqdn: string,
        recordId: number,
        requestBody: create_dns,
    ): CancelablePromise<({
        dns_record: dns_record;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/domains/{fqdn}/dns-records/{record_id}',
            path: {
                'fqdn': fqdn,
                'record_id': recordId,
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
     * Удалить информацию о DNS-записи для домена или поддомена
     * Чтобы удалить информацию о DNS-записи для домена или поддомена, отправьте запрос DELETE на `/api/v1/domains/{fqdn}/dns-records/{record_id}`.
     * @param fqdn Полное имя домена или поддомена.
     * @param recordId Идентификатор DNS-записи домена или поддомена.
     * @returns void
     * @throws ApiError
     */
    public deleteDomainDnsRecord(
        fqdn: string,
        recordId: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/domains/{fqdn}/dns-records/{record_id}',
            path: {
                'fqdn': fqdn,
                'record_id': recordId,
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
     * Получить информацию обо всех DNS-записях по умолчанию домена или поддомена
     * Чтобы получить информацию обо всех DNS-записях по умолчанию домена или поддомена, отправьте запрос GET на `/api/v1/domains/{fqdn}/default-dns-records`.
     * @param fqdn Полное имя домена или поддомена.
     * @param limit Обозначает количество записей, которое необходимо вернуть.
     * @param offset Указывает на смещение относительно начала списка.
     * @returns any Ответ будет представлять собой объект JSON c ключом `dns_records`.
     * @throws ApiError
     */
    public getDomainDefaultDnsRecords(
        fqdn: string,
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<({
        meta: Meta;
        dns_records: Array<dns_record>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/domains/{fqdn}/default-dns-records',
            path: {
                'fqdn': fqdn,
            },
            query: {
                'limit': limit,
                'offset': offset,
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
     * Добавление поддомена
     * Чтобы добавить поддомен, отправьте запрос POST на `/api/v1/domains/{fqdn}/subdomains/{subdomain_fqdn}`, задав необходимые атрибуты.
     *
     * Поддомен будет добавлен с использованием предоставленной информации. Тело ответа будет содержать объект JSON с информацией о добавленном поддомене.
     * @param fqdn Полное имя домена.
     * @param subdomainFqdn Полное имя поддомена.
     * @returns any Ответ будет представлять собой объект JSON c ключом `subdomain`.
     * @throws ApiError
     */
    public addSubdomain(
        fqdn: string,
        subdomainFqdn: string,
    ): CancelablePromise<({
        subdomain: subdomain;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/domains/{fqdn}/subdomains/{subdomain_fqdn}',
            path: {
                'fqdn': fqdn,
                'subdomain_fqdn': subdomainFqdn,
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
     * Удаление поддомена
     * Чтобы удалить поддомен, отправьте запрос DELETE на `/api/v1/domains/{fqdn}/subdomains/{subdomain_fqdn}`.
     * @param fqdn Полное имя домена.
     * @param subdomainFqdn Полное имя поддомена.
     * @returns void
     * @throws ApiError
     */
    public deleteSubdomain(
        fqdn: string,
        subdomainFqdn: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/domains/{fqdn}/subdomains/{subdomain_fqdn}',
            path: {
                'fqdn': fqdn,
                'subdomain_fqdn': subdomainFqdn,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение списка name-серверов домена
     * Чтобы получить список name-серверов домена, отправьте запрос GET на `/api/v1/domains/{fqdn}/name-servers`.
     * @param fqdn Полное имя домена.
     * @returns any Ответ будет представлять собой объект JSON c ключом `name_servers`.
     * @throws ApiError
     */
    public getDomainNameServers(
        fqdn: string,
    ): CancelablePromise<({
        meta: Meta;
        name_servers: Array<domain_name_server>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/domains/{fqdn}/name-servers',
            path: {
                'fqdn': fqdn,
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
     * Изменение name-серверов домена
     * Чтобы изменить name-серверы домена, отправьте запрос PUT на `/api/v1/domains/{fqdn}/name-servers`, задав необходимые атрибуты.
     *
     * Name-серверы будут изменены с использованием предоставленной информации. Тело ответа будет содержать объект JSON с информацией о name-серверах домена.
     * @param fqdn Полное имя домена.
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `name_servers`.
     * @throws ApiError
     */
    public updateDomainNameServers(
        fqdn: string,
        requestBody: update_domain_name_servers,
    ): CancelablePromise<({
        meta: Meta;
        name_servers: Array<domain_name_server>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/domains/{fqdn}/name-servers',
            path: {
                'fqdn': fqdn,
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
     * Получение списка заявок на регистрацию/продление/трансфер домена
     * Чтобы получить список заявок на регистрацию/продление/трансфер домена, отправьте запрос GET на `/api/v1/domains-requests`.
     * @param personId Идентификатор администратора, на которого зарегистрирован домен.
     * @returns any Ответ будет представлять собой объект JSON c ключом `requests`.
     * @throws ApiError
     */
    public getDomainRequests(
        personId?: number,
    ): CancelablePromise<({
        meta: Meta;
        requests: Array<domain_request>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/domains-requests',
            query: {
                'person_id': personId,
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
     * Создание заявки на регистрацию/продление/трансфер домена
     * Чтобы создать заявку на регистрацию/продление/трансфер домена, отправьте POST-запрос в `api/v1/domains-requests`, задав необходимые атрибуты.
     *
     * Заявка будет создана с использованием предоставленной информации. Тело ответа будет содержать объект JSON с информацией о созданной заявке.
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `request`.
     * @throws ApiError
     */
    public createDomainRequest(
        requestBody: (domain_register | domain_prolong | domain_transfer),
    ): CancelablePromise<({
        request: domain_request;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/domains-requests',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получение заявки на регистрацию/продление/трансфер домена
     * Чтобы получить заявку на регистрацию/продление/трансфер домена, отправьте запрос GET на `/api/v1/domains-requests/{request_id}`.
     * @param requestId Идентификатор заявки на регистрацию/продление/трансфер домена.
     * @returns any Ответ будет представлять собой объект JSON c ключом `request`.
     * @throws ApiError
     */
    public getDomainRequest(
        requestId: number,
    ): CancelablePromise<({
        request: domain_request;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/domains-requests/{request_id}',
            path: {
                'request_id': requestId,
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
     * Оплата/обновление заявки на регистрацию/продление/трансфер домена
     * Чтобы оплатить/обновить заявку на регистрацию/продление/трансфер домена, отправьте запрос PATCH на `/api/v1/domains-requests/{request_id}`, задав необходимые атрибуты.
     *
     * Заявка будет обновлена с использованием предоставленной информации. Тело ответа будет содержать объект JSON с информацией о обновленной заявке.
     * @param requestId Идентификатор заявки на регистрацию/продление/трансфер домена.
     * @param requestBody
     * @returns any Ответ будет представлять собой объект JSON c ключом `request`.
     * @throws ApiError
     */
    public updateDomainRequest(
        requestId: number,
        requestBody: (use | invoice | free | bonus),
    ): CancelablePromise<({
        request: domain_request;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/domains-requests/{request_id}',
            path: {
                'request_id': requestId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                404: `Не найдено`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
    /**
     * Получить информацию о доменных зонах
     * Чтобы получить информацию о доменных зонах, отправьте запрос GET на `/api/v1/tlds`.
     * @param isPublished Это логическое значение, которое показывает, опубликована ли доменная зона.
     * @param isRegistered Это логическое значение, которое показывает, зарегистрирована ли доменная зона.
     * @returns any Ответ будет представлять собой объект JSON c ключом `top_level_domains`.
     * @throws ApiError
     */
    public getTlDs(
        isPublished?: boolean,
        isRegistered?: boolean,
    ): CancelablePromise<({
        meta: Meta;
        top_level_domains: Array<top_level_domain>;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/tlds',
            query: {
                'is_published': isPublished,
                'is_registered': isRegistered,
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
     * Получить информацию о доменной зоне по идентификатору
     * Чтобы получить информацию о доменной зоне по идентификатору, отправьте запрос GET на `/api/v1/tlds/{tld_id}`.
     * @param tldId Идентификатор доменной зоны.
     * @returns any Ответ будет представлять собой объект JSON c ключом `top_level_domain`.
     * @throws ApiError
     */
    public getTld(
        tldId: number,
    ): CancelablePromise<({
        top_level_domain: top_level_domain;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/tlds/{tld_id}',
            path: {
                'tld_id': tldId,
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
     * Проверить, доступен ли домен для регистрации
     * Чтобы проверить, доступен ли домен для регистрации, отправьте запрос GET на `/api/v1/check-domain/{fqdn}`.
     * @param fqdn Полное имя домена.
     * @returns any Ответ будет представлять собой объект JSON c ключом `is_domain_available`.
     * @throws ApiError
     */
    public checkDomain(
        fqdn: string,
    ): CancelablePromise<({
        /**
         * Это логическое значение, которое показывает, доступен ли домен для регистрации.
         */
        is_domain_available: boolean;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/check-domain/{fqdn}',
            path: {
                'fqdn': fqdn,
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
     * Добавление домена на аккаунт
     * Чтобы добавить домен на свой аккаунт, отправьте запрос POST на `/api/v1/add-domain/{fqdn}`.
     * @param fqdn Полное имя домена.
     * @returns void
     * @throws ApiError
     */
    public addDomain(
        fqdn: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/add-domain/{fqdn}',
            path: {
                'fqdn': fqdn,
            },
            errors: {
                400: `Некорректный запрос`,
                401: `Не авторизован`,
                409: `Конфликт`,
                429: `Слишком много запросов`,
                500: `Внутренняя ошибка сервера`,
            },
        });
    }
}
