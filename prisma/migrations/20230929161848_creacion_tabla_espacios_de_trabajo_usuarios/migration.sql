/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EspacioDeTrabajo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "creadorId" INTEGER NOT NULL,

    CONSTRAINT "EspacioDeTrabajo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EspaciosDeTrabajoUsuario" (
    "usuarioId" INTEGER NOT NULL,
    "espacioDeTrabajoId" INTEGER NOT NULL,

    CONSTRAINT "EspaciosDeTrabajoUsuario_pkey" PRIMARY KEY ("usuarioId","espacioDeTrabajoId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EspacioDeTrabajo_nombre_key" ON "EspacioDeTrabajo"("nombre");

-- AddForeignKey
ALTER TABLE "EspaciosDeTrabajoUsuario" ADD CONSTRAINT "EspaciosDeTrabajoUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EspaciosDeTrabajoUsuario" ADD CONSTRAINT "EspaciosDeTrabajoUsuario_espacioDeTrabajoId_fkey" FOREIGN KEY ("espacioDeTrabajoId") REFERENCES "EspacioDeTrabajo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
