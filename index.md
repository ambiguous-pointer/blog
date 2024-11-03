---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "远赴人间惊鸿宴"
  text: "一睹人间盛世宴"
  tagline: 何其有幸 得以相识
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
    - theme: alt
      text: API Examples
      link: /api-examples
    - theme: alt
      text: 常见链接
      link: /pages_markdown/web_links

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---




## Markdown Content

<span>定义组件</span>
<CustomComponent/>

<script setup>
import CustomComponent from './pages/index.vue'
import { ref } from 'vue'
</script>
<style module>
.details{
  color: red;
}
</style>