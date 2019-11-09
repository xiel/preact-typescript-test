project demonstrating  **Property 'ref' is missing in type 'ReactElement* in preact projects using styled components / react-spring

**Demo repo showing the errors:**
https://github.com/xiel/preact-typescript-test

**Steps to reproduce:**
- checkout https://github.com/xiel/preact-typescript-test
- run:  `yarn; yarn check-types`

ReactElement as no guaranteed ref, and therefore the types have a mismatch which leads to errors:

**styled-components**
```
TS2605: JSX element type 'ReactElement<Pick<Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "hidden" | ... 252 more ... | "onTransitionEndCapture"> & { ...; }, "hidden" | ... 253 more ... | "onTransitionEndCapture"> & Partial<...>, "hidden" | ... 253 more ... | "onTransitionEndCapture"> & { ...; }, string...' is not a constructor function for JSX elements.
  **Property 'ref' is missing in type 'ReactElement**<Pick<Pick<Pick<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "hidden" | ... 252 more ... | "onTransitionEndCapture"> & { ...; }, "hidden" | ... 253 more ... | "onTransitionEndCapture"> & Partial<...>, "hidden" | ... 253 more ... | "onTransitionEndCapture"> & { ...; }, string...' but required in type 'Element'.

 node_modules/preact/src/index.d.ts:17:3
    17          ref: Ref<any> | null;
                ~~~
    'ref' is declared here.
```

**react-spring**
```
 TS2605: JSX element type 'ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<any, any, any>)>' is not a constructor function for JSX elements.
  **Property 'ref' is missing in type 'ReactElement**<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<any, any, any>)>' but required in type 'Element'.

 node_modules/preact/src/index.d.ts:17:3
    17          ref: Ref<any> | null;
                ~~~
    'ref' is declared here.
```

fixes #1953 
Was broken with this PR it seems: #1447
