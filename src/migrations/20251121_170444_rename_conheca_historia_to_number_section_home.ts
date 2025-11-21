import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Rename existing tables from conhecaHistoria to numberSectionHome
  await db.execute(sql`
    ALTER TABLE "pages_blocks_conheca_historia" RENAME TO "pages_blocks_number_section_home";
    ALTER TABLE "pages_blocks_conheca_historia_stats" RENAME TO "pages_blocks_number_section_home_stats";
    ALTER TABLE "_pages_v_blocks_conheca_historia" RENAME TO "_pages_v_blocks_number_section_home";
    ALTER TABLE "_pages_v_blocks_conheca_historia_stats" RENAME TO "_pages_v_blocks_number_section_home_stats";
  `)

  // Update foreign key constraints
  await db.execute(sql`
    ALTER TABLE "pages_blocks_number_section_home_stats" 
    DROP CONSTRAINT "pages_blocks_conheca_historia_stats_parent_id_fk",
    ADD CONSTRAINT "pages_blocks_number_section_home_stats_parent_id_fk" 
    FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_number_section_home"("id") ON DELETE cascade ON UPDATE no action;

    ALTER TABLE "_pages_v_blocks_number_section_home_stats" 
    DROP CONSTRAINT "_pages_v_blocks_conheca_historia_stats_parent_id_fk",
    ADD CONSTRAINT "_pages_v_blocks_number_section_home_stats_parent_id_fk" 
    FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_number_section_home"("id") ON DELETE cascade ON UPDATE no action;
  `)

  // Rename indexes
  await db.execute(sql`
    ALTER INDEX "pages_blocks_conheca_historia_stats_order_idx" RENAME TO "pages_blocks_number_section_home_stats_order_idx";
    ALTER INDEX "pages_blocks_conheca_historia_stats_parent_id_idx" RENAME TO "pages_blocks_number_section_home_stats_parent_id_idx";
    ALTER INDEX "pages_blocks_conheca_historia_order_idx" RENAME TO "pages_blocks_number_section_home_order_idx";
    ALTER INDEX "pages_blocks_conheca_historia_parent_id_idx" RENAME TO "pages_blocks_number_section_home_parent_id_idx";
    ALTER INDEX "pages_blocks_conheca_historia_path_idx" RENAME TO "pages_blocks_number_section_home_path_idx";
    ALTER INDEX "_pages_v_blocks_conheca_historia_stats_order_idx" RENAME TO "_pages_v_blocks_number_section_home_stats_order_idx";
    ALTER INDEX "_pages_v_blocks_conheca_historia_stats_parent_id_idx" RENAME TO "_pages_v_blocks_number_section_home_stats_parent_id_idx";
    ALTER INDEX "_pages_v_blocks_conheca_historia_order_idx" RENAME TO "_pages_v_blocks_number_section_home_order_idx";
    ALTER INDEX "_pages_v_blocks_conheca_historia_parent_id_idx" RENAME TO "_pages_v_blocks_number_section_home_parent_id_idx";
    ALTER INDEX "_pages_v_blocks_conheca_historia_path_idx" RENAME TO "_pages_v_blocks_number_section_home_path_idx";
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Reverse the rename: rename back from numberSectionHome to conhecaHistoria
  await db.execute(sql`
    ALTER TABLE "pages_blocks_number_section_home" RENAME TO "pages_blocks_conheca_historia";
    ALTER TABLE "pages_blocks_number_section_home_stats" RENAME TO "pages_blocks_conheca_historia_stats";
    ALTER TABLE "_pages_v_blocks_number_section_home" RENAME TO "_pages_v_blocks_conheca_historia";
    ALTER TABLE "_pages_v_blocks_number_section_home_stats" RENAME TO "_pages_v_blocks_conheca_historia_stats";
  `)

  // Update foreign key constraints back
  await db.execute(sql`
    ALTER TABLE "pages_blocks_conheca_historia_stats" 
    DROP CONSTRAINT "pages_blocks_number_section_home_stats_parent_id_fk",
    ADD CONSTRAINT "pages_blocks_conheca_historia_stats_parent_id_fk" 
    FOREIGN KEY ("_parent_id") REFERENCES "pages_blocks_conheca_historia"("id") ON DELETE cascade ON UPDATE no action;

    ALTER TABLE "_pages_v_blocks_conheca_historia_stats" 
    DROP CONSTRAINT "_pages_v_blocks_number_section_home_stats_parent_id_fk",
    ADD CONSTRAINT "_pages_v_blocks_conheca_historia_stats_parent_id_fk" 
    FOREIGN KEY ("_parent_id") REFERENCES "_pages_v_blocks_conheca_historia"("id") ON DELETE cascade ON UPDATE no action;
  `)

  // Rename indexes back
  await db.execute(sql`
    ALTER INDEX "pages_blocks_number_section_home_stats_order_idx" RENAME TO "pages_blocks_conheca_historia_stats_order_idx";
    ALTER INDEX "pages_blocks_number_section_home_stats_parent_id_idx" RENAME TO "pages_blocks_conheca_historia_stats_parent_id_idx";
    ALTER INDEX "pages_blocks_number_section_home_order_idx" RENAME TO "pages_blocks_conheca_historia_order_idx";
    ALTER INDEX "pages_blocks_number_section_home_parent_id_idx" RENAME TO "pages_blocks_conheca_historia_parent_id_idx";
    ALTER INDEX "pages_blocks_number_section_home_path_idx" RENAME TO "pages_blocks_conheca_historia_path_idx";
    ALTER INDEX "_pages_v_blocks_number_section_home_stats_order_idx" RENAME TO "_pages_v_blocks_conheca_historia_stats_order_idx";
    ALTER INDEX "_pages_v_blocks_number_section_home_stats_parent_id_idx" RENAME TO "_pages_v_blocks_conheca_historia_stats_parent_id_idx";
    ALTER INDEX "_pages_v_blocks_number_section_home_order_idx" RENAME TO "_pages_v_blocks_conheca_historia_order_idx";
    ALTER INDEX "_pages_v_blocks_number_section_home_parent_id_idx" RENAME TO "_pages_v_blocks_conheca_historia_parent_id_idx";
    ALTER INDEX "_pages_v_blocks_number_section_home_path_idx" RENAME TO "_pages_v_blocks_conheca_historia_path_idx";
  `)
}
