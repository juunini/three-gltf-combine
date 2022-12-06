import type { SkinnedMesh, Group, Object3D } from "three";

interface Props {
  target: SkinnedMesh;
  destination: SkinnedMesh;
  parent: Group | Object3D;
}

export function combineSkinnedMesh({ target, destination, parent }: Props): void {
  target.bind(destination.skeleton, destination.bindMatrix);
  parent.add(target);
}

export function replaceSkinnedMesh({ target, destination, parent }: Props): void {
  combineSkinnedMesh({ target, destination, parent });
  parent.remove(destination);
}
