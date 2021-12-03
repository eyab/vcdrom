import * as frontend from 'llparse-frontend';
import { Compilation } from '../compilation';
import { Field } from './field';
export declare class And extends Field<frontend.code.And> {
    protected doBuild(ctx: Compilation, out: string[]): void;
}
