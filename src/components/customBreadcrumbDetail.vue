<template>
  <div class="breadcrumb-section pt-5 px-5">
    <div class="container container-breadcrumb lg:max-w-6xl mx-auto">
      <nav class="flex flex-wrap py-3 text-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex flex-wrap items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <router-link :to="{name: 'home'}" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              Home
            </router-link>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <router-link v-if="prev === 'foods'" :to="{name: 'foods'}" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Foods</router-link>
              <router-link v-else-if="prev === 'ingredients'" :to="{name: 'ingredients'}" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Ingredients</router-link>
              <router-link v-else-if="prev === 'locations'" :to="{name: 'location'}" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Locations</router-link>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <router-link v-if="prev === 'foods'" :to="{name: 'foodsFilter', params: {cat: param}}" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">{{ param }}</router-link>
              <router-link v-else-if="prev === 'ingredients'" :to="{name: 'ingredientsFilter', params: {title: this.setDetailUrls(param)}}" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">{{ param }}</router-link>
              <router-link v-else-if="prev === 'locations'" :to="{name: 'locationsFilter', params: {loc: param}}" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">{{ param }}</router-link>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center text-left">
              <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">{{ value }}</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customBreadcrumbDetail',
  props: {
    prev: String,
    param: String,
    value: String,
  },
  methods: {
    setDetailUrls(param) {
      return param.replaceAll(' ', '_');
    },
  },
};
</script>
