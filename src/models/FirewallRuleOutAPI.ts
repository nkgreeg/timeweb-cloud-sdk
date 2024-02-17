/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FirewallRuleDirection } from './FirewallRuleDirection';
import type { FirewallRuleProtocol } from './FirewallRuleProtocol';
export type FirewallRuleOutAPI = {
    /**
     * Идентификатор правила
     */
    id: string;
    /**
     * Описание правила
     */
    description: string;
    /**
     * Egress или ingress трафик
     */
    direction: FirewallRuleDirection;
    /**
     * Сетевой протокол
     */
    protocol: FirewallRuleProtocol;
    /**
     * Порт или диапазон портов, в случае tcp или udp
     */
    port?: string;
    /**
     * Сетевой адрес или подсеть. Поддерживаются протоколы IPv4  и IPv6
     */
    cidr?: string;
    /**
     * Идентификатор группы правил
     */
    group_id: string;
};

