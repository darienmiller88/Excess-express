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
        logo: "/public/logos/McDonalds.png",
        companyName: 'McDonalds',
        distance: 5,
        surplus: 100,
        expirationDate: '2023-12-31'
    },
    {
        id: 2,
        logo: '/public/logos/burger_king.png',
        companyName: 'Burger King',
        distance: 10,
        surplus: 200,
        expirationDate: '2023-11-30'
    },
    {
        id: 3,
        logo: '/public/logos/Chick.png',
        companyName: 'Chick-fil-A',
        distance: 10,
        surplus: 200,
        expirationDate: '2023-11-30'
    },
    {
        id: 4,
        logo: '/public/logos/Wawa.png',
        companyName: 'Wawa',
        distance: 10,
        surplus: 200,
        expirationDate: '2023-11-30'
    },
    {
        id: 5,
        logo: '/public/logos/wendy.png',
        companyName: "Wendy's",
        distance: 10,
        surplus: 200,
        expirationDate: '2023-11-30'
    },
    {
        id: 6,
        logo: '/public/logos/popeyes.png',
        companyName: 'Popeyes',
        distance: 10,
        surplus: 200,
        expirationDate: '2023-11-30'
    },
    {
        id: 7,
        logo: '/public/logos/kfc.png',
        companyName: 'KFC',
        distance: 10,
        surplus: 200,
        expirationDate: '2023-11-30'
    },
    {
        id: 8,
        logo: '/public/logos/starbucks.png',
        companyName: 'Starbucks',
        distance: 10,
        surplus: 200,
        expirationDate: '2023-11-30'
    },
    {
        id: 9,
        logo: '/public/logos/tacobell.png',
        companyName: "Taco Bell",
        distance: 10,
        surplus: 200,
        expirationDate: '2023-11-30'
    },
    {
        id: 10,
        logo: '/public/logos/shakeshack.png',
        companyName: 'Shake Shack',
        distance: 10,
        surplus: 200,
        expirationDate: '2023-11-30'
    },
    {
        id: 11,
        logo: '/public/logos/dominos.png',
        companyName: "Domino's",
        distance: 10,
        surplus: 200,
        expirationDate: '2023-11-30'
    },
    {
        id: 12,
        logo: '/public/logos/dunkin.png',
        companyName: "Dunkin' Donuts",
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
            <div class="card-header">
                <img :src="listing.logo" alt="Company Logo" class="company-logo">
                <h2>{{ listing.companyName }}</h2>
            </div>
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
    background-color: #f9f9f9;
    padding: 20px 20px; /* Increased left and right padding */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    justify-content: center;
}

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

button {
    background-color: #007bff;
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
