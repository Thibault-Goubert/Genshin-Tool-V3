import { Injectable } from '@angular/core';
import { WeaponCalculatorResult } from 'src/app/models/weaponCalculatorResult.model';

@Injectable({
    providedIn: 'root'
  })
export class CalculatorWeaponService{
    Compute(currentWeaponLevel: number, weaponRarity: number): WeaponCalculatorResult {
        let result = new WeaponCalculatorResult();

        result.xpOre = ComputeXpOre(currentWeaponLevel, weaponRarity);
        result.mora = new Intl.NumberFormat('en-US', {style: 'decimal'}).format(ComputeMora(currentWeaponLevel, weaponRarity));

        result.weaponVe = ComputeWeaponVe(currentWeaponLevel, weaponRarity);
        result.weaponB = ComputeWeaponB(currentWeaponLevel, weaponRarity);
        result.weaponVi = ComputeWeaponVi(currentWeaponLevel, weaponRarity);
        result.weaponG = ComputeWeaponG(currentWeaponLevel, weaponRarity);

        result.eliteVe = ComputeEliteVe(currentWeaponLevel, weaponRarity);
        result.eliteB = ComputeEliteB(currentWeaponLevel, weaponRarity);
        result.eliteVi = ComputeEliteVi(currentWeaponLevel, weaponRarity);

        result.commonGr = ComputeCommonGr(currentWeaponLevel, weaponRarity);
        result.commonVe = ComputeCommonVe(currentWeaponLevel, weaponRarity);
        result.commonB = ComputeCommonB(currentWeaponLevel, weaponRarity);

        return result;
    }
    
}

function ComputeXpOre(weaponLvl: number, rarity: number): number {
    if(rarity==5){
        if(weaponLvl<20){
            return 907;
        }
        if(weaponLvl<40){
            return 895;
        }
        if(weaponLvl<50){
            return 833;
        }
        if(weaponLvl<60){
            return 770;
        }
        if(weaponLvl<70){
            return 677;
        }
        if(weaponLvl<80){
            return 547;
        }
        if(weaponLvl<90){
            return 372;
        }
    }
    else if(rarity==4){
        if(weaponLvl<20){
            return 605;
        }
        if(weaponLvl<40){
            return 597;
        }
        if(weaponLvl<50){
            return 555;
        }
        if(weaponLvl<60){
            return 513;
        }
        if(weaponLvl<70){
            return 451;
        }
        if(weaponLvl<80){
            return 365;
        }
        if(weaponLvl<90){
            return 248;
        }
    }    
    else{
        if(weaponLvl<20){
            return 399;
        }
        if(weaponLvl<40){
            return 394;
        }
        if(weaponLvl<50){
            return 367;
        }
        if(weaponLvl<60){
            return 339;
        }
        if(weaponLvl<70){
            return 298;
        }
        if(weaponLvl<80){
            return 241;
        }
        if(weaponLvl<90){
            return 164;
        }
    }  
    return 0; 
}
function ComputeMora(weaponLvl: number, rarity: number): number {    
    if(rarity==5){
        if(weaponLvl<20){
            return 1131445;
        }
        if(weaponLvl<40){
            return 1119290;
        }
        if(weaponLvl<50){
            return 1047010;
        }
        if(weaponLvl<60){
            return 964195;
        }
        if(weaponLvl<70){
            return 841427;
        }
        if(weaponLvl<80){
            return 666515;
        }
        if(weaponLvl<90){
            return 436477;
        }
    }
    else if(rarity==4){
        if(weaponLvl<20){
            return 754265;
        }
        if(weaponLvl<40){
            return 746165;
        }
        if(weaponLvl<50){
            return 699652;
        }
        if(weaponLvl<60){
            return 642780;
        }
        if(weaponLvl<70){
            return 560940;
        }
        if(weaponLvl<80){
            return 444335;
        }
        if(weaponLvl<90){
            return 292647;
        }
    }
    else{
        if(weaponLvl<20){
            return 503820;
        }
        if(weaponLvl<40){
            return 498472;
        }
        if(weaponLvl<50){
            return 466072;
        }
        if(weaponLvl<60){
            return 428437;
        }
        if(weaponLvl<70){
            return 372622;
        }
        if(weaponLvl<80){
            return 295460;
        }
        if(weaponLvl<90){
            return 193447;
        }
    }
    return 0;
}

