/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  serverStats: {
    api: typeof routes['server-stats.api']
    debug: {
      config: typeof routes['server-stats.debug.config']
      diagnostics: typeof routes['server-stats.debug.diagnostics']
      queries: typeof routes['server-stats.debug.queries']
      events: typeof routes['server-stats.debug.events']
      routes: typeof routes['server-stats.debug.routes']
      logs: typeof routes['server-stats.debug.logs']
      emails: typeof routes['server-stats.debug.emails']
      emailPreview: typeof routes['server-stats.debug.emailPreview']
      traces: typeof routes['server-stats.debug.traces']
      traceDetail: typeof routes['server-stats.debug.traceDetail']
    }
    dashboard: typeof routes['server-stats.dashboard']
    overview: typeof routes['server-stats.overview'] & {
      chart: typeof routes['server-stats.overview.chart']
    }
    requests: typeof routes['server-stats.requests'] & {
      show: typeof routes['server-stats.requests.show']
    }
    queries: typeof routes['server-stats.queries'] & {
      grouped: typeof routes['server-stats.queries.grouped']
      explain: typeof routes['server-stats.queries.explain']
    }
    events: typeof routes['server-stats.events']
    routes: typeof routes['server-stats.routes']
    logs: typeof routes['server-stats.logs']
    emails: typeof routes['server-stats.emails'] & {
      preview: typeof routes['server-stats.emails.preview']
    }
    traces: typeof routes['server-stats.traces'] & {
      show: typeof routes['server-stats.traces.show']
    }
    cache: typeof routes['server-stats.cache'] & {
      show: typeof routes['server-stats.cache.show']
      delete: typeof routes['server-stats.cache.delete']
    }
    jobs: typeof routes['server-stats.jobs'] & {
      show: typeof routes['server-stats.jobs.show']
      retry: typeof routes['server-stats.jobs.retry']
    }
    config: typeof routes['server-stats.config']
    filters: typeof routes['server-stats.filters'] & {
      create: typeof routes['server-stats.filters.create']
      delete: typeof routes['server-stats.filters.delete']
    }
  }
  home: typeof routes['home']
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
}
