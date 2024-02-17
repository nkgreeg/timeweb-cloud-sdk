/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type spam_filter_is_disabled = {
    /**
     * Включен ли спам-фильтр
     */
    is_enabled: boolean;
    /**
     * Что делать с письмами, которые попадают в спам. \
     * Параметры: \
     * `move_to_directory` - переместить в паку спам; \
     * `forward` - переслать письмо на другой адрес; \
     * `delete` - удалить письмо; \
     * `tag` - пометить письмо;
     */
    action?: spam_filter_is_disabled.action;
    /**
     * Адрес для пересылки при выбранном действии `forward` из параметра `action`. Не может быть пустым, если `action` выбран `forward`
     */
    forward_to?: string;
    /**
     * Белый список адресов от которых письма не будут попадать в спам
     */
    white_list?: Array<string>;
};
export namespace spam_filter_is_disabled {
    /**
     * Что делать с письмами, которые попадают в спам. \
     * Параметры: \
     * `move_to_directory` - переместить в паку спам; \
     * `forward` - переслать письмо на другой адрес; \
     * `delete` - удалить письмо; \
     * `tag` - пометить письмо;
     */
    export enum action {
        MOVE_TO_DIRECTORY = 'move_to_directory',
        FORWARD = 'forward',
        DELETE = 'delete',
        TAG = 'tag',
    }
}

