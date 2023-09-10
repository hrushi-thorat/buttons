<template>
  <docs-page-layout hasPlayground hasDocs>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
        <h4 class="text-2xl text-gray-700 font-bold">Basic usages</h4>
      <card style="background-color: rgb(247, 239, 244)">
        <neo-button variant="action">Action</neo-button>
        <neo-button variant="danger">Danger</neo-button>
        <neo-button variant="warn">Warn</neo-button>
        <neo-button variant="active">Active</neo-button>
      </card>
      </div>
      <div class="flex flex-col gap-2">
        <h4 class="text-2xl text-gray-700 font-bold">Button size</h4>
      <card style="background-color: rgb(247, 239, 244)">
        <neo-button size="sm" variant="action">Small</neo-button>
        <neo-button size="md" variant="action">Medium</neo-button>
        <neo-button size="lg" variant="action">Large</neo-button>
        <neo-button :disabled="true" size="xl" variant="action"
          >Extra large</neo-button
        >
      </card>
      </div>
      <div class="flex flex-col gap-2">
        <h4 class="text-2xl text-gray-700 font-bold">Loading state</h4>
      <card style="background-color: rgb(247, 239, 244)">
        <neo-button loading spinnerColor="gray" variant="action"
          >Action</neo-button
        >
        <neo-button loading spinnerColor="red" variant="danger"
          >Danger</neo-button
        >
        <neo-button
          loading
          spinnerColor="yellow"
          loadingPosition="suffix"
          variant="warn"
          >Warn</neo-button
        >
        <neo-button loading variant="active"></neo-button>
      </card>
    </div>
    </div>
  </docs-page-layout>
</template>
    
    <script>
export default {};
</script>
  