

var _EventPluginRegistry=require('react-dom/lib/EventPluginRegistry');var _EventPluginRegistry2=_interopRequireDefault(_EventPluginRegistry);
var _normalizeNativeEvent=require('./normalizeNativeEvent');var _normalizeNativeEvent2=_interopRequireDefault(_normalizeNativeEvent);
var _ResponderEventPlugin=require('react-dom/lib/ResponderEventPlugin');var _ResponderEventPlugin2=_interopRequireDefault(_ResponderEventPlugin);
var _ResponderTouchHistoryStore=require('react-dom/lib/ResponderTouchHistoryStore');var _ResponderTouchHistoryStore2=_interopRequireDefault(_ResponderTouchHistoryStore);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var topMouseDown='topMouseDown';
var topMouseMove='topMouseMove';
var topMouseUp='topMouseUp';
var topScroll='topScroll';
var topSelectionChange='topSelectionChange';
var topTouchCancel='topTouchCancel';
var topTouchEnd='topTouchEnd';
var topTouchMove='topTouchMove';
var topTouchStart='topTouchStart';

var endDependencies=[topTouchCancel,topTouchEnd,topMouseUp];
var moveDependencies=[topTouchMove,topMouseMove];
var startDependencies=[topTouchStart,topMouseDown];




_ResponderEventPlugin2.default.eventTypes.responderMove.dependencies=moveDependencies;
_ResponderEventPlugin2.default.eventTypes.responderEnd.dependencies=endDependencies;
_ResponderEventPlugin2.default.eventTypes.responderStart.dependencies=startDependencies;
_ResponderEventPlugin2.default.eventTypes.responderRelease.dependencies=endDependencies;
_ResponderEventPlugin2.default.eventTypes.responderTerminationRequest.dependencies=[];
_ResponderEventPlugin2.default.eventTypes.responderGrant.dependencies=[];
_ResponderEventPlugin2.default.eventTypes.responderReject.dependencies=[];
_ResponderEventPlugin2.default.eventTypes.responderTerminate.dependencies=[];
_ResponderEventPlugin2.default.eventTypes.moveShouldSetResponder.dependencies=moveDependencies;
_ResponderEventPlugin2.default.eventTypes.selectionChangeShouldSetResponder.dependencies=[topSelectionChange];
_ResponderEventPlugin2.default.eventTypes.scrollShouldSetResponder.dependencies=[topScroll];
_ResponderEventPlugin2.default.eventTypes.startShouldSetResponder.dependencies=startDependencies;

var originalRecordTouchTrack=_ResponderTouchHistoryStore2.default.recordTouchTrack;

_ResponderTouchHistoryStore2.default.recordTouchTrack=function(topLevelType,nativeEvent){

if(topLevelType===topMouseMove&&!_ResponderTouchHistoryStore2.default.touchHistory.touchBank.length){
return;
}

var normalizedEvent=(0,_normalizeNativeEvent2.default)(nativeEvent);
originalRecordTouchTrack.call(_ResponderTouchHistoryStore2.default,topLevelType,normalizedEvent);
};

_EventPluginRegistry2.default.injectEventPluginsByName({
ResponderEventPlugin:_ResponderEventPlugin2.default});