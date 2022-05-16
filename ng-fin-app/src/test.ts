// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
// getTestBed: Provide the SUrface configuration for the Test Object Model used while writing the test
import { getTestBed } from '@angular/core/testing';
// platformBrowserDynamicTesting: Bootstrap the Angular Application's Object Model in Testing Environment
// BrowserDynamicTestingModule: Manage Angular's Core Objects into the Testing Environment
// e.g. Component (Class + HTML + Directives + Service Injection + Pipes)
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
// The Extended Node.js 'require' object to load Test Metadata and Test Source files into the Memory
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// First, initialize the Angular testing environment.
// initTestEnvironment: Load NgModule so that all its properties can be used while testing
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
