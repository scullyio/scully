import { DOCUMENT } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { APP_INITIALIZER, Compiler, CompilerFactory, NgModuleFactory, StaticProvider, Type } from '@angular/core';
import { platformDynamicServer, renderModuleFactory } from '@angular/platform-server';
import { readFile } from 'fs';

export function domContentLoadedFactory(doc: Document): () => Promise<void> {
  return () =>
    new Promise((resolve, _reject) => {
      if (doc.readyState === 'complete' || doc.readyState === 'interactive') {
        resolve();

        return;
      }

      const contentLoaded = () => {
        doc.removeEventListener('DOMContentLoaded', contentLoaded);
        resolve();
      };

      doc.addEventListener('DOMContentLoaded', contentLoaded);
    });
}

const factoryCacheMap = new Map<Type<{}>, NgModuleFactory<{}>>();
export async function getFactory(moduleOrFactory: Type<{}> | NgModuleFactory<{}>): Promise<NgModuleFactory<{}>> {
  // If module has been compiled AoT
  if (moduleOrFactory instanceof NgModuleFactory) {
    return moduleOrFactory;
  } else {
    // we're in JIT mode
    if (!factoryCacheMap.has(moduleOrFactory)) {
      // Compile the module and cache it
      const module = await getCompiler().compileModuleAsync(moduleOrFactory).catch(e => { console.log(e); process.exit(15) })
      factoryCacheMap.set(moduleOrFactory, module);
    }
    return factoryCacheMap.get(moduleOrFactory);
  }
}

export function getCompiler(): Compiler {
  const compilerFactory: CompilerFactory = platformDynamicServer().injector.get(CompilerFactory);
  return compilerFactory.createCompiler([{ providers: [{ provide: ResourceLoader, useClass: FileLoader, deps: [] }] }]);
}

export class FileLoader implements ResourceLoader {
  get(url: string): Promise<string> {
    return new Promise((resolve, reject) => readFile(url, { encoding: 'utf-8' }, (err, data) => err ? reject(err) : resolve(data)));
  }
}
