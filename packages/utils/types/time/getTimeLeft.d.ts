interface TimeResponse {
    d: number;
    h: number;
    m: number;
    s: number;
}
/**
 * @desc ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0
 * @param { Date | String } startTime
 * @param { Date | String } endTime
 * @returns { Object } { d, h, m, s } 天 时 分 秒
 */
export declare function getTimeLeft(startTime: Date | string, endTime: Date | string): TimeResponse | undefined;
export {};
