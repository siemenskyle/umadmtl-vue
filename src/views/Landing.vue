<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <img class="background" v-lazy="'img/umad.jpg'" />
                </div>
                
                <div class="container shape-container d-flex">
                    <div class="col px-0 text-container">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">{{ $t("landing.top.mainTitle") }}
                                    <span>{{ $t("landing.top.subTitle") }}</span>
                                </h1>
                                <p class="lead  text-white">{{ $t("landing.top.description") }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-controller" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">{{ $t("landing.cards.card1.title") }}</h6>
                                    <p class="description mt-3">
                                        {{ $t("landing.cards.card1.description") }}
                                    </p>
                                    <div>
                                        <badge type="primary" rounded>{{ $t("landing.cards.card1.chip1") }}</badge>
                                        <badge type="primary" rounded>{{ $t("landing.cards.card1.chip2") }}</badge>
                                        <badge type="primary" rounded>{{ $t("landing.cards.card1.chip3") }}</badge>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-chart-bar-32" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">{{ $t("landing.cards.card2.title") }}</h6>
                                    <p class="description mt-3">
                                        {{ $t("landing.cards.card2.description") }}
                                    </p>
                                    <div>
                                        <badge type="primary" rounded>{{ $t("landing.cards.card2.chip1") }}</badge>
                                        <badge type="primary" rounded>{{ $t("landing.cards.card2.chip2") }}</badge>
                                        <badge type="primary" rounded>{{ $t("landing.cards.card2.chip3") }}</badge>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-world" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">{{ $t("landing.cards.card3.title") }}</h6>
                                    <p class="description mt-3">
                                        {{ $t("landing.cards.card3.description") }}
                                    </p>
                                    <div>
                                        <badge type="primary" rounded>{{ $t("landing.cards.card3.chip1") }}</badge>
                                        <badge type="primary" rounded>{{ $t("landing.cards.card3.chip2") }}</badge>
                                    </div>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="img/umad2.jpg" class="img-fluid">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-satisfied" class="mb-5" size="lg" type="success" shadow
                                  rounded></icon>
                            <h3>{{ $t("landing.section2.title") }}</h3>
                            <p>
                                {{ $t("landing.section2.description") }}
                            </p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-chat-round"></badge>
                                        <h6 class="mb-0"><a href="https://discord.com/invite/kbFYUcu" target="_blank">{{ $t("socials.discord") }}</a></h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-send"></badge>
                                        <h6 class="mb-0"><a href="https://twitter.com/MTL_Airdashers" target="_blank">{{ $t("socials.twitter") }}</a></h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-like-2"></badge>
                                        <h6 class="mb-0"><a href="https://www.facebook.com/groups/1532700160322692" target="_blank">{{ $t("socials.facebook") }}</a></h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="display-3">{{ $t("landing.section3.title") }}
                            <span class="text-primary">{{ $t("landing.section3.subTitle") }}</span>
                        </h2>
                        <p class="lead">
                            {{ $t("landing.section3.blurb") }}
                        </p>
                        <div class="text-center">
                            <h4 class="display-4 mb-5 mt-5">{{ $t("landing.section3.partners") }}</h4>
                            <div class="row justify-content-center">
                                <div class="col-lg-2 col-4">
                                    <a href="https://incendium.gg" target="_blank">
                                    <img v-lazy="'img/incendium.png'" class="img-fluid partners">
                                    </a>
                                </div>
                                <div class="col-lg-5 col-4">
                                    <a href="https://lanets.ca" target="_blank">
                                    <img v-lazy="'img/lanets.png'" class="img-fluid partners">
                                    </a>
                                </div>
                                <div class="col-lg-3 col-4">
                                    <a href="https://twitter.com/ssbmontreal" target="_blank">
                                    <img v-lazy="'img/ssbmontreal.png'" class="img-fluid partners">
                                    </a>
                                </div>
                                <div class="col-lg-2 col-4">
                                    <a href="https://twitter.com/MTLGamingCentre" target="_blank">
                                    <img v-lazy="'img/mgc.png'" class="img-fluid partners">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>
    .background {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .text-container {
        background: #00000099;
        padding-left: 10px !important;
    }
    .partners {
        max-height: 88px;
    }
</style>

<script>
export default {
  name: "home",
  components: {}
};
</script>
