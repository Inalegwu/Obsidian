import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'server-stats.api': { paramsTuple?: []; params?: {} }
    'server-stats.debug.config': { paramsTuple?: []; params?: {} }
    'server-stats.debug.diagnostics': { paramsTuple?: []; params?: {} }
    'server-stats.debug.queries': { paramsTuple?: []; params?: {} }
    'server-stats.debug.events': { paramsTuple?: []; params?: {} }
    'server-stats.debug.routes': { paramsTuple?: []; params?: {} }
    'server-stats.debug.logs': { paramsTuple?: []; params?: {} }
    'server-stats.debug.emails': { paramsTuple?: []; params?: {} }
    'server-stats.debug.emailPreview': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.debug.traces': { paramsTuple?: []; params?: {} }
    'server-stats.debug.traceDetail': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.dashboard': { paramsTuple?: []; params?: {} }
    'server-stats.overview': { paramsTuple?: []; params?: {} }
    'server-stats.overview.chart': { paramsTuple?: []; params?: {} }
    'server-stats.requests': { paramsTuple?: []; params?: {} }
    'server-stats.requests.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.queries': { paramsTuple?: []; params?: {} }
    'server-stats.events': { paramsTuple?: []; params?: {} }
    'server-stats.routes': { paramsTuple?: []; params?: {} }
    'server-stats.logs': { paramsTuple?: []; params?: {} }
    'server-stats.emails': { paramsTuple?: []; params?: {} }
    'server-stats.emails.preview': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.traces': { paramsTuple?: []; params?: {} }
    'server-stats.traces.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.queries.grouped': { paramsTuple?: []; params?: {} }
    'server-stats.queries.explain': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.cache': { paramsTuple?: []; params?: {} }
    'server-stats.cache.show': { paramsTuple: [ParamValue]; params: {'key': ParamValue} }
    'server-stats.cache.delete': { paramsTuple: [ParamValue]; params: {'key': ParamValue} }
    'server-stats.jobs': { paramsTuple?: []; params?: {} }
    'server-stats.jobs.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.jobs.retry': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.config': { paramsTuple?: []; params?: {} }
    'server-stats.filters': { paramsTuple?: []; params?: {} }
    'server-stats.filters.create': { paramsTuple?: []; params?: {} }
    'server-stats.filters.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'server-stats.api': { paramsTuple?: []; params?: {} }
    'server-stats.debug.config': { paramsTuple?: []; params?: {} }
    'server-stats.debug.diagnostics': { paramsTuple?: []; params?: {} }
    'server-stats.debug.queries': { paramsTuple?: []; params?: {} }
    'server-stats.debug.events': { paramsTuple?: []; params?: {} }
    'server-stats.debug.routes': { paramsTuple?: []; params?: {} }
    'server-stats.debug.logs': { paramsTuple?: []; params?: {} }
    'server-stats.debug.emails': { paramsTuple?: []; params?: {} }
    'server-stats.debug.emailPreview': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.debug.traces': { paramsTuple?: []; params?: {} }
    'server-stats.debug.traceDetail': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.dashboard': { paramsTuple?: []; params?: {} }
    'server-stats.overview': { paramsTuple?: []; params?: {} }
    'server-stats.overview.chart': { paramsTuple?: []; params?: {} }
    'server-stats.requests': { paramsTuple?: []; params?: {} }
    'server-stats.requests.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.queries': { paramsTuple?: []; params?: {} }
    'server-stats.events': { paramsTuple?: []; params?: {} }
    'server-stats.routes': { paramsTuple?: []; params?: {} }
    'server-stats.logs': { paramsTuple?: []; params?: {} }
    'server-stats.emails': { paramsTuple?: []; params?: {} }
    'server-stats.emails.preview': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.traces': { paramsTuple?: []; params?: {} }
    'server-stats.traces.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.queries.grouped': { paramsTuple?: []; params?: {} }
    'server-stats.queries.explain': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.cache': { paramsTuple?: []; params?: {} }
    'server-stats.cache.show': { paramsTuple: [ParamValue]; params: {'key': ParamValue} }
    'server-stats.jobs': { paramsTuple?: []; params?: {} }
    'server-stats.jobs.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.config': { paramsTuple?: []; params?: {} }
    'server-stats.filters': { paramsTuple?: []; params?: {} }
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'server-stats.api': { paramsTuple?: []; params?: {} }
    'server-stats.debug.config': { paramsTuple?: []; params?: {} }
    'server-stats.debug.diagnostics': { paramsTuple?: []; params?: {} }
    'server-stats.debug.queries': { paramsTuple?: []; params?: {} }
    'server-stats.debug.events': { paramsTuple?: []; params?: {} }
    'server-stats.debug.routes': { paramsTuple?: []; params?: {} }
    'server-stats.debug.logs': { paramsTuple?: []; params?: {} }
    'server-stats.debug.emails': { paramsTuple?: []; params?: {} }
    'server-stats.debug.emailPreview': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.debug.traces': { paramsTuple?: []; params?: {} }
    'server-stats.debug.traceDetail': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.dashboard': { paramsTuple?: []; params?: {} }
    'server-stats.overview': { paramsTuple?: []; params?: {} }
    'server-stats.overview.chart': { paramsTuple?: []; params?: {} }
    'server-stats.requests': { paramsTuple?: []; params?: {} }
    'server-stats.requests.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.queries': { paramsTuple?: []; params?: {} }
    'server-stats.events': { paramsTuple?: []; params?: {} }
    'server-stats.routes': { paramsTuple?: []; params?: {} }
    'server-stats.logs': { paramsTuple?: []; params?: {} }
    'server-stats.emails': { paramsTuple?: []; params?: {} }
    'server-stats.emails.preview': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.traces': { paramsTuple?: []; params?: {} }
    'server-stats.traces.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.queries.grouped': { paramsTuple?: []; params?: {} }
    'server-stats.queries.explain': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.cache': { paramsTuple?: []; params?: {} }
    'server-stats.cache.show': { paramsTuple: [ParamValue]; params: {'key': ParamValue} }
    'server-stats.jobs': { paramsTuple?: []; params?: {} }
    'server-stats.jobs.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.config': { paramsTuple?: []; params?: {} }
    'server-stats.filters': { paramsTuple?: []; params?: {} }
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
  }
  DELETE: {
    'server-stats.cache.delete': { paramsTuple: [ParamValue]; params: {'key': ParamValue} }
    'server-stats.filters.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'server-stats.jobs.retry': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'server-stats.filters.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}