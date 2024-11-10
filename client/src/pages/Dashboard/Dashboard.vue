<script setup lang="ts">
import { ref } from 'vue';

interface Listing {
    id: number;
    logo: string;
    companyName: string;
    distance: number;
    surplus: number;
    expirationDate: string;
}

const listings = ref<Listing[]>([
    {
        id: 1,
        logo: 'path/to/logo1.png',
        companyName: 'Company A',
        distance: 5,
        surplus: 100,
        expirationDate: '2023-12-31'
    },
    {
        id: 2,
        logo: 'path/to/logo2.png',
        companyName: 'Company B',
        distance: 10,
        surplus: 200,
        expirationDate: '2023-11-30'
    }
    // Add more listings as needed
]);

const connectWithBusiness = (id: number) => {
    console.log(`Connecting with business ID: ${id}`);
};
</script>


<template>
    <h1>
        Dashboard
    </h1>
    <div class="dashboard">
        <div v-for="listing in listings" :key="listing.id" class="card">
            <img :src="listing.logo" alt="Company Logo" class="company-logo">
            <h2>{{ listing.companyName }}</h2>
            <p>Distance: {{ listing.distance }} miles</p>
            <p>Surplus: {{ listing.surplus }} units</p>
            <p>Expiration Date: {{ listing.expirationDate }}</p>
            <button @click="connectWithBusiness(listing.id)">Connect</button>
        </div>
    </div>
</template>


<style scoped>
.dashboard {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.dashboard {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card {
    transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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

button {
    transition: background-color 0.2s, transform 0.2s;
}

button:active {
    transform: scale(0.95);
}

.card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    width: 200px;
    text-align: center;
}

.company-logo {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 8px;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
