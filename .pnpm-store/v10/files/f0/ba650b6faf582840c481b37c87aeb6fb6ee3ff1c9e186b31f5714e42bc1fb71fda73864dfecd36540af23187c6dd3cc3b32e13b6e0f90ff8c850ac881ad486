const isEntireRecordGiven = (propertyOrRecord, value) => !!(typeof value === 'undefined'
// user can pass property and omit value. This makes sense when
// third argument of the function (selectedRecord) is passed to onChange
// callback
&& !(typeof propertyOrRecord === 'string')
// we assume that only params has to be given
&& propertyOrRecord.params);
export { isEntireRecordGiven as default, isEntireRecordGiven };