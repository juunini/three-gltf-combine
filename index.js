/**
 * @typedef {import('three').SkinnedMesh} SkinnedMesh
 * @typedef {import('three').Group} Group
 * @typedef {import('three').Object3D} Object3D
 */

/**
 * @param {Props} props
 * @param {SkinnedMesh} props.target
 * @param {SkinnedMesh} props.destination
 * @param {Group | Object3D} props.parent
 */
export function combineSkinnedMesh({ target, destination, parent }) {
  target.bind(destination.skeleton, destination.bindMatrix);
  parent.add(target);
}

/**
 * @param {Props} props
 * @param {SkinnedMesh} props.target
 * @param {SkinnedMesh} props.destination
 * @param {Group | Object3D} props.parent
 */
export function replaceSkinnedMesh({ target, destination, parent }) {
  combineSkinnedMesh({ target, destination, parent });
  parent.remove(destination);
}