function ComputeWeaponVe(weaponLvl: number, weaponRarity: number): number {
    let res = 0;
    if(weaponRarity==5){
        if(weaponLvl<40) res += 5;
    }
    else if(weaponRarity==4){
        if(weaponLvl<40) res += 3;
    }
    else{
        if(weaponLvl<40) res += 2;
    }
    return res;
}
function ComputeWeaponB(weaponLvl: number, weaponRarity: number): number {
    let res = 0;
    if(weaponRarity==5){
        if(weaponLvl<50) res += 14;
        else if(weaponLvl<60) res += 9;
    }
    else if(weaponRarity==4){
        if(weaponLvl<50) res += 9;
        else if(weaponLvl<60) res += 6;
    }
    else{
        if(weaponLvl<50) res += 6;
        else if(weaponLvl<60) res += 4;
    }
    return res;
}
function ComputeWeaponVi(weaponLvl: number, weaponRarity: number): number {
    let res = 0;
    if(weaponRarity==5){
        if(weaponLvl<70) res += 14;
        else if(weaponLvl<80) res += 9;
    }
    else if(weaponRarity==4){
        if(weaponLvl<70) res += 9;
        else if(weaponLvl<80) res += 6;
    }
    else{
        if(weaponLvl<70) res += 6;
        else if(weaponLvl<80) res += 4;
    }
    return res;
}
function ComputeWeaponG(weaponLvl: number, weaponRarity: number): number {
    let res = 0;
    if(weaponRarity==5){
        if(weaponLvl<90) res += 6;
    }
    else if(weaponRarity==4){
        if(weaponLvl<90) res += 4;
    }
    else{
        if(weaponLvl<90) res += 3;
    }
    return res;
}

function ComputeEliteVe(weaponLvl: number, weaponRarity: number): number {
    let res = 0;
    if(weaponRarity==5){
        if(weaponLvl<40) res += 23;
        else if(weaponLvl<50) res += 18;
    }
    else if(weaponRarity==4){
        if(weaponLvl<40) res += 15;
        else if(weaponLvl<50) res += 12;
    }
    else{
        if(weaponLvl<40) res += 10;
        else if(weaponLvl<50) res += 8;
    }
    return res;
}
function ComputeEliteB(weaponLvl: number, weaponRarity: number): number {
    let res = 0;
    if(weaponRarity==5){
        if(weaponLvl<60) res += 27;
        else if(weaponLvl<70) res += 18;
    }
    else if(weaponRarity==4){
        if(weaponLvl<60) res += 18;
        else if(weaponLvl<70) res += 12;
    }
    else{
        if(weaponLvl<60) res += 12;
        else if(weaponLvl<70) res += 8;
    }
    return res;
}
function ComputeEliteVi(weaponLvl: number, weaponRarity: number): number {
    let res = 0;
    if(weaponRarity==5){
        if(weaponLvl<80) res += 41;
        else if(weaponLvl<90) res += 27;
    }
    else if(weaponRarity==4){
        if(weaponLvl<80) res += 27;
        else if(weaponLvl<90) res += 18;
    }
    else{
        if(weaponLvl<80) res += 18;
        else if(weaponLvl<90) res += 12;
    }
    return res;
}

function ComputeCommonGr(weaponLvl: number, weaponRarity: number): number {
    let res = 0;
    if(weaponRarity==5){
        if(weaponLvl<40) res += 15;
        else if(weaponLvl<50) res += 12;
    }
    else if(weaponRarity==4){
        if(weaponLvl<40) res += 10;
        else if(weaponLvl<50) res += 8;
    }
    else{
        if(weaponLvl<40) res += 6;
        else if(weaponLvl<50) res += 5;
    }
    return res;
}
function ComputeCommonVe(weaponLvl: number, weaponRarity: number): number {
    let res = 0;
    if(weaponRarity==5){
        if(weaponLvl<60) res += 23;
        else if(weaponLvl<70) res += 14;
    }
    else if(weaponRarity==4){
        if(weaponLvl<60) res += 15;
        else if(weaponLvl<70) res += 9;
    }
    else{
        if(weaponLvl<60) res += 10;
        else if(weaponLvl<70) res += 6;
    }
    return res;
}
function ComputeCommonB(weaponLvl: number, weaponRarity: number): number {
    let res = 0;
    if(weaponRarity==5){
        if(weaponLvl<80) res += 27;
        else if(weaponLvl<90) res += 18;
    }
    else if(weaponRarity==4){
        if(weaponLvl<80) res += 18;
        else if(weaponLvl<90) res += 12;
    }
    else{
        if(weaponLvl<80) res += 12;
        else if(weaponLvl<90) res += 8;
    }
    return res;
}

