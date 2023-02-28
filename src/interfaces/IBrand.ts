import i18n from '../languages/langSettings'
import { IBase, IBaseEntity } from './IEntity';
import Joi from 'joi';

export interface IBrand extends IBaseEntity {
    productsCount: number
}

export interface BrandToCreateAndUpdate extends IBase  {}





export const BrandHead:string[] = [i18n.t("brand-name"), i18n.t("product-count"), i18n.t("isActive")]


export const validationObject = {
    id: Joi.number(),
    name: Joi.string()
            .min(3)
            .max(100)
            .required(),
  }