interface OffsetResponse {
    left: number;
    top: number;
}
/**
 *
 * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param {HTMLElement} ele
 * @returns { {left: number, top: number} }
 */
export declare function getOffset(ele: HTMLElement): OffsetResponse;
export {};
