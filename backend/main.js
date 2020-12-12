/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./run.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nexports.connectToMongoDb = exports.mdbCollections = exports.mdb = exports.mdbClient = exports.app = void 0;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\n__webpack_require__(/*! express-async-errors */ \"express-async-errors\");\nvar mongodb_1 = __webpack_require__(/*! mongodb */ \"mongodb\");\nvar config_1 = __webpack_require__(/*! ./config */ \"./config.ts\");\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\nvar source_map_support_1 = __importDefault(__webpack_require__(/*! source-map-support */ \"source-map-support\"));\nsource_map_support_1[\"default\"].install({\n    environment: 'node',\n    hookRequire: true,\n});\nexports.app = express_1[\"default\"]();\nfunction connectToMongoDb() {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    exports.mdbClient = new mongodb_1.MongoClient(config_1.mdbConnectionString, { useUnifiedTopology: true });\n                    return [4 /*yield*/, exports.mdbClient.connect()];\n                case 1:\n                    _a.sent();\n                    exports.mdb = exports.mdbClient.db();\n                    exports.mdbCollections = {\n                        clientUsers: exports.mdb.collection(\"clientUsers\"),\n                        tamagotchies: exports.mdb.collection(\"tamagotchies\")\n                    };\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.connectToMongoDb = connectToMongoDb;\n\n\n//# sourceURL=webpack:///./app.ts?");

/***/ }),

/***/ "./common/authUtils.ts":
/*!*****************************!*\
  !*** ./common/authUtils.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nexports.__esModule = true;\nexports.decodeToken = exports.createToken = exports.TokenData = void 0;\nvar uuid = __importStar(__webpack_require__(/*! uuid */ \"uuid\"));\nvar TokenData = /** @class */ (function () {\n    function TokenData(id, salt) {\n        this.id = id;\n        this.salt = salt;\n    }\n    return TokenData;\n}());\nexports.TokenData = TokenData;\nfunction createToken(userId) {\n    return Buffer.from(JSON.stringify(new TokenData(userId + \"\", uuid.v4()))).toString(\"base64\");\n}\nexports.createToken = createToken;\nfunction decodeToken(token) {\n    try {\n        return JSON.parse(Buffer.from(token, \"base64\").toString(\"utf8\"));\n    }\n    catch (err) {\n        // console.log(err);\n        return null;\n    }\n}\nexports.decodeToken = decodeToken;\n\n\n//# sourceURL=webpack:///./common/authUtils.ts?");

/***/ }),

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.tamagotchiMinIntervals = exports.cookiesDefaultOptions = exports.headersNames = exports.gAuthConfig = exports.serverConfig = exports.mdbConnectionString = void 0;\nexports.mdbConnectionString = \"mongodb+srv://user001:H9wUBPsdmspef63c@cluster001-sgsi2.mongodb.net/main?retryWrites=true&w=majority\";\nexports.serverConfig = new /** @class */ (function () {\n    function class_1() {\n        this.production = false;\n        this.protocol = this.production ? \"https\" : \"http\";\n        this.host = this.production ? \"node-chat-001.herokuapp.com\" : \"localhost\";\n        this.port = this.production ? 80 : 5000;\n        this.uri = this.protocol + \"://\" + this.host + (this.port !== 80 ? \":\" + this.port : \"\");\n    }\n    return class_1;\n}());\nexports.gAuthConfig = {\n    clientId: \"542989413324-vibeh8n200fvnm60gshdq5ujfrkpqbqh.apps.googleusercontent.com\",\n    clientSecret: \"S1myRkzryHSeh46SgvXsPRya\"\n};\nexports.headersNames = {\n    identityToken: \"authorization\"\n};\nexports.cookiesDefaultOptions = {\n    path: \"/\",\n    maxAge: 315360000,\n    secure: exports.serverConfig.protocol === \"https\",\n    sameSite: \"lax\",\n    httpOnly: true\n};\nexports.tamagotchiMinIntervals = {\n    dog: {\n        walking: 6,\n        feeding: 4\n    },\n    cat: {\n        walking: 3,\n        feeding: 5\n    },\n    parrot: {\n        feeding: 3\n    }\n};\n\n\n//# sourceURL=webpack:///./config.ts?");

/***/ }),

