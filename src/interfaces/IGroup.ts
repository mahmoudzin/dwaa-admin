import i18n from '../languages/langSettings'
import { IBase, IBaseEntity } from './IEntity';
import Joi from 'joi';

export interface IGroup extends IBaseEntity {
    productTypeId: number
    productType: string
    productsCount: number
    productSubCategoriesCount: number
}

export interface GroupToCreateAndUpdate extends IBase{
    productTypeId: number
}

export const groupHeader:string[] = [i18n.t("group-name"), i18n.t("category"), i18n.t("subcat-count"), i18n.t("product-count"), i18n.t("isActive")];


export const validationObject = {
    id: Joi.number(),
    name: Joi.string()
            .min(3)
            .max(100)
            .required(),
    productTypeId: Joi.number().required().min(1)
  }