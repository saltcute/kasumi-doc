<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import locales from '../config/locales';
import { inBrowser, useData } from 'vitepress';
import { watchEffect } from 'vue';

if (inBrowser) {
    const localeList = Object.keys(locales());
    if (!localeList.includes(location.pathname.split("/")[1])) {
        function changeLocale(target?: string) {
            if (!target) return;
            target = target.toLocaleLowerCase();

            if (localeList.includes(target)) {
                localStorage.setItem("locale", target);
                location.replace(`/${target}${location.pathname}`);
            } else {
                location.replace(`/en-ca${location.pathname}`);
            }
        }

        const storageLocale = localStorage.getItem("locale");
        if (storageLocale && !location.pathname.startsWith(`/${storageLocale}`)) {
            changeLocale(storageLocale);
        } else if (!localeList.filter(v => { return location.pathname.startsWith(`/${v}`) }).length) {
            changeLocale(navigator.language);
        }
    }
}

const { lang } = useData()
watchEffect(() => {
    if (inBrowser) {
        localStorage.setItem("locale", lang.value);
    }
})
</script>

<template>
    <DefaultTheme.Layout />
</template>, useDataimport { watchEffect } from 'vue';, useDataimport { watchEffect } from 'vue';
