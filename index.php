<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width; initial-scale=1.0"/>
    <title>Title</title>
    <link rel="stylesheet" href="bootstrap/bootstrap-3.3.7-dist/css/bootstrap.css"/>
    <link rel="stylesheet" href="css/main.css"/>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="bootstrap/bootstrap-3.3.7-dist/js/bootstrap.js"></script>
    <script src="/js/sliders.js"></script>
</head>
<body>
<div class="container">
    <header>
        <div class="col-xs-12">
            <div class="col-xs-3">
                <div class="logo">
                    <img src="/img/logo.png" width="90%"/>
                </div>
            </div>
            <div class="col-xs-4 auth-block">
                <div class="login-form pull-right">
                    <form class="form-inline ">
                        <input type="text" name="username" class="custom-form-control"/>
                        <button type="submit" class="custom-button-form">Zaloguj</button>
                        <p>nie masz jeszcze swojego konta?<a href="#" class="register-link">zarejestruj sie</a></p>
                    </form>
                </div>
            </div>
            <div class="col-xs-2 text-center">
                <div class="social-media">
                    <img src="/img/instagram.png" width="30px"/>
                    <img src="/img/fb.png" height="30px"/>
                </div>
            </div>
            <div class="col-xs-3 navigation-up">
                <div class="header-side-menu navbar pull-right">
                    <ul class="navbar-nav nav">
                        <li><a href="#">O nas</a></li>
                        <li><a href="#">kontakt</a></li>
                        <li><a href="#">archiwum</a></li>
                        <li><a href="#">reklama</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-xs-12">
            <div class="col-xs-8 navbar">
                <ul class="navbar-nav nav">
                    <li><a href="#">main menu</a></li>
                    <li><a href="#">main menu</a></li>
                    <li><a href="#">main menu</a></li>
                    <li><a href="#">main menu</a></li>
                    <li><a href="#">main menu</a></li>
                    <li><a href="#">main menu</a></li>
                    <li><a href="#">main menu</a></li>
                </ul>
            </div>
            <div class="col-xs-4">
                <form class="form-inline pull-right">
                    <input type="text" name="search" class="custom-form-control form-control-long" />
                    <button type="submit" class="custom-button-search">szukaj</button>
                </form>
            </div>
        </div>
    </header>
</div>
<div class="advert">
    <img src="/img/ad_banner.png"/>
