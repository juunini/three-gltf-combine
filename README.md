# three-gltf-combine

## Install

```bash
#npm
npm install three-gltf-combine

#yarn
yarn add three-gltf-combine

# pnpm
pnpm add three-gltf-combine

# bun
bun add three-gltf-combine
```

## Usage

### If you want to combine gltf parts

```ts
import { combineSkinnedMesh } from 'three-gltf-combine';

//...

const destination = parent.getObjectByName('your SkinnedMesh name') as THREE.SkinnedMesh;
const target = otherGLTF.getObjectByName('your SkinnedMesh name') as THREE.SkinnedMesh;

combineSkinnedMesh({
  target,
  destination,
  parent,
});
```

### If you want to replace gltf parts

```ts
import { replaceSkinnedMesh } from 'three-gltf-combine';

//...

const destination = parent.getObjectByName('your SkinnedMesh name') as THREE.SkinnedMesh;
const target = otherGLTF.getObjectByName('your SkinnedMesh name') as THREE.SkinnedMesh;

replaceSkinnedMesh({
  target,
  destination,
  parent,
});
```
