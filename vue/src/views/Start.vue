<script setup>
    import Content from '@/components/Content.vue'
    import Status from '@/components/Status.vue'

    import IconOK from '@/components/icons/IconOK.vue'
    import IconRSS from '@/components/icons/IconRSS.vue'
</script>

<template>
    <h2>Bogføring af MobilePay-salg</h2>

    <Content>
        <template #heading>Introduktion til løsningen</template>
        På siden her finder du en fane til vedligehold af aftaler mellem Randers Kommunes decentrale enheder og MobilePay (fanen "Konteringsregler") samt en side med de omposteringsbilag der skal indlæses i Opus (fanen "Filer").
        Filerne downloades og indlæses direkte i Rollebaseret Indgang.
    </Content>

    <Content>
        <template #icon>
            <IconRSS />
        </template>
        <template #heading>Status på løsningen</template>
        
        <Status />
    </Content>

</template>