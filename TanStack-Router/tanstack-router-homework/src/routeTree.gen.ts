/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ColorRGBImport } from './routes/color.$r.$g.$b'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ColorRGBRoute = ColorRGBImport.update({
  path: '/color/$r/$g/$b',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/color/$r/$g/$b': {
      id: '/color/$r/$g/$b'
      path: '/color/$r/$g/$b'
      fullPath: '/color/$r/$g/$b'
      preLoaderRoute: typeof ColorRGBImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/color/$r/$g/$b': typeof ColorRGBRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/color/$r/$g/$b': typeof ColorRGBRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/color/$r/$g/$b': typeof ColorRGBRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/color/$r/$g/$b'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/color/$r/$g/$b'
  id: '__root__' | '/' | '/color/$r/$g/$b'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ColorRGBRoute: typeof ColorRGBRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ColorRGBRoute: ColorRGBRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/color/$r/$g/$b"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/color/$r/$g/$b": {
      "filePath": "color.$r.$g.$b.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
