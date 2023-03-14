-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `price` INTEGER UNSIGNED NOT NULL,
    `images` JSON NOT NULL,
    `stock_status` VARCHAR(191) NOT NULL,
    `stock_quantity` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `customer_first_name` VARCHAR(191) NOT NULL,
    `customer_last_name` VARCHAR(191) NOT NULL,
    `customer_address` VARCHAR(191) NOT NULL,
    `customer_postcode` VARCHAR(191) NOT NULL,
    `customer_city` VARCHAR(191) NOT NULL,
    `customer_email` VARCHAR(191) NOT NULL,
    `customer_phone` VARCHAR(191) NULL,
    `order_total` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderItem` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `qty` INTEGER UNSIGNED NOT NULL,
    `item_price` INTEGER UNSIGNED NOT NULL,
    `item_total` INTEGER UNSIGNED NOT NULL,
    `order_id` INTEGER UNSIGNED NULL,
    `product_id` INTEGER UNSIGNED NULL,

    INDEX `OrderItem_order_id_fkey`(`order_id`),
    INDEX `OrderItem_product_id_fkey`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
