"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function comparePilets(a, b) {
    return a.name.localeCompare(b.name);
}
function sortPilets(pilets) {
    const sortedPilets = [...pilets];
    sortedPilets.sort(comparePilets);
    return sortedPilets;
}
exports.sortPilets = sortPilets;
//# sourceMappingURL=sort.js.map