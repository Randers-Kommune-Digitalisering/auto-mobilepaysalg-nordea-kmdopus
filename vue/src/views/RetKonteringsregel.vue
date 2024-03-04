<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const konteringsregel = ref(null)

    const route = useRoute()
    console.log("param: " + route.params.id)
    
    // Fetch regler
    fetch('/api/konteringsregler/get/' + route.params.id)
        .then(response => response = response.json())
        .then(value => konteringsregel.value = value)
        .then(value => console.log(value))

    const keyMap = {
        "id": {
            "id": 4,
            "key": "ruleId",
            "disabled": true
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
        },
        "artskonto": {
            "id": 3,
            "key": "Artskonto"
        },
        "PSP": {
            "id": 3,
            "key": "PSP"
        }
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

    <h2>Konteringsregel #{{konteringsregel[ keyMap.id.id ][ keyMap.id.key ]}}</h2>
    
    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Redigér konteringsregel</template>
        
        <form @submit.prevent="addDataSample">
            <fieldset>
                <div class="flexbox">
                    <div v-for="key in Object.keys(keyMap)">
                        <label :for="key" class="capitalize">{{key}}</label>
                        <input type="text" placeholder="..." :id="key" v-model="konteringsregel[ keyMap[key].id ][ keyMap[key].key ]" :disabled="keyMap[key].disabled" required>
                    </div>
                </div>

                <button class="red">Slet regel</button>
                <input type="submit" value="Gem rettelser" />
            </fieldset>
        </form>
    </Content>

</template>
<style scoped>
input[type="submit"]
{
    margin-left: 1rem;
}
</style>