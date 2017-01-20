'use strict';

module.exports = (requireContext, mergeImg) => {
  
  if (!mergeImg) {
    return requireContext.keys().map(requireContext)
  }

  let output = [], keys = requireContext.keys();
  
  keys.forEach(key => {
    let req, name, images; 
    if (key.slice(-3) !== 'yml') {
      return;
    }
    req = requireContext(key);
    name = key.slice(0, -4);
    images =  {
      gif: keys.indexOf(name + '.gif'),
      png: keys.indexOf(name + '.png'),
      jpeg: keys.indexOf(name + '.jpeg'),
      jpg: keys.indexOf(name + '.jpg'),
    };
    if (images.gif !== -1) {
      req.image = requireContext(name + '.gif')
    }
    if (images.png !== -1) {
      req.image = requireContext(name + '.png')
    }
    if (images.jpeg !== -1) {
      req.image = requireContext(name + '.jpeg')
    }
    if (images.jpg !== -1) {
      req.image = requireContext(name + '.jpg')
    }
    output.push(req);
  });

  return output;
};
