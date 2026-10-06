import { defineConfig } from 'adonisjs-server-stats'
import {
  processCollector,
  systemCollector,
  httpCollector,
  dbPoolCollector,
  redisCollector,
  logCollector,
  appCollector,
} from 'adonisjs-server-stats/collectors'

export default defineConfig({
  authorize:(ctx)=>ctx.auth?.user.role==="admin",
  pollInterval: 3000,
  dashboard:true,
  toolbar:true,
  collectors: [
    processCollector(),
    systemCollector(),
    httpCollector({ maxRecords: 10_000 }),
    dbPoolCollector({ connectionName: 'postgres' }),
    redisCollector(),
    logCollector(),
    appCollector(),
  ],
})
