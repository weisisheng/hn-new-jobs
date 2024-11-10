import { join } from 'path';

import { logPrettyPrintObject } from '@/utils/log';

// !important, build, dev
const projectRootFolder = process.cwd();

const isProd = process.env.NODE_ENV === 'production';

const dbSuffix = isProd ? 'prod' : 'dev';
const databaseFileName = `hn-parser-node-database-${dbSuffix}.sqlite3`;

// todo: this is app config, not just parser

export const PARSER_CONFIG = {
  parserSecret: process.env.PARSER_SECRET,
  nodeEnv: process.env.NODE_ENV,
  databaseFilePath: join(projectRootFolder, './data/database/', databaseFileName),
  cacheFilePath: join(projectRootFolder, './data/cache/', 'cache.json'),
  logFilePath: join(projectRootFolder, './data/logs/', 'app.html'),
  cacheTtlHours: 1,
  oldMonthsCount: 5,
  appTimeZone: 'Europe/Belgrade',
  appDateTimeFormat: 'dd MMM yyyy HH:mm:ss', // 10 Nov 2024 15:45:30
} as const;

export const logConfig = () => logPrettyPrintObject(PARSER_CONFIG, 'PARSER_CONFIG');
