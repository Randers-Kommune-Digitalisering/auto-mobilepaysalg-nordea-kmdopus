<script setup>
    import { ref } from 'vue'
    import { useRouter, useRoute } from 'vue-router'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const konteringsregel = ref(null)
    const isUpdating = ref(false)
    const hasUpdated = ref(false)

    const router = useRouter()
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
    
    function updateRule()
    {
        isUpdating.value = true
        
        fetch('/api/konteringsregler/set/' + route.params.id,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(konteringsregel.value)
        })

            .then(hasUpdated.value = true)
            .then(isUpdating.value = false)
    }


    const awaitingDeleteConfirmation = ref(false)
    
    function deleteRule()
    {
        if(!awaitingDeleteConfirmation.value)
            awaitingDeleteConfirmation.value = true

        else
        {
            fetch('/api/konteringsregler/del/' + route.params.id,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(konteringsregel.value)
            })
            .then( 
                router.push('/konteringsregler')
            )
        }
        /*
        
        
            .then(hasUpdated.value = true)
            .then(isUpdating.value = false)*/
    }


</script>

<template>

    <h2>Konteringsregel #{{konteringsregel[ keyMap.id.id ][ keyMap.id.key ]}}</h2>
    
    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Redigér konteringsregel</template>
        
        <form @submit.prevent="">
            <fieldset>
                <div class="flexbox">
                    <div v-for="key in Object.keys(keyMap)">
                        <label :for="key" class="capitalize">{{key}}</label>
                        <input type="text" placeholder="..." :id="key" v-model="konteringsregel[ keyMap[key].id ][ keyMap[key].key ]" :disabled="keyMap[key].disabled" required>
                    </div>
                </div>

                <button @click="deleteRule" class="red">{{ awaitingDeleteConfirmation ? 'Bekræft sletning' : 'Slet regel' }}</button>
                <button id="submit" @click="updateRule" :disabled="isUpdating">{{ isUpdating ? 'Gemmer' : hasUpdated ? 'Rettelser gemt' : 'Gem rettelser' }}</button>
            </fieldset>
        </form>
    </Content>

</template>
<style scoped>
#submit
{
    margin-left: 1rem;
}
</style>