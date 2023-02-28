import i18n from '../languages/langSettings'
import { IBase, IBaseEntity } from './IEntity';
import Joi from 'joi';

export interface ISubCategory extends IBaseEntity {
  productGroupId: number
  productGroup: string
  productsCount: number
}

export interface SubCategoryToCreateAndUpdate extends IBase {
  productGroupId: number
}

export const subCategoryHeaders: string[] = [i18n.t("sub-name"), i18n.t("group"), i18n.t("sub-product-count"), i18n.t("isActive")]


export const validationObject = {
  id: Joi.number(),
  name: Joi.string()
          .min(3)
          .max(100)
          .required(),
  productGroupId: Joi.number().required().min(1)
}