
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',x8='rgba(255,255,255,1)',g='image',e9='${bulleF2C2}',o='opacity',e10='${fumeeF2C2}',i='none';var g6='fumeeF2C2.png',g5='fondF2C2.png',g7='bulleF2C2.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'fondF2C2',t:g,r:['0','0px','540px','987px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'fumeeF2C2',t:g,r:['15px','177px','70px','94px','auto','auto'],o:'0',f:[x4,im+g6,'0px','0px']},{id:'bulleF2C2',t:g,r:['156px','89px','124px','117px','auto','auto'],o:'0',f:[x4,im+g7,'0px','0px']}],style:{'${StageF2C2}':{isStage:true,r:['null','null','495px','961px','auto','auto'],overflow:'hidden',f:[x8]}}},tt:{d:1545,a:y,data:[["eid5",o,0,1000,"linear",e9,'0','0.000000'],["eid4",o,1000,545,"linear",e9,'0.000000','0.99999985185185'],["eid2",o,250,750,"linear",e10,'0.000000','1']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-20516970");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){this.onMove=function(posX,posY){timelinecontrol=Number(posX)*4;console.log(timelinecontrol);sym.stop(timelinecontrol);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${StageF2C2}","mousemove",function(sym,e){this.onMove(e.pageX,e.pageY);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-20516970");