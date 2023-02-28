import i18n from '../languages/langSettings'
import { IBase, IBaseEntity } from './IEntity';

export  interface ICategory extends IBaseEntity{
    productsCount: number
    productGroupsCount: number
} 

export interface CategoryToCreateAndUpdate extends IBase {}

export const CategoryHead = [i18n.t('cat-name'), i18n.t('group-count'), i18n.t('product-count'), i18n.t("isActive")];