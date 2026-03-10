/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'server-stats.api': {
    methods: ["GET","HEAD"],
    pattern: '/admin/api/server-stats',
    tokens: [{"old":"/admin/api/server-stats","type":0,"val":"admin","end":""},{"old":"/admin/api/server-stats","type":0,"val":"api","end":""},{"old":"/admin/api/server-stats","type":0,"val":"server-stats","end":""}],
    types: placeholder as Registry['server-stats.api']['types'],
  },
  'server-stats.debug.config': {
    methods: ["GET","HEAD"],
    pattern: '/admin/api/debug/config',
    tokens: [{"old":"/admin/api/debug/config","type":0,"val":"admin","end":""},{"old":"/admin/api/debug/config","type":0,"val":"api","end":""},{"old":"/admin/api/debug/config","type":0,"val":"debug","end":""},{"old":"/admin/api/debug/config","type":0,"val":"config","end":""}],
    types: placeholder as Registry['server-stats.debug.config']['types'],
  },
  'server-stats.debug.diagnostics': {
    methods: ["GET","HEAD"],
    pattern: '/admin/api/debug/diagnostics',
    tokens: [{"old":"/admin/api/debug/diagnostics","type":0,"val":"admin","end":""},{"old":"/admin/api/debug/diagnostics","type":0,"val":"api","end":""},{"old":"/admin/api/debug/diagnostics","type":0,"val":"debug","end":""},{"old":"/admin/api/debug/diagnostics","type":0,"val":"diagnostics","end":""}],
    types: placeholder as Registry['server-stats.debug.diagnostics']['types'],
  },
  'server-stats.debug.queries': {
    methods: ["GET","HEAD"],
    pattern: '/admin/api/debug/queries',
    tokens: [{"old":"/admin/api/debug/queries","type":0,"val":"admin","end":""},{"old":"/admin/api/debug/queries","type":0,"val":"api","end":""},{"old":"/admin/api/debug/queries","type":0,"val":"debug","end":""},{"old":"/admin/api/debug/queries","type":0,"val":"queries","end":""}],
    types: placeholder as Registry['server-stats.debug.queries']['types'],
  },
  'server-stats.debug.events': {
    methods: ["GET","HEAD"],
    pattern: '/admin/api/debug/events',
    tokens: [{"old":"/admin/api/debug/events","type":0,"val":"admin","end":""},{"old":"/admin/api/debug/events","type":0,"val":"api","end":""},{"old":"/admin/api/debug/events","type":0,"val":"debug","end":""},{"old":"/admin/api/debug/events","type":0,"val":"events","end":""}],
    types: placeholder as Registry['server-stats.debug.events']['types'],
  },
  'server-stats.debug.routes': {
    methods: ["GET","HEAD"],
    pattern: '/admin/api/debug/routes',
    tokens: [{"old":"/admin/api/debug/routes","type":0,"val":"admin","end":""},{"old":"/admin/api/debug/routes","type":0,"val":"api","end":""},{"old":"/admin/api/debug/routes","type":0,"val":"debug","end":""},{"old":"/admin/api/debug/routes","type":0,"val":"routes","end":""}],
    types: placeholder as Registry['server-stats.debug.routes']['types'],
  },
  'server-stats.debug.logs': {
    methods: ["GET","HEAD"],
    pattern: '/admin/api/debug/logs',
    tokens: [{"old":"/admin/api/debug/logs","type":0,"val":"admin","end":""},{"old":"/admin/api/debug/logs","type":0,"val":"api","end":""},{"old":"/admin/api/debug/logs","type":0,"val":"debug","end":""},{"old":"/admin/api/debug/logs","type":0,"val":"logs","end":""}],
    types: placeholder as Registry['server-stats.debug.logs']['types'],
  },
  'server-stats.debug.emails': {
    methods: ["GET","HEAD"],
    pattern: '/admin/api/debug/emails',
    tokens: [{"old":"/admin/api/debug/emails","type":0,"val":"admin","end":""},{"old":"/admin/api/debug/emails","type":0,"val":"api","end":""},{"old":"/admin/api/debug/emails","type":0,"val":"debug","end":""},{"old":"/admin/api/debug/emails","type":0,"val":"emails","end":""}],
    types: placeholder as Registry['server-stats.debug.emails']['types'],
  },
  'server-stats.debug.emailPreview': {
    methods: ["GET","HEAD"],
    pattern: '/admin/api/debug/emails/:id/preview',
    tokens: [{"old":"/admin/api/debug/emails/:id/preview","type":0,"val":"admin","end":""},{"old":"/admin/api/debug/emails/:id/preview","type":0,"val":"api","end":""},{"old":"/admin/api/debug/emails/:id/preview","type":0,"val":"debug","end":""},{"old":"/admin/api/debug/emails/:id/preview","type":0,"val":"emails","end":""},{"old":"/admin/api/debug/emails/:id/preview","type":1,"val":"id","end":""},{"old":"/admin/api/debug/emails/:id/preview","type":0,"val":"preview","end":""}],
    types: placeholder as Registry['server-stats.debug.emailPreview']['types'],
  },
  'server-stats.debug.traces': {
    methods: ["GET","HEAD"],
    pattern: '/admin/api/debug/traces',
    tokens: [{"old":"/admin/api/debug/traces","type":0,"val":"admin","end":""},{"old":"/admin/api/debug/traces","type":0,"val":"api","end":""},{"old":"/admin/api/debug/traces","type":0,"val":"debug","end":""},{"old":"/admin/api/debug/traces","type":0,"val":"traces","end":""}],
    types: placeholder as Registry['server-stats.debug.traces']['types'],
  },
  'server-stats.debug.traceDetail': {
    methods: ["GET","HEAD"],
    pattern: '/admin/api/debug/traces/:id',
    tokens: [{"old":"/admin/api/debug/traces/:id","type":0,"val":"admin","end":""},{"old":"/admin/api/debug/traces/:id","type":0,"val":"api","end":""},{"old":"/admin/api/debug/traces/:id","type":0,"val":"debug","end":""},{"old":"/admin/api/debug/traces/:id","type":0,"val":"traces","end":""},{"old":"/admin/api/debug/traces/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['server-stats.debug.traceDetail']['types'],
  },
  'server-stats.dashboard': {
    methods: ["GET","HEAD"],
    pattern: '/__stats',
    tokens: [{"old":"/__stats","type":0,"val":"__stats","end":""}],
    types: placeholder as Registry['server-stats.dashboard']['types'],
  },
  'server-stats.overview': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/overview',
    tokens: [{"old":"/__stats/api/overview","type":0,"val":"__stats","end":""},{"old":"/__stats/api/overview","type":0,"val":"api","end":""},{"old":"/__stats/api/overview","type":0,"val":"overview","end":""}],
    types: placeholder as Registry['server-stats.overview']['types'],
  },
  'server-stats.overview.chart': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/overview/chart',
    tokens: [{"old":"/__stats/api/overview/chart","type":0,"val":"__stats","end":""},{"old":"/__stats/api/overview/chart","type":0,"val":"api","end":""},{"old":"/__stats/api/overview/chart","type":0,"val":"overview","end":""},{"old":"/__stats/api/overview/chart","type":0,"val":"chart","end":""}],
    types: placeholder as Registry['server-stats.overview.chart']['types'],
  },
  'server-stats.requests': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/requests',
    tokens: [{"old":"/__stats/api/requests","type":0,"val":"__stats","end":""},{"old":"/__stats/api/requests","type":0,"val":"api","end":""},{"old":"/__stats/api/requests","type":0,"val":"requests","end":""}],
    types: placeholder as Registry['server-stats.requests']['types'],
  },
  'server-stats.requests.show': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/requests/:id',
    tokens: [{"old":"/__stats/api/requests/:id","type":0,"val":"__stats","end":""},{"old":"/__stats/api/requests/:id","type":0,"val":"api","end":""},{"old":"/__stats/api/requests/:id","type":0,"val":"requests","end":""},{"old":"/__stats/api/requests/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['server-stats.requests.show']['types'],
  },
  'server-stats.queries': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/queries',
    tokens: [{"old":"/__stats/api/queries","type":0,"val":"__stats","end":""},{"old":"/__stats/api/queries","type":0,"val":"api","end":""},{"old":"/__stats/api/queries","type":0,"val":"queries","end":""}],
    types: placeholder as Registry['server-stats.queries']['types'],
  },
  'server-stats.events': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/events',
    tokens: [{"old":"/__stats/api/events","type":0,"val":"__stats","end":""},{"old":"/__stats/api/events","type":0,"val":"api","end":""},{"old":"/__stats/api/events","type":0,"val":"events","end":""}],
    types: placeholder as Registry['server-stats.events']['types'],
  },
  'server-stats.routes': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/routes',
    tokens: [{"old":"/__stats/api/routes","type":0,"val":"__stats","end":""},{"old":"/__stats/api/routes","type":0,"val":"api","end":""},{"old":"/__stats/api/routes","type":0,"val":"routes","end":""}],
    types: placeholder as Registry['server-stats.routes']['types'],
  },
  'server-stats.logs': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/logs',
    tokens: [{"old":"/__stats/api/logs","type":0,"val":"__stats","end":""},{"old":"/__stats/api/logs","type":0,"val":"api","end":""},{"old":"/__stats/api/logs","type":0,"val":"logs","end":""}],
    types: placeholder as Registry['server-stats.logs']['types'],
  },
  'server-stats.emails': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/emails',
    tokens: [{"old":"/__stats/api/emails","type":0,"val":"__stats","end":""},{"old":"/__stats/api/emails","type":0,"val":"api","end":""},{"old":"/__stats/api/emails","type":0,"val":"emails","end":""}],
    types: placeholder as Registry['server-stats.emails']['types'],
  },
  'server-stats.emails.preview': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/emails/:id/preview',
    tokens: [{"old":"/__stats/api/emails/:id/preview","type":0,"val":"__stats","end":""},{"old":"/__stats/api/emails/:id/preview","type":0,"val":"api","end":""},{"old":"/__stats/api/emails/:id/preview","type":0,"val":"emails","end":""},{"old":"/__stats/api/emails/:id/preview","type":1,"val":"id","end":""},{"old":"/__stats/api/emails/:id/preview","type":0,"val":"preview","end":""}],
    types: placeholder as Registry['server-stats.emails.preview']['types'],
  },
  'server-stats.traces': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/traces',
    tokens: [{"old":"/__stats/api/traces","type":0,"val":"__stats","end":""},{"old":"/__stats/api/traces","type":0,"val":"api","end":""},{"old":"/__stats/api/traces","type":0,"val":"traces","end":""}],
    types: placeholder as Registry['server-stats.traces']['types'],
  },
  'server-stats.traces.show': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/traces/:id',
    tokens: [{"old":"/__stats/api/traces/:id","type":0,"val":"__stats","end":""},{"old":"/__stats/api/traces/:id","type":0,"val":"api","end":""},{"old":"/__stats/api/traces/:id","type":0,"val":"traces","end":""},{"old":"/__stats/api/traces/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['server-stats.traces.show']['types'],
  },
  'server-stats.queries.grouped': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/queries/grouped',
    tokens: [{"old":"/__stats/api/queries/grouped","type":0,"val":"__stats","end":""},{"old":"/__stats/api/queries/grouped","type":0,"val":"api","end":""},{"old":"/__stats/api/queries/grouped","type":0,"val":"queries","end":""},{"old":"/__stats/api/queries/grouped","type":0,"val":"grouped","end":""}],
    types: placeholder as Registry['server-stats.queries.grouped']['types'],
  },
  'server-stats.queries.explain': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/queries/:id/explain',
    tokens: [{"old":"/__stats/api/queries/:id/explain","type":0,"val":"__stats","end":""},{"old":"/__stats/api/queries/:id/explain","type":0,"val":"api","end":""},{"old":"/__stats/api/queries/:id/explain","type":0,"val":"queries","end":""},{"old":"/__stats/api/queries/:id/explain","type":1,"val":"id","end":""},{"old":"/__stats/api/queries/:id/explain","type":0,"val":"explain","end":""}],
    types: placeholder as Registry['server-stats.queries.explain']['types'],
  },
  'server-stats.cache': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/cache',
    tokens: [{"old":"/__stats/api/cache","type":0,"val":"__stats","end":""},{"old":"/__stats/api/cache","type":0,"val":"api","end":""},{"old":"/__stats/api/cache","type":0,"val":"cache","end":""}],
    types: placeholder as Registry['server-stats.cache']['types'],
  },
  'server-stats.cache.show': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/cache/:key',
    tokens: [{"old":"/__stats/api/cache/:key","type":0,"val":"__stats","end":""},{"old":"/__stats/api/cache/:key","type":0,"val":"api","end":""},{"old":"/__stats/api/cache/:key","type":0,"val":"cache","end":""},{"old":"/__stats/api/cache/:key","type":1,"val":"key","end":""}],
    types: placeholder as Registry['server-stats.cache.show']['types'],
  },
  'server-stats.cache.delete': {
    methods: ["DELETE"],
    pattern: '/__stats/api/cache/:key',
    tokens: [{"old":"/__stats/api/cache/:key","type":0,"val":"__stats","end":""},{"old":"/__stats/api/cache/:key","type":0,"val":"api","end":""},{"old":"/__stats/api/cache/:key","type":0,"val":"cache","end":""},{"old":"/__stats/api/cache/:key","type":1,"val":"key","end":""}],
    types: placeholder as Registry['server-stats.cache.delete']['types'],
  },
  'server-stats.jobs': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/jobs',
    tokens: [{"old":"/__stats/api/jobs","type":0,"val":"__stats","end":""},{"old":"/__stats/api/jobs","type":0,"val":"api","end":""},{"old":"/__stats/api/jobs","type":0,"val":"jobs","end":""}],
    types: placeholder as Registry['server-stats.jobs']['types'],
  },
  'server-stats.jobs.show': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/jobs/:id',
    tokens: [{"old":"/__stats/api/jobs/:id","type":0,"val":"__stats","end":""},{"old":"/__stats/api/jobs/:id","type":0,"val":"api","end":""},{"old":"/__stats/api/jobs/:id","type":0,"val":"jobs","end":""},{"old":"/__stats/api/jobs/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['server-stats.jobs.show']['types'],
  },
  'server-stats.jobs.retry': {
    methods: ["POST"],
    pattern: '/__stats/api/jobs/:id/retry',
    tokens: [{"old":"/__stats/api/jobs/:id/retry","type":0,"val":"__stats","end":""},{"old":"/__stats/api/jobs/:id/retry","type":0,"val":"api","end":""},{"old":"/__stats/api/jobs/:id/retry","type":0,"val":"jobs","end":""},{"old":"/__stats/api/jobs/:id/retry","type":1,"val":"id","end":""},{"old":"/__stats/api/jobs/:id/retry","type":0,"val":"retry","end":""}],
    types: placeholder as Registry['server-stats.jobs.retry']['types'],
  },
  'server-stats.config': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/config',
    tokens: [{"old":"/__stats/api/config","type":0,"val":"__stats","end":""},{"old":"/__stats/api/config","type":0,"val":"api","end":""},{"old":"/__stats/api/config","type":0,"val":"config","end":""}],
    types: placeholder as Registry['server-stats.config']['types'],
  },
  'server-stats.filters': {
    methods: ["GET","HEAD"],
    pattern: '/__stats/api/filters',
    tokens: [{"old":"/__stats/api/filters","type":0,"val":"__stats","end":""},{"old":"/__stats/api/filters","type":0,"val":"api","end":""},{"old":"/__stats/api/filters","type":0,"val":"filters","end":""}],
    types: placeholder as Registry['server-stats.filters']['types'],
  },
  'server-stats.filters.create': {
    methods: ["POST"],
    pattern: '/__stats/api/filters',
    tokens: [{"old":"/__stats/api/filters","type":0,"val":"__stats","end":""},{"old":"/__stats/api/filters","type":0,"val":"api","end":""},{"old":"/__stats/api/filters","type":0,"val":"filters","end":""}],
    types: placeholder as Registry['server-stats.filters.create']['types'],
  },
  'server-stats.filters.delete': {
    methods: ["DELETE"],
    pattern: '/__stats/api/filters/:id',
    tokens: [{"old":"/__stats/api/filters/:id","type":0,"val":"__stats","end":""},{"old":"/__stats/api/filters/:id","type":0,"val":"api","end":""},{"old":"/__stats/api/filters/:id","type":0,"val":"filters","end":""},{"old":"/__stats/api/filters/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['server-stats.filters.delete']['types'],
  },
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
