
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x5='rgba(0,0,0,0)',lf='left',x4='rgba(0,0,0,1.00)',g='image',tp='top',e17='${_202}',e18='${_200}',e16='${ezzae}',e14='${_203}',e15='${_2011}',x13='rgba(255,255,255,1)',m='rect',o='opacity',xc='rgba(0,0,0,1)',i='none';var g7='200.png',g8='2011.png',g6='203.png',g11='Sons%20nuit%20tropicale.mp3',g10='ezzae.png',g12='4120.MP3',g9='202.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Rectangle',t:m,r:['0px','1px','471px','761px','auto','auto'],f:[x4],s:[0,xc,i]},{id:'_203',t:g,r:['1px','1px','470px','692px','auto','auto'],o:'1',f:[x5,im+g6,'0px','0px']},{id:'_200',t:g,r:['81px','-135px','351px','693px','auto','auto'],o:'0',f:[x5,im+g7,'0px','0px']},{id:'_2011',t:g,r:['1px','390px','470px','371px','auto','auto'],o:'0',f:[x5,im+g8,'0px','0px']},{id:'_202',t:g,r:['19px','647px','193px','106px','auto','auto'],o:'0',f:[x5,im+g9,'0px','0px']},{id:'ezzae',t:g,r:['269px','35px','102px','188px','auto','auto'],o:'0',f:[x5,im+g10,'0px','0px']},{id:'Sons_nuit_tropicale',v:i,t:'audio',tag:'audio',r:['0','0','320px','45px','auto','auto'],sr:[aud+g11],pr:'auto'},{id:'_4120',v:i,t:'audio',tag:'audio',r:['0','0','320px','45px','auto','auto'],sr:[aud+g12],pr:'auto'}],style:{'${Stage}':{isStage:true,r:['null','null','471px','761px','auto','auto'],zr:['0%','','',''],overflow:'hidden',f:[x13]}}},tt:{d:73377.959,a:y,data:[["eid17",o,3250,0,"linear",e14,'1','1'],["eid4",o,0,0,"linear",e15,'0','0'],["eid14",o,3000,250,"linear",e15,'0.000000','1'],["eid2",o,0,0,"linear",e16,'0','0'],["eid20",o,3250,250,"linear",e16,'0','1'],["eid6",o,0,0,"linear",e17,'0','0'],["eid16",o,3000,250,"linear",e17,'0.000000','1'],["eid9",lf,3000,0,"linear",e18,'81px','81px'],["eid11",tp,0,3000,"easeInCirc",e18,'-135px','0px'],["eid12",o,0,500,"easeInCirc",e18,'0','1'],["eid21","tr",0,function(e,d){this.eMA(e,d);},['play','${Sons_nuit_tropicale}',[]]],["eid22","tr",3000,function(e,d){this.eMA(e,d);},['play','${_4120}',[]]]]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-1051128123");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","mouseenter",function(sym,e){sym.play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-1051128123");