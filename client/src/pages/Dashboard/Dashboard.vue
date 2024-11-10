<script setup lang="ts">
    import { computed } from 'vue';
    import { listings } from '../../state/state';
    import { storeToRefs } from 'pinia';
    import { chosenListingsStore } from '../../stores/stores';
    import Card from '../../components/Card/Card.vue';

    const { chosenListings } = storeToRefs(chosenListingsStore())
    const availableListings = computed(() => {
        return listings.filter(
            listing => !chosenListings.value.some(chosenListing => chosenListing.companyName === listing.companyName)
        );
    });
</script>

<template>
    <h1>
        Available Surplus 
    </h1>
    <div class="dashboard">
        <div v-for="listing in availableListings" :key="listing.id" class="card">
            <Card :listing="listing" :isButtonDisabled="false"/>
        </div>
    </div>
</template>

<style scoped>
    h1{
        text-align: center;
    }

    .dashboard {
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
