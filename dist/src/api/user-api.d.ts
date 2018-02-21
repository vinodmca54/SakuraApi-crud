/// <reference types="express" />
import { SakuraApi } from '@sakuraapi/api';
import { NextFunction, Request, Response } from 'express';
export { SakuraApi };
export declare class UserApi extends {
    sapi?: SakuraApi;
    sapiConfig?: any;
} {
    userRout(req: Request, res: Response, next: NextFunction): Promise<void>;
    getuser(req: Request, res: Response, next: NextFunction): Promise<void>;
    getoneuser(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteuser(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateUser(req: Request, res: Response, next: NextFunction): Promise<void>;
}
