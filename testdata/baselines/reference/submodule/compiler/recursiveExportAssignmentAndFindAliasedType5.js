//// [tests/cases/compiler/recursiveExportAssignmentAndFindAliasedType5.ts] ////

//// [recursiveExportAssignmentAndFindAliasedType5_moduleC.ts]
import self = require("recursiveExportAssignmentAndFindAliasedType5_moduleD");
export = self;

//// [recursiveExportAssignmentAndFindAliasedType5_moduleD.ts]
import self = require("recursiveExportAssignmentAndFindAliasedType5_moduleC");
export = self;

//// [recursiveExportAssignmentAndFindAliasedType5_moduleB.ts]
class ClassB { }
export = ClassB;

//// [recursiveExportAssignmentAndFindAliasedType5_moduleA.ts]
import moduleC = require("recursiveExportAssignmentAndFindAliasedType5_moduleC");
import ClassB = require("recursiveExportAssignmentAndFindAliasedType5_moduleB");
export var b: ClassB; // This should result in type ClassB

//// [recursiveExportAssignmentAndFindAliasedType5_moduleA.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
