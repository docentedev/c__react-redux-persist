import { COUNTER_ADD, COUNTER_SUB } from ".";
import { Action } from "../types";
import { CounterPayload } from "./types";

export const counterAddAction = (counter: number): Action<CounterPayload> => {
    return {
        type: COUNTER_ADD,
        payload: counter,
    }
}

export const counterSubAction = (counter: number): Action<CounterPayload> => {
    return {
        type: COUNTER_SUB,
        payload: counter,
    }
}