
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',lf='left',x8='rgba(255,255,255,1)',tp='top',g='image',o='opacity',e9='${bulleF2C3}',e10='${personnnageF2C3}',i='none';var g7='bulleF2C3.png',g5='fondF2C3.png',g6='personnnageF2C3.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'fondF2C3',t:g,r:['0','0','725px','750px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'personnnageF2C3',t:g,r:['-76px','81px','607px','669px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'bulleF2C3',t:g,r:['524px','38px','217px','206px','auto','auto'],o:'0',f:[x4,im+g7,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','722px','746px','auto','auto'],overflow:'hidden',f:[x8]}}},tt:{d:1000,a:y,data:[["eid5",lf,0,1000,"linear",e9,'524px','438px'],["eid4",tp,0,0,"linear",e9,'38px','38px'],["eid7",o,0,250,"linear",e9,'0','1'],["eid2",lf,0,1000,"linear",e10,'-76px','6px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-38431997");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${Stage}","mousemove",function(sym,e){this.onMove(e.pageX,e.pageY);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){this.onMove=function(posX,posY){timelinecontrol=Number(posX)*5;console.log(timelinecontrol);sym.stop(timelinecontrol);}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-38431997");