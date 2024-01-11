import * as Const from "./constants";

const genetator = ()=>{
    const resArr = [];
    for (let i = 0; i < Const.NUMBER; i++) {

        const randomAge = Math.floor(Math.random() * (Const.MAX_AGE - Const.MIN_AGE) + Const.MIN_AGE);
        resArr.push({
            personName: "John",
            age: randomAge,
            city: "Haifa"
        })
    }
    return  resArr;
}

export const DEFAULT_NAME = 'Bill';
export default genetator

// Git