<template>
  <view id="container" class="container">
    <view id="root"></view>
    <y-form :rowList="rowList" v-model="info">
      <template #visitCount-right> <view>自定义拜访次数</view> </template>
    </y-form>
  </view>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, Ref } from "vue";
// import {
//   YForm,
//   YFormElType,
// } from "@/components/yui/form/types/form.d";
import { YForm, YFormElType } from "../../components/form/types/form.d";
import { YTextarea } from "../../components/textarea/types/textarea.d";
import { CalendarBasic } from "../../components/calendar/calendarBasic/types/calendarBasic.d";
import { YUpload } from "../../components/upload/types/upload.d";

class YFormService {
  /**
   * 表单数据列表
   */
  rowList: YForm.FormItem[] = [
    {
      require: true,
      show: true,
      label: "首单金额",
      type: YFormElType.INPUT,
      property: "money",
      options: {
        placeholder: "请输入首单金额",
      },
    },
    {
      require: false,
      show: true,
      label: "拜访时间",
      type: YFormElType.DATE_PICKER,
      property: "visitTime",
    },
    {
      require: false,
      show: true,
      label: "有效期",
      property: "expireTimeList",
      type: YFormElType.DATE_PICKER,
      options: <CalendarBasic.CalendarOptions>{
        isMultiSelect: true,
        showToolBar: true,
      },
    },
    {
      require: false,
      show: true,
      label: "拜访次数",
      type: YFormElType.TEXT,
      property: "visitCount",
    },
    {
      require: true,
      show: true,
      label: "客户公司",
      type: YFormElType.CUSTOM_SELECTOR,
      property: "companyName",
      options: {
        placeholder: "请选择客户公司",
      },
    },
    {
      require: false,
      show: true,
      label: "洽谈后合作意向",
      type: YFormElType.RADIO_GROUP,
      property: "cooperationIntentionType",
      options: <YForm.FormItemRadioGroupOptions[]>[
        {
          label: "强",
          value: 1,
        },
        {
          label: "中",
          value: 2,
        },
        {
          label: "弱",
          value: 3,
        },
      ],
    },
    {
      require: true,
      show: true,
      label: "洽谈后的问题和建议反馈",
      type: YFormElType.TEXTAREA,
      property: "remark",
      options: <YTextarea.TextAreaOptions>{
        height: 100,
        placeholder: "请填写洽谈后的问题和建议反馈",
      },
    },
    {
      require: true,
      show: true,
      label: "商品图片",
      type: YFormElType.UPLOAD,
      property: "cc",
      options: <YUpload.YUploadOptions>{
        multiple: true,
        count: 2,
      },
    },
    {
      require: true,
      show: true,
      label: "权限",
      type: YFormElType.CHECKBOX_GROUP,
      property: "rightList",
      options: <YForm.FormItemCheckboxGroupOptions[]>[
        {
          label: "添加",
          value: 1,
        },
        {
          label: "修改",
          value: 2,
        },
        {
          label: "删除",
          value: 3,
        },
      ],
    }
  ];

  /**
   * form信息
   */
  info: Ref<Object> = ref({
    money: "11",
    visitTime: "2020-01-22 14:30",
    visitCount: "第2次",
    cooperationIntentionType: 2,
    remark: "备注",
    rightList:[1,2]
  });
}

export default defineComponent({
  components: {
    // 'y-form': defineAsyncComponent(() => import('@/components/yui/form/form.vue'))
    "y-form": defineAsyncComponent(
      () => import("../../components/form/form.vue")
    ),
  },
  setup() {
    const service = new YFormService();
    return {
      rowList: service.rowList,
      info: service.info,
    };
  },
});
</script>
