const fs = require('fs');
const fetch = require('node-fetch');

const numberAlts = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const warning = `/************************
* Warning: Do not edit this file manually.
* This file is auto-generated from the contents of this file:
*   https://raw.githubusercontent.com/google/material-design-icons/master/font/MaterialIconsOutlined-Regular.codepoints
* If you want to change how this data is generated, adapt the following file:
*   /scripts/compileIcons.js
************************/

`;

let names = [];

fetch(
  'https://raw.githubusercontent.com/google/material-design-icons/master/font/MaterialIconsOutlined-Regular.codepoints'
)
  .then(result => result.text())
  .then(text => {
    const icons = text
      .split('\n')
      .filter(line => !!line)
      .map(line => line.split(' '))
      .map(([iconName, codePoint]) => {
        let newIconName = '';
        let i = 0;

        if (parseInt(iconName[i]) > -1) {
          // If starting with a number, replace with matching text
          // e.g. One instead of 1
          newIconName += numberAlts[parseInt(iconName[0])];
          i++;
        }

        newIconName += iconName[i].toUpperCase(); // Make first letter uppercase
        i++;

        for (; i < iconName.length; i++) {
          if (iconName[i] === '_') {
            // Encountered _ symbol in icon name
            newIconName += iconName[i + 1].toUpperCase(); // Make next letter uppercase
            // newIconName += iconName.substring(0, i) + iconName.substring(i + 1, iconName.length); // Remove _ char
            i++; // Next char
          } else {
            newIconName += iconName[i];
          }
        }

        if (names.includes(newIconName)) {
          return '';
        }

        names.push(newIconName);

        return `  ${newIconName} = '${iconName}',`;
      })
      .join('\n');

    const fileContents = `${warning}export enum IconName {\n${icons}\n}\n`;
    fs.writeFileSync(__dirname + '/../src/icons/IconName.ts', fileContents, { encoding: 'utf8' });
  });
