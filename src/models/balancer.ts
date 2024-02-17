/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { availability_zone } from './availability_zone';
import type { rule } from './rule';
/**
 * Балансировщик
 */
export type balancer = {
    /**
     * Уникальный идентификатор для каждого экземпляра балансировщика. Автоматически генерируется при создании.
     */
    id: number;
    /**
     * Алгоритм переключений балансировщика.
     */
    algo: balancer.algo;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда был создан балансировщик.
     */
    created_at: string;
    /**
     * Порог количества ошибок.
     */
    fall: number;
    /**
     * Интервал проверки.
     */
    inter: number;
    /**
     * IP-адрес сетевого интерфейса IPv4.
     */
    ip: string | null;
    /**
     * Локальный IP-адрес сетевого интерфейса IPv4.
     */
    local_ip: string | null;
    /**
     * Это логическое значение, которое показывает, выдает ли балансировщик сигнал о проверке жизнеспособности.
     */
    is_keepalive: boolean;
    /**
     * Удобочитаемое имя, установленное для балансировщика.
     */
    name: string;
    /**
     * Адрес балансировщика.
     */
    path: string;
    /**
     * Порт балансировщика.
     */
    port: number;
    /**
     * Протокол.
     */
    proto: balancer.proto;
    /**
     * Порог количества успешных ответов.
     */
    rise: number;
    /**
     * Идентификатор тарифа.
     */
    preset_id: number;
    /**
     * Это логическое значение, которое показывает, требуется ли перенаправление на SSL.
     */
    is_ssl: boolean;
    /**
     * Статус балансировщика.
     */
    status: balancer.status;
    /**
     * Это логическое значение, которое показывает, сохраняется ли сессия.
     */
    is_sticky: boolean;
    /**
     * Таймаут ответа балансировщика.
     */
    timeout: number;
    /**
     * Это логическое значение, которое показывает, выступает ли балансировщик в качестве прокси.
     */
    is_use_proxy: boolean;
    rules: Array<rule>;
    /**
     * Список IP-адресов, привязанных к балансировщику
     */
    ips: Array<string>;
    /**
     * Географическое расположение балансировщика
     */
    location: balancer.location;
    availability_zone: availability_zone;
};
export namespace balancer {
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
    /**
     * Статус балансировщика.
     */
    export enum status {
        STARTED = 'started',
        STOPED = 'stoped',
        STARTING = 'starting',
        NO_PAID = 'no_paid',
    }
    /**
     * Географическое расположение балансировщика
     */
    export enum location {
        RU_1 = 'ru-1',
        PL_1 = 'pl-1',
    }
}

