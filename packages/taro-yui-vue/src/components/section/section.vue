<script lang="ts" src='./section.service.ts'></script>
<template>
  <view class="y-section">
    <view class="label" :class="{'require':required}">
      <view>
        {{ title }}
      <text v-if="tip" class="tip">（{{ tip }}）</text>
      </view>
      <view class="r">
        <slot name="title-right"></slot>
      </view>
    </view>
    <view class="y-section-content" v-if="slots['default']">
      <slot></slot>
    </view>
  </view>
</template>