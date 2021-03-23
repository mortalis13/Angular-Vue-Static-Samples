System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },

  paths: {
    'npm:': 'https://unpkg.com/'
  },

  map: {
    'app': './src',
    
    // '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    // '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    // '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    // '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    // '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    
    // 'typescript': 'npm:typescript@2.0.2/lib/typescript.js'
    // 'rxjs': 'npm:rxjs',
    
    '@angular/core': 'js/core.umd-6.0.0.js',
    '@angular/common': 'js/common.umd-6.0.0.js',
    '@angular/compiler': 'js/compiler.umd-6.0.0.js',
    '@angular/platform-browser': 'js/platform-browser.umd-6.0.0.js',
    '@angular/platform-browser-dynamic': 'js/platform-browser-dynamic.umd-6.0.0.js',
    
    'typescript': 'js/typescript-2.0.2.js',
    'rxjs': 'js/rxjs',
  },
  
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
        main: 'index.js',
        defaultExtension: 'js'
    },
    "rxjs/operators": {
        main: 'index.js',
        defaultExtension: 'js'
    }
  }
});