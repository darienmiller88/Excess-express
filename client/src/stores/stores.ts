import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Listing } from "../types/types"
import { maxTickets } from "../state/state"

export const chosenListingsStore = defineStore("chosen_listings", () => {
    const chosenListings = ref<Listing[]>([])

    const addListing = (listing: Listing) => {
        if (chosenListings.value.length >= maxTickets) {
            return
        }

        chosenListings.value.push(listing)
    }

    const removeListing = (listingToRemove: Listing) => {
        if (chosenListings.value.length > 0) {
            chosenListings.value = chosenListings.value.filter(listing => listing.companyName != listingToRemove.companyName)        
        }
    }

    return { chosenListings, addListing, removeListing }
},  {
    persist: true
})