<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="https://firebasestorage.googleapis.com/v0/b/umadmtl.appspot.com/o/images%2Ftamashi-glow.png?alt=media&token=66cc4584-03d1-4f6c-9723-c06a7422cdca" alt="logo" class="tamashi">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <img src="https://firebasestorage.googleapis.com/v0/b/umadmtl.appspot.com/o/images%2Ftamashi-glow.png?alt=media&token=66cc4584-03d1-4f6c-9723-c06a7422cdca" class="tamashi">
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>
            
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="http://store.umad.ca" target="_blank" rel="noopener"
                       data-toggle="tooltip" :title="$t('socials.store')">
                        <font-awesome-icon icon="fa-brands fa-shopify" />
                        <span class="nav-link-inner--text d-lg-none">Store</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/groups/1532700160322692" target="_blank" rel="noopener"
                       data-toggle="tooltip" :title="$t('socials.facebook')">
                        <font-awesome-icon icon="fa-brands fa-square-facebook" />
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/MTL_Airdashers" target="_blank" rel="noopener"
                       data-toggle="tooltip" :title="$t('socials.twitter')">
                        <font-awesome-icon icon="fa-brands fa-square-twitter" />
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.youtube.com/c/MontrealAirdashers" target="_blank" rel="noopener"
                       data-toggle="tooltip" :title="$t('socials.youtube')">
                        <font-awesome-icon icon="fa-brands fa-square-youtube" />
                        <span class="nav-link-inner--text d-lg-none">YouTube</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitch.tv/MTLAirdashers"
                       target="_blank" rel="noopener" data-toggle="tooltip" :title="$t('socials.twitch')">
                        <font-awesome-icon icon="fa-brands fa-twitch" />
                        <span class="nav-link-inner--text d-lg-none">Twitch</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://discord.com/invite/kbFYUcu"
                       target="_blank" rel="noopener" data-toggle="tooltip" :title="$t('socials.discord')">
                        <font-awesome-icon icon="fa-brands fa-discord" />
                        <span class="nav-link-inner--text d-lg-none">Discord</span>
                    </a>
                </li>
                <li class="nav-item d-lg-block ml-lg-4">
                    <select v-model="$i18n.locale" @change="event => changeLocale(event.target.value)">
                        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                            {{ lang.toUpperCase() }}
                        </option>
                    </select>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import { setLocale } from "../i18n/locale";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }, 
  data () {
    return { langs: ['fr', 'en'] }
  },
  methods: {
    changeLocale: function(locale) {
        setLocale(locale);
    }
  }
};
</script>
<style>
    .navbar-brand img {
        height: 50px !important;
    }
</style>
