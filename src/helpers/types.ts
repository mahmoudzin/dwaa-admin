import {ICategory} from "../interfaces/ICategory";
import { IGroup } from "../interfaces/IGroup";
import { ISubCategory } from '../interfaces/ISubCategory';
import { IBrand } from '../interfaces/IBrand';
import { IProduct } from './../interfaces/IProduct';
import { IUser } from './../interfaces/IUser';
import { IBaseEntity } from './../interfaces/IEntity';


export type IOption = {
    key:number
    name:string
}

export type loading = "success" | "loading" | "error" | null

export interface IError {
    statusCode: "500" | "404"  | "403"
    message: string | string[]
}

export interface InitialState {
    isLoading: loading;
    isApiActionLoading: loading
    error: IError | null;
    item: IBaseEntity | null
}

export interface CategoryState extends InitialState{
  items: ICategory[] | null;
}

export interface GroupState extends InitialState{
    items: IGroup[] | null;
}
export interface SubCategoryState extends InitialState{
    items: ISubCategory[] | null;
}

export interface BrandState extends InitialState{
    items: IBrand[] | null;
}

export interface ProductState extends InitialState{
    items: IProduct[] | null;
}
export interface UserState extends InitialState{
    items: IUser[] | null;
}
