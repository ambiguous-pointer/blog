---
outline: deep
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

<script setup>
import { useData,useRoute,useRouter  } from 'vitepress'

const { site, theme, page, frontmatter,dir,params } = useData()
const { path, data, component } = useRoute()
const { route } = useRouter()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

### User Data
<pre>{{ path }}</pre>
<pre>{{ data }}</pre>
<pre>{{ component }}</pre>
<pre>{{ route }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
