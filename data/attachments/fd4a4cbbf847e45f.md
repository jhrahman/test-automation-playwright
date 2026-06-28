# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: nestedframe.spec.ts >> Nested Frame
- Location: tests/nestedframe.spec.ts:3:5

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.fill: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('input[type=\'text\']')
    - locator resolved to <input type="text"/>
    - fill("Nested Frame")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 100ms
    237 × waiting for element to be visible, enabled and editable
        - element is not visible
      - retrying fill action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7] [cursor=pointer]:
        - /url: http://www.automationtesting.in
        - img [ref=e8]
      - heading [level=1] [ref=e10]: Automation Demo Site
    - insertion [ref=e12]:
      - generic [ref=e15]:
        - heading [level=2] [ref=e17]: Discover more
        - link [ref=e18] [cursor=pointer]:
          - generic [ref=e19]: Automation testing tools
          - img [ref=e21]
        - link [ref=e23] [cursor=pointer]:
          - generic [ref=e24]: Web Browsers
          - img [ref=e26]
        - link [ref=e28] [cursor=pointer]:
          - generic [ref=e29]: Software testing courses
          - img [ref=e31]
        - link [ref=e33] [cursor=pointer]:
          - generic [ref=e34]: QA consulting
          - img [ref=e36]
        - link [ref=e38] [cursor=pointer]:
          - generic [ref=e39]: Selenium WebDriver guide
          - img [ref=e41]
    - navigation [ref=e43]:
      - generic [ref=e44]:
        - button [ref=e46] [cursor=pointer]:
          - generic [ref=e47]: Toggle Navigation
        - text:      
  - generic [ref=e51]:
    - generic [ref=e55]:
      - list [ref=e58]:
        - listitem [ref=e59]:
          - link [ref=e60]:
            - /url: "#Single"
            - text: Single Iframe
        - listitem [ref=e61]:
          - link [ref=e62] [cursor=pointer]:
            - /url: "#Multiple"
            - text: Iframe with in an Iframe
      - iframe [ref=e64]: <p>Your browser does not support iframes.</p>:
        - generic [ref=f1e3]:
          - heading "iFrame Demo" [level=5] [ref=f1e4]
          - textbox [ref=f1e7]
    - generic [ref=e74]:
      - generic [ref=e75]:
        - text: "\"@ 2016\""
        - link [ref=e76] [cursor=pointer]:
          - /url: "#"
          - text: Automation Testing
        - text: "\"All Rights Reserved.\""
      - generic [ref=e77]:
        - link [ref=e78] [cursor=pointer]:
          - /url: https://www.facebook.com/automationtesting2016/
          - generic [ref=e79]: 
        - link [ref=e80] [cursor=pointer]:
          - /url: https://twitter.com/krishnasakinala
          - generic [ref=e81]: 
        - link [ref=e82] [cursor=pointer]:
          - /url: https://www.linkedin.com/nhome/?trk=hb_signin
          - generic [ref=e83]: 
        - link [ref=e84] [cursor=pointer]:
          - /url: https://plus.google.com/105286300926085335367
          - generic [ref=e85]: 
        - link [ref=e86] [cursor=pointer]:
          - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
          - generic [ref=e87]: 
```

# Test source

```ts
  1  | import { test, expect, type Page, type Frame } from '@playwright/test';
  2  | 
  3  | test('Nested Frame', async ({ page }: { page: Page }) => {
  4  |     await page.goto('https://demo.automationtesting.in/Frames.html')
  5  |     //frame object approach
  6  |     await page.locator("//a[normalize-space()='Iframe with in an Iframe']").click()
  7  |     const frameURL: Frame | null = await page.frame({ url: 'https://demo.automationtesting.in/MultipleFrames.html' });
  8  |     // await frameURL?.locator("input[type='text']").fill('testeng');
  9  | 
  10 |     //nested frame
  11 |     if (frameURL) {
  12 |         const nestedFrame: Frame[] = frameURL.childFrames();
> 13 |         await nestedFrame[0].locator("input[type='text']").fill('Nested Frame');
     |                                                            ^ Error: locator.fill: Test timeout of 120000ms exceeded.
  14 |     }
  15 | 
  16 | })
```