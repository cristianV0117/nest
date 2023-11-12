import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import 'dotenv/config'

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    if (undefined === req.headers.api_key) {
        throw new HttpException("No existe el API KEY", HttpStatus.BAD_REQUEST)
    }
    if (req.headers.api_key != process.env.API_KEY) {
        throw new HttpException("API KEY incorrecto", HttpStatus.BAD_REQUEST)
    }
    next()
  }
}