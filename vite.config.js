import { defineConfig } from "vite";
import fs from "fs";
import path from "path";

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(
        path.resolve(__dirname, "www.garbage-domain.local-key.pem")
      ),
      cert: fs.readFileSync(
        path.resolve(__dirname, "www.garbage-domain.local.pem")
      ),
    },
    host: "www.garbage-domain.local",
    port: 5173,
  },
});
