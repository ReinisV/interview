module.exports = {
  name: 'questionnaires-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/questionnaires/feature',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
