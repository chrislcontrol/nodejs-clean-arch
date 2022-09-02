-- CreateTable
CREATE TABLE "Client" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(11) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_id_key" ON "Client"("id");
