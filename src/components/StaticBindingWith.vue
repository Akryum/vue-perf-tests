<template>
  <div
    class="a b c d e"
    :class="{ even: n % 2 === 0}"
    style="margin-top: 4px;"
    :style="{
      marginLeft: n + 'px'
    }"
  >
    <div
      class="x y z"
      :class="{ uneven: n % 2 !== 0}"
      style="color: green; font-size: bold; font-family: monospace;"
      :style="{
        fontSize: (1 + n * 0.01) + 'em'
      }"
    >{{ n }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['n']
}
</script>
