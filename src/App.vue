<template>
    <div id="app">
        <v-app>
            <github-corners repo="AaronVigal/" bg-color="#424242"></github-corners>

            <div class="main">
                <div class="wrap-banner">
                    <div class="forward">
                        <HeaderComponent></HeaderComponent>
                        <TypedText class="vue-typer"></TypedText>

                        <div class="social">
                            <vue-goodshare-facebook page_url="https://www.facebook.com/VigalAaron" title_social="Facebook" has_icon></vue-goodshare-facebook>
                            <vue-goodshare-twitter page_url="https://twitter.com/aaronvigal" title_social="Twitter" has_icon></vue-goodshare-twitter>
                            <vue-goodshare-reddit page_url="https://www.reddit.com/user/AaronVigal" title_social="Reddit" has_icon></vue-goodshare-reddit>
                            <vue-goodshare-google-plus page_url="https://plus.google.com/u/0/+AaronVigal" title_social="Google+" has_icon></vue-goodshare-google-plus>
                            <vue-goodshare-email page_url="mailto:admin@aaronvigal.com" title_social="Email" has_icon></vue-goodshare-email>
                        </div>
                        <!--<Resume></Resume>-->
                    </div>
                    <vue-particles color="#424242" :particlesNumber="50" :move-speed="1"></vue-particles>
                    <!--<breadcrumb></breadcrumb> &lt;!&ndash; Footer &ndash;&gt;-->
                </div>
            </div>

            <!--<div class="gradient">&nbsp;</div>-->

            <!--<div class="after">-->
                <!--<scrollactive class="my-nav">-->
                <!--<div class="row">-->
                    <!--<div class="column"><p>Text1</p></div>-->
                    <!--<div class="column"><p>Text2</p></div>-->
                    <!--<div class="column"><p>Text3</p></div>-->
                <!--</div>-->
                <!--</scrollactive>-->
            <!--</div>-->

        </v-app>
    </div>
</template>

<script>
    import Breadcrumb from "./components/breadcrumb";
    import TypedText from "./components/typed-text";
    import HeaderComponent from "./components/header_component";
    import Resume from "./components/resume";
    import VueGoodshareEmail from "vue-goodshare/src/providers/Email";
    import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook";
    import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter";
    import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit";
    import VueGoodshareGooglePlus from "vue-goodshare/src/providers/GooglePlus";
    import VueGoodshareWhatsApp from "vue-goodshare/src/providers/WhatsApp";
    import Avatar from "vue-avatar/src/Avatar";

    export default {
        name: 'app',
        components: {
            Avatar,
            VueGoodshareWhatsApp,
            VueGoodshareGooglePlus,
            VueGoodshareReddit,
            VueGoodshareTwitter,
            VueGoodshareFacebook,
            VueGoodshareEmail,
            HeaderComponent,
            TypedText,
            Breadcrumb,
            Resume,
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        /*color: #2c3e50;*/
        color: #000000;
        background-color: #FFFFFF;
    }

    .after {
        height: 300px;
    }

    .vue-typer {
        font-size: calc(15px + .5vw);
        color: #FFFFFF;
    }

    .vue-typer .typed {
        color: #808080;
    }

    .main {
        color: #FFFFFF;
    }

    .gradient {
        box-shadow: 2px 6px 17px rgba(0, 0, 0, 0.39);
        background-color: #303030;
        margin-bottom: 5vh;
    }

    .wrap-banner {
        position: relative;
        height: 100vh;
        width: 100vw;
        display: block;
        justify-content: center;
        background-color: #303030;
    }

    .forward {
        position: absolute;
        z-index: 999;
        width: 100%;
        height: 100%;
        display: block;
        pointer-events: none;
    }

    .social {
        /*margin-top: 10rem;*/
        margin-top: calc(15px + 10vh);
        display: block;
        pointer-events: all;
    }

    .column {
        float: left;
        width: 33.33%;
    }

    @media screen and (max-width: 600px) {
        .column {
            width: 100%;
        }
    }

    /* Clear floats after the columns */
    .row:after {
        content: "";
        display: table;
        clear: both;
    }

</style>
