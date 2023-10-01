-- CreateTable
CREATE TABLE "Tablero" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL,
    "espacioDeTrabajoId" INTEGER NOT NULL,

    CONSTRAINT "Tablero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Columna" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tableroId" INTEGER NOT NULL,

    CONSTRAINT "Columna_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tablero_nombre_key" ON "Tablero"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Columna_nombre_key" ON "Columna"("nombre");

-- AddForeignKey
ALTER TABLE "Tablero" ADD CONSTRAINT "Tablero_espacioDeTrabajoId_fkey" FOREIGN KEY ("espacioDeTrabajoId") REFERENCES "EspacioDeTrabajo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Columna" ADD CONSTRAINT "Columna_tableroId_fkey" FOREIGN KEY ("tableroId") REFERENCES "Tablero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
