/// <reference path='fourslash.ts' />

//@Filename: file.tsx
//// declare module JSX {
////     interface Element { }
////     interface IntrinsicElements {
////         div: {
////             name?: string;
////             isOpen?: boolean;
////         };
////         span: { n: string; };
////     }
//// }
//// var x = <[|di/*ds*/v|] />;
//// var y = <[|s/*ss*/pan|] />;
//// var z = <div [|na/*ps*/me|]='hello' />;

verify.baselineGoToDefinition("ds", "ss", "ps");
