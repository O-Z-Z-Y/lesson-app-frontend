<template>
    <div class="flex justify-center items-center">
        <table class="border-collapse w-96 lg:w-96 bg-white shadow-md overflow-hidden rounded-md my-8">
            <thead>
                <tr>
                    <th class="px-6 py-4 text-center border-b border-gray-300 bg-gray-100 font-bold text-gray-700">No.</th>
                    <th class="px-6 py-4 text-center border-b border-gray-300 bg-gray-100 font-bold text-gray-700">Title</th>
                </tr>
            </thead>
            <tbody>
                <tr class="hover:bg-gray-100">
                    <td class="px-6 py-4 text-center border-b border-gray-300 font-medium">1</td>
                    <td class="px-6 py-4 text-center border-b border-gray-300 font-medium">First post</td>
                </tr>
                <tr class="hover:bg-gray-100">
                    <td class="px-6 py-4 text-center border-b border-gray-300 font-medium">2</td>
                    <td class="px-6 py-4 text-center border-b border-gray-300 font-medium">Second post</td>
                </tr>
                <tr class="hover:bg-gray-100">
                    <td class="px-6 py-4 text-center border-b border-gray-300 font-medium">3</td>
                    <td class="px-6 py-4 text-center border-b border-gray-300 font-medium">Third post</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'NoticeList'
}
</script>
<style></style>