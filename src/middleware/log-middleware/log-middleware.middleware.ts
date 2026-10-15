import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LogMiddlewareMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';
    const ip = req.ip;
    const starTime = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      const endTime = Date.now();
      const duration = endTime - starTime;

      this.logger.log(`[${new Date().toISOString()}] ${method} ${originalUrl} ${statusCode} ${contentLength} ${userAgent} ${ip} ${duration}ms`);
    });

    next();
  } 
}