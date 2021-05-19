<template>
  <view v-reSize id="container" class="container">
    <y-avatar :src="defaultAvatar" :isCircle="true" :size="180"></y-avatar>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import './avatar.scss'
import defaultAvatar from '../../../assets/img/default_avatar.jpg'
export default defineComponent({
  components: {
    'y-avatar': defineAsyncComponent(() => import('@/components/yui/avatar/avatar.vue'))
  },
  setup() {
    return {
      defaultAvatar
    };
  }
});
</script>