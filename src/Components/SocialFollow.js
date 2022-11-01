import React from "react";
import "./SocialFollow.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
    <h3 className="FollowText">Follow us on our socials</h3>
    <div className="SocialMenu">
        <a href="https://www.youtube.com/c/manipalthetalk"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com/manipalthetalk"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/manipalthetalk" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/manipalthetalk/"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>
    </div>
  );
}
