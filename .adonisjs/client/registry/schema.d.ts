/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'server-stats.api': {
    methods: ["GET","HEAD"]
    pattern: '/admin/api/server-stats'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.debug.config': {
    methods: ["GET","HEAD"]
    pattern: '/admin/api/debug/config'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.debug.diagnostics': {
    methods: ["GET","HEAD"]
    pattern: '/admin/api/debug/diagnostics'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.debug.queries': {
    methods: ["GET","HEAD"]
    pattern: '/admin/api/debug/queries'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.debug.events': {
    methods: ["GET","HEAD"]
    pattern: '/admin/api/debug/events'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.debug.routes': {
    methods: ["GET","HEAD"]
    pattern: '/admin/api/debug/routes'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.debug.logs': {
    methods: ["GET","HEAD"]
    pattern: '/admin/api/debug/logs'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.debug.emails': {
    methods: ["GET","HEAD"]
    pattern: '/admin/api/debug/emails'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.debug.emailPreview': {
    methods: ["GET","HEAD"]
    pattern: '/admin/api/debug/emails/:id/preview'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
    }
  }
  'server-stats.debug.traces': {
    methods: ["GET","HEAD"]
    pattern: '/admin/api/debug/traces'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.debug.traceDetail': {
    methods: ["GET","HEAD"]
    pattern: '/admin/api/debug/traces/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
    }
  }
  'server-stats.dashboard': {
    methods: ["GET","HEAD"]
    pattern: '/__stats'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.overview': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/overview'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.overview.chart': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/overview/chart'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.requests': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/requests'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.requests.show': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/requests/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
    }
  }
  'server-stats.queries': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/queries'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.events': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/events'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.routes': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/routes'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.logs': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/logs'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.emails': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/emails'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.emails.preview': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/emails/:id/preview'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
    }
  }
  'server-stats.traces': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/traces'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.traces.show': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/traces/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
    }
  }
  'server-stats.queries.grouped': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/queries/grouped'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.queries.explain': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/queries/:id/explain'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
    }
  }
  'server-stats.cache': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/cache'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.cache.show': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/cache/:key'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { key: ParamValue }
      query: {}
      response: unknown
    }
  }
  'server-stats.cache.delete': {
    methods: ["DELETE"]
    pattern: '/__stats/api/cache/:key'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { key: ParamValue }
      query: {}
      response: unknown
    }
  }
  'server-stats.jobs': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/jobs'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.jobs.show': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/jobs/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
    }
  }
  'server-stats.jobs.retry': {
    methods: ["POST"]
    pattern: '/__stats/api/jobs/:id/retry'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
    }
  }
  'server-stats.config': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/config'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.filters': {
    methods: ["GET","HEAD"]
    pattern: '/__stats/api/filters'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.filters.create': {
    methods: ["POST"]
    pattern: '/__stats/api/filters'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'server-stats.filters.delete': {
    methods: ["DELETE"]
    pattern: '/__stats/api/filters/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: unknown
    }
  }
  'home': {
    methods: ["GET","HEAD"]
    pattern: '/'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
    }
  }
  'new_account.create': {
    methods: ["GET","HEAD"]
    pattern: '/signup'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['create']>>>
    }
  }
  'new_account.store': {
    methods: ["POST"]
    pattern: '/signup'
    types: {
      body: ExtractBody<InferInput<(typeof import('#validators/user').signupValidator)>>
      paramsTuple: []
      params: {}
      query: ExtractQuery<InferInput<(typeof import('#validators/user').signupValidator)>>
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/new_account_controller').default['store']>>>
    }
  }
  'session.create': {
    methods: ["GET","HEAD"]
    pattern: '/login'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/session_controller').default['create']>>>
    }
  }
  'session.store': {
    methods: ["POST"]
    pattern: '/login'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/session_controller').default['store']>>>
    }
  }
  'session.destroy': {
    methods: ["POST"]
    pattern: '/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/session_controller').default['destroy']>>>
    }
  }
}
