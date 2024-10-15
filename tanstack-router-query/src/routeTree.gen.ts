/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TasksImport } from './routes/tasks'
import { Route as IpImport } from './routes/ip'
import { Route as IdImport } from './routes/$id'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const TasksRoute = TasksImport.update({
  path: '/tasks',
  getParentRoute: () => rootRoute,
} as any)

const IpRoute = IpImport.update({
  path: '/ip',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/ip.lazy').then((d) => d.Route))

const IdRoute = IdImport.update({
  path: '/$id',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
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
    '/$id': {
      id: '/$id'
      path: '/$id'
      fullPath: '/$id'
      preLoaderRoute: typeof IdImport
      parentRoute: typeof rootRoute
    }
    '/ip': {
      id: '/ip'
      path: '/ip'
      fullPath: '/ip'
      preLoaderRoute: typeof IpImport
      parentRoute: typeof rootRoute
    }
    '/tasks': {
      id: '/tasks'
      path: '/tasks'
      fullPath: '/tasks'
      preLoaderRoute: typeof TasksImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$id': typeof IdRoute
  '/ip': typeof IpRoute
  '/tasks': typeof TasksRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$id': typeof IdRoute
  '/ip': typeof IpRoute
  '/tasks': typeof TasksRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/$id': typeof IdRoute
  '/ip': typeof IpRoute
  '/tasks': typeof TasksRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/$id' | '/ip' | '/tasks'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/$id' | '/ip' | '/tasks'
  id: '__root__' | '/' | '/$id' | '/ip' | '/tasks'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  IdRoute: typeof IdRoute
  IpRoute: typeof IpRoute
  TasksRoute: typeof TasksRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  IdRoute: IdRoute,
  IpRoute: IpRoute,
  TasksRoute: TasksRoute,
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
        "/$id",
        "/ip",
        "/tasks"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$id": {
      "filePath": "$id.tsx"
    },
    "/ip": {
      "filePath": "ip.tsx"
    },
    "/tasks": {
      "filePath": "tasks.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
