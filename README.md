# Fresh Sonner

To use Sonner (and other React first libraries), we can use [preact/compat](https://preactjs.com/guide/v10/switching-to-preact/).

### Usage

Initialise [esm.sh](https://esm.sh/)

```
deno run -A -r https://esm.sh init
```

Then add react and react-dom aliased by preact/compat:

```
deno task esm:add react:preact/compat
```

```
deno task esm:add react-dom:preact/compat
```

Add the required library, in this case, [sonner](https://sonner.emilkowal.ski/)

```
deno task esm:add sonner
```

```
deno task start
```

This will watch the project directory and restart as necessary.
