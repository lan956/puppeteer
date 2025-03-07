---
sidebar_label: Coverage
---

# Coverage class

The Coverage class provides methods to gathers information about parts of JavaScript and CSS that were used by the page.

#### Signature:

```typescript
export declare class Coverage
```

## Remarks

To output coverage in a form consumable by [Istanbul](https://github.com/istanbuljs), see [puppeteer-to-istanbul](https://github.com/istanbuljs/puppeteer-to-istanbul).

## Example

An example of using JavaScript and CSS coverage to get percentage of initially executed code:

```ts
// Enable both JavaScript and CSS coverage
await Promise.all([
  page.coverage.startJSCoverage(),
  page.coverage.startCSSCoverage(),
]);
// Navigate to page
await page.goto('https://example.com');
// Disable both JavaScript and CSS coverage
const [jsCoverage, cssCoverage] = await Promise.all([
  page.coverage.stopJSCoverage(),
  page.coverage.stopCSSCoverage(),
]);
let totalBytes = 0;
let usedBytes = 0;
const coverage = [...jsCoverage, ...cssCoverage];
for (const entry of coverage) {
  totalBytes += entry.text.length;
  for (const range of entry.ranges) usedBytes += range.end - range.start - 1;
}
console.log(`Bytes used: ${(usedBytes / totalBytes) * 100}%`);
```

## Constructors

| Constructor                                                    | Modifiers | Description                                                  |
| -------------------------------------------------------------- | --------- | ------------------------------------------------------------ |
| [(constructor)(client)](./puppeteer.coverage._constructor_.md) |           | Constructs a new instance of the <code>Coverage</code> class |

## Methods

| Method                                                                | Modifiers | Description                                                                 |
| --------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------- |
| [startCSSCoverage(options)](./puppeteer.coverage.startcsscoverage.md) |           |                                                                             |
| [startJSCoverage(options)](./puppeteer.coverage.startjscoverage.md)   |           |                                                                             |
| [stopCSSCoverage()](./puppeteer.coverage.stopcsscoverage.md)          |           | Promise that resolves to the array of coverage reports for all stylesheets. |
| [stopJSCoverage()](./puppeteer.coverage.stopjscoverage.md)            |           | Promise that resolves to the array of coverage reports for all scripts.     |
