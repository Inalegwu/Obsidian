import type { BaseEvlogOptions } from 'evlog/toolkit';
import env from '#start/env';

export const evlogConfig: BaseEvlogOptions = {
  exclude: ['/admin/**/*'],
  enrich: ctx => {
    ctx.event.environment = env.get('NODE_ENV', 'development');
  },
};
