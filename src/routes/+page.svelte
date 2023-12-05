<script>
  export let data;
</script>

<main>
  {#each data.blog as post }
    <h1>{post.title}</h1>
    <h2>{post.author}</h2>
    <div>{post.tags}</div>
    <p>{post.blog}</p>
    <p>{post.summary}</p>
    <p>{post.date}</p>
  {/each}
</main>