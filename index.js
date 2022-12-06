"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceSkinnedMesh = exports.combineSkinnedMesh = void 0;
function combineSkinnedMesh({ target, destination, parent }) {
    target.bind(destination.skeleton, destination.bindMatrix);
    parent.add(target);
}
exports.combineSkinnedMesh = combineSkinnedMesh;
function replaceSkinnedMesh({ target, destination, parent }) {
    combineSkinnedMesh({ target, destination, parent });
    parent.remove(destination);
}
exports.replaceSkinnedMesh = replaceSkinnedMesh;
