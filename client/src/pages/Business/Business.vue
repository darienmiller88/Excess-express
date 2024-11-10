<script setup lang="ts">
    import { computed } from 'vue';
    import { storeToRefs } from 'pinia';
    import { chosenListingsStore } from '../../stores/stores';
    import Card from '../../components/Card/Card.vue';
    import { maxTickets } from "../../state/state"

    const { chosenListings } = storeToRefs(chosenListingsStore())
    const numTickets = computed(() => {
        return maxTickets - chosenListings.value.length
    })
</script>

<template>
    <div class="tickets">
        Tickets Remaining: {{ numTickets }}
    </div>
    <div class="cards" v-for="listing in chosenListings">
        <Card :listing="listing" :isButtonDisabled="true" />
    </div>
</template>

<style scoped lang="scss">
    .tickets{
        font-size: 30px;
    }
</style>