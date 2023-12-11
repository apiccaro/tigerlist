package.json code for duo authenticaion: 
 "scripts": {
    "dev": "node server.js",
    "start": "next start"
  },

  package.json code without duo: 
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },

when wanting to view the Next.js app on your local machine, use script 2 in the scripts section of package.json
when wanting to view in the remote Vercel deployment, use script 1 to use the custom server and integrate duo authenticaion