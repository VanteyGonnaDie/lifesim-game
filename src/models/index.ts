import { Models } from "@rematch/core";
import { coreModel } from "./core";
import { moneyModel } from "./money";


export interface RootModel extends Models<RootModel>{
    moneyModel: typeof moneyModel;
    coreModel: typeof coreModel;
}

export const models: RootModel ={
    moneyModel,
    coreModel
}