<script setup>
    import { ref } from 'vue'

    // Set menu items

    const menuItems = ref([
        {
            "title": "Start",
            "url": "/"
        },
        {
            "title": "Stamdata",
            "url": "/stamdata"
        },
        {
            "title": "Aktive konteringsregler",
            "url": "/konteringsregler"
        },
        {
            "title": "Inaktive konteringsregler",
            "url": "/inaktive_konteringsregler"
        },
        {
            "title": "Undtagne konteringsregler",
            "url": "/undtagelser"
        },
        {
            "title": "Filer",
            "url": "/filer"
        }
    ])

    // Set selected = true for landing page
    
    const landingPageIndex = menuItems.value.findIndex(x => x.url == new URL(location.href).pathname)
    if(landingPageIndex !== -1)
        menuItems.value[ landingPageIndex ].selected = true

    // Function to visually update selected item

    function select(item)
    {
        menuItems.value.forEach(x => x.selected = false)
        item.selected = true
    }

    // Dark mode

    function toggleDarkMode()
    {
        const element = document.getElementById("body");
        element.classList.toggle("darkmode");
    }

</script>

<template>

    <div class="header">

        <div class="randers-logo"></div>
        
        <router-link v-for="item in menuItems" :to="item.url" :class="item.selected ? 'selected' : ''" @click="select(item)">
            <span v-if="item.alert" class="alert">{{item.alert}}</span>
            <span>{{item.title}}</span>
        </router-link>

        <div class="filler"></div>

        <div class="darkmodeItem">       
            <input type="checkbox" id="darkmodeToggle" name="darkmodeToggle" @click="toggleDarkMode()">
            <label for="darkmodeToggle">Dark Mode</label>
        </div>

    </div>

</template>

<style scoped>
/* Mobile first */
/* 1 rem = 10 px, except when defining @media rules, then 1 rem = 16 px */
.randers-logo
{
    background-position: 2rem 0rem;
}

/* Is top header */
.header
{
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    padding-top: 0rem;
    padding-right: 1.5rem;

    position: fixed;
    width: 100vw;
    height: 6rem;
    transform: translateX(0rem);
    left: 0rem;

    background-color: var(--color-bg);
    border-bottom: 0.1rem solid var(--color-border);

    overflow-x: auto;
}
    .header a
    {
        border-bottom: 0.4rem solid #ffffff00;

        padding-right: 1.2rem;
        padding-left: 1.2rem;

        font-family: Inter;
        line-height: 4rem;

        white-space: nowrap;
    }
        .header a:hover
        {
            border-bottom: 0.4rem solid var(--randers-color-light);
        }
        .header a.selected
        {
            border-bottom: 0.4rem solid var(--randers-color-dark);
        }
        .header a .alert
        {
            font-size: 0.8em;
            color: var(--color-white);
            
            background-color: var(--randers-color-);
            border-radius: 0.3rem;
            
            padding: 0.1rem 0.4rem;
            margin-right: 0.8rem;
            
            line-height: normal;
        }
    .header .filler 
    {
        flex-grow: 1;
    }
    .header .darkmodeItem
    {
        padding-right: 1.2rem;
        padding-left: 1.2rem;

        font-family: Inter;
        line-height: 4rem;
        white-space: nowrap;
    }
        .darkmodeItem input {
            transform: translateY(0.5rem);
        }
        .darkmodeItem label
        {
            font-size: 0.8em;
            transform: translateY(0.1rem);
        }
        
/* Tablet or desktop */
@media screen and (min-width: 80rem) /* 1280 px */
{
    /* Is lefside header */
    .header
    {
        flex-direction: column;
        align-items: flex-end;

        padding-top: 2.5rem;
        padding-right: 0rem;

        right: 50%;
        transform: translateX(-42.5rem);
        width: auto;
        height: 100vh;

        border-bottom: 0rem;
    }
        .header a
        {
            padding-right: 1.5rem;

            border-bottom: 0rem;
            border-right: 0.4rem solid #ffffff00;
        }
            .header a:first-of-type
            {
                margin-top: 2rem;
            }
            .header a:hover
            {
                border-right: 0.4rem solid var(--randers-color-light);
                border-bottom: 0rem;
            }
            .header a.selected
            {
                border-right: 0.4rem solid var(--randers-color-dark);
                border-bottom: 0rem;
            }
}


/* Logo skjules på meget små skærme */
@media screen and (max-width: 35rem)
{
    .randers-logo
    {
        display: none;
    }
    .header
    {
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>