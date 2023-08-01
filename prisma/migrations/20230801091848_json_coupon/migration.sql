/*
  Warnings:

  - You are about to alter the column `CouponCode` on the `checkoutdata` table. The data in that column could be lost. The data in that column will be cast from `VarChar(12)` to `Json`.

*/
-- AlterTable
ALTER TABLE `checkoutdata` MODIFY `CouponCode` JSON NOT NULL;
