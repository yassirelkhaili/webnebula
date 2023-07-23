-- CreateTable
CREATE TABLE `contactdata` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientName` VARCHAR(70) NOT NULL,
    `clientEmail` VARCHAR(255) NOT NULL,
    `clientPhone` VARCHAR(10) NOT NULL,
    `clientOrg` VARCHAR(160) NOT NULL,
    `clientTheme` VARCHAR(10) NOT NULL,
    `messageSubject` VARCHAR(255) NOT NULL,
    `messageContent` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `checkoutdata` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientName` VARCHAR(70) NOT NULL,
    `clientEmail` VARCHAR(255) NOT NULL,
    `clientPhone` VARCHAR(10) NOT NULL,
    `clientOrg` VARCHAR(160) NOT NULL,
    `clientTheme` VARCHAR(10) NOT NULL,
    `PaymentMethod` VARCHAR(10) NOT NULL,
    `clientFeedback` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
