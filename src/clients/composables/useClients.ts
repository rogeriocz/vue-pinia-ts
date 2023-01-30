import { useQuery } from '@tanstack/vue-query'
import clientsApi from '@/api/clients-api'
import type { Client } from '@/clients/interfaces/client'
import { useClientsStore } from '@/store/clients'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const getClients = async (): Promise<Client[]> => {

    const { data } = await clientsApi.get<Client[]>('/clients?_page=1')
    return data
}

const useClients = () => {

    const store = useClientsStore();
    const { currentPage, totalPage, clients } = storeToRefs(store);

    const { isLoading, data } = useQuery(
        ['clients?page=', 1],
        () => getClients()
    )
    watch(data, clients => {
        if (clients)
            store.setClients(clients)
    })
    return {
        isLoading,
        clients,
    }
}

export default useClients