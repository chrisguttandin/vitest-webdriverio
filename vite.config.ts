import { webdriverio } from '@vitest/browser-webdriverio';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        watch: false,
        browser: {
            enabled: true,
            instances:[ {
                                  browser: 'safari',
                                  headless: false,
                                  name: 'Safari',
                                  provider: webdriverio({
                                      capabilities: { 'wdio:enforceWebDriverClassic': true },
                                      logLevel: 'trace'
                                  })
                              }
                  ]
        },
    }
});
