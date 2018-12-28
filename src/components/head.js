import React from 'react';
import Helmet from "react-helmet";
import OgImage from '../images/favicons/og-image.jpg';
import AppleTouch from "../images/favicons/apple-touch-icon.png";
import SafariPinned from "../images/favicons/safari-pinned-tab.svg";
import Fav32 from "../images/favicons/favicon-32x32.png";
import Fav16 from "../images/favicons/favicon-16x16.png";
import Favico from "../images/favicons/favicon.ico";

const Head = () => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
     Josue Arce | Web Developer
    </title>
    <link rel="shortcut icon" href={Favico} />
    <meta name="description" content="D.C. based web developer who specializes in building accessible web experiences for all." />
    <meta name="keywords" content="Josue Arce, Josue, Arce, web development, javascript, portfolio, web developer, wordpress, front-end development" />
    <meta name="google-site-verification" content="KzcMBK5TB7k5leDS0e2z2RoxDnyNvHoUgECD8NY0rR4" />
    <meta property="og:title" content="Josue Arce | Web Developer" />
    <meta property="og:description" content="D.C. based web developer who specializes in building accessible web experiences for all."/>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://josuearce.com" />
    <meta property="og:site_name" content="Josue Arce | Web Developer" />
    <meta property="og:image" content={OgImage} />
    <meta property="og:image:width" content="279" />
    <meta property="og:image:height" content="279" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:locale" content="en_US" />
    <meta itemProp="name" content="Josue Arce | Web Developer" />
    <meta itemProp="description" content="D.C. based web developer who specializes in building accessible web experiences for all." />
    <meta itemProp="image" content={OgImage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://josuearce.com" />
    <meta name="twitter:site" content="josuearce_" />
    <meta name="twitter:creator" content="josuearce_" />
    <meta name="twitter:title" content="Josue Arce | Web Developer" />
    <meta name="twitter:description" content="D.C. based web developer who specializes in building accessible web experiences for all." />
    <meta name="twitter:image" content={OgImage} />
    <meta name="twitter:image:alt" content="Josue Arce | Web Developer" />

     <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} />
     <link rel="icon" type="image/png" sizes="32x32" href={Fav32} />
     <link rel="icon" type="image/png" sizes="16x16" href={Fav16} />
     <link rel="mask-icon" href={SafariPinned} color="#ef4379" />
     <meta name="msapplication-TileColor" content="#da532c" />
     <meta name="theme-color" content="#313131" />
   </Helmet>
);

export default Head;