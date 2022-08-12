
function Footer() {
    return (
        <footer class="p-3 bg-white rounded-lg shadow md:px-6 md:py-6 dark:bg-gray-900">
            <span class="block text-sm text-black text-center dark:text-[#42e2ff]">© {new Date().getFullYear()} <a href="/" class="hover:underline" target="_blank" rel="noreferrer">MD. Sakib</a>. All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer