import { Injectable } from '@angular/core';
import { CharacterCalculatorResult } from '../../models/characterCalculatorResult.model';

@Injectable({
    providedIn: 'root'
  })
export class CalculatorCharacterService{
    public Compute(currentCharacterLevel: number, currentTalentsLevel: string, targetTalentsLevel: string): CharacterCalculatorResult {
        let talent1Start = (currentTalentsLevel.substring(0,1) == "x" || currentTalentsLevel.substring(0,1) == "X") ? 10 : parseInt(currentTalentsLevel.substring(0,1));
        let talent2Start = (currentTalentsLevel.substring(1,2) == "x" || currentTalentsLevel.substring(1,2) == "X") ? 10 : parseInt(currentTalentsLevel.substring(1,2));
        let talent3Start = (currentTalentsLevel.substring(2,3) == "x" || currentTalentsLevel.substring(2,3) == "X") ? 10 : parseInt(currentTalentsLevel.substring(2,3));

        let talent1End = (targetTalentsLevel.substring(0,1) == "x" || targetTalentsLevel.substring(0,1) == "X") ? 10 : parseInt(targetTalentsLevel.substring(0,1));
        let talent2End = (targetTalentsLevel.substring(1,2) == "x" || targetTalentsLevel.substring(1,2) == "X") ? 10 : parseInt(targetTalentsLevel.substring(1,2));
        let talent3End = (targetTalentsLevel.substring(2,3) == "x" || targetTalentsLevel.substring(2,3) == "X") ? 10 : parseInt(targetTalentsLevel.substring(2,3));

        let talentsStart = [talent1Start, talent2Start, talent3Start];
        let talentsEnd = [talent1End, talent2End, talent3End];
        
        let result = new CharacterCalculatorResult();

        result.xpBook = computeXp(currentCharacterLevel);
        result.mora = computeMora(currentCharacterLevel, talentsStart, talentsEnd)
        
        result.gemVe = computeGemVe(currentCharacterLevel);
        result.gemB = computeGemB(currentCharacterLevel);
        result.gemVi = computeGemVi(currentCharacterLevel);        
        result.gemG = computeGemG(currentCharacterLevel);

        result.elem = computeElem(currentCharacterLevel);
        result.local = computeLocal(currentCharacterLevel);
        result.boss = computeBoss(talentsStart, talentsEnd);
        result.crown = computeCrown(talentsStart, talentsEnd);;

        result.commonGr = computeCommonGr(currentCharacterLevel, talentsStart, talentsEnd);
        result.commonVe = computeCommonVe(currentCharacterLevel, talentsStart, talentsEnd);
        result.commonB = computeCommonB(currentCharacterLevel, talentsStart, talentsEnd);

        result.talentVe = computeTalentVe(talentsStart, talentsEnd);
        result.talentB = computeTalentB(talentsStart, talentsEnd);
        result.talentVi = computeTalentVi(talentsStart, talentsEnd);        
        
        return result;
    }
}

function computeXp(lvl: number): number {
    if(lvl<20){
        return 419;
    }
    if(lvl<40){
        return 413;
    }
    if(lvl<50){
        return 384;
    }
    if(lvl<60){
        return 355;
    }
    if(lvl<70){
        return 312;
    }
    if(lvl<80){
        return 252;
    }
    if(lvl<90){
        return 172;
    }
    return 0;
}

function computeMora(lvl: number, talentsStart: number[], talentsEnd: number[] ): string {
    let morasLvl = computeMorasLvl(lvl);
    let morasTalents = computeMorasTalent(talentsStart[0], talentsEnd[0]) + computeMorasTalent(talentsStart[1], talentsEnd[1]) + computeMorasTalent(talentsStart[2], talentsEnd[2]);
    return new Intl.NumberFormat('en-US', {style: 'decimal'}).format(morasLvl + morasTalents);
}
function computeMorasLvl(lvl: number): number{
    if(lvl<20){
        return 2092530;
    }
    if(lvl<40){
        return 2068495;
    }
    if(lvl<50){
        return 1932830;
    }
    if(lvl<60){
        return 1777010;
    }
    if(lvl<70){
        return 1546185;
    }
    if(lvl<80){
        return 1227000;
    }
    if(lvl<90){
        return 804625;
    }
    return  0;
}
function computeMorasTalent(talentStart: number, talentEnd: number): number{
    let res = 0;
    if(talentStart<2 && talentEnd>1){
        res += 12500;
    }
    if(talentStart<3 && talentEnd>2){
        res += 17500;
    }
    if(talentStart<4 && talentEnd>3){
        res += 25000;
    }
    if(talentStart<5 && talentEnd>4){
        res += 30000;
    }
    if(talentStart<6 && talentEnd>5){
        res += 37500;
    }
    if(talentStart<7 && talentEnd>6){
        res += 120000;
    }
    if(talentStart<8 && talentEnd>7){
        res += 260000;
    }
    if(talentStart<9 && talentEnd>8){
        res += 450000;
    }
    if(talentStart<10 && talentEnd>9){
        res += 700000;
    }
    return res;
}

