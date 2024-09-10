-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: users
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `imagePath` varchar(255) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `name_2` (`name`),
  UNIQUE KEY `name_3` (`name`),
  UNIQUE KEY `name_4` (`name`),
  UNIQUE KEY `name_5` (`name`),
  UNIQUE KEY `name_6` (`name`),
  UNIQUE KEY `name_7` (`name`),
  UNIQUE KEY `name_8` (`name`),
  UNIQUE KEY `name_9` (`name`),
  UNIQUE KEY `name_10` (`name`),
  UNIQUE KEY `name_11` (`name`),
  UNIQUE KEY `name_12` (`name`),
  UNIQUE KEY `name_13` (`name`),
  UNIQUE KEY `name_14` (`name`),
  UNIQUE KEY `name_15` (`name`),
  UNIQUE KEY `name_16` (`name`),
  UNIQUE KEY `name_17` (`name`),
  UNIQUE KEY `name_18` (`name`),
  UNIQUE KEY `name_19` (`name`),
  UNIQUE KEY `name_20` (`name`),
  UNIQUE KEY `name_21` (`name`),
  UNIQUE KEY `name_22` (`name`),
  UNIQUE KEY `name_23` (`name`),
  UNIQUE KEY `name_24` (`name`),
  UNIQUE KEY `name_25` (`name`),
  UNIQUE KEY `name_26` (`name`),
  UNIQUE KEY `name_27` (`name`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'T-shirt','Comfortable cotton t-shirt',9.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725858401/products/o1jeplga4nu3yomchvwp.jpg',1,'2024-09-04 19:26:25','2024-09-09 05:06:41'),(3,'Sandals','Leather sandals for summer',29.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478195/products/qjqompxfsjey2p0yywp0.jpg',2,'2024-09-04 19:29:55','2024-09-04 19:29:55'),(6,'Handbag','Elegant leather handbag',99.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478342/products/etvbvtrzw7x4h4t2obog.jpg',4,'2024-09-04 19:32:22','2024-09-04 19:32:22'),(7,'Backpack','Durable canvas backpack',59.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478398/products/t17cfsjp8zjar9vmwjp3.jpg',4,'2024-09-04 19:33:18','2024-09-04 19:33:18'),(8,'Necklace','Gold plated necklace',39.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478449/products/iqmgx8hdl8zdazti4se8.jpg',5,'2024-09-04 19:34:09','2024-09-04 19:34:09'),(9,'Bracelet','Silver charm bracelet',29.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478505/products/kyzlrv3ncmb8hyx6uwho.jpg',5,'2024-09-04 19:35:05','2024-09-04 19:35:05'),(10,'Sweater','Cozy knitted sweater',34.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478552/products/y3t9fft8sc1smrdzchtg.jpg',1,'2024-09-04 19:35:52','2024-09-04 19:35:52'),(11,'Shorts','Comfortable summer shorts',24.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478615/products/tersqo4w5iv4diffqops.jpg',1,'2024-09-04 19:36:54','2024-09-04 19:36:54'),(12,'Boots','Durable leather boots',89.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478652/products/i0hl4vlnj2xyl3rm7tmz.jpg',2,'2024-09-04 19:37:32','2024-09-04 19:37:32'),(16,'Wallet','Compact leather wallet',39.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478824/products/gn7azeurrtpdbd2gysby.jpg',4,'2024-09-04 19:40:23','2024-09-04 19:40:23'),(17,'Earrings','Elegant gold earrings',49.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478869/products/lsunfemle2m51hkv3u72.jpg',5,'2024-09-04 19:41:09','2024-09-04 19:41:09'),(18,'Ring','Silver ring with gem',69.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478902/products/s1cac8mlsdbkjfhon6c5.jpg',5,'2024-09-04 19:41:42','2024-09-04 19:41:42'),(19,'Summer Dress','Lightweight and breezy summer dress',29.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478942/products/berqkavuoafzluuf1phd.jpg',1,'2024-09-04 19:42:22','2024-09-04 19:42:22'),(20,'Running Sneakers','Comfortable running sneakers for all terrains',59.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725478978/products/vb8vohetsgoyn9isni5p.jpg',2,'2024-09-04 19:42:57','2024-09-04 19:42:57'),(21,'Leather Wallet','Premium quality leather wallet',24.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725479012/products/pqfvorcp5abpeklohsc8.jpg',4,'2024-09-04 19:43:32','2024-09-04 19:43:32'),(22,'Silver Necklace','Elegant silver necklace with pendant',19.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725943440/products/mptkwqjcvkge4lqrvh32.jpg',5,'2024-09-04 19:44:17','2024-09-10 04:44:00'),(23,'Winter Coat','Warm and cozy winter coat',58.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725816331/products/tubtzmwssyokwpnzd9jm.jpg',19,'2024-09-04 19:45:06','2024-09-08 17:25:31'),(24,'High Heels','Chic high heels for formal occasions',49.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725479143/products/vjqjtbkitfmciknidaew.jpg',2,'2024-09-04 19:45:43','2024-09-04 19:45:43'),(25,'Gold Bracelet','Beautiful gold bracelet with intricate design',34.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725479179/products/bn4utgwvo8ezaksnonkt.jpg',5,'2024-09-04 19:46:19','2024-09-04 19:46:19'),(26,'Flip Flop','Casual flip flops for beach wear',12.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725511414/products/krb7yqh2czzbnrhcy8oo.jpg',2,'2024-09-04 19:46:51','2024-09-05 04:43:34'),(27,'Tote Bag','Large tote bag for shopping',22.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725479249/products/k5pcntbi2gpt7t8bhrcw.jpg',4,'2024-09-04 19:47:29','2024-09-04 19:47:29'),(28,'Diamond Ring','Sparkling diamond ring for special occasions',150.00,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725479288/products/px4c4wszdcfdlo1am14g.jpg',5,'2024-09-04 19:48:09','2024-09-04 19:48:09'),(29,' Wool sweater edit',' Comfortable wool sweater for autumn',24.50,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725490675/products/cxm00kggqf6pswypasfk.jpg',1,'2024-09-04 22:57:55','2024-09-04 22:58:18'),(80,'Jean Mom Fit ','Relaxed high-waisted jeans with a vintage look.',18.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725736638/products/mbmu3lezalx1n1v5s1h9.jpg',1,'2024-09-07 19:17:17','2024-09-07 19:17:17'),(81,'Linen Blouse ','Lightweight linen blouse for warm weather',14.50,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725736670/products/mzdoxymnd5gy2wvc4mat.jpg',1,'2024-09-07 19:17:49','2024-09-07 19:17:49'),(83,'Cross-body Bag','Compact crossbody bag with adjustable strap.',12.50,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725736770/products/er0buj6lfpf387hcezhv.jpg',4,'2024-09-07 19:18:28','2024-09-07 19:19:30'),(84,'Chunky Knit Cardigan',' Cozy oversized cardigan with chunky knit texture.',26.00,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725736737/products/dpyj2jao8ccjrzhib3lv.jpg',1,'2024-09-07 19:18:56','2024-09-07 19:18:56'),(85,'Ankle Boots ','Fashionable suede ankle boots with a low heel.',25.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725736812/products/o08qxw9inluelfjv6my3.jpg',2,'2024-09-07 19:20:12','2024-09-07 19:20:12'),(86,'Puffer Jacket','Lightweight and warm puffer jacket.',30.55,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725816315/products/yxihsk1pzweuphxrygnn.jpg',19,'2024-09-07 19:23:07','2024-09-08 17:25:15'),(87,'Denim Jacket ','Classic denim jacket with a relaxed fit.',25.00,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725816299/products/ysif0akcctijrmlmo0lx.jpg',19,'2024-09-07 19:42:23','2024-09-08 17:24:59'),(94,'Jean Over','Jean Over Nuevo Over',50.33,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725825728/products/pedkxsg60uzkmupo7hf5.jpg',1,'2024-09-08 20:00:07','2024-09-08 20:02:07'),(96,' Gloves ','Warm winter gloves',14.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725861150/products/pzh6lnx4q4ryapehipfq.jpg',3,'2024-09-09 05:52:31','2024-09-09 05:52:31'),(97,' Scarf ','Warm woolen scarf ',19.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725861186/products/oiskbypes3lfhwqasztx.jpg',3,'2024-09-09 05:53:06','2024-09-09 05:53:06'),(98,' Hat ','Stylish summer hat ',19.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725861204/products/e2pj2pflkf5crroypzv5.jpg',3,'2024-09-09 05:53:24','2024-09-09 05:53:24'),(99,'    Belt ','Classic leather belt ',19.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725861225/products/lvhlxjrccbqhkffapsvd.jpg',3,'2024-09-09 05:53:45','2024-09-09 05:53:45'),(100,' Sunglasses ','Trendy sunglasses',29.99,'https://res.cloudinary.com/dmofgxbvt/image/upload/v1725861242/products/enflaxi4mrosxuwpdylj.jpg',3,'2024-09-09 05:54:02','2024-09-09 05:54:02');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-10  1:56:29
