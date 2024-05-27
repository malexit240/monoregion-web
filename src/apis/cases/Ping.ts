import { IHandler } from "../IHandler";

export function Ping(): IHandler<boolean> {
    return {
        url: '/ping',
        method: 'get',
        body: null,
        isPrivate: false,
    }
}