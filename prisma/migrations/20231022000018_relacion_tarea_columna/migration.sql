/*
  Warnings:

  - Added the required column `columnaId` to the `Tarea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tarea" ADD COLUMN     "columnaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_columnaId_fkey" FOREIGN KEY ("columnaId") REFERENCES "Columna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
