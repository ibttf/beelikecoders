import React from 'react';

const Footer = () => {
    return (

    <footer class="bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Company</h2>
                <ul class="text-gray-400 font-medium">
                    <li class="mb-4">
                        <a href="#" class=" hover:underline">About</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Careers</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Brand Center</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Blog</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Help center</h2>
                <ul class="text-gray-400 font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Discord Server</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Twitter</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Facebook</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Licensing</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Download</h2>
                <ul class="text-gray-400 font-medium">
                    <li class="mb-4">
                        <p class="hover:underline">iOS — Coming Soon</p>
                    </li>
                    <li class="mb-4">
                        <p class="hover:underline">Android — Coming Soon</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="px-12 py-6 bg-gray-700 flex flex-col md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-300 text-center w-full">© 2023 PrepWhiz™ All Rights Reserved.
            </span>
            <span class="text-sm text-gray-300 text-center w-full py-4">
            SAT® is a registered trademark of the College Entrance Examination Board™. The College Entrance Examination Board™ does not endorse, nor is it affiliated in any way with the owner or any content of this web site. ACT® is a registered trademark of ACT Inc., which does not endorse, nor is it affiliated in any way with, the owner or any content of this web site.
            </span>

        </div>
        </div>
    </footer>

    );
}

export default Footer;
