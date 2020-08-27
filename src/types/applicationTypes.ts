export interface ApplicationStoreTypes {
    info: InfoTypes;
}

export interface InfoTypes {
    name?: string
    version?: string
    description?: string
    env?: string
    captcha_response?: CaptchaTypes

}

export interface CaptchaTypes {
    site_key: string;
}
