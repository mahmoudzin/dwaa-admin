import i18n  from 'i18next';
import { IBase, IBaseEntity } from './IEntity';
import Joi from 'joi';

export interface IProduct extends IBaseEntity {
    description: string
    price: number
    imgUrl: string
    createdDate: string
    productBrandId: number
    productBrand: string
    productTypeId: number
    productType: string
    productGroupId: number
    productGroup: string
    subCategories: string[]
  }
  

  export interface ProductInput {
    prdocutRequerments: PrdocutRequerments
    subCategories: number[]
  }
  
  export interface PrdocutRequerments extends IBase {
    description: string
    price: string | number
    image: string | File
    productBrandId: string | number
    productTypeId: string | number
    productGroupId: string | number
  }
  
  export const productHead: string[] = [i18n.t("pro-image"), i18n.t("pro-name"), i18n.t("brand"), i18n.t("cat"),i18n.t("group"), i18n.t("sub-cat"),  i18n.t("isActive")]

  export const validationObject = {
    id: Joi.number(),
    image: Joi.object().instance(File).allow(""),
    prdocutRequerments:{
        name: Joi.string()
            .min(3)
            .max(100)
            .required(),
        description: Joi.string()
            .min(3)
            .required(),
        price: Joi.number()
            .min(1)
            .required(),
        imgUrl: Joi.string(), 
        productBrandId: Joi.number()
        .required()
        .min(1),
        productTypeId: Joi.number()
        .required()
        .min(1),
        productGroupId: Joi.number()
        .required()
        .min(1),
    },
    subCategories: Joi.array().items(
      Joi.number().required()
    )
    .required()
    .min(1),
    subCategorieNames: Joi.array().items(
      Joi.string()
    )
  }
  