"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/posts/[id]/route";
exports.ids = ["app/api/posts/[id]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fposts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Fbruno%2FDesktop%2Flamamia%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fbruno%2FDesktop%2Flamamia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fposts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Fbruno%2FDesktop%2Flamamia%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fbruno%2FDesktop%2Flamamia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _home_bruno_Desktop_lamamia_src_app_api_posts_id_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/posts/[id]/route.js */ \"(rsc)/./src/app/api/posts/[id]/route.js\");\n\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n// @ts-expect-error - replaced by webpack/turbopack loader\n\nconst AppRouteRouteModule = next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule;\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/posts/[id]/route\",\n        pathname: \"/api/posts/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/posts/[id]/route\"\n    },\n    resolvedPagePath: \"/home/bruno/Desktop/lamamia/src/app/api/posts/[id]/route.js\",\n    nextConfigOutput,\n    userland: _home_bruno_Desktop_lamamia_src_app_api_posts_id_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/posts/[id]/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwb3N0cyUyRiU1QmlkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwb3N0cyUyRiU1QmlkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcG9zdHMlMkYlNUJpZCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGYnJ1bm8lMkZEZXNrdG9wJTJGbGFtYW1pYSUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRmJydW5vJTJGRGVza3RvcCUyRmxhbWFtaWEmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDMEY7QUFDM0I7QUFDL0Q7QUFDd0Y7QUFDeEYsNEJBQTRCLGdIQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvPzgzZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibmV4dC9kaXN0L3NlcnZlci9ub2RlLXBvbHlmaWxsLWhlYWRlcnNcIjtcbi8vIEB0cy1pZ25vcmUgdGhpcyBuZWVkIHRvIGJlIGltcG9ydGVkIGZyb20gbmV4dC9kaXN0IHRvIGJlIGV4dGVybmFsXG5pbXBvcnQgKiBhcyBtb2R1bGUgZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbi8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXBsYWNlZCBieSB3ZWJwYWNrL3R1cmJvcGFjayBsb2FkZXJcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9icnVuby9EZXNrdG9wL2xhbWFtaWEvc3JjL2FwcC9hcGkvcG9zdHMvW2lkXS9yb3V0ZS5qc1wiO1xuY29uc3QgQXBwUm91dGVSb3V0ZU1vZHVsZSA9IG1vZHVsZS5BcHBSb3V0ZVJvdXRlTW9kdWxlO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcG9zdHMvW2lkXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Bvc3RzL1tpZF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Bvc3RzL1tpZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9icnVuby9EZXNrdG9wL2xhbWFtaWEvc3JjL2FwcC9hcGkvcG9zdHMvW2lkXS9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wb3N0cy9baWRdL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fposts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Fbruno%2FDesktop%2Flamamia%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fbruno%2FDesktop%2Flamamia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/posts/[id]/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/posts/[id]/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/db */ \"(rsc)/./src/utils/db.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Post */ \"(rsc)/./src/models/Post.js\");\n\n\n\nconst GET = async (request, { params })=>{\n    const { id } = params;\n    try {\n        await (0,_utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const post = await _models_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id);\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](JSON.stringify(post), {\n            status: 200\n        });\n    } catch (err) {\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Database Error\", {\n            status: 500\n        });\n    }\n};\nconst DELETE = async (request, { params })=>{\n    const { id } = params;\n    try {\n        await (0,_utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        await _models_Post__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndDelete(id);\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Post has been deleted\", {\n            status: 200\n        });\n    } catch (err) {\n        return new next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Database Error\", {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wb3N0cy9baWRdL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ1Y7QUFDQTtBQUUxQixNQUFNRyxNQUFNLE9BQU9DLFNBQVMsRUFBQ0MsTUFBTSxFQUFDO0lBRXpDLE1BQU0sRUFBQ0MsRUFBRSxFQUFDLEdBQUdEO0lBRWIsSUFBSTtRQUNGLE1BQU1KLHFEQUFPQTtRQUViLE1BQU1NLE9BQU8sTUFBTUwsb0RBQUlBLENBQUNNLFFBQVEsQ0FBQ0Y7UUFFakMsT0FBTyxJQUFJTixrRkFBWUEsQ0FBQ1MsS0FBS0MsU0FBUyxDQUFDSCxPQUFPO1lBQUVJLFFBQVE7UUFBSTtJQUM5RCxFQUFFLE9BQU9DLEtBQUs7UUFDWixPQUFPLElBQUlaLGtGQUFZQSxDQUFDLGtCQUFrQjtZQUFFVyxRQUFRO1FBQUk7SUFDMUQ7QUFDRixFQUFFO0FBRUssTUFBTUUsU0FBUyxPQUFPVCxTQUFTLEVBQUNDLE1BQU0sRUFBQztJQUU1QyxNQUFNLEVBQUNDLEVBQUUsRUFBQyxHQUFHRDtJQUViLElBQUk7UUFDRixNQUFNSixxREFBT0E7UUFFYixNQUFNQyxvREFBSUEsQ0FBQ1ksaUJBQWlCLENBQUNSO1FBRTdCLE9BQU8sSUFBSU4sa0ZBQVlBLENBQUMseUJBQXlCO1lBQUVXLFFBQVE7UUFBSTtJQUNqRSxFQUFFLE9BQU9DLEtBQUs7UUFDWixPQUFPLElBQUlaLGtGQUFZQSxDQUFDLGtCQUFrQjtZQUFFVyxRQUFRO1FBQUk7SUFDMUQ7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2FwcC9hcGkvcG9zdHMvW2lkXS9yb3V0ZS5qcz8yNWNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIkAvdXRpbHMvZGJcIjtcbmltcG9ydCBQb3N0IGZyb20gXCJAL21vZGVscy9Qb3N0XCI7XG5cbmV4cG9ydCBjb25zdCBHRVQgPSBhc3luYyAocmVxdWVzdCwge3BhcmFtc30pID0+IHtcblxuICBjb25zdCB7aWR9ID0gcGFyYW1zIFxuXG4gIHRyeSB7XG4gICAgYXdhaXQgY29ubmVjdCgpO1xuXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IFBvc3QuZmluZEJ5SWQoaWQpO1xuXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkocG9zdCksIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiRGF0YWJhc2UgRXJyb3JcIiwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IERFTEVURSA9IGFzeW5jIChyZXF1ZXN0LCB7cGFyYW1zfSkgPT4ge1xuXG4gIGNvbnN0IHtpZH0gPSBwYXJhbXMgXG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBjb25uZWN0KCk7XG5cbiAgICBhd2FpdCBQb3N0LmZpbmRCeUlkQW5kRGVsZXRlKGlkKTtcblxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiUG9zdCBoYXMgYmVlbiBkZWxldGVkXCIsIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiRGF0YWJhc2UgRXJyb3JcIiwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufTtcblxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvbm5lY3QiLCJQb3N0IiwiR0VUIiwicmVxdWVzdCIsInBhcmFtcyIsImlkIiwicG9zdCIsImZpbmRCeUlkIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImVyciIsIkRFTEVURSIsImZpbmRCeUlkQW5kRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/posts/[id]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Post.js":
/*!****************************!*\
  !*** ./src/models/Post.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst postSchema = new Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    desc: {\n        type: String,\n        required: true\n    },\n    img: {\n        type: String,\n        required: true\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    username: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\n//If the Post collection does not exist create a new one.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Post || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Post\", postSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1Bvc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdELGlEQUFRQTtBQUUzQixNQUFNRSxhQUFhLElBQUlELE9BQ3JCO0lBQ0VFLE9BQU87UUFDTEMsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FDLE1BQU07UUFDSkgsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FFLEtBQUs7UUFDSEosTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FHLFNBQVM7UUFDUEwsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FJLFVBQVU7UUFDUk4sTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0FBQ0YsR0FDQTtJQUFFSyxZQUFZO0FBQUs7QUFHckIseURBQXlEO0FBQ3pELGlFQUFlWCx3REFBZSxDQUFDYSxJQUFJLElBQUliLHFEQUFjLENBQUMsUUFBUUUsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9tb2RlbHMvUG9zdC5qcz81N2UyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xuXG5jb25zdCBwb3N0U2NoZW1hID0gbmV3IFNjaGVtYShcbiAge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGRlc2M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgaW1nOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgdXNlcm5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG4vL0lmIHRoZSBQb3N0IGNvbGxlY3Rpb24gZG9lcyBub3QgZXhpc3QgY3JlYXRlIGEgbmV3IG9uZS5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Qb3N0IHx8IG1vbmdvb3NlLm1vZGVsKFwiUG9zdFwiLCBwb3N0U2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJwb3N0U2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkZXNjIiwiaW1nIiwiY29udGVudCIsInVzZXJuYW1lIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIlBvc3QiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Post.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/db.js":
/*!*************************!*\
  !*** ./src/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connect = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n    //console.log('MongoDB Connected...');\n    } catch (err) {\n        throw new Error(\"Connection failed!\");\n    //console.error(err.message);\n    // make the process fail\n    //process.exit(1);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBQy9CLE1BQU1DLFVBQVU7SUFDWixJQUFJO1FBQ0EsTUFBTUQsdURBQWdCLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztJQUM1QyxzQ0FBc0M7SUFDMUMsRUFBRSxPQUFPQyxLQUFLO1FBQ1YsTUFBTSxJQUFJQyxNQUFNO0lBQ2hCLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ3RCO0FBQ0o7QUFFQSxpRUFBZUwsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy91dGlscy9kYi5qcz9kMzg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxuY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ01vbmdvREIgQ29ubmVjdGVkLi4uJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbm5lY3Rpb24gZmFpbGVkIVwiKVxuICAgICAgICAvL2NvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAvLyBtYWtlIHRoZSBwcm9jZXNzIGZhaWxcbiAgICAgICAgLy9wcm9jZXNzLmV4aXQoMSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJlcnIiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fposts%2F%5Bid%5D%2Froute&page=%2Fapi%2Fposts%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Fbruno%2FDesktop%2Flamamia%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fbruno%2FDesktop%2Flamamia&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();