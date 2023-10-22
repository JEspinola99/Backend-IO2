-- DropForeignKey
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_etiquetaId_fkey";

-- DropForeignKey
ALTER TABLE "Tarea" DROP CONSTRAINT "Tarea_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Tarea" ALTER COLUMN "usuarioId" DROP NOT NULL,
ALTER COLUMN "etiquetaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tarea" ADD CONSTRAINT "Tarea_etiquetaId_fkey" FOREIGN KEY ("etiquetaId") REFERENCES "Etiqueta"("id") ON DELETE SET NULL ON UPDATE CASCADE;
