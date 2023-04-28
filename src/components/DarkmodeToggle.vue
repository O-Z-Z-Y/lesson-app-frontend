<template>
    <div>
        <!-- Dark mode toggle button -->
        <button class="fixed bottom-5 right-5 p-2 rounded-full bg-gray-300 text-gray-800 shadow-md focus:outline-none"
            @click="toggleDarkMode">
            <span v-if="darkModeEnabled">🌞</span>
            <span v-else>🌙</span>
        </button>
    </div>
</template>

<script>

export default {
    name: 'DarkmodeToggle',
    components: {
    },
    data() {
        return {
            darkModeEnabled: false,
        };
    },
    methods: {
        toggleDarkMode() {
            this.darkModeEnabled = !this.darkModeEnabled;

            if (this.darkModeEnabled) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        },
    },
};
</script>

<style scoped>
.dark {
    background-color: #1a1a1a;
    color: #fff;
}
</style>
