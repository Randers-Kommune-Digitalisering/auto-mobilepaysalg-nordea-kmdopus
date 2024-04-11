<!-- Old code start -->

<!-- <script setup>
    import { ref } from 'vue'
    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const konteringsregler = ref(null)
    
    // Fetch regler
    fetch('/api/konteringsregler/get')
        .then(response => response = response.json())
        .then(value => konteringsregler.value = value)
        //.then(value => console.log(value))

    const keyMap = {
        "id": {
            "id": 4,
            "key": "ruleId"
        },
        "navn": {
            "id": 0,
            "key": "value"
        },
        "nummer": {
            "id": 1,
            "key": "value"
        },
        "posteringstekst": {
            "id": 3,
            "key": "Posteringstekst"
        }/*,
        "artskonto": {
            "id": 3,
            "key": "Artskonto"
        },
        "PSP": {
            "id": 3,
            "key": "PSP"
        }*/
    }

    /* Example data format
    [
        {
            "name": "name",
            "value": "Klub Øster Tørslev"
        },
        {
            "name": "myShopNumber",
            "value": "280120"
        },
        {
            "name": "brandId"
        },
        {
            "Posteringstekst": "MP Klub Øster Tørslev",
            "Artskonto": "72000000",
            "PSP": "XG-0000002668-00019"
        },
        {
            "ruleId": 8
        }
    ]
    */
</script>

<template>

    <h2>Konteringsregler</h2>
    
    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Aktuelle konteringsregler</template>

        <span class="paragraph">
            Herunder kan de aktuelle konteringsregler ses, rettes og slettes. Vær opmærksom på at rettelser overskrives hvis der laves ændringer i <code>konteringsregler.csv</code>.
        </span>
        
        <table>
            <thead>
                <tr>
                    <th v-for="key in Object.keys(keyMap)" class="capitalize">{{key}}</th>
                    <th class="capitalize">Navn</th>
                    <th class="capitalize">Nummer</th>
                    <th></th>
                </tr>
            </thead>
            <tr v-for="obj in konteringsregler">
                <td v-for="key in keyMap">{{ obj[key.id][key.key] }}</td>
                <td>{{ obj[keyMap.navn.id][keyMap.navn.key] }}</td>
                <td>{{ obj[keyMap.nummer.id][keyMap.nummer.key] }}</td>
                <td><router-link :to="'/retkonteringsregel/' + obj[ keyMap.id.id ][ keyMap.id.key ]"><button @click="">Rediger</button></router-link></td>
            </tr>
        </table>
    </Content>

</template> -->

<!-- Old code end -->

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
        <template #heading>Aktive regler</template>
        
        <table>
            <thead>
                <tr>
                    <th class="capitalize">Reference</th>
                    <th class="capitalize">Afsender</th>
                    <th class="capitalize">Posteringstype</th>
                    <th class="capitalize">Advis</th>
                    <th class="capitalize">End-to-end-reference</th>
                    <th class="capitalize">Beløb</th>
                    <th></th>
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
                <td><button @click="">Ret</button></td> 
                <!-- Springer til RetKonteringsregel, hvor kontering kan ændres og reglen kan slettes eller deaktiveres -->
            </tr>
        </table>
        <br />
        <button @click="">Tilføj</button>
        <!-- Tilføjer en uudfyldt regel for enden af listen -->
    </Content>

</template>

