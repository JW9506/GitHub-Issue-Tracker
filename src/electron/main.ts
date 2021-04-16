import { app, ipcMain, Menu, shell } from 'electron';
import http from 'http';
import { AssertType } from 'ts-rtcheck';
import axios from 'axios';
import open from 'open';
import url from 'url';
import AppWindow from './AppWindow';

const REACT_APP_GH_SECRET =
  process.env.REACT_APP_GH_SECRET || process.env.GH_SECRET;
const REACT_APP_GH_CLIENT_ID = 'Iv1.59374653a1b5fa29';

app.allowRendererProcessReuse = false;

let mainWindow: AppWindow | null;

function handleIPC() {
  if (REACT_APP_GH_SECRET == null) {
    console.log(
      'Please define REACT_APP_GH_SECRET or GH_SECRET in environment variable'
    );
    process.exit(1);
  }
  ipcMain.handle('getCode', async () => {
    const PORT = 3122;

    return new Promise((resolve, reject) => {
      open(
        `https://github.com/login/oauth/authorize?client_id=${REACT_APP_GH_CLIENT_ID}&scope=user%20read:org%20public_repo%20admin:enterprise&state=foobar`
      );
      const server = http
        .createServer((req, res) => {
          if (!req.url) {
            return;
          }
          const { code } = url.parse(req.url, true).query;
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(`
          <!DOCTYPE html>
            <html>
            <body>
            <script>setTimeout(window.close(), 500);</script>
            </body>
            </html>
          `);
          res.end();
          (async () => {
            if (!code) return;
            const body = {
              client_id: REACT_APP_GH_CLIENT_ID,
              client_secret: REACT_APP_GH_SECRET,
              code,
              state: 'foobar',
              redirect_uri: `http://localhost:${PORT}`,
            };
            try {
              const { data } = await axios.post(
                'https://github.com/login/oauth/access_token',
                body,
                {
                  headers: {
                    Accept: 'application/json',
                  },
                }
              );
              AssertType(data, {
                access_token: 'string',
              });
              console.log('User access token: \n' + data.access_token);
              resolve(data.access_token);
            } catch (error) {
              reject(error);
            } finally {
              server.close();
            }
          })();
        })
        .on('error', () => {})
        .listen(PORT);
    });
  });
  ipcMain.handle('openLink', async (e, link: string) => {
    open(link);
  });
}

app.on('ready', () => {
  handleIPC();
  console.log(process.env['GH_SECRET']);
  mainWindow = new AppWindow(
    {
      width: 1440,
      height: 768,
    },
    'main'
  );
  mainWindow.on('close', () => {
    mainWindow = null;
  });
});
