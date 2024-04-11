<script setup>
    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'
</script>

<template>

    <h2>Konteringsregler</h2>

    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Undtagelser</template>

        <span class="paragraph">
            Visse bankposteringer har andre snitflader ind i jeres økonomisystem og skal derfor undtages her. Hvis man har KMD Opus er det f.eks. leverandørudbetalinger.
        </span>
        
        <table>
            <thead>
                <tr>
                    <th class="capitalize">Reference</th>
                    <th class="capitalize">Afsender</th>
                    <th class="capitalize">Posteringstype</th>
                    <th class="capitalize">Advis</th>
                    <th class="capitalize">End-to-end-reference</th>
                    <th class="capitalize">Beløb</th>
                </tr>
            </thead>
            <tr>
                <td><input></input></td>
                <td><input></input></td>
                <td><input></input></td>
                <td><input></input></td>
                <td><input></input></td>
                <td><input></input><input></input></td>
                <!-- Grå input fields når select er uudfyldt -->
            </tr>
        </table>
        <br />
        <button @click="">Tilføj</button>
        <!-- Tilføjer en uudfyldt regel for enden af listen -->
    </Content>

</template>
