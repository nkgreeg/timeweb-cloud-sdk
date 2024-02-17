/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { added_subdomain } from '../models/added_subdomain';
import type { bucket } from '../models/bucket';
import type { bucket_user } from '../models/bucket_user';
import type { delete_service_response } from '../models/delete_service_response';
import type { Meta } from '../models/Meta';
import type { presets_storage } from '../models/presets_storage';
import type { response_id } from '../models/response_id';
import type { s3_object } from '../models/s3_object';
import type { s3_subdomain } from '../models/s3_subdomain';
import type { transfer_status } from '../models/transfer_status';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class S3Service {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Получение списка хранилищ аккаунта
     * Чтобы получить список хранилищ аккаунта, отправьте GET-запрос на `/api/v1/storages/buckets`.
     * @returns any Объект JSON c ключом `buckets`
     * @throws ApiError
     */
    public getStorages(): CancelablePromise<({
        buckets: Array<bucket>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/storages/buckets',
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
     * Создание хранилища
     * Чтобы создать хранилище, отправьте POST-запрос на `/api/v1/storages/buckets`.
     * @param requestBody
     * @returns any Объект JSON c ключом `bucket`
     * @throws ApiError
     */
    public createStorage(
        requestBody: {
            /**
             * Название хранилища.
             */
            name: string;
            /**
             * Тип хранилища.
             */
            type: 'private' | 'public';
            /**
             * Идентификатор тарифа.
             */
            preset_id: number;
        },
    ): CancelablePromise<({
        bucket: bucket;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/storages/buckets',
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
     * Удаление хранилища на аккаунте
     * Чтобы удалить хранилище, отправьте DELETE-запрос на `/api/v1/storages/buckets/{bucket_id}`.
     * @param bucketId Уникальный идентификатор хранилища.
     * @param hash Хеш, который совместно с кодом авторизации надо отправить для удаления, если включено подтверждение удаления сервисов через Телеграм.
     * @param code Код подтверждения, который придет к вам в Телеграм, после запроса удаления, если включено подтверждение удаления сервисов.
     *
     * При помощи API токена сервисы можно удалять без подтверждения, если параметр токена `is_able_to_delete` установлен в значение `true`
     * @returns any Объект JSON c ключом `bucket_delete`
     * @throws ApiError
     */
    public deleteStorage(
        bucketId: number,
        hash?: string,
        code?: string,
    ): CancelablePromise<({
        bucket_delete: delete_service_response;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/storages/buckets/{bucket_id}',
            path: {
                'bucket_id': bucketId,
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
     * Изменение хранилища на аккаунте
     * Чтобы изменить хранилище, отправьте PATCH-запрос на `/api/v1/storages/buckets/{bucket_id}`.
     * @param bucketId Уникальный идентификатор хранилища.
     * @param requestBody
     * @returns any Объект JSON c ключом `bucket`
     * @throws ApiError
     */
    public updateStorage(
        bucketId: number,
        requestBody: {
            /**
             * Идентификатор тарифа.
             */
            preset_id?: number;
            /**
             * Тип хранилища.
             */
            bucket_type?: 'private' | 'public';
        },
    ): CancelablePromise<({
        bucket: bucket;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/storages/buckets/{bucket_id}',
            path: {
                'bucket_id': bucketId,
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
     * Получение списка тарифов для хранилищ
     * Чтобы получить список тарифов для хранилищ, отправьте GET-запрос на `/api/v1/presets/storages`.
     *
     * Тело ответа будет представлять собой объект JSON с ключом `storages_presets`.
     * @returns any Объект JSON с ключом `storages_presets`
     * @throws ApiError
     */
    public getStoragesPresets(): CancelablePromise<({
        storages_presets: Array<presets_storage>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/presets/storages',
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
     * Получение списка пользователей хранилищ аккаунта
     * Чтобы получить список пользователей хранилищ аккаунта, отправьте GET-запрос на `/api/v1/storages/users`.
     * @returns any Объект JSON c ключом `users`
     * @throws ApiError
     */
    public getStorageUsers(): CancelablePromise<({
        users: Array<bucket_user>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/storages/users',
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
     * Изменение пароля пользователя-администратора хранилища
     * Чтобы изменить пароль пользователя-администратора хранилища, отправьте POST-запрос на `/api/v1/storages/users/{user_id}`.
     * @param userId Уникальный идентификатор пользователя хранилища.
     * @param requestBody
     * @returns any Объект JSON c ключом `user`
     * @throws ApiError
     */
    public updateStorageUser(
        userId: number,
        requestBody: {
            /**
             * Новый пароль пользователя-администратора хранилища.
             */
            secret_key: string;
        },
    ): CancelablePromise<({
        user: bucket_user;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/storages/users/{user_id}',
            path: {
                'user_id': userId,
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
     * Получение статуса переноса хранилища от стороннего S3 в Timeweb Cloud
     * Чтобы получить статус переноса хранилища от стороннего S3 в Timeweb Cloud, отправьте GET-запрос на `/api/v1/storages/buckets/{bucket_id}/transfer-status`.
     * @param bucketId Уникальный идентификатор хранилища.
     * @returns any Объект JSON c ключом `transfer_status`
     * @throws ApiError
     */
    public getStorageTransferStatus(
        bucketId: number,
    ): CancelablePromise<({
        transfer_status: transfer_status;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/storages/buckets/{bucket_id}/transfer-status',
            path: {
                'bucket_id': bucketId,
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
     * Перенос хранилища от стороннего провайдера S3 в Timeweb Cloud
     * Чтобы перенести хранилище от стороннего провайдера S3 в Timeweb Cloud, отправьте POST-запрос на `/api/v1/storages/transfer`.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public transferStorage(
        requestBody: {
            /**
             * Идентификатор доступа стороннего S3-хранилища.
             */
            access_key: string;
            /**
             * Пароль доступа стороннего S3-хранилища.
             */
            secret_key: string;
            /**
             * Регион хранилища источника.
             */
            location: string;
            /**
             * Это логическое значение, которое показывает, следует ли принудительно указывать URL-адреса для объектов S3.
             */
            is_force_path_style: boolean;
            /**
             * URL S3-хранилища источника.
             */
            endpoint: string;
            /**
             * Имя хранилища источника.
             */
            bucket_name: string;
            /**
             * Имя хранилища получателя.
             */
            new_bucket_name: string;
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/storages/transfer',
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
     * Получение списка поддоменов хранилища
     * Чтобы получить список поддоменов хранилища, отправьте GET-запрос на `/api/v1/storages/buckets/{bucket_id}/subdomains`.
     * @param bucketId Уникальный идентификатор хранилища.
     * @returns any Объект JSON c ключом `subdomains`
     * @throws ApiError
     */
    public getStorageSubdomains(
        bucketId: number,
    ): CancelablePromise<({
        subdomains: Array<s3_subdomain>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/storages/buckets/{bucket_id}/subdomains',
            path: {
                'bucket_id': bucketId,
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
     * Добавление поддоменов для хранилища
     * Чтобы добавить поддомены для хранилища, отправьте POST-запрос на `/api/v1/storages/buckets/{bucket_id}/subdomains`.
     * @param bucketId Уникальный идентификатор хранилища.
     * @param requestBody
     * @returns any Объект JSON c ключом `subdomains`
     * @throws ApiError
     */
    public addStorageSubdomains(
        bucketId: number,
        requestBody: {
            subdomains: Array<string>;
        },
    ): CancelablePromise<({
        subdomains: Array<added_subdomain>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/storages/buckets/{bucket_id}/subdomains',
            path: {
                'bucket_id': bucketId,
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
     * Удаление поддоменов хранилища
     * Чтобы удалить поддомены хранилища, отправьте DELETE-запрос на `/api/v1/storages/buckets/{bucket_id}/subdomains`.
     * @param bucketId Уникальный идентификатор хранилища.
     * @param requestBody
     * @returns any Объект JSON c ключом `subdomains`
     * @throws ApiError
     */
    public deleteStorageSubdomains(
        bucketId: number,
        requestBody: {
            subdomains: Array<string>;
        },
    ): CancelablePromise<({
        subdomains: Array<added_subdomain>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/storages/buckets/{bucket_id}/subdomains',
            path: {
                'bucket_id': bucketId,
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
     * Получение списка файлов в хранилище по префиксу
     * Чтобы получить список файлов в хранилище по префиксу, отправьте GET-запрос на `/api/v1/storages/buckets/{bucket_id}/object-manager/list`.
     * @param bucketId Уникальный идентификатор хранилища.
     * @param prefix Префикс для поиска файла.
     * @param isMultipart Это логическое значение, которое используется для обозначения multipart-загрузки.
     * @returns any Объект JSON c ключом `files`
     * @throws ApiError
     */
    public getStorageFilesList(
        bucketId: number,
        prefix?: string,
        isMultipart?: boolean,
    ): CancelablePromise<({
        files: Array<s3_object>;
        meta: Meta;
    } & {
        response_id: response_id;
    })> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/storages/buckets/{bucket_id}/object-manager/list',
            path: {
                'bucket_id': bucketId,
            },
            query: {
                'prefix': prefix,
                'is_multipart': isMultipart,
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
     * Переименование файла/директории в хранилище
     * Чтобы переименовать файл/директорию в хранилище, отправьте POST-запрос на `/api/v1/storages/buckets/{bucket_id}/object-manager/rename`.
     * @param bucketId Уникальный идентификатор хранилища.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public renameStorageFile(
        bucketId: number,
        requestBody: {
            /**
             * Новое название файла или папки. Названия папок должны быть указаны с "/" в конце, например: "dirname/".
             */
            new_filename: string;
            /**
             * Старое название файла или папки. Названия папок должны быть указаны с "/" в конце, например: "dirname/".
             */
            old_filename: string;
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/storages/buckets/{bucket_id}/object-manager/rename',
            path: {
                'bucket_id': bucketId,
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
     * Удаление файла/директории в хранилище
     * Чтобы удалить файл или директорию с вложениями, отправьте DELETE-запрос на `/api/v1/storages/buckets/{bucket_id}/object-manager/remove`.
     * @param bucketId Уникальный идентификатор хранилища.
     * @param requestBody
     * @param isMultipart Это логическое значение, которое используется для обозначения multipart-загрузки.
     * @returns void
     * @throws ApiError
     */
    public deleteStorageFile(
        bucketId: number,
        requestBody: {
            source: Array<string>;
        },
        isMultipart?: boolean,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/storages/buckets/{bucket_id}/object-manager/remove',
            path: {
                'bucket_id': bucketId,
            },
            query: {
                'is_multipart': isMultipart,
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
     * Копирование файла/директории в хранилище
     * Чтобы скопировать файла или директорию с вложениями, отправьте POST-запрос на `/api/v1/storages/buckets/{bucket_id}/object-manager/copy`.
     * @param bucketId Уникальный идентификатор хранилища.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public copyStorageFile(
        bucketId: number,
        requestBody: {
            /**
             * Новый путь до файлов.
             */
            destination: string;
            source: Array<string>;
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/storages/buckets/{bucket_id}/object-manager/copy',
            path: {
                'bucket_id': bucketId,
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
     * Загрузка файлов в хранилище
     * Чтобы загрузить файлы в хранилище, отправьте POST-запрос на `/api/v1/storages/buckets/{bucket_id}/object-manager/upload`.
     * @param bucketId Уникальный идентификатор хранилища.
     * @param formData
     * @param path Путь до директории в хранилище
     * @returns void
     * @throws ApiError
     */
    public uploadFileToStorage(
        bucketId: number,
        formData: {
            files: Array<Blob>;
        },
        path?: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/storages/buckets/{bucket_id}/object-manager/upload',
            path: {
                'bucket_id': bucketId,
            },
            query: {
                'path': path,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
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
     * Создание директории в хранилище
     * Чтобы создать директорию в хранилище, отправьте POST-запрос на `/api/v1/storages/buckets/{bucket_id}/object-manager/mkdir`.
     * @param bucketId Уникальный идентификатор хранилища.
     * @param requestBody
     * @returns any Директория успешно создана
     * @throws ApiError
     */
    public createFolderInStorage(
        bucketId: number,
        requestBody: {
            /**
             * Название директории.
             */
            dir_name: string;
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/storages/buckets/{bucket_id}/object-manager/mkdir',
            path: {
                'bucket_id': bucketId,
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
     * Добавление сертификата для поддомена хранилища
     * Чтобы добавить сертификат для поддомена хранилища, отправьте POST-запрос на `/api/v1/storages/certificates/generate`.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public addStorageSubdomainCertificate(
        requestBody: {
            subdomain?: string;
        },
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/storages/certificates/generate',
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
}
