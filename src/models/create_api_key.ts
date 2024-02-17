/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type create_api_key = {
    /**
     * Имя, установленное для токена.
     */
    name: string;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда истекает токен.
     */
    expire?: string;
    /**
     * Это логическое значение, которое показывает, можно ли удалять управляемые сервисы при помощи данного токена без подтверждения через Телеграм, когда это подтверждение включено.
     */
    is_able_to_delete?: boolean;
};

