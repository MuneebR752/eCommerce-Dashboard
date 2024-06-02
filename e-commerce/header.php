<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Website</title>

    <!-- <link rel="stylesheet" href="reset.css"> -->
    <link rel="stylesheet" href="header.css">
    <script src="script.js"></script>


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

    <style>
        /* Dropdown Button */
        .dropbtn {
            border: none;
            cursor: pointer;
            background: none;
            font-size: inherit;
        }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        /* Dropdown Content (Hidden by Default) */
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f1f1f1;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
        }

        /* Links inside the dropdown */
        .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }

        /* Change color of dropdown links on hover */
        .dropdown-content a:hover {
            background-color: #ddd;
        }

        /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
        .show {
            display: block;
        }
    </style>

</head>

<body>

    <header class="sticky">
        <a href="#" class="logo"><img src="logo.png" alt=""></a>

        <ul class="nav-menu">
            <li><a href="index.php">Home</a></li>
            <li><a href="shop.php">Shop</a></li>
            <li>
                <div class="dropdown">
                    <button onclick="myFunction()" class="dropbtn">Category</button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="shop.php?cat=men">Men</a>
                        <a href="shop.php?cat=women">Women</a>
                        <a href="shop.php?cat=kids">Kids</a>
                    </div>
                </div>
            </li>
            <?php
            // Check if the user is logged in
            // You should replace the following condition with your actual login status check
            if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
                echo '<li><a href="logout.php">Logout</a></li>';
            } else {
                echo '<li><a href="login.php">Login</a></li>';
            }
            ?>
            <!-- <li><a href="#">Page</a></li>
        <li><a href="#">Docs</a></li> -->
        </ul>

        <div class="nav-icon">

            <a href="#"><i class="bx bx-search"></i></a>
            <a href="profile.php<?php echo isset($_SESSION['user_id']) ? '?userId=' . $_SESSION['user_id'] : ''; ?>"><i class="bx bx-user"></i></a>
            <a href="shop.php"><i class="bx bx-cart"></i></a>

            <a href="#"><i class='bx bx-menu' id="menu-icon"></i></a>

        </div>
    </header>


    <section class="main-home">
        <div class="main-text">
            <h5>Winter Collection</h5><br>
            <h1>New Winter <br> Collection 2024 </h1><br>
            <p>There's Nothing Like Clothing Trends</p><br>

            <a href="shop.php" class="main-btn">Shop Now <box-icon class="bx bx-right-arrow-alt"></box-icon></a>
        </div>

        <div class="down-arrow">
            <a href="#trending" class="down"><i class='bx bx-down-arrow-alt'></i></a>
        </div>
    </section>
    <script>
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    </script>
</body>

</html>