<!-- Siden er tænkt til at brugeren skal oplyse ØS's konti til 9.05 og 9.59 -->
<!-- På siden skal også bankkontonumre oplyses, med mulighed for at tilføje flere konti -->
<!-- Hvis de andre banker har nogenlunde samme setup som Nordea, skal administrators ID og kontakt også udfyldes på siden -->
<!-- Client Credentials, bankudbyder og ØS-udbyder bør blive i GitHub Secrets -->

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
                <td>Jan Mølbæk</td>
                <td>0123456890</td>
                <td>regnskab@randers.dk</td>
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
                    <th class="capitalize">Registreringsnummer</th>
                    <th class="capitalize">Kontonummer</th>                   
                </tr>
            </thead>
            <tr>
                <td>Hovedkonto</td>
                <td>2212</td>
                <td>5908764988</td>
            </tr>
        </table>
        <button @click="">Tilføj</button>
    </Content>

</template>
