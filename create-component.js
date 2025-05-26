import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Вкажи назву компонента. Наприклад: node create-component.js MyComponent');
  process.exit(1);
}

const baseDir = path.join(__dirname, 'src', 'components', componentName.toLowerCase());
const componentFile = path.join(baseDir, `${componentName}.tsx`);
const styleFile = path.join(baseDir, `${componentName}.module.scss`);
const indexFile = path.join(baseDir, `index.ts`);

if (fs.existsSync(baseDir)) {
  console.error('❌ Така папка вже існує');
  process.exit(1);
}

fs.mkdirSync(baseDir, { recursive: true });

fs.writeFileSync(componentFile,
`import styles from './${componentName}.module.scss';

const ${componentName} = () => {
  return (
    <div className={styles.${componentName.toLowerCase()}}>
      {/* TODO: Add component content */}
    </div>
  );
};

export default ${componentName};
`);

fs.writeFileSync(styleFile,
`.${componentName.toLowerCase()} {
  /* TODO: Add styles */
}
`);

fs.writeFileSync(indexFile,
`export * from './${componentName}';
`);

console.log(`✅ Компонент "${componentName}" створено у src/components/${componentName.toLowerCase()}`);
