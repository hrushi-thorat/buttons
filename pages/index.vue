<template>
  <docs-page-layout hasPlayground hasDocs>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <h4 class="text-2xl text-gray-700 font-bold">Basic usages</h4>
        <card>
          <basic-button variant="primary">Primary</basic-button>
          <basic-button variant="secondary">Secondary</basic-button>
          <basic-button variant="tertiary">Tertiary</basic-button>
          <basic-button variant="info">Info</basic-button>
          <!-- <basic-button variant="danger">Danger</basic-button> -->
          <basic-button variant="warning">Warning</basic-button>
          <basic-button variant="info">Info</basic-button>
        </card>
      </div>
      <div class="flex flex-col gap-2">
        <h4 class="text-2xl text-gray-700 font-bold">Outlined</h4>
        <card>
          <basic-button outlined variant="primary">Primary</basic-button>
          <basic-button outlined variant="secondary">Secondary</basic-button>
          <basic-button outlined variant="tertiary">Tertiary</basic-button>
          <basic-button outlined variant="info">Info</basic-button>
          <basic-button outlined variant="danger">Danger</basic-button>
          <basic-button outlined variant="warning">Warning</basic-button>
          <basic-button outlined variant="info">Info</basic-button>
        </card>
      </div>
      <div class="flex flex-col gap-2">
        <h4 class="text-2xl text-gray-700 font-bold">Loading</h4>
        <card>
          <basic-button loading outlined variant="primary"
            >Primary</basic-button
          >
          <basic-button
            outlined
            variant="warning"
            loading
            loadingPosition="suffix"
            spinnerColor="yellow"
            >Warning</basic-button
          >
          <basic-button loading spinnerColor="green" variant="tertiary"
            >Tertiary</basic-button
          >
        </card>
      </div>
      <div class="flex flex-col gap-2">
        <h4 class="text-2xl text-gray-700 font-bold">Raised</h4>
        <card>
          <basic-button raised variant="primary">Primary</basic-button>
          <basic-button raised variant="secondary">Secondary</basic-button>
          <basic-button raised variant="tertiary">Tertiary</basic-button>
          <basic-button raised variant="info">Info</basic-button>
          <!-- <basic-button raised variant="danger">Danger</basic-button> -->
          <basic-button raised variant="warning">Warning</basic-button>
          <basic-button raised variant="info">Info</basic-button>
        </card>
      </div>
    </div>
  </docs-page-layout>
</template>
  
  <script>
import "light-icons/dist/light-icon.css";

export default {};
</script>
