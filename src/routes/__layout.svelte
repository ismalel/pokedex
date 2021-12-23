<script>
    import Nav from "../component/nav.svelte"
</script>

<div class="p-8 max-w-6xl mx-auto" style="background-color: #FFFFFF;">
    <Nav/>
    <slot></slot>
</div>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>