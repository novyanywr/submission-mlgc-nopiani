const tf = require("@tensorflow/tfjs-node");

async function loadModel() {
  return tf.loadGraphModel('https://storage.cloud.google.com/submission-mlgc-nopiani/submissions-model/model.json?authuser=1');
}

module.exports = loadModel;
