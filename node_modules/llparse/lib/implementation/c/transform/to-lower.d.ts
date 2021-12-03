import * as frontend from 'llparse-frontend';
import { Compilation } from '../compilation';
import { Transform } from './base';
export declare class ToLower extends Transform<frontend.transform.ToLower> {
    build(ctx: Compilation, value: string): string;
}
