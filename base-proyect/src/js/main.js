if (typeof document !== 'undefined') {
  import('../scss/styles.scss').then(() => {
    import('bootstrap').then(bootstrap => {
      // Utilizar Bootstrap aquí
    });
  });
}
