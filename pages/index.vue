<template>
    <div>
        <slices-block :slices="page.data.body" />

        <!-- Resume & Portfolio -->
        <div class="mb-5">
            <b-btn
                variant="outline-success"
                class="mr-2"
                href="https://albertpratomo.cdn.prismic.io/albertpratomo/793ac368-d49a-486d-a3d8-ae73e50c6068_albert-cv-2019.pdf"
                target="_blank"
            >
                Resume
            </b-btn>

            <b-btn
                variant="outline-success"
                href="https://albertpratomo.cdn.prismic.io/albertpratomo/9a962bb8-9e60-434b-ad2e-b88a30c5ab99_albert-portfolio-2019.pdf"
                target="_blank"
            >
                Portfolio
            </b-btn>
        </div>

        <!-- Social Links -->
        <div>
            <a
                href="https://github.com/albertpratomo"
                target="_blank"
                class="mr-2"
                style="color: #000;"
            >
                <fa :icon="['fab', 'github']" size="lg" />
            </a>

            <a
                href="https://linkedin.com/in/albertpratomo/"
                target="_blank"
                class="mr-2"
                style="color: #0077b5;"
            >
                <fa :icon="['fab', 'linkedin']" size="lg" />
            </a>

            <a
                href="https://instagram.com/albertpratomo"
                target="_blank"
                class="mr-2"
            >
                <fa :icon="['fab', 'instagram']" size="lg" />
            </a>

            <a
                href="https://youtube.com/albertpratomoo"
                target="_blank"
                style="color: #f00;"
            >
                <fa :icon="['fab', 'youtube']" size="lg" />
            </a>
        </div>
    </div>
</template>

<script>
import SlicesBlock from '@/components/SlicesBlock';

export default {
    name: 'Home',
    components: {SlicesBlock},
    async asyncData({$prismic}) {
        const page = await $prismic.api.getByUID('page', 'home');

        return {page};
    },
};
</script>
