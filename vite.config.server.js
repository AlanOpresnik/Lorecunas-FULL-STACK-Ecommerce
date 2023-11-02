export default {
    server: {
      entry: 'server.js', // Especifica el archivo de entrada del servidor
      fs: {
        allow: ["."],
      },
      hmr: {
        overlay: false,
      },
    },
    build: {
      rollupOptions: {
        output: {
          format: "cjs",
        },
      },
    },
  };