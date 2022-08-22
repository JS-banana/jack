---
title: dom 类方法
---

## getOffset

获取一个元素的距离文档(document)的位置，类似 jQ 中的 offset()

```ts
interface OffsetResponse {
  left: number
  top: number
}

function getOffset(ele: HTMLElement): OffsetResponse {}
```

## getScrollTop

获取滚动条距顶部的距离

```ts
function getScrollTop(): number {}
```

## setScrollTo

在`duration`时间内，滚动条平滑滚动到`to`指定位置

```ts
function setScrollTo(to: number, duration: number): void {}
```

## setScrollTop

设置滚动条距顶部的距离

```ts
function setScrollTop(value: number): number {}
```

## windowResize

H5 软键盘缩回、弹起回调

当软件键盘弹起会改变当前 `window.innerHeight`，监听这个值变化

```ts
function windowResize(downCb: () => void, upCb: () => void): void {}
```