</div>
<section>
    <div class="normal-article simple-article">
        <div class="container">
            <div class="col-xs-12 article-container">
                <div class="row">
                    <div class="col-md-12" style="padding: 0;">
                        <div class="article-mini-info">
                            <img src="/img/article_img.png"/>
                            <p>Salone delMobile Milano</p>
                        </div>
                        <div class="col-md-6 title" style="padding-left: 10px;">
                            <h2>Zwykły artykuł newsowy</h2>
                        </div>
                        <div class="col-md-2 info">
                            <div class="date">11 czerwca `18</div>
                            <div class="author">autor</div>
                        </div>
                        <div class="col-md-4" style="padding:0;">
                            <div class="article-detail-buttons pull-right">
                                <button class="btn-medium-menu-article"><img src="/img/fb-mini.png" width="24"/> <span>udostępnij</span></button>
                                <button class="btn-medium-menu-article"><img src="/img/save.png" width="24"/> <span>zapisz w bibliotece</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-8">
                <div class="image-container article-gallery">
                    <div class="gallery-container">
                        <div class="main-photo">
                            <img src="img/article-example.png"/>
                            <div class="image-info">
                            </div>
                        </div>
                        <div class="row photos-container">
                            <div class="col-md-9">
                                <?php for($i=0;$i<4;$i++): ?>
                                    <div class="col-md-3">
                                        <a href="#">
                                            <div class="img-container">

                                            </div>
                                        </a>
                                    </div>
                                <?php endfor; ?>
                            </div>
                            <div class="col-md-1">
                                <div class="img-container-tran">
                                   <span>...</span>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <a href="#">
                                    <div class="img-container-smaller">
                                        <span>+12</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="company-info-container">

                </div>
                <div class="full-article-content">
                    <?php for($i=0;$i<4;$i++): ?>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    <?php endfor; ?>
                </div>
            </div>
            <div class="col-xs-4 advert-container text-right">
                <div class="advert-banner">
                    <img src="/img/advert1.png" width="100%"/>
                </div>
                <div>
                    <h3 class="text-right"><strong>architektura</strong></h3>
                    <h5 class="text-right">popularne artykuly</h5>
                    <div class="side-article text-right">
                        <div class="side-article-header">
                            <div class="side-article-text">
                                <p>W poszukiwaniu łódzkiego genius loci lub treci wers</p>
                            </div>
                            <div class="side-article-info">
                                <p>redakcja AiB</p>
                                <p>13.06.2018</p>
                            </div>
                        </div>
                        <div class="side-article-img">
                            <div class="img-container">

                            </div>
                        </div>
                    </div>
                    <div class="side-article text-right">
                        <div class="side-article-header">
                            <div class="side-article-text">
                                <p>W poszukiwaniu łódzkiego genius loci lub treci wers</p>
                            </div>
                            <div class="side-article-info">
                                <p>redakcja AiB</p>
                                <p>13.06.2018</p>
                            </div>
                        </div>
                        <div class="side-article-img">
                            <div class="img-container">

                            </div>
                        </div>
                    </div>
                    <div class="side-article text-right">
                        <div class="side-article-header">
                            <div class="side-article-text">
                                <p>W poszukiwaniu łódzkiego genius loci lub treci wers</p>
                            </div>
                            <div class="side-article-info">
                                <p>redakcja AiB</p>
                                <p>13.06.2018</p>
                            </div>
                        </div>
                        <div class="side-article-img">
                            <div class="img-container">

                            </div>
                        </div>
                    </div>
                    <div class="side-article text-right">
                        <div class="side-article-header">
                            <div class="side-article-text">
                                <p>W poszukiwaniu łódzkiego genius loci lub treci wers</p>
                            </div>
                            <div class="side-article-info">
                                <p>redakcja AiB</p>
                                <p>13.06.2018</p>
                            </div>
                        </div>
                        <div class="side-article-img">
                            <div class="img-container">

                            </div>
                        </div>
                    </div>
                    <div class="side-article text-right">
                        <div class="side-article-header">
                            <div class="side-article-text">
                                <p>W poszukiwaniu łódzkiego genius loci lub treci wers</p>
                            </div>
                            <div class="side-article-info">
                                <p>redakcja AiB</p>
                                <p>13.06.2018</p>
                            </div>
                        </div>
                        <div class="side-article-img">
                            <div class="img-container">

                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</section>
<footer>
    <div class="footer-partners-container">
        <div class="footer-partners container">
            <img src="/img/partner0.png"/>
            <img src="/img/partner1.png"/>
            <img src="/img/partner2.png"/>
            <img src="/img/partner3.png"/>
            <img src="/img/partner4.png"/>
            <img src="/img/partner5.png"/>
        </div>
    </div>
    <div class="footer-container">
        <div class="footer container">
            <div class="col-xs-12">
                <div class="col-xs-2">
                    <p><span class="glyphicon glyphicon-copyright-mark"></span>wydawncitwo AiB 2018</p>
                    <p class="logo-footer"><img src="/img/logo_footer.png" width="120px" /> </p>
                    <ul>
                        <li><a href="#">polityka prywatności</a></li>
                        <li><a href="#">menu stopki</a></li>
                        <li><a href="#">menu stopki</a></li>
                    </ul>
                </div>
                <div class="col-xs-10">
                    <p class="footer-header"><span>Zamów prenumeratę A&B.</span> Wersja papierowa i cyfrowa do wyboru</p>
                    <div class="footer-slider">
                        <div class="navigation">
                            <div class="navigation-left">
                                <img src="/img/naviagtion-arrow.png"/>
                            </div>
                            <div class="navigation-right">
                                <img src="/img/naviagtion-arrow.png"/>
                            </div>
                        </div>
                        <div class="slider-static-container">
                            <div class="slider-content">
                                <img src="/img/AB1.png"/>
                                <img src="/img/AB2.png"/>
                                <img src="/img/AB3.png"/>
                                <img src="/img/AB4.png"/>
                                <img src="/img/AB5.png"/>
                                <img src="/img/AB5.png"/>
                                <img src="/img/AB2.png"/>
                                <img src="/img/AB3.png"/>
                                <img src="/img/AB1.png"/>
                                <img src="/img/AB4.png"/>
                                <img src="/img/AB5.png"/>
                                <img src="/img/AB2.png"/>
                                <img src="/img/AB3.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</body>
</html>