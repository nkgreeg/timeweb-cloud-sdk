/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Токен.
 */
export type created_api_key = {
    /**
     * Созданный токен, будет показан только один раз, его необходимо сохранить.
     */
    token: string;
    /**
     * Уникальный идентификатор токена.
     */
    id: string;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда был создан токен.
     */
    created_at: string;
    /**
     * Имя токена.
     */
    name: string;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда истекает токен.
     */
    expired_at: string | null;
};

