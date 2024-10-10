<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a class="foo" href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@use '@workspace/shared-styles/abstracts/mixins' as mixins;
@use '@workspace/shared-styles/abstracts/mixins/animation/' as animation;
@use '@workspace/shared-styles/abstracts/tokens' as tokens;

.foo {
  @include animation.spin(3s);
  font-family: tokens.$font-family-decorative;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  @include mixins.button-loader;
}

h3 {
  // TODO: When uncommenting the following line I would expect intellisense to
  //       suggest the mixin "truncate" but instead intellisense doesn't suggest
  //       anything at all.
  font-size: 1.2rem;
  @include mixins.button-loader($speed: 2s);
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