/***/ "./controllers/auth/checkToken.ts":
/*!****************************************!*\
  !*** ./controllers/auth/checkToken.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.checkTokenRoute = exports.checkTokenInterceptor = void 0;\nvar app_1 = __webpack_require__(/*! ../../app */ \"./app.ts\");\nvar config_1 = __webpack_require__(/*! ../../config */ \"./config.ts\");\nvar authUtils_1 = __webpack_require__(/*! ../../common/authUtils */ \"./common/authUtils.ts\");\nvar mongodb_1 = __webpack_require__(/*! mongodb */ \"mongodb\");\nfunction checkTokenInterceptor(req, resp, next) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, checkToken(req)];\n                case 1:\n                    _a.sent();\n                    next();\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.checkTokenInterceptor = checkTokenInterceptor;\nfunction checkTokenRoute(req, resp) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, checkToken(req)];\n                case 1:\n                    _a.sent();\n                    resp.json();\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.checkTokenRoute = checkTokenRoute;\nfunction checkToken(req) {\n    return __awaiter(this, void 0, void 0, function () {\n        var tokenData, _a;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    tokenData = authUtils_1.decodeToken(req.headers[config_1.headersNames.identityToken]);\n                    if (!tokenData)\n                        throw \"Token check failed 1\";\n                    _a = req;\n                    return [4 /*yield*/, app_1.mdbCollections.clientUsers.findOne({\n                            _id: new mongodb_1.ObjectId(tokenData.id),\n                            token: req.headers[config_1.headersNames.identityToken]\n                        })];\n                case 1:\n                    _a.user = _b.sent();\n                    if (!req.user)\n                        throw \"Token check failed 2\";\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\n\n\n//# sourceURL=webpack:///./controllers/auth/checkToken.ts?");

/***/ }),

/***/ "./controllers/auth/loginFromGoogle.ts":
/*!*********************************************!*\
  !*** ./controllers/auth/loginFromGoogle.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nexports.loginFromGoogleStep2 = exports.loginFromGoogleStep1 = void 0;\nvar node_fetch_1 = __importDefault(__webpack_require__(/*! node-fetch */ \"node-fetch\"));\nvar querystring_1 = __importDefault(__webpack_require__(/*! querystring */ \"querystring\"));\nvar config_1 = __webpack_require__(/*! ../../config */ \"./config.ts\");\nvar uuid = __importStar(__webpack_require__(/*! uuid */ \"uuid\"));\nvar jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nvar jwks_rsa_1 = __importDefault(__webpack_require__(/*! jwks-rsa */ \"jwks-rsa\"));\nvar app_1 = __webpack_require__(/*! ../../app */ \"./app.ts\");\nvar user_1 = __webpack_require__(/*! ../../models/user */ \"./models/user.ts\");\nvar authUtils_1 = __webpack_require__(/*! ../../common/authUtils */ \"./common/authUtils.ts\");\nvar discoveryDoc;\nnode_fetch_1[\"default\"](\"https://accounts.google.com/.well-known/openid-configuration\").then(function (resp) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                if (!!resp.ok) return [3 /*break*/, 1];\n                throw \"DiscoveryDoc status not is ok\";\n            case 1: return [4 /*yield*/, resp.json()];\n            case 2:\n                discoveryDoc = _a.sent();\n                _a.label = 3;\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nfunction loginFromGoogleStep1(req, resp) {\n    req.session.state = JSON.stringify({\n        salt: uuid.v4(),\n    });\n    req.session.nonce = uuid.v4();\n    resp.redirect(discoveryDoc.authorization_endpoint + \"?\" + querystring_1[\"default\"].stringify({\n        client_id: config_1.gAuthConfig.clientId,\n        nonce: req.session.nonce,\n        state: req.session.state,\n        response_type: \"code\",\n        scope: \"openid email\",\n        redirect_uri: config_1.serverConfig.uri + \"/auth/loginFromGoogleStep2\"\n    }));\n}\nexports.loginFromGoogleStep1 = loginFromGoogleStep1;\nfunction loginFromGoogleStep2(req, resp) {\n    return __awaiter(this, void 0, void 0, function () {\n        var data, idTokenData, user, _a, newToken;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    if (req.query.error)\n                        throw \"Error: \" + req.query.error + \". Details: \" + req.query.error_description + \".\";\n                    if (req.query.state !== req.session.state)\n                        throw \"Invalid state parameter.\";\n                    return [4 /*yield*/, node_fetch_1[\"default\"](discoveryDoc.token_endpoint, {\n                            body: JSON.stringify({\n                                code: req.query.code,\n                                client_id: config_1.gAuthConfig.clientId,\n                                client_secret: config_1.gAuthConfig.clientSecret,\n                                redirect_uri: config_1.serverConfig.uri + \"/auth/loginFromGoogleStep2\",\n                                grant_type: \"authorization_code\"\n                            }),\n                            method: \"POST\"\n                        })];\n                case 1: return [4 /*yield*/, (_b.sent()).json()];\n                case 2:\n                    data = _b.sent();\n                    if (data.error)\n                        throw \"Error: \" + data.error + \". Details: \" + data.error_description + \".\";\n                    idTokenData = jsonwebtoken_1[\"default\"].decode(data.id_token, { complete: true, json: true });\n                    if (idTokenData.payload.nonce !== req.session.nonce)\n                        throw \"Invalid nonce parameter.\";\n                    verifiIdToken(data.id_token, idTokenData);\n                    req.session.state = null;\n                    req.session.nonce = null;\n                    return [4 /*yield*/, app_1.mdbCollections.clientUsers.findOne({ email: idTokenData.payload.email })];\n                case 3:\n                    user = _b.sent();\n                    if (!!user) return [3 /*break*/, 5];\n                    user = new user_1.User(idTokenData.payload.email);\n                    _a = user;\n                    return [4 /*yield*/, app_1.mdbCollections.clientUsers.insertOne(user)];\n                case 4:\n                    _a._id = (_b.sent()).insertedId;\n                    _b.label = 5;\n                case 5:\n                    newToken = authUtils_1.createToken(user._id);\n                    app_1.mdbCollections.clientUsers.updateOne({ _id: user._id }, { $set: { token: newToken } });\n                    user.token = newToken;\n                    resp.send(\"<script>\\n                    window.opener.postMessage(\\\"\" + newToken + \"\\\", \\\"*\\\");\\n                    window.close();\\n                </script>\");\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.loginFromGoogleStep2 = loginFromGoogleStep2;\nfunction verifiIdToken(idToken, idTokenData) {\n    jwks_rsa_1[\"default\"]({ jwksUri: discoveryDoc.jwks_uri }).getSigningKey(idTokenData.header.kid, function (err, key) {\n        if (err)\n            throw \"Error: \" + err;\n        jsonwebtoken_1[\"default\"].verify(idToken, key.getPublicKey(), { algorithms: [idTokenData.header.alg] }, function (err) {\n            if (err)\n                throw \"Error: \" + err;\n        });\n    });\n}\n\n\n//# sourceURL=webpack:///./controllers/auth/loginFromGoogle.ts?");

