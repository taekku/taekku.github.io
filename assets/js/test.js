
if(actionType == 'retrieveBottom2') {
    var initData = {  }
   ;
    var saveDataDetected = false;
    var errMsg = {  }
   ;
    if(paramValue !== undefined && paramValue !== null && paramValue['ME_OPQ0007_02'] !== undefined && paramValue['ME_OPQ0007_02'] !== null) {
     initData['ME_OPQ0007_02'] = paramValue['ME_OPQ0007_02'];
    }
    else {
      if($('div[dataProvider="ME_OPQ0007_02"]')[0] !== undefined && $('div[dataProvider="ME_OPQ0007_02"]')[0] !== null) {
        initData['ME_OPQ0007_02'] = $('div[dataProvider="ME_OPQ0007_02"]').triggerHandler("getRowData");
      }
      else {
       initData['ME_OPQ0007_02'] = bindingObject['ME_OPQ0007_02'][0];
      }
    }
    if(typeof(ME_OPQ0007_02) != 'undefined' && ME_OPQ0007_02 != null) {
     initData['ME_OPQ0007_02'] = ME_OPQ0007_02;
    }
    if($('div[dataProvider="ME_OPQ0007_02"]')[0] !== undefined && $('div[dataProvider="ME_OPQ0007_02"]')[0] !== null) {
     initData['ME_OPQ0007_02'] =  $('div[dataProvider="ME_OPQ0007_02"]').triggerHandler("getRowData");
    }
     if ( initData['ME_OPQ0007_02'] === undefined || initData['ME_OPQ0007_02'] === null ||  initData['ME_OPQ0007_02'].length === 0 )  {
    }
   else {
    saveDataDetected = true;
    }
    if(errMsg['msg'] !== undefined && errMsg['msg'] !== null ) saveDataDetected = false;
    if(typeof(domainFieldObject_ME_OPQ0007_02) !='undefined') {
    unformating(domainFieldObject_ME_OPQ0007_02, initData['ME_OPQ0007_02']);
    }
    if(typeof(validatorObject_ME_OPQ0007_02) !='undefined') {
    if(!validation(validatorObject_ME_OPQ0007_02, 'ME_OPQ0007_02')) {
    saveDataDetected = false;
    }
    }
    for (var prop in initData) {
    if($.isArray(initData[prop]) == false) {
    initData[prop] = [initData[prop]];
    }
    }
    var requestObject = {
    "HEADER": headerObject, "BODY":  initData}
   ;
    if( saveDataDetected == true )  execute( "retrieveBottom2","OPQ0009_00_R02", requestObject, doResult, doFault );
  }