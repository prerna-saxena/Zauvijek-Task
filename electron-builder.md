npm install electron-builder --save-dev


Update package.json
Update  package.json to include the necessary electron-builder configuration for creating an installer and uninstaller:

{
  "name": "your-app-name",
  "version": "1.0.0",
  "description": "Your app description",
  "main": "public/main.js",
  "scripts": {
    "start": "concurrently \"npm run start-react\" \"npm run start-electron\"",
    "start-react": "react-scripts start",
    "start-electron": "wait-on http://localhost:3000 && electron .",
    "build": "react-scripts build",
    "electron-pack": "electron-builder",
    "publish": "electron-builder --publish always",
    "dist": "electron-builder"
  },
  "devDependencies": {
    "electron": "^12.0.0",
    "electron-builder": "^22.11.7",
    "electron-updater": "^4.3.9",
    "electron-is-dev": "^2.0.0",
    "concurrently": "^5.3.0",
    "wait-on": "^5.2.1"
  },
  "build": {
    "appId": "com.yourdomain.yourapp",
    "productName": "YourAppName",
    "directories": {
      "output": "dist"
    },
    "files": [
      "build/**/*",
      "node_modules/**/*",
      "public/**/*",
      "main.js",
      "package.json"
    ],
    "win": {
      "target": "nsis",
      "icon": "public/favicon.ico"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true,
      "installerIcon": "public/favicon.ico",
      "uninstallerIcon": "public/favicon.ico",
      "uninstallDisplayName": "Uninstall YourAppName",
      "include": "build/installer.nsh"
    }
  }
}
