
import { useAppSelector } from '../Hooks';
import { selectBrandState } from '../store/brand';
import { selectCategoryState } from '../store/category';
import { selectGroupState } from '../store/group';
import { selectSubCategoriesState } from '../store/subcategory';

const useOptions = () =>{
  
  const groups = useAppSelector(selectGroupState);
  const categories = useAppSelector(selectCategoryState);
  const brands = useAppSelector(selectBrandState);
  const subCategories = useAppSelector(selectSubCategoriesState);

  const brandOptions = brands?.items?.map(c => ({key: c.id, name: c.name})) || null
  const categoryOptions = categories?.items?.map(c => ({key: c.id, name: c.name})) || null
  const groupOptions = groups?.items?.map(c => ({key: c.id, name: c.name})) || null
  const subCategoriesOptions = subCategories?.items?.map(c => ({key: c.id, name: c.name})) || null

  return {brandOptions, categoryOptions, groupOptions, subCategoriesOptions}
}

export default useOptions