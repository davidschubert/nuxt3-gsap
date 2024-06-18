<script setup>
/*const { data: timeapi } = await useFetch(
    "https://www.timeapi.io/api/Time/current/zone?timeZone=Pacific/Honolulu"
);*/
//console.log(JSON.stringify(timeapi));
</script>

<template>
    <div class="worldclock">
        <!--{{ timeapi.timeZone }} local time — {{ timeapi.hour }}:{{
            timeapi.minute
        }}:{{ timeapi.seconds }}-->
    </div>
</template>

<style scoped>
.worldclock {
    color: aqua;
}
</style>
