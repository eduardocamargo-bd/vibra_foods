import * as migration_20251114_150241 from './20251114_150241';
import * as migration_20251121_170444_rename_conheca_historia_to_number_section_home from './20251121_170444_rename_conheca_historia_to_number_section_home';

export const migrations = [
  {
    up: migration_20251114_150241.up,
    down: migration_20251114_150241.down,
    name: '20251114_150241',
  },
  {
    up: migration_20251121_170444_rename_conheca_historia_to_number_section_home.up,
    down: migration_20251121_170444_rename_conheca_historia_to_number_section_home.down,
    name: '20251121_170444_rename_conheca_historia_to_number_section_home'
  },
];
