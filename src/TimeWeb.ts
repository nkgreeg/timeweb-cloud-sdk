/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { Service } from './services/Service';
import { ApiService } from './services/ApiService';
import { FirewallService } from './services/FirewallService';
import { IpService } from './services/IpService';
import { KubernetesService } from './services/KubernetesService';
import { S3Service } from './services/S3Service';
import { SshService } from './services/SshService';
import { VpcService } from './services/VpcService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class TimeWeb {
    public readonly service: Service;
    public readonly api: ApiService;
    public readonly firewall: FirewallService;
    public readonly ip: IpService;
    public readonly kubernetes: KubernetesService;
    public readonly s3: S3Service;
    public readonly ssh: SshService;
    public readonly vpc: VpcService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.timeweb.cloud',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.service = new Service(this.request);
        this.api = new ApiService(this.request);
        this.firewall = new FirewallService(this.request);
        this.ip = new IpService(this.request);
        this.kubernetes = new KubernetesService(this.request);
        this.s3 = new S3Service(this.request);
        this.ssh = new SshService(this.request);
        this.vpc = new VpcService(this.request);
    }
}

