<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Website</title>

    <!-- <link rel="stylesheet" href="reset.css"> -->
    <!-- <link rel="stylesheet" href="../style.css"> -->
    <!-- <script src="script.js"></script> -->


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

</head>
<style>
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Jost', sans-serif;
    list-style: none;
    text-decoration: none;
    color: black;
}

.center-text{
text-align:center;
}

.contact{
    background-color: #f3f4f6;
}

.contact-info{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, auto));
    gap: 3rem;
}

.first-info img{
width: 140px;
height: auto;
}

.contact-info h4{
    color: #212529;
    font-size: 14px;
    text-transform: capitalize;
    margin-bottom: 10px;
}

.contact-info p{
    color: #565656;
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 1.5;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.42s;
}

.contact-info p:hover{
    color: #ee1c47;
}

.social-icon i{
    color: #565656;
    margin-top: 10px;
    font-size: 20px;
    transition: all 0.42s;
}

.social-media-links i:hover{
    transition: all 0.42 ease;
}

.end-text{
    background-color: #edfff1;
    text-align: center;
    padding: 20px;
}

.end-text p{
    color: #111;
    text-transform: capitalize;
}

/* Responsiveness */

@media(max-width:915px){
    .cart img{
        width: 600px;
        /* align-content: center; */
        text-align: center;
    }
}

@media(max-width:750px){
    .update-cart{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cart img{
        width: 520px;
    }
    
}

@media(max-width:550px){
    .cart img{
        width: 400px;
    }
}

@media(max-width:440px){
    .cart img{
        width: 350px;
    }
}

@media(max-width:400px){
    .cart img{
        width: 300px;
    }
}

@media(max-width:340px){
    .cart img{
        width: 250px;
    }
}

/* CSS for Privacy Policy Page */

.privacy-policy {
    padding: 50px 0;
}

.privacy-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
}

.privacy-content h3 {
    margin-top: 30px;
    color: #111;
    font-size: 22px;
}

.privacy-content p {
    color: #333;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
}

</style>
<body>

    <!-- Include Header -->
    <?php include 'header.php'; ?>

    <!-- Privacy Policy Section -->
    <section class="privacy-policy">
        <div class="center-text">
            <h2>Privacy Policy</h2>
        </div>

        <div class="privacy-content">
            <h3>1. Information We Collect</h3>
            <p>We collect personal information such as name, email address, shipping address, and payment details when you make a purchase on our website. We may also collect browsing data, IP address, and device information for analytics and security purposes.</p>

            <h3>2. How We Use Your Information</h3>
            <p>We use the collected information to process orders, communicate with customers, improve our services, personalize user experience, and prevent fraud or misuse of our platform. We may also use cookies and similar technologies to enhance user experience and track website usage.</p>

            <h3>3. Information Sharing and Disclosure</h3>
            <p>We may share your personal information with trusted third-party service providers for order fulfillment, payment processing, shipping, and marketing purposes. However, we do not sell or rent your personal information to third parties for their marketing purposes.</p>

            <h3>4. Data Security</h3>
            <p>We implement various security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h3>5. Your Rights and Choices</h3>
            <p>You have the right to access, update, or delete your personal information stored on our platform. You may also opt-out of receiving marketing communications from us at any time. Additionally, you can manage your cookie preferences through your browser settings.</p>

            <h3>6. Children's Privacy</h3>
            <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child, please contact us immediately to delete the data.</p>

            <h3>7. Changes to this Privacy Policy</h3>
            <p>We reserve the right to update or modify this privacy policy at any time. Any changes will be effective immediately upon posting on this page. We encourage you to review this page periodically for the latest information on our privacy practices.</p>

            <h3>8. Contact Us</h3>
            <p>If you have any questions or concerns about our privacy policy or practices, please contact us at privacy@example.com.</p>
        </div>
    </section>

    <section class="contact">
        <div class="contact-info">
            <div class="first-info">
                <img src="logo.png" alt="">

                <p>House#20/7, Rail Town Canal City, Lahore</p>
                <p>03451920403</p>
                <p>ranaahmadali261@gmail.com</p>

                <div class="social-media-links">
                    <a href=""><i class='bx bxl-facebook-circle' ></i></a>
                    <a href=""><i class='bx bxl-instagram' ></i></a>
                    <a href=""><i class='bx bxl-linkedin' ></i></a>
                </div>
            </div>

            <div class="second-info">
                <p>Support</p>
                <p>About Page</p>
                <p>Contact Us</p>
                <p>Size Guide</p>
                <p>Shopping & Returns</p>
                <p>Privacy</p>
            </div>

            <div class="third-info">
                <h4>Shop</h4>
                <p>Women's Shopping</p>
                <p>Men's Shopping</p>
                <p>Kid's Shopping</p>
            </div>

            <div class="fourth-info">
                <h4>Company</h4>
                <p>About Us</p>
                <p>Blog</p>
                <p>Sign-Up</p>
                <p>Login</p>
            </div>

            <div class="fifth-info">
                <h4>Subscribe</h4>
                <p>Receive Update Hot Deals Discounts At Your Email</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, minus vitae nesciunt quasi enim temporibus? Optio consequuntur ullam, consectetur magnam ipsa fugiat quidem quam quia delectus natus, magni assumenda veniam?</p>
            </div>
        </div>
    </section>

    <div class="end-text">
        <p>Copyright @2022. All Rights Reserved. Designed By Ahmad</p>
    </div>
   

</body>
</html>