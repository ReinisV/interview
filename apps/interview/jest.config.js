module.exports = {
  name: 'interview',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/interview',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
