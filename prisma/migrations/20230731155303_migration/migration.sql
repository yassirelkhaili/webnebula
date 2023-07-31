/*
  Warnings:

  - Added the required column `CouponCode` to the `checkoutdata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `checkoutdata` ADD COLUMN `CouponCode` VARCHAR(10) NOT NULL,
    MODIFY `PaymentMethod` VARCHAR(12) NOT NULL;
