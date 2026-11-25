import { definePrismaConfig } from 'prisma/config';
import { defineConfig as ormConfig } from '@prisma/orm-postgres/config';
import { loadEnvFile } from 'node:process';

loadEnvFile('.env');

export default definePrismaConfig({
  orm: ormConfig({
    contract: './prisma/contract.prisma',
    db: {
      connection: process.env['DATABASE_URL']!,
    },
  }),
});
