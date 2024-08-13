### Pass data in Outlet

```ts
<Outlet context={value} />
```

- get data in component

```ts
import { useOutletContext } from "react-router-dom";
const data = useOutletContext();
```
