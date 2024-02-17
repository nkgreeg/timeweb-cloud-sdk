/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type update_balancer = {
    /**
     * Удобочитаемое имя, установленное для балансировщика.
     */
    name?: string;
    /**
     * Алгоритм переключений балансировщика.
     */
    algo?: update_balancer.algo;
    /**
     * Это логическое значение, которое показывает, сохраняется ли сессия.
     */
    is_sticky?: boolean;
    /**
     * Это логическое значение, которое показывает, выступает ли балансировщик в качестве прокси.
     */
    is_use_proxy?: boolean;
    /**
     * Это логическое значение, которое показывает, требуется ли перенаправление на SSL.
     */
    is_ssl?: boolean;
    /**
     * Это логическое значение, которое показывает, выдает ли балансировщик сигнал о проверке жизнеспособности.
     */
    is_keepalive?: boolean;
    /**
     * Протокол.
     */
    proto?: update_balancer.proto;
    /**
     * Порт балансировщика.
     */
    port?: number;
    /**
     * Адрес балансировщика.
     */
    path?: string;
    /**
     * Интервал проверки.
     */
    inter?: number;
    /**
     * Таймаут ответа балансировщика.
     */
    timeout?: number;
    /**
     * Порог количества ошибок.
     */
    fall?: number;
    /**
     * Порог количества успешных ответов.
     */
    rise?: number;
};
export namespace update_balancer {
    /**
     * Алгоритм переключений балансировщика.
     */
    export enum algo {
        ROUNDROBIN = 'roundrobin',
        LEASTCONN = 'leastconn',
    }
    /**
     * Протокол.
     */
    export enum proto {
        HTTP = 'http',
        HTTP2 = 'http2',
        HTTPS = 'https',
        TCP = 'tcp',
    }
}

