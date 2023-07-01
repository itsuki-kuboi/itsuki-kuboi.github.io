/*レスポンシブ対応　参考URL*/
/*https://www.site-convert.com/archives/1528#outline__1*/
/*https://www.webdesignleaves.com/wp/htmlcss/450/*/

/* 2023.7 : cssの分割、resetCSSの導入 */
/* https://diytech.website/preparing-for-responsive/ */

/*charsetは各HTMLで宣言しないと反映されない*/

document.write(`
<meta http-equiv="Content-Type" content="text/html">
<meta http-equiv="Content-Style-Type" content="text/css">

<!-- viewportの設定 -->
<!--<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">-->
<meta name="viewport" content="width=device-width, initial-scale=0.6, minimum-scale=0.6, user-scalable=yes">
<!--<link rel="stylesheet" href="./css/destyle.css"> --> <!-- リセットCSS -->


<!-- リセットCSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css">
<!-- stylesheetCSS -->
<link rel="stylesheet" href="./css/stylesheet.css">
<!-- responsiveCSS -->
<link rel="stylesheet" href="./css/responsive.css">

<title>Itsuki KUBOI's  Website</title>

<!-- 
<link rel="icon" href="/icon/202202/icon.png" type="image/png">
-->

`)
