<template>
    <section>vuex--state</section>
</template>

<script>
    import { mapState } from 'vue';
    import { createNamespacedHelpers } from 'vuex';

    const { mapState: mapStateProduct } = createNamespacedHelpers('product');

    export default {
        computed: {
            ...mapState(['count']),

            ...mapState({
                count: state => state.count,

                countAlias: 'count'
            }),

            ...mapState('product', {
                count: state => state.count
            }),

            ...mapStateProduct({
                count: state => state.count
            })
        }
    }
</script>
