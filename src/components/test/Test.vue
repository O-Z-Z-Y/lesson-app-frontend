<template>
    <div class="relative pt-1">
        <div class="flex items-center justify-between mb-2">
            <div>
                <span class="inline-block px-2 py-1 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full">
                    Task in progress
                </span>
            </div>
            <div class="text-right">
                <span class="inline-block text-xs font-semibold text-pink-600">
                    30%
                </span>
            </div>
        </div>
        <div class="flex h-2 mb-4 overflow-hidden text-xs bg-pink-200 rounded">
            <div style="width:50%"
                class="flex flex-col justify-center text-center text-white bg-pink-500 shadow-none whitespace-nowrap"></div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'Test',
};
</script>