/***/ }),

/***/ "./controllers/auth/logout.ts":
/*!************************************!*\
  !*** ./controllers/auth/logout.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.logout = void 0;\nvar app_1 = __webpack_require__(/*! ../../app */ \"./app.ts\");\nfunction logout(req, resp) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, app_1.mdbCollections.clientUsers.updateOne({ _id: req.user._id, }, { $set: { token: null } })];\n                case 1:\n                    _a.sent();\n                    resp.json();\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.logout = logout;\n\n\n//# sourceURL=webpack:///./controllers/auth/logout.ts?");

/***/ }),

/***/ "./controllers/tamagotchi/changeLastFeedingDate.ts":
/*!*********************************************************!*\
  !*** ./controllers/tamagotchi/changeLastFeedingDate.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.changeLastFeedingDate = void 0;\nvar app_1 = __webpack_require__(/*! ../../app */ \"./app.ts\");\nfunction changeLastFeedingDate(req, resp) {\n    return __awaiter(this, void 0, void 0, function () {\n        var timestampNow;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    timestampNow = +new Date;\n                    return [4 /*yield*/, app_1.mdbCollections.tamagotchies.updateOne({ _id: req.body._id, userId: req.user._id }, { $set: { lastFeedingDate: timestampNow } })];\n                case 1:\n                    _a.sent();\n                    resp.json(timestampNow);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.changeLastFeedingDate = changeLastFeedingDate;\n\n\n//# sourceURL=webpack:///./controllers/tamagotchi/changeLastFeedingDate.ts?");

/***/ }),

/***/ "./controllers/tamagotchi/changeLastWalkingDate.ts":
/*!*********************************************************!*\
  !*** ./controllers/tamagotchi/changeLastWalkingDate.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.changeLastWalkingDate = void 0;\nvar app_1 = __webpack_require__(/*! ../../app */ \"./app.ts\");\nfunction changeLastWalkingDate(req, resp) {\n    return __awaiter(this, void 0, void 0, function () {\n        var timestampNow;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    timestampNow = +new Date;\n                    return [4 /*yield*/, app_1.mdbCollections.tamagotchies.updateOne({ _id: req.body._id, userId: req.user._id }, { $set: { lastWalkingDate: timestampNow } })];\n                case 1:\n                    _a.sent();\n                    resp.json(timestampNow);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.changeLastWalkingDate = changeLastWalkingDate;\n\n\n//# sourceURL=webpack:///./controllers/tamagotchi/changeLastWalkingDate.ts?");

/***/ }),

/***/ "./controllers/tamagotchi/createTamagotchi.ts":
/*!****************************************************!*\
  !*** ./controllers/tamagotchi/createTamagotchi.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.createTamagotchi = void 0;\nvar app_1 = __webpack_require__(/*! ../../app */ \"./app.ts\");\nvar tamagotchi_1 = __webpack_require__(/*! ../../models/tamagotchi */ \"./models/tamagotchi.ts\");\nfunction createTamagotchi(req, resp) {\n    return __awaiter(this, void 0, void 0, function () {\n        var data, newTamagotchiId, newTamagotchi;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    data = req.body;\n                    return [4 /*yield*/, app_1.mdbCollections.tamagotchies.insertOne(new tamagotchi_1.Tamagotchi(data.name, data.type, req.user._id))];\n                case 1:\n                    newTamagotchiId = (_a.sent()).insertedId;\n                    return [4 /*yield*/, app_1.mdbCollections.tamagotchies.findOne({ _id: newTamagotchiId })];\n                case 2:\n                    newTamagotchi = _a.sent();\n                    resp.json(newTamagotchi);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.createTamagotchi = createTamagotchi;\n\n\n//# sourceURL=webpack:///./controllers/tamagotchi/createTamagotchi.ts?");

/***/ }),

/***/ "./controllers/tamagotchi/deleteTamagotchi.ts":
/*!****************************************************!*\
  !*** ./controllers/tamagotchi/deleteTamagotchi.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.deleteTamagotchi = void 0;\nvar mongodb_1 = __webpack_require__(/*! mongodb */ \"mongodb\");\nvar app_1 = __webpack_require__(/*! ../../app */ \"./app.ts\");\nfunction deleteTamagotchi(req, resp) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, app_1.mdbCollections.tamagotchies.deleteOne({ userId: req.user._id, _id: new mongodb_1.ObjectId(req.query._id) })];\n                case 1:\n                    _a.sent();\n                    resp.json();\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.deleteTamagotchi = deleteTamagotchi;\n\n\n//# sourceURL=webpack:///./controllers/tamagotchi/deleteTamagotchi.ts?");

/***/ }),

/***/ "./controllers/tamagotchi/getUserTamagotchies.ts":
/*!*******************************************************!*\
  !*** ./controllers/tamagotchi/getUserTamagotchies.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nexports.__esModule = true;\nexports.getUserTamagotchies = void 0;\nvar app_1 = __webpack_require__(/*! ../../app */ \"./app.ts\");\nvar config_1 = __webpack_require__(/*! ../../config */ \"./config.ts\");\nfunction getUserTamagotchies(req, resp) {\n    return __awaiter(this, void 0, void 0, function () {\n        var tamagotchies, deathIds, _i, tamagotchies_1, tamagotchi, _a, _b;\n        return __generator(this, function (_c) {\n            switch (_c.label) {\n                case 0: return [4 /*yield*/, app_1.mdbCollections.tamagotchies.find({ userId: req.user._id }).toArray()];\n                case 1:\n                    tamagotchies = _c.sent();\n                    deathIds = [];\n                    for (_i = 0, tamagotchies_1 = tamagotchies; _i < tamagotchies_1.length; _i++) {\n                        tamagotchi = tamagotchies_1[_i];\n                        if (tamagotchi.type === \"cat\" && (tamagotchi.lastFeedingDate + config_1.tamagotchiMinIntervals.cat.feeding * 60000 < +new Date ||\n                            tamagotchi.lastWalkingDate + config_1.tamagotchiMinIntervals.cat.walking * 60000 < +new Date)) {\n                            deathIds.push(tamagotchi._id);\n                        }\n                        else if (tamagotchi.type === \"dog\" && (tamagotchi.lastFeedingDate + config_1.tamagotchiMinIntervals.dog.feeding * 60000 < +new Date ||\n                            tamagotchi.lastWalkingDate + config_1.tamagotchiMinIntervals.dog.walking * 60000 < +new Date)) {\n                            deathIds.push(tamagotchi._id);\n                        }\n                        else if (tamagotchi.type === \"parrot\" && (tamagotchi.lastFeedingDate + config_1.tamagotchiMinIntervals.dog.feeding * 60000 < +new Date)) {\n                            deathIds.push(tamagotchi._id);\n                        }\n                    }\n                    if (!(deathIds.length > 0)) return [3 /*break*/, 3];\n                    return [4 /*yield*/, app_1.mdbCollections.tamagotchies.updateMany({ _id: { $in: deathIds } }, { $set: { isDeath: true } })];\n                case 2:\n                    _c.sent();\n                    _c.label = 3;\n                case 3:\n                    _b = (_a = resp).json;\n                    return [4 /*yield*/, app_1.mdbCollections.tamagotchies.find({ userId: req.user._id }).toArray()];\n                case 4:\n                    _b.apply(_a, [_c.sent()]);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.getUserTamagotchies = getUserTamagotchies;\n\n\n//# sourceURL=webpack:///./controllers/tamagotchi/getUserTamagotchies.ts?");

/***/ }),

/***/ "./models/tamagotchi.ts":
/*!******************************!*\
  !*** ./models/tamagotchi.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.Tamagotchi = void 0;\nvar Tamagotchi = /** @class */ (function () {\n    function Tamagotchi(name, type, userId) {\n        this.createDate = +new Date;\n        this.isDeath = false;\n        this.name = name;\n        this.type = type;\n        this.userId = userId;\n        if (type === \"cat\" || type === \"dog\" || type === \"parrot\") {\n            this.lastFeedingDate = +new Date;\n            if (type === \"cat\" || type === \"dog\") {\n                this.lastWalkingDate = +new Date;\n            }\n        }\n    }\n    return Tamagotchi;\n}());\nexports.Tamagotchi = Tamagotchi;\n\n\n//# sourceURL=webpack:///./models/tamagotchi.ts?");

/***/ }),

/***/ "./models/user.ts":
/*!************************!*\
  !*** ./models/user.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.User = void 0;\nvar User = /** @class */ (function () {\n    function User(email) {\n        this.token = null;\n        this.email = email;\n    }\n    return User;\n}());\nexports.User = User;\n\n\n//# sourceURL=webpack:///./models/user.ts?");

/***/ }),

/***/ "./routes/auth.ts":
/*!************************!*\
  !*** ./routes/auth.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.authRouter = void 0;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar loginFromGoogle_1 = __webpack_require__(/*! ../controllers/auth/loginFromGoogle */ \"./controllers/auth/loginFromGoogle.ts\");\nvar checkToken_1 = __webpack_require__(/*! ../controllers/auth/checkToken */ \"./controllers/auth/checkToken.ts\");\nvar logout_1 = __webpack_require__(/*! ../controllers/auth/logout */ \"./controllers/auth/logout.ts\");\nexports.authRouter = express_1.Router();\nexports.authRouter.get(\"/loginFromGoogleStep1\", loginFromGoogle_1.loginFromGoogleStep1);\nexports.authRouter.get(\"/loginFromGoogleStep2\", loginFromGoogle_1.loginFromGoogleStep2);\nexports.authRouter.get(\"/checkToken\", checkToken_1.checkTokenRoute);\nexports.authRouter.get(\"/logout\", checkToken_1.checkTokenInterceptor, logout_1.logout);\n\n\n//# sourceURL=webpack:///./routes/auth.ts?");

/***/ }),

