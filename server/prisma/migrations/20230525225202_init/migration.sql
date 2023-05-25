-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Album` (
    `id` VARCHAR(191) NOT NULL,
    `albumName` VARCHAR(191) NOT NULL,
    `albumImage` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Album_albumName_key`(`albumName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Song` (
    `id` VARCHAR(191) NOT NULL,
    `songName` VARCHAR(191) NOT NULL,
    `urlPath` VARCHAR(191) NOT NULL,
    `isFavorite` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlbumSong` (
    `albumId` VARCHAR(191) NOT NULL,
    `songId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`albumId`, `songId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Album` ADD CONSTRAINT `Album_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlbumSong` ADD CONSTRAINT `AlbumSong_albumId_fkey` FOREIGN KEY (`albumId`) REFERENCES `Album`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlbumSong` ADD CONSTRAINT `AlbumSong_songId_fkey` FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
