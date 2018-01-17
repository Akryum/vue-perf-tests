<template>
  <div
    :class="['a', 'b', 'c', 'd', 'e', { even: n % 2 === 0}]"
    :style="{
      marginTop: '4px',
      marginLeft: n + 'px'
    }"
  >
    <div
      :class="['x', 'y', 'z', { uneven: n % 2 !== 0}]"
      :style="{
        color: 'green',
        fontSize: 'bold',
        fontFamily: 'monospace',
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
