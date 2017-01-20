'use strict';

const fs = require('fs');
const path = require('path');
const distpath = path.resolve(__dirname, '../dist');

if (fs.existsSync(distpath)) {
  fs.readdirSync(distpath).forEach(file => {
    fs.unlinkSync(path.resolve(distpath, file));
  });
}
