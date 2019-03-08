/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import BonesPageUI from "./script/page/BonesPageUI"
import ExpandPageScene from "./script/page/ExpandPageScene"
import IndexPage from "./script/page/IndexPage"
import RecordPage from "./script/page/RecordPage"
import RoundCirclePage from "./script/page/RoundCirclePage"
import TestPageUI from "./script/page/TestPageUI"
import GameUI from "./script/GameUI"
import GameControl from "./script/GameControl"
import Bullet from "./script/Bullet"
import DropBox from "./script/DropBox"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=750;
    static height:number=1334;
    static scaleMode:string="fixedwidth";
    static screenMode:string="vertical";
    static alignV:string="top";
    static alignH:string="left";
    static startScene:any="test/IndexPageScene.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=false;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=false;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("script/page/BonesPageUI.ts",BonesPageUI);
        reg("script/page/ExpandPageScene.ts",ExpandPageScene);
        reg("script/page/IndexPage.ts",IndexPage);
        reg("script/page/RecordPage.ts",RecordPage);
        reg("script/page/RoundCirclePage.ts",RoundCirclePage);
        reg("script/page/TestPageUI.ts",TestPageUI);
        reg("script/GameUI.ts",GameUI);
        reg("script/GameControl.ts",GameControl);
        reg("script/Bullet.ts",Bullet);
        reg("script/DropBox.ts",DropBox);
    }
}
GameConfig.init();