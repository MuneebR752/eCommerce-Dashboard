<?php
session_start();

// Function to calculate total price
function calculateTotalPrice($cart)
{
    $totalPrice = 0;
    foreach ($cart as $cartItem) {
        $totalPrice += $cartItem['price'] * $cartItem['quantity'];
    }
    return $totalPrice;
}

if (isset($_POST['submit'])) {
    $servername = "localhost";
    $username = "root";
    $dbname = "e-commerce";
    $db_password = "";

    $conn = mysqli_connect($servername, $username, $db_password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $fullname = mysqli_real_escape_string($conn, $_POST['fullname']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $address = mysqli_real_escape_string($conn, $_POST['address']);
    $phoneno = mysqli_real_escape_string($conn, $_POST['phoneno']);


    foreach ($_SESSION['cart'] as $cartItem) {
        $productId = $cartItem['id'];
        $productName = mysqli_real_escape_string($conn, $cartItem['title']);
        $quantity = $cartItem['quantity'];
        $price = $cartItem['price'];
        $productImageUrl = $cartItem['image'];

        $sql = "INSERT INTO `orders` (product_name, product_image_url, customer_name, customer_address, due_date, total_price) 
                VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($conn, $sql);
        $status = "pending";
        $currentDate = new DateTime();

        $totalPrice = $price * $quantity;

        $currentDate->modify('+3 days');

        $dueDate = $currentDate->format('Y-m-d');

        mysqli_stmt_bind_param($stmt, 'sssssd', $productName, $productImageUrl, $fullname, $address, $dueDate, $totalPrice);

        if (mysqli_stmt_execute($stmt)) {
            echo "
            <script>alert('Order placed successfully!');
            location.href = 'index.php';</script>
            ";
        } else {
            echo "Error: " . mysqli_error($conn);
        }

        mysqli_stmt_close($stmt);
    }



    $_SESSION['cart'] = array();

    mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clothing Brand Order Form</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

    <link rel="stylesheet" href="order_page.css">
</head>

<body>
    <div class="container">
        <h2>Place Your <span>Order</span></h2>
        <form action="" method="post">
            <div class="input-group">
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname" name="fullname" required>
            </div>

            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>

            <div class="input-group">
                <label for="address">Shipping Address</label>
                <textarea id="address" name="address" required></textarea>
            </div>

            <div class="input-group">
                <label for="phoneno">Phone Number</label>
                <input type="tel" id="phoneno" name="phoneno" required>
            </div>

            <!-- Autofilled fields from cart -->
            <?php
            $totalPrice = 0;
            if (isset($_SESSION['cart']) && !empty($_SESSION['cart'])) {
                foreach ($_SESSION['cart'] as $cartItem) {
                    $productName = htmlspecialchars($cartItem['title'], ENT_QUOTES);
                    $quantity = $cartItem['quantity'];
                    $price = $cartItem['price'];
                    $totalPrice += $price * $quantity; // Update total price
                    echo "
                    <div class='input-group'>
                        <label for='product'>Product Name</label>
                        <input type='text' id='product' name='product' value='$productName' readonly>
                    </div>
                    <div class='input-group'>
                        <label for='quantity'>Quantity</label>
                        <input type='number' id='quantity' name='quantity' value='$quantity' min='1' readonly>
                    </div>
                    <div class='input-group'>
                        <label for='quantity'>Price</label>
                        <input type='number' id='price' name='price' value='" . ($price * $quantity) . "' readonly >
                    </div>
                    ";
                }
            }
            ?>
            <!-- End of autofilled fields -->

            <div class="input-group">
                <label for="additional_info">Additional Information</label>
                <textarea id="additional_info" name="additional_info"></textarea>
            </div>

            <!-- Total price section -->
            <div class="total-price-section">
                <h3>Total Price: <?php echo '$' . number_format($totalPrice, 2); ?></h3>
            </div>


            <button type="submit" name="submit">Place Order</button>
        </form>
    </div>
</body>

</html>