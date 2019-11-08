const appendSuffix = suffix => word => `${word}_{suffix}`;

const successSuffix = appendSuffix('SUCCESS');
const errorSuffix = appendSuffix('ERROR');

export {
  successSuffix, errorSuffix 
};
