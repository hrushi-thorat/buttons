<template>
  <docs-page-layout hasPlayground hasDocs>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <h4 class="text-2xl text-gray-700 font-bold">Basic Usages</h4>
        <card > 
          <UIButton  :color="'default'">Default</UIButton>
          <UIButton loading :color="'default'">Loading</UIButton>
          <UIButton outline  :color="'default'">Outline</UIButton>
          <UIButton disabled  :color="'default'">Disabled</UIButton>
        </card>
        <card > 
          <UIButton  :color="'default'">Default</UIButton>
          <UIButton :color="'blue'">Blue</UIButton>
          <UIButton :color="'alternative'">Alternative</UIButton>
          <UIButton :color="'dark'">Dark</UIButton>
          <UIButton :color="'light'">Light</UIButton>
          <UIButton :color="'green'">Green</UIButton>
          <UIButton :color="'yellow'">Yellow</UIButton>
          <UIButton :color="'purple'">Purple</UIButton>
          <UIButton :color="'pink'">Pink</UIButton>
          <UIButton :color="'secondary'">Primary</UIButton>
          <UIButton :color="'tertiary'">secondary</UIButton>
          <UIButton :color="'gray'">gray</UIButton>
        </card>
      </div>
      <card> 
        <UIButton outline :color="'default'">Default</UIButton>
        <UIButton outline :color="'blue'">Blue</UIButton>
        <UIButton outline :color="'alternative'">Alternative</UIButton>
        <UIButton outline :color="'dark'">Dark</UIButton>
        <UIButton outline :color="'light'">Light</UIButton>
        <UIButton outline :color="'green'">Green</UIButton>
        <UIButton outline :color="'yellow'">Yellow</UIButton>
        <UIButton outline :color="'purple'">Purple</UIButton>
        <UIButton outline :color="'pink'">Pink</UIButton>
        <UIButton outline :color="'primary'">Primary</UIButton>
        <UIButton outline :color="'tertiary'">secondary</UIButton>
        <UIButton outline :color="'gray'">gray</UIButton>
      </card>
      <card> 
        <UIButton loading loadingPosition="suffix" :color="'default'">Loading</UIButton>
        <UIButton loading  loadingPosition="suffix" :color="'blue'" >Loading suffix </UIButton>
        <UIButton loading  :color="'dark'">Loading</UIButton>
        <UIButton loading  :color="'purple'">Loading</UIButton>
        <UIButton loading disabled  :color="'tertiary'">Loading with disabled</UIButton>
      </card>
      <card> 
        <UIButton gradient="cyan-blue">Default</UIButton>
        <UIButton gradient="green-blue" >Blue</UIButton>
        <UIButton :gradient="'purple-blue'">purple-blue</UIButton>
        <UIButton :gradient="'purple-pink'">purple-pink</UIButton>
        <UIButton :gradient="'red-yellow'">red-yellow</UIButton>
        <UIButton :gradient="'pink-orange'">pink-orange</UIButton>
        <UIButton :gradient="'teal-lime'">teal-lime</UIButton>
      </card>
      <card> 
        <UIButton size="xs" :color="'default'">Extea small</UIButton>
        <UIButton size="sm" :color="'blue'" >Small</UIButton>
        <UIButton size="md" :color="'dark'">Medium</UIButton>
        <UIButton size="lg" :color="'purple'">Large</UIButton>
        <UIButton size="xl" :color="'gray'">Extra Large</UIButton>
      </card>
   
      <card> 
        <UIButton shadow="blue"  gradient="cyan-blue">Default</UIButton>
        <UIButton shadow="green"  gradient="green-blue" >Blue</UIButton>
        <UIButton shadow="cyan"  :gradient="'purple-blue'">purple-blue</UIButton>
        <UIButton shadow="teal"  :gradient="'purple-pink'">purple-pink</UIButton>
        <UIButton shadow="red"  :gradient="'red-yellow'">red-yellow</UIButton>
        <UIButton shadow="pink"  :gradient="'pink-orange'">pink-orange</UIButton>
        <UIButton shadow="lime"  :gradient="'teal-lime'">teal-lime</UIButton>
      </card>
    </div>
  </docs-page-layout>
</template>
  
  <script>
import "light-icons/dist/light-icon.css";
const pageDescription =
  "Button is an extension to standard button element with an option to add icons and your custom theming.";

export default {};
</script>
