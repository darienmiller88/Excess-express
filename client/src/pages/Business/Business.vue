<script setup lang="ts">
    import { ref } from 'vue';
    import { listings } from '../../state/state';
    import Card from '../../components/Card/Card.vue';

    const numTickets = ref<number>(3)
</script>

<template>
    <div class="tickets">
        Tickets Remaining: {{ numTickets }}
    </div>
    <div class="cards" v-for="listing in listings">
        <Card :listing="listing" :isButtonDisabled="true" />
    </div>
    <div>
        Business
    </div>
</template>

<style scoped lang="scss">
    .tickets{
        font-size: 30px;
    }
</style>