import type { HttpContext } from '@adonisjs/core/http';
import type { NextFn } from '@adonisjs/core/types/http';
import type { RequestLogger } from 'evlog';
import {
  createLoggerStorage,
  createMiddlewareLogger,
  extractSafeNodeHeaders,
} from 'evlog/toolkit';
import { evlogConfig } from '#config/evlog';

const { storage, useLogger } = createLoggerStorage(
  'evlog middleware – ensure it is registered before your routes',
);

export { useLogger };

declare module '@adonisjs/core/http' {
  export interface HttpContext {
    evlog: RequestLogger;
  }
}

export default class EvlogMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const { request, response } = ctx;

    const method = request.method();
    const path = request.url();
    const requestId = request.header('x-request-id') ?? crypto.randomUUID();
    const headers = extractSafeNodeHeaders(request.headers());

    const { logger, finish, skipped } = createMiddlewareLogger({
      method,
      path,
      requestId,
      headers,
      ...evlogConfig,
    });

    if (skipped) {
      return next();
    }

    ctx.evlog = logger;

    try {
      await storage.run(logger, async () => {
        await next();
      });
      await finish({ status: response.getStatus() });
    } catch (error) {
      await finish({ error: error as Error });
      throw error;
    }
  }
}
