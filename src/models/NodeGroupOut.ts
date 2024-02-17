/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type NodeGroupOut = {
    /**
     * Уникальный идентификатор группы
     */
    id: number;
    /**
     * Название группы
     */
    name: string;
    /**
     * Дата и время создания группы в формате ISO8601
     */
    created_at: string;
    /**
     * Идентификатор тарифа мастер-ноды
     */
    preset_id: number;
    /**
     * Количество нод в группе
     */
    node_count: number;
};

