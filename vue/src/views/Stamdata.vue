<!-- Siden er tænkt til at brugeren skal oplyse ØS's konti til 9.05 og 9.59 -->
<!-- Bankudbyder og ØS-udbyder skal laves som dropdown  -->
<!-- Client Credentials bør blive i GitHub Secrets -->

<script setup>
    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'
</script>

<template>

    <h2>Stamdata</h2>
    
    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Administrator</template>
        
        <table>
            <thead>
                <tr>
                    <th class="capitalize">Navn</th>
                    <th class="capitalize">Authenticator ID</th>
                    <th class="capitalize">E-mail</th>                   
                </tr>
            </thead>
            <tr>
                <td><input></input></td>
                <td><input></input></td>
                <td><input></input></td>
            </tr>
        </table>
    </Content>

    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Bankkonti</template>
        
        <table>
            <thead>
                <tr>
                    <th class="capitalize">Navn</th>
                    <th class="capitalize">IBAN</th>
                    <th class="capitalize">Spejlkonto i ØS</th>     
                    <th class="capitalize">Mellemregning</th>     
                </tr>
            </thead>
            <tr>
                <td><input></input></td>
                <td><input></input></td>
                <td><input></input></td>
                <td><input></input></td>
            </tr>
        </table>
        <br />
        <button @click="">Tilføj</button>
    </Content>

</template>
