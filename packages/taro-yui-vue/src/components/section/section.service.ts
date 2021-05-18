import { defineComponent, PropType, SetupContext } from 'vue'
import './section.scss'
import {YSection} from './types/section.d'

/**
 * 段落组件
 */
class SectionService {
}

export default defineComponent({
  name: 'y-section',
  props: {
    title: {
      type: String as PropType<string>,
      default: ''
    },
    tip: {
      type: String as PropType<string>,
      default: ''
    },
    required:{
      type:Boolean as PropType<boolean>,
      default:false
    }
  },
  setup(props:YSection.Props,{slots}:SetupContext) {
    const service = new SectionService()
    return {
      slots:slots
    }
  }
})