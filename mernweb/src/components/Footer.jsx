import React from 'react';

const Footer =() => {
    return(
        <div>
            <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">

          <span class="logo_name">Iskcon Foundation</span>
        </div>
        <div class="media-icons">
          <a href="https://www.facebook.com/"><i class="fa fa-facebook-f"></i></a>
          <a href="https://twitter.com/login"><i class="fa fa-twitter"></i></a>
          <a href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram"></i></a>
          <a href="https://www.linkedin.com/login/"><i class="fa fa-linkedin"></i></a>
          <a href="https://youtu.be/NN0Qie5FJc8"><i class="fa fa-youtube"></i></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Go Through</li>
          <li><a href="#">Home</a></li>
          <li><a href="\contacts">Contact us</a></li>
          <li><a href="\about">About us</a></li>
          <li><a href="\login">Be a Member</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Services</li>
          <li><a href="https://www.iskcon.org/activities/sunday-open-house.php">Sunday Open House</a></li>
          <li><a href="https://iskconnews.org/">News</a></li>
          <li><a href="https://www.iskcon.org/beliefs/bhakti-yoga.php">Bhakti Yoga</a></li>
        </ul>
        <ul class="box input-box">
          <li class="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2021 <a href="https://www.iskcon.org/">International Society for Krishna Consciousness (ISKCON)</a>All rights reserved</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>

</div>
);
}

export default Footer;