import * as fs from 'fs';
import * as path from 'path';


// load this folder
// https://github.com/rjsf-team/react-jsonschema-form/tree/master/packages/playground/src/samples
// into packages/forms/samples
// and run `yarn forms:samples`
let story = `import React from 'react';
import { Meta } from '@storybook/react';
import { Form } from './index';
import { samples } from './samples.storyhelper';

export default {
  title: 'Forms/Form Examples',
} as Meta;
`

const sampleDir = path.join(__dirname, '../samples');
const items: any = {};

for (const name of fs.readdirSync(sampleDir)) {
  if (['customArray.js', 'customObject.js', 'index.js', 'validation.js', 'widgets.js'].includes(name)) continue;
  const data = require(path.join(sampleDir, name));
  const id = name.substr(0, name.length - 3);
  items[id] = data;
  story += `export const ${name[0].toUpperCase()}${name.substr(1, name.length - 4)} = () => (\n`
   + `  <Form \n`
   + `    schema={(samples as any)['${id}'].schema}\n`
   + `    uiSchema={(samples as any)['${id}'].uiSchema}\n`
   + `    formData={(samples as any)['${id}'].formData}\n`
   + ` />\n`
   + `);\n\n`;
  console.log(`${name}`);
}
fs.writeFileSync(path.join(__dirname, '../src/samples.storyhelper.ts'), `export const samples = ${JSON.stringify(items, null, 2)};`);
fs.writeFileSync(path.join(__dirname, '../src/Forms.stories.tsx'), story);
