<script setup>
    import { ref } from 'vue'
    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const outputFiles = ref(null)
    const logFiles = ref(null)

    const keyMap = {
        "filnavn": {
            "key": "name"
        },
        "tidsstempel":
        {
            "obj": "stat",
            "key": "created"
        },
        "størrelse":
        {
            "obj": "stat",
            "key": "size"
        }
    }
    
    // Læs output filer
    fetch('/api/files/get')
        .then(response => response = response.json())
        .then(value => outputFiles.value = value)

    // Læs log filer
    fetch('/api/logs/get')
        .then(response => response = response.json())
        .then(value => logFiles.value = value)

</script>

<template>

    <h2>Filbibliotek</h2>
    
    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Outputfiler</template>

        <span class="paragraph">
            Herunder kan outputfiler fra seneste kørsler downloades
        </span>
        
        <table>
            <thead>
                <tr>
                    <th v-for="key in Object.keys(keyMap)" class="capitalize">{{key}}</th>
                    <th></th>
                </tr>
            </thead>
            <tr v-for="obj in outputFiles">
                <td v-for="key in keyMap">{{ key.obj != null ? obj[key.obj][key.key] : obj[key.key] }}</td>
                <td><a :href="'/api/files/get/' + obj[keyMap.filnavn.key] + '/download'"><button @click="">Download</button></a></td>
            </tr>
        </table>
    </Content>

    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Logfiler</template>

        <span class="paragraph">
            Herunder kan logfiler fra seneste kørsler downloades
        </span>
        
        <table>
            <thead>
                <tr>
                    <th v-for="key in Object.keys(keyMap)" class="capitalize">{{key}}</th>
                    <th></th>
                </tr>
            </thead>
            <tr v-for="obj in logFiles">
                <td v-for="key in keyMap">{{ key.obj != null ? obj[key.obj][key.key] : obj[key.key] }}</td>
                <td><a :href="'/api/logs/get/' + obj[keyMap.filnavn.key] + '/download'"><button @click="">Download</button></a></td>
            </tr>
        </table>
    </Content>

</template>