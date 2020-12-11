import { IncomingHttpHeaders } from 'http';

declare module 'http' {
    interface IncomingHttpHeaders extends customHeaders { }
}

type customHeaders = {
    [key in typeof import("../../config").headersNames[keyof typeof import("../../config").headersNames]]?: string
}