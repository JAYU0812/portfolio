import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function contactApiDevPlugin() {
  return {
    name: 'contact-api-dev-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/contact' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const { sendContactEmails } = await import('./api/contact.js');
              const result = await sendContactEmails(data);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  success: true,
                  message: 'Inquiry delivered to Jay Soni and confirmation auto-reply sent to your inbox.',
                  details: result
                })
              );
            } catch (err) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  process.env.GMAIL_USER = env.GMAIL_USER || process.env.GMAIL_USER;
  process.env.GMAIL_APP_PASSWORD = env.GMAIL_APP_PASSWORD || process.env.GMAIL_APP_PASSWORD;

  return {
    plugins: [
      react(),
      tailwindcss(),
      contactApiDevPlugin()
    ]
  };
});