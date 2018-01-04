const path = require('path');

const createPattern = pattern => {
  return {pattern, included: true, served: true, watched: false};
};

const initAdapter = files => {
  const _path = path.dirname(require.resolve('chai-backbone'));
  const pluginFile = createPattern(_path + '/chai-backbone.js');

  let chaiFileIndex = -1;
  for (let i = 0; i < files.length; i++) {
    if (files[i].pattern.match(/chai\.js$/i)) {
      chaiFileIndex = i;
      break;
    }
  }

  const pluginIndex = chaiFileIndex + 1;
  files.splice(pluginIndex, 0, pluginFile);
};

initAdapter.$inject = ['config.files'];

module.exports = {
  'framework:backbone-chai': ['factory', initAdapter]
};
