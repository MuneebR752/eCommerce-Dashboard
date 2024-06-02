-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2024 at 12:08 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-commerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `name`, `email`, `password`, `role`) VALUES
(7, 'Muneeb', 'muneeburrehman440@gmail.com', '123', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_image_url` varchar(255) DEFAULT NULL,
  `customer_name` varchar(255) NOT NULL,
  `customer_address` text NOT NULL,
  `status` varchar(255) DEFAULT 'pending',
  `due_date` date DEFAULT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `product_name`, `product_image_url`, `customer_name`, `customer_address`, `status`, `due_date`, `total_price`, `created_at`) VALUES
(7, 'Men\\\'s Shirt', 'http://localhost/e-commerce/2.jpg', 'xyz', 'Dummy Address', 'completed', '2024-05-26', 400.00, '2024-05-23 15:47:39'),
(8, 'Women\\\'s Kurta Shalwar', 'http://localhost/e-commerce/3.jpg', 'xyz', 'Dummy Address', 'pending', '2024-05-26', 900.00, '2024-05-23 15:47:39'),
(9, 'Women\\\'s Shirt Pent', 'http://localhost/e-commerce/4.jpg', 'xyz', 'Dummy Address', 'pending', '2024-05-26', 5000.00, '2024-05-23 15:47:39'),
(10, 'Kids Wear', 'http://localhost/e-commerce/1.jpg', 'xyz', 'Dummy Address', 'pending', '2024-05-26', 50.00, '2024-05-23 17:04:21');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(255) NOT NULL,
  `title` text NOT NULL,
  `price` int(255) NOT NULL,
  `image` text NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `stock_quantity` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `image`, `category`, `stock_quantity`, `created_at`) VALUES
(1, 'Women\'s Shirt', 200, 'http://localhost/e-commerce/1.jpg', 'women', 200, '2024-05-23 16:20:36'),
(2, 'Men\'s Shirt', 200, 'http://localhost/e-commerce/2.jpg', 'men', 100, '2024-05-23 16:20:36'),
(3, 'Women\'s Kurta Shalwar', 300, 'http://localhost/e-commerce/3.jpg', 'women', 50, '2024-05-23 16:20:36'),
(4, 'Women\'s Shirt Pent', 1000, 'http://localhost/e-commerce/4.jpg', 'men', 80, '2024-05-23 16:20:36'),
(5, 'Women\'s Pent', 800, 'http://localhost/e-commerce/5.jpg', 'women', 400, '2024-05-23 16:20:36'),
(6, 'Women\'s Shirt', 500, 'http://localhost/e-commerce/6.jpg', 'women', 300, '2024-05-23 16:20:36');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `fname` text NOT NULL,
  `lname` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `phoneno` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `password`, `phoneno`) VALUES
(1, 'Ahmad', 'Ali', 'ranaahmadali261@gmail.com', 'a1.b2.cd.ef.gh', '2147483647'),
(5, 'abc', 'xyz', 'abc@test.com', 'qwerty56', '03244394840');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
