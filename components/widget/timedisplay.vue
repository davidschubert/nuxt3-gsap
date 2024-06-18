<template>
    <div>
        <p>Current time — {{ time }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const time = ref("");

const addLeadingZero = (number) => {
    return number < 10 ? "0" + number : number;
};

const getCurrentTime = () => {
    const now = new Date();
    const hours = addLeadingZero(now.getHours());
    const minutes = addLeadingZero(now.getMinutes());
    const seconds = addLeadingZero(now.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
};

const updateTime = () => {
    time.value = getCurrentTime();
};

onMounted(() => {
    updateTime();
    const interval = setInterval(() => {
        updateTime();
    }, 1000);

    onUnmounted(() => {
        clearInterval(interval);
    });
});
</script>
