module.exports = {
  name: 'questions-util',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/questions/util',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
