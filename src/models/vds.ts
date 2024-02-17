/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { availability_zone } from './availability_zone';
/**
 * Сервер
 */
export type vds = {
    /**
     * Уникальный идентификатор для каждого экземпляра сервера. Автоматически генерируется при создании.
     */
    id: number;
    /**
     * Удобочитаемое имя, установленное для выделенного сервера.
     */
    name: string;
    /**
     * Комментарий к выделенному серверу.
     */
    comment: string;
    /**
     * Дата создания сервера в формате ISO8061.
     */
    created_at: string;
    /**
     * Операционная система сервера.
     */
    os: {
        /**
         * Уникальный идентификатор операционной системы.
         */
        id: number;
        /**
         * Тип операционной системы.
         */
        name: vds.name;
        /**
         * Версия операционной системы.
         */
        version: string | null;
    };
    /**
     * ПО из маркетплейса.
     */
    software: {
        /**
         * Уникальный идентификатор ПО из маркетплейса.
         */
        id?: number;
        /**
         * Название ПО из маркетплейса.
         */
        name?: string;
    } | null;
    /**
     * Уникальный идентификатор тарифа сервера.
     */
    preset_id: number | null;
    /**
     * Локация сервера.
     */
    location: vds.location;
    /**
     * Уникальный идентификатор конфигуратора сервера.
     */
    configurator_id: number | null;
    /**
     * Режим загрузки ОС сервера.
     */
    boot_mode: vds.boot_mode;
    /**
     * Статус сервера.
     */
    status: vds.status;
    /**
     * Значение времени, указанное в комбинированном формате даты и времени ISO8601, которое представляет, когда был запущен сервер.
     */
    start_at: string | null;
    /**
     * Это логическое значение, которое показывает, включена ли защита от DDoS у данного сервера.
     */
    is_ddos_guard: boolean;
    /**
     * Количество ядер процессора сервера.
     */
    cpu: number;
    /**
     * Частота ядер процессора сервера.
     */
    cpu_frequency: string;
    /**
     * Размер (в Мб) ОЗУ сервера.
     */
    ram: number;
    /**
     * Список дисков сервера.
     */
    disks: Array<any>;
    /**
     * Уникальный идентификатор аватара сервера. Описание методов работы с аватарами появится позднее.
     */
    avatar_id: string | null;
    /**
     * Пароль от VNC.
     */
    vnc_pass: string;
    /**
     * Пароль root сервера или пароль Администратора для серверов Windows.
     */
    root_pass: string | null;
    /**
     * Образ сервера.
     */
    image: {
        /**
         * Уникальный идентификатор образа сервера.
         */
        id: string;
        /**
         * Название образа сервера.
         */
        name: string;
        /**
         * Является ли образ кастомным.
         */
        is_custom: boolean;
    } | null;
    /**
     * Список сетей сервера.
     */
    networks: Array<any>;
    /**
     * Cloud-init скрипт.
     */
    cloud_init: string | null;
    /**
     * Включен ли QEMU-agent на сервере.
     */
    is_qemu_agent?: boolean;
    availability_zone: availability_zone;
};
export namespace vds {
    /**
     * Тип операционной системы.
     */
    export enum name {
        BITRIX = 'bitrix',
        BRAINYCP = 'brainycp',
        CENTOS = 'centos',
        DEBIAN = 'debian',
        FEDORA = 'fedora',
        FREEBSD = 'freebsd',
        GENTOO = 'gentoo',
        ROUTEROS = 'routeros',
        UBUNTU = 'ubuntu',
        WINDOWS = 'windows',
    }
    /**
     * Локация сервера.
     */
    export enum location {
        RU_1 = 'ru-1',
        RU_2 = 'ru-2',
        PL_1 = 'pl-1',
        KZ_1 = 'kz-1',
    }
    /**
     * Режим загрузки ОС сервера.
     */
    export enum boot_mode {
        STD = 'std',
        SINGLE = 'single',
        CD = 'cd',
    }
    /**
     * Статус сервера.
     */
    export enum status {
        INSTALLING = 'installing',
        SOFTWARE_INSTALL = 'software_install',
        REINSTALLING = 'reinstalling',
        ON = 'on',
        OFF = 'off',
        TURNING_ON = 'turning_on',
        TURNING_OFF = 'turning_off',
        HARD_TURNING_OFF = 'hard_turning_off',
        REBOOTING = 'rebooting',
        HARD_REBOOTING = 'hard_rebooting',
        REMOVING = 'removing',
        REMOVED = 'removed',
        CLONING = 'cloning',
        TRANSFER = 'transfer',
        BLOCKED = 'blocked',
        CONFIGURING = 'configuring',
        NO_PAID = 'no_paid',
        PERMANENT_BLOCKED = 'permanent_blocked',
    }
}

