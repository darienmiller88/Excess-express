<script setup lang="ts">
    import { Listing } from "../../types/types"
    import { chosenListingsStore } from "../../stores/stores"
    // import { storeToRefs } from "pinia";
    
    // const { chosenListings } = storeToRefs(chosenListingsStore())
    const { addListing, removeListing } = chosenListingsStore()
    const props = defineProps<{
        listing: Listing;
        isButtonDisabled: boolean;
    }>();

    
</script>

<template>  
    <div class="card">
        <div class="card-header">
            <img :src="props.listing.logo" alt="Company Logo" class="company-logo">
            <h2>{{ props.listing.companyName }}</h2>
        </div>
        <p>Distance: {{ props.listing.distance }} miles</p>
        <p>Surplus: {{ props.listing.surplus }} units</p>
        <p>Expiration Date: {{ props.listing.expirationDate }}</p>
        <button v-if="!isButtonDisabled" class="add" @click="() => addListing(listing)">Connect</button>
        <button v-else class="remove" @click="() => removeListing(listing)">Remove</button>
    </div>
</template>

<style scoped>
    .card {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 16px;
        width: 200px;
        text-align: center;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .card:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .card-header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
    }

    .company-logo {
        width: 24px;
        height: 24px;
        object-fit: cover;
        margin-right: 8px;
    }

    h1 {
        font-size: 2.5em;
        color: #333;
        margin-bottom: 20px;
        text-align: center;
    }

    h2 {
        font-size: 1.5em;
        color: #007bff;
    }

    p {
        font-size: 1em;
        color: #666;
    }

    .add{
        background-color: #007bff;
    }

    .remove{
        background-color: red;
    }

    button, .remove {
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s, transform 0.2s;
    }

    button:hover {
        background-color: #0056b3;
    }

    button:active {
        transform: scale(0.95);
    }
</style>