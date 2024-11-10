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
    <h1>Current Orders</h1>
    <div class="cards">
        <Card v-for="listing in chosenListings" :listing="listing" :isButtonDisabled="true" />
    </div>
</template>

<style scoped lang="scss">
    .tickets{
        font-size: 30px;
    }

    h1{
        text-align: center;
    }

    .cards{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        background-color: #f9f9f9;
        padding: 20px 20px; /* Increased left and right padding */
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        justify-content: center;
    }
</style>