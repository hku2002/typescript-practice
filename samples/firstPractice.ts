"use strict";

let sample = 'test';

const sampleNumber: number = 10;
const sampleString: string = '10';
const sampleBoolean: boolean = true;
const sampleUndefined: undefined = undefined;
const sampleNull: null = null;

/* 기본 함수 샘플 */
function add(x: number, y: number): number { return x + y };

/* 화살표 함수 사용 */
const addArrow: (a: number, b: number) => number = (a, b) => a + b;

/* type 으로 선언 후 화살표 함수 사용 */
type addType = (i: number, j: number) => number;
const addTypeAndArrow: addType = (i, j) => i + j;