/***/ "./routes/tamagotchi.ts":
/*!******************************!*\
  !*** ./routes/tamagotchi.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.tamagotchiRouter = void 0;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar checkToken_1 = __webpack_require__(/*! ../controllers/auth/checkToken */ \"./controllers/auth/checkToken.ts\");\nvar changeLastFeedingDate_1 = __webpack_require__(/*! ../controllers/tamagotchi/changeLastFeedingDate */ \"./controllers/tamagotchi/changeLastFeedingDate.ts\");\nvar changeLastWalkingDate_1 = __webpack_require__(/*! ../controllers/tamagotchi/changeLastWalkingDate */ \"./controllers/tamagotchi/changeLastWalkingDate.ts\");\nvar createTamagotchi_1 = __webpack_require__(/*! ../controllers/tamagotchi/createTamagotchi */ \"./controllers/tamagotchi/createTamagotchi.ts\");\nvar deleteTamagotchi_1 = __webpack_require__(/*! ../controllers/tamagotchi/deleteTamagotchi */ \"./controllers/tamagotchi/deleteTamagotchi.ts\");\nvar getUserTamagotchies_1 = __webpack_require__(/*! ../controllers/tamagotchi/getUserTamagotchies */ \"./controllers/tamagotchi/getUserTamagotchies.ts\");\nexports.tamagotchiRouter = express_1.Router();\nexports.tamagotchiRouter.use(checkToken_1.checkTokenInterceptor);\nexports.tamagotchiRouter.get(\"/getUserTamagotchies\", getUserTamagotchies_1.getUserTamagotchies);\nexports.tamagotchiRouter.post(\"/createTamagotchi\", createTamagotchi_1.createTamagotchi);\nexports.tamagotchiRouter[\"delete\"](\"/deleteTamagotchi\", deleteTamagotchi_1.deleteTamagotchi);\nexports.tamagotchiRouter.put(\"/changeLastFeedingDate\", changeLastFeedingDate_1.changeLastFeedingDate);\nexports.tamagotchiRouter.put(\"/changeLastWalkingDate\", changeLastWalkingDate_1.changeLastWalkingDate);\n\n\n//# sourceURL=webpack:///./routes/tamagotchi.ts?");

/***/ }),

/***/ "./run.ts":
/*!****************!*\
  !*** ./run.ts ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nvar app_1 = __webpack_require__(/*! ./app */ \"./app.ts\");\nvar auth_1 = __webpack_require__(/*! ./routes/auth */ \"./routes/auth.ts\");\nvar config_1 = __webpack_require__(/*! ./config */ \"./config.ts\");\nvar cookie_session_1 = __importDefault(__webpack_require__(/*! cookie-session */ \"cookie-session\"));\nvar tamagotchi_1 = __webpack_require__(/*! ./routes/tamagotchi */ \"./routes/tamagotchi.ts\");\nvar express_1 = __webpack_require__(/*! express */ \"express\");\napp_1.app.use(cookie_session_1[\"default\"](__assign({ name: \"backendSession\", secret: \"2358143f-7e84-4cf5-a059-46c6aa8d1f9d\" }, config_1.cookiesDefaultOptions)));\napp_1.app.use(express_1.json());\napp_1.app.use(cors_1[\"default\"]());\napp_1.app.use(\"/auth\", auth_1.authRouter);\napp_1.app.use(\"/user\", tamagotchi_1.tamagotchiRouter);\n// app.get(\"/\", async (req: Request, resp: Response) => {\n//     const postsCollection = mdb.collection(\"posts\");\n//     postsCollection.insertOne({ test: \"001\" })\n//     const data = await postsCollection.find().toArray();\n//     console.log(data);\n//     resp.send(JSON.stringify(data));\n// });\n(function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, app_1.connectToMongoDb()];\n            case 1:\n                _a.sent();\n                app_1.app.listen(config_1.serverConfig.port, function () {\n                    console.log(\"Server started on \" + config_1.serverConfig.uri);\n                });\n                return [2 /*return*/];\n        }\n    });\n}); })();\n\n\n//# sourceURL=webpack:///./run.ts?");

/***/ }),

/***/ "cookie-session":
/*!*********************************!*\
  !*** external "cookie-session" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-session\");\n\n//# sourceURL=webpack:///external_%22cookie-session%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-async-errors":
/*!***************************************!*\
  !*** external "express-async-errors" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-async-errors\");\n\n//# sourceURL=webpack:///external_%22express-async-errors%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "jwks-rsa":
/*!***************************!*\
  !*** external "jwks-rsa" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jwks-rsa\");\n\n//# sourceURL=webpack:///external_%22jwks-rsa%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");\n\n//# sourceURL=webpack:///external_%22querystring%22?");

/***/ }),

/***/ "source-map-support":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"source-map-support\");\n\n//# sourceURL=webpack:///external_%22source-map-support%22?");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"source-map-support/register\");\n\n//# sourceURL=webpack:///external_%22source-map-support/register%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });