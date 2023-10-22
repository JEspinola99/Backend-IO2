/*
  Warnings:

  - Changed the type of `fechaVencimiento` on the `Tarea` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Tarea" DROP COLUMN "fechaVencimiento",
ADD COLUMN     "fechaVencimiento" TIMESTAMP(3) NOT NULL;
