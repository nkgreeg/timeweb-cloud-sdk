/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FirewallRuleDirection } from './FirewallRuleDirection';
import type { FirewallRuleProtocol } from './FirewallRuleProtocol';
export type FirewallRuleInAPI = {
    /**
     * Описание правила
     */
    description?: string;
    /**
     * egress или ingress трафик
     */
    direction: FirewallRuleDirection;
    /**
     * Порт или диапазон портов, в случае tcp или udp
     */
    port?: string;
    /**
     * Сетевой протокол
     */
    protocol: FirewallRuleProtocol;
    /**
     * Сетевой адрес или подсеть. Поддерживаются протоколы IPv4  и IPv6
     */
    cidr?: string;
};

