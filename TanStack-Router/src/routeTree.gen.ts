/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WrapperImport } from './routes/_wrapper'
import { Route as IndexImport } from './routes/index'
import { Route as WrapperPostsImport } from './routes/_wrapper/posts'
import { Route as WrapperPostsIndexImport } from './routes/_wrapper/posts/index'
import { Route as WrapperPostsNewImport } from './routes/_wrapper/posts/new'
import { Route as WrapperDetailsSplatImport } from './routes/_wrapper/details.$'
import { Route as WrapperPostsDetailsPostIdImport } from './routes/_wrapper/posts_/details.$postId'
import { Route as WrapperPostsEditSplatImport } from './routes/_wrapper/posts/edit.$'

// Create/Update Routes

const WrapperRoute = WrapperImport.update({
  id: '/_wrapper',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const WrapperPostsRoute = WrapperPostsImport.update({
  path: '/posts',
  getParentRoute: () => WrapperRoute,
} as any)

const WrapperPostsIndexRoute = WrapperPostsIndexImport.update({
  path: '/',
  getParentRoute: () => WrapperPostsRoute,
} as any)

const WrapperPostsNewRoute = WrapperPostsNewImport.update({
  path: '/new',
  getParentRoute: () => WrapperPostsRoute,
} as any)

const WrapperDetailsSplatRoute = WrapperDetailsSplatImport.update({
  path: '/details/$',
  getParentRoute: () => WrapperRoute,
} as any)

const WrapperPostsDetailsPostIdRoute = WrapperPostsDetailsPostIdImport.update({
  path: '/posts/details/$postId',
  getParentRoute: () => WrapperRoute,
} as any)

const WrapperPostsEditSplatRoute = WrapperPostsEditSplatImport.update({
  path: '/edit/$',
  getParentRoute: () => WrapperPostsRoute,
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
    '/_wrapper': {
      id: '/_wrapper'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof WrapperImport
      parentRoute: typeof rootRoute
    }
    '/_wrapper/posts': {
      id: '/_wrapper/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof WrapperPostsImport
      parentRoute: typeof WrapperImport
    }
    '/_wrapper/details/$': {
      id: '/_wrapper/details/$'
      path: '/details/$'
      fullPath: '/details/$'
      preLoaderRoute: typeof WrapperDetailsSplatImport
      parentRoute: typeof WrapperImport
    }
    '/_wrapper/posts/new': {
      id: '/_wrapper/posts/new'
      path: '/new'
      fullPath: '/posts/new'
      preLoaderRoute: typeof WrapperPostsNewImport
      parentRoute: typeof WrapperPostsImport
    }
    '/_wrapper/posts/': {
      id: '/_wrapper/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof WrapperPostsIndexImport
      parentRoute: typeof WrapperPostsImport
    }
    '/_wrapper/posts/edit/$': {
      id: '/_wrapper/posts/edit/$'
      path: '/edit/$'
      fullPath: '/posts/edit/$'
      preLoaderRoute: typeof WrapperPostsEditSplatImport
      parentRoute: typeof WrapperPostsImport
    }
    '/_wrapper/posts/details/$postId': {
      id: '/_wrapper/posts/details/$postId'
      path: '/posts/details/$postId'
      fullPath: '/posts/details/$postId'
      preLoaderRoute: typeof WrapperPostsDetailsPostIdImport
      parentRoute: typeof WrapperImport
    }
  }
}

// Create and export the route tree

interface WrapperPostsRouteChildren {
  WrapperPostsNewRoute: typeof WrapperPostsNewRoute
  WrapperPostsIndexRoute: typeof WrapperPostsIndexRoute
  WrapperPostsEditSplatRoute: typeof WrapperPostsEditSplatRoute
}

const WrapperPostsRouteChildren: WrapperPostsRouteChildren = {
  WrapperPostsNewRoute: WrapperPostsNewRoute,
  WrapperPostsIndexRoute: WrapperPostsIndexRoute,
  WrapperPostsEditSplatRoute: WrapperPostsEditSplatRoute,
}

const WrapperPostsRouteWithChildren = WrapperPostsRoute._addFileChildren(
  WrapperPostsRouteChildren,
)

interface WrapperRouteChildren {
  WrapperPostsRoute: typeof WrapperPostsRouteWithChildren
  WrapperDetailsSplatRoute: typeof WrapperDetailsSplatRoute
  WrapperPostsDetailsPostIdRoute: typeof WrapperPostsDetailsPostIdRoute
}

const WrapperRouteChildren: WrapperRouteChildren = {
  WrapperPostsRoute: WrapperPostsRouteWithChildren,
  WrapperDetailsSplatRoute: WrapperDetailsSplatRoute,
  WrapperPostsDetailsPostIdRoute: WrapperPostsDetailsPostIdRoute,
}

const WrapperRouteWithChildren =
  WrapperRoute._addFileChildren(WrapperRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof WrapperRouteWithChildren
  '/posts': typeof WrapperPostsRouteWithChildren
  '/details/$': typeof WrapperDetailsSplatRoute
  '/posts/new': typeof WrapperPostsNewRoute
  '/posts/': typeof WrapperPostsIndexRoute
  '/posts/edit/$': typeof WrapperPostsEditSplatRoute
  '/posts/details/$postId': typeof WrapperPostsDetailsPostIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof WrapperRouteWithChildren
  '/details/$': typeof WrapperDetailsSplatRoute
  '/posts/new': typeof WrapperPostsNewRoute
  '/posts': typeof WrapperPostsIndexRoute
  '/posts/edit/$': typeof WrapperPostsEditSplatRoute
  '/posts/details/$postId': typeof WrapperPostsDetailsPostIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_wrapper': typeof WrapperRouteWithChildren
  '/_wrapper/posts': typeof WrapperPostsRouteWithChildren
  '/_wrapper/details/$': typeof WrapperDetailsSplatRoute
  '/_wrapper/posts/new': typeof WrapperPostsNewRoute
  '/_wrapper/posts/': typeof WrapperPostsIndexRoute
  '/_wrapper/posts/edit/$': typeof WrapperPostsEditSplatRoute
  '/_wrapper/posts/details/$postId': typeof WrapperPostsDetailsPostIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/posts'
    | '/details/$'
    | '/posts/new'
    | '/posts/'
    | '/posts/edit/$'
    | '/posts/details/$postId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/details/$'
    | '/posts/new'
    | '/posts'
    | '/posts/edit/$'
    | '/posts/details/$postId'
  id:
    | '__root__'
    | '/'
    | '/_wrapper'
    | '/_wrapper/posts'
    | '/_wrapper/details/$'
    | '/_wrapper/posts/new'
    | '/_wrapper/posts/'
    | '/_wrapper/posts/edit/$'
    | '/_wrapper/posts/details/$postId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  WrapperRoute: typeof WrapperRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  WrapperRoute: WrapperRouteWithChildren,
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
        "/_wrapper"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_wrapper": {
      "filePath": "_wrapper.tsx",
      "children": [
        "/_wrapper/posts",
        "/_wrapper/details/$",
        "/_wrapper/posts/details/$postId"
      ]
    },
    "/_wrapper/posts": {
      "filePath": "_wrapper/posts.tsx",
      "parent": "/_wrapper",
      "children": [
        "/_wrapper/posts/new",
        "/_wrapper/posts/",
        "/_wrapper/posts/edit/$"
      ]
    },
    "/_wrapper/details/$": {
      "filePath": "_wrapper/details.$.tsx",
      "parent": "/_wrapper"
    },
    "/_wrapper/posts/new": {
      "filePath": "_wrapper/posts/new.tsx",
      "parent": "/_wrapper/posts"
    },
    "/_wrapper/posts/": {
      "filePath": "_wrapper/posts/index.tsx",
      "parent": "/_wrapper/posts"
    },
    "/_wrapper/posts/edit/$": {
      "filePath": "_wrapper/posts/edit.$.tsx",
      "parent": "/_wrapper/posts"
    },
    "/_wrapper/posts/details/$postId": {
      "filePath": "_wrapper/posts_/details.$postId.tsx",
      "parent": "/_wrapper"
    }
  }
}
ROUTE_MANIFEST_END */
