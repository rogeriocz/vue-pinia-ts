import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '@/clients/interfaces/client';


export const useClientsStore = defineStore('clients', () => {

    const currentPage = ref<number>(1)
    const totalPage = ref<number>(5)
    const clients = ref<Client[]>([])



    return {
        // State properties
        currentPage,
        totalPage,
        clients,

        // Getters
        //squareCount: computed(() => count.value * count.value),


        // Actions
        setClients(newClients: Client[]) {
            clients.value = newClients;
        },
        setPage(page: number) {
            if (currentPage.value === page) return;

            currentPage.value = page;
        }

    }
});