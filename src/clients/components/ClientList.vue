<script setup lang="ts">

import useClients from '@/clients/composables/useClients'

const { clients } = useClients()

</script>
<template>
    <div>
        <ul>
            <li v-for="client of clients" :key="client.id">
                <RouterLink :to="{
                    name: 'client-id',
                    params: { id: client.id }
                }">{{ client.name }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>



<style scoped>

</style>