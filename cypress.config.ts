import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
		baseUrl: 'https://www.eesti.ee',
		viewportWidth: 1920,
		viewportHeight: 1080,
  },
});
