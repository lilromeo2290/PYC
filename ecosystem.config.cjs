module.exports = {
  apps: [
    {
      name: "pyc-club",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "/home/pycclub/public_html",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      error_file: "/home/pycclub/logs/err.log",
      out_file: "/home/pycclub/logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
