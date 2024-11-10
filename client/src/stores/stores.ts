import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Listing } from "../types/types"

export const chosenListingsStore = defineStore("chosen_listings", () => {
    const chosenListings = ref<Listing[]>([])

    // Adds a listing to local storage, maxes at only 3.
    const addListing = (listing: Listing) => {
        if (chosenListings.value.length > 3) {
            return
        }

        chosenListings.value.push(listing)
    }

    const removeListing = (listingToRemove: Listing) => {
        chosenListings.value = chosenListings.value.filter(listing => listing.companyName != listingToRemove.companyName)
        
        console.log("array after remove:", chosenListings.value);
        
    }

    return { chosenListings, addListing, removeListing }
},  {
    persist: true
})