import * as migration_20251114_150241 from './20251114_150241';

export const migrations = [
  {
    up: migration_20251114_150241.up,
    down: migration_20251114_150241.down,
    name: '20251114_150241'
  },
];