function computeCommonGr(lvl: number, talentsStart: number[], talentsEnd: number[]): number{
    let res = 0;
    if(lvl < 40) res += 3;
    if(lvl < 50) res += 15;
    for (let i = 0; i < 3; i++) {
        let talentStart = talentsStart[i];
        let talentEnd = talentsEnd[i];
        if(talentStart<2 && talentEnd>1){
            res += 6;
        }
    }
    return res;
}
function computeCommonVe(lvl: number, talentsStart: number[], talentsEnd: number[]): number{
    let res = 0;
    if(lvl < 60) res += 12;
    if(lvl < 70) res += 18;
    for (let i = 0; i < 3; i++) {
        let talentStart = talentsStart[i];
        let talentEnd = talentsEnd[i];
        if(talentStart<3 && talentEnd>2){
            res += 3;
        }
        if(talentStart<4 && talentEnd>3){
            res += 4;
        }
        if(talentStart<5 && talentEnd>4){
            res += 6;
        }
        if(talentStart<6 && talentEnd>5){
            res += 9;
        }
    }
    return res;
}
function computeCommonB(lvl: number, talentsStart: number[], talentsEnd: number[]): number{
    let res = 0;
    if(lvl < 80) res += 12;
    if(lvl < 90) res += 24;
    for (let i = 0; i < 3; i++) {
        let talentStart = talentsStart[i];
        let talentEnd = talentsEnd[i];            
        if(talentStart<7 && talentEnd>6){
            res += 4;
        }
        if(talentStart<8 && talentEnd>7){
            res += 6;
        }
        if(talentStart<9 && talentEnd>8){
            res += 9;
        }
        if(talentStart<10 && talentEnd>9){
            res += 12;
        }
    }
    return res;
}

function computeTalentVe(talentsStart: number[], talentsEnd: number[]): number{
    let res = 0;
    for (let i = 0; i < 3; i++) {
        let talentStart = talentsStart[i];
        let talentEnd = talentsEnd[i];
        if(talentStart<2 && talentEnd>1){
            res += 3;
        }
    }
    return res;
}
function computeTalentB(talentsStart: number[], talentsEnd: number[]): number{
    let res = 0;
    for (let i = 0; i < 3; i++) {
        let talentStart = talentsStart[i];
        let talentEnd = talentsEnd[i];
        if(talentStart<3 && talentEnd>2){
            res += 2;
        }
        if(talentStart<4 && talentEnd>3){
            res += 4;
        }
        if(talentStart<5 && talentEnd>4){
            res += 6;
        }
        if(talentStart<6 && talentEnd>5){
            res += 9;
        }
    }
    return res;
}
function computeTalentVi(talentsStart: number[], talentsEnd: number[]): number{
    let res = 0;
    for (let i = 0; i < 3; i++) {
        let talentStart = talentsStart[i];
        let talentEnd = talentsEnd[i];
        if(talentStart<7 && talentEnd>6){
            res += 4;
        }
        if(talentStart<8 && talentEnd>7){
            res += 6;
        }
        if(talentStart<9 && talentEnd>8){
            res += 12;
        }
        if(talentStart<10 && talentEnd>9){
            res += 16;
        }
    }
    return res;
}

function computeGemVe(lvl: number): number{
    if(lvl<40){
        return 1;
    }
    return 0;
}
function computeGemB(lvl: number): number{
    if(lvl<50){
        return 9;
    }
    if(lvl<60){
        return 6
    }
    return 0;
}
function computeGemVi(lvl: number): number{
    if(lvl<70){
        return 9;
    }
    if(lvl<80){
        return 6
    }
    return 0;
}
function computeGemG(lvl: number): number{
    if(lvl<90){
        return 6;
    }
    return 0;
}

function computeElem(lvl: number): number{
    if(lvl<50){
        return 46;
    }
    if(lvl<60){
        return 44;
    }
    if(lvl<70){
        return 40;
    }
    if(lvl<80){
        return 32;
    }
    if(lvl<90){
        return 20;
    }
    return 0;
}
function computeLocal(lvl: number): number{
    if(lvl<40){
        return 168;
    }
    if(lvl<50){
        return 165;
    }
    if(lvl<60){
        return 155;
    }
    if(lvl<70){
        return 135;
    }
    if(lvl<80){
        return 105;
    }
    if(lvl<90){
        return 60;
    }
    return 0;
}
function computeBoss(talentsStart: number[], talentsEnd: number[]): number{
    let res = 0;
    for (let i = 0; i < 3; i++) {
        let talentStart = talentsStart[i];
        let talentEnd = talentsEnd[i];
        if(talentStart < 7 && talentEnd >= 7){
            res += 1;
        }
        if(talentStart < 8 && talentEnd >= 8){
            res += 1;
        }
        if(talentStart < 9 && talentEnd >= 9){
            res += 2;
        }
        if(talentStart < 10 && talentEnd >= 10){
            res += 2;
        }
    }
    return res;
}
function computeCrown(talentsStart: number[], talentsEnd: number[]): number{
    let res = 0;  
    for (let i = 0; i < 3; i++) {
        let talentStart = talentsStart[i];
        let talentEnd = talentsEnd[i];
        if(talentStart < 10 && talentEnd == 10){
            res += 1;
        }
    }    
    return res;
}