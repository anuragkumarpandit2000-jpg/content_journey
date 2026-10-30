import fs from 'fs';
import path from 'path';

export function createNextVideoFolder(baseDir = 'D:/anurag/content_journey', templateDir = 'D:/anurag/content_journey/video#5') {
  const entries = fs.readdirSync(baseDir);
  let maxNum = 0;

  for (const entry of entries) {
    const match = entry.match(/^video#(\d+)$/i);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num > maxNum) {
        maxNum = num;
      }
    }
  }

  const nextNum = maxNum + 1;
  const folderName = `video#${nextNum}`;
  const targetDir = path.join(baseDir, folderName);

  console.log(`[PIPELINE] Initializing ${folderName} at ${targetDir}...`);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'public'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'public/sfx'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'public/textures'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'public/overlays'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'public/fonts'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'out'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'src'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'src/components'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'src/routes'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'src/types'), { recursive: true });
  fs.mkdirSync(path.join(targetDir, 'src/data'), { recursive: true });

  // Copy essential configs from template
  fs.copyFileSync(path.join(templateDir, 'package.json'), path.join(targetDir, 'package.json'));
  fs.copyFileSync(path.join(templateDir, 'tsconfig.json'), path.join(targetDir, 'tsconfig.json'));
  fs.copyFileSync(path.join(templateDir, 'remotion.config.ts'), path.join(targetDir, 'remotion.config.ts'));

  // Copy SFX files
  const sfxDir = path.join(templateDir, 'public/sfx');
  if (fs.existsSync(sfxDir)) {
    const sfxFiles = fs.readdirSync(sfxDir);
    for (const f of sfxFiles) {
      fs.copyFileSync(path.join(sfxDir, f), path.join(targetDir, 'public/sfx', f));
    }
  }

  // Copy Core Source Files
  const srcFiles = ['index.ts', 'Root.tsx', 'MainReel.tsx'];
  for (const f of srcFiles) {
    if (fs.existsSync(path.join(templateDir, 'src', f))) {
      fs.copyFileSync(path.join(templateDir, 'src', f), path.join(targetDir, 'src', f));
    }
  }

  // Copy Types
  const typesDir = path.join(templateDir, 'src/types');
  if (fs.existsSync(typesDir)) {
    const typeFiles = fs.readdirSync(typesDir);
    for (const f of typeFiles) {
      fs.copyFileSync(path.join(typesDir, f), path.join(targetDir, 'src/types', f));
    }
  }

  // Copy Routes
  const routesDir = path.join(templateDir, 'src/routes');
  if (fs.existsSync(routesDir)) {
    const routeFiles = fs.readdirSync(routesDir);
    for (const f of routeFiles) {
      fs.copyFileSync(path.join(routesDir, f), path.join(targetDir, 'src/routes', f));
    }
  }

  // Copy Components
  const componentFiles = [
    'CameraRig.tsx',
    'DynamicBackground.tsx',
    'FilmGrain.tsx',
    'HeroKineticTypography.tsx',
    'MotionBrollLayer.tsx',
    'ThreeBackground.tsx',
  ];
  for (const f of componentFiles) {
    if (fs.existsSync(path.join(templateDir, 'src/components', f))) {
      fs.copyFileSync(path.join(templateDir, 'src/components', f), path.join(targetDir, 'src/components', f));
    }
  }

  // Link node_modules via Junction for zero-copy instant dependency access
  const sharedNodeModules = 'D:/anurag/content_journey/video#4/node_modules';
  const targetNodeModules = path.join(targetDir, 'node_modules');
  if (fs.existsSync(sharedNodeModules) && !fs.existsSync(targetNodeModules)) {
    try {
      import('child_process').then(({ execSync }) => {
        execSync(`cmd /c mklink /J "${targetNodeModules.replace(/\//g, '\\')}" "${sharedNodeModules.replace(/\//g, '\\')}"`);
      });
    } catch (e) {}
  }

  console.log(`[PIPELINE] Project scaffolded successfully for ${folderName}!`);
  return { nextNum, folderName, targetDir };
}

if (process.argv[1] && process.argv[1].endsWith('1_create_video_folder.mjs')) {
  createNextVideoFolder();
}
