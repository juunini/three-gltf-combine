import type { SkinnedMesh, Group, Object3D } from "three";
interface Props {
    target: SkinnedMesh;
    destination: SkinnedMesh;
    parent: Group | Object3D;
}
export declare function combineSkinnedMesh({ target, destination, parent }: Props): void;
export declare function replaceSkinnedMesh({ target, destination, parent }: Props): void;
export {};
