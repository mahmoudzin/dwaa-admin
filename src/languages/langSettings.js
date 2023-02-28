import i18n from "i18next";
import { initReactI18next } from "react-i18next";


/*
  #TODO: add the stuff about [Models] actions [add - update] 
  #TODO: Add archive keywords 
*/

const categoryDataEn = {
  "cat": "Categery",
  "cat-name": "Category Name",
  "dis": "Description",
  "group-count": "Groups Count",
}
const categoryDataAr = {
  "cat": "قسم",
  "cat-name": "اسم القسم",
  "dis": "الوصف",
  "group-count": "عدد المجموعات",
}

const GroupDataEn = {
  "group-name": "Group Name",
  "category": "Category",
  "product-count": "Products Count",
  "subcat-count": "Sub-Categories Count"
}
const GroupDataAr = {
  "group-name": "اسم المجموعة",
  "category": "القسم",
  "product-count": "عدد المنجات",
  "subcat-count": "عدد الأقسام الفرعية"
}

const SubCategoryDataEn = {
  "sub-name": "Name",
  "sub-cat": "Sub Category",
}
const SubCategoryDataAr = {
  "sub-name": "الاسم",
  "sub-cat": "قسم فرعي",
}

const BrandDataEn = {
  "brand":"a Brand",
  "brand-name": "Name",
}
const BrandDataAr = {
  "brand": "علامة تجارية",
  "brand-name": "الاسم",
}
const ArchiveDataEn = {
  "arch-action": "Action",
  "arch-command": "Commands",
  "arch-prmessage": "Delete this:"
}
const ArchiveDataAr = {
  "arch-action": "الإجراء",
  "arch-command": "التعليمات",
  "arch-prmessage": "احذف هذا:"
}

const ActionsEn = {
  "c": "Create",
  "u": "Update",
  "d": "Delete",
  "v": "View",
  "un": "Undo"
}
const ActionsAr = {
  "c": "أنشاء",
  "u": "تحديث",
  "d": "حذف",
  "v": "عرض",
  "un": "تراجع"
}
const ValidationEn = {
  "string.min": "have to be 3 at less",
  "string.max": "have to be less than 100",
  "any.required": "it is requried",
  "string.empty" : "please inter valid name",
  "unique": "this value exisit already"
}
const ValidationAr = {
  "string.min": "على الاقل 3 حروف",
  "string.max": "على الاكثر مئة حرف",
  "any.required": "هذا الحقل اجباري",
  "string.empty" : "من فضلك ادخل قيمة",
  "unique": "هذه القيمة موجودة بالفعل"
}

const HelpersEn = {
  "new-item": "a new"
}
const HelpersAr = {
  "new-item": "جديد"
}

const productsEn = {
  "pro": "Product",
  "pro-name": "Product Name",
  "price": "Price",
  "pro-image": "Product Image",
  
}
const productsAr = {
  "pro": "منتج",
  "pro-name": "اسم المنتج",
  "price": "السعر",
  "pro-image": "صورة المنتج",
}
const resources = {
  en: {
    translation: {
      "sb-title": "Dwaa Admin",
      "page-dashboard": "Dashboard",
      "page-category": "Categories",
      "page-group": "Groups",
      "page-brand": "Brands",
      "page-subcategory": "Sub Categories",
      "page-archive": "Archive",
      "page-product": "Products",
      ...categoryDataEn,
      ...GroupDataEn,
      ...SubCategoryDataEn,
      ...BrandDataEn,
      ...ArchiveDataEn,
      ...ActionsEn,
      ...ValidationEn,
      ...HelpersEn,
      ...productsEn,
      "isActive": "Status",
      "welcome-user": "Hi,",
      "nav-notification": "Notifications",
      "nav-menu": "Menu",
      "nav-archive": "Archive",
      "nav-profile": "User Profile",
      "setting-btn": "Settings",
      "empty-table": `There are no items to show`,
      "netwrok-error": "a network error occurred, please check your network settings and try again"
    }
  },
  ar: {
    translation: {
      "sb-title": "أدارة دواء",
      "page-dashboard": "لوحة التحكم",
      "page-category": "الاقسام",
      "page-group": "مجموعة المنتجات",
      "page-brand": "الشركات",
      "page-subcategory": "الاقسام الفرعية",
      "page-archive": "أرشيف العمليات",
      "page-product": "المنتجات",
      ...categoryDataAr,
      ...GroupDataAr,
      ...SubCategoryDataAr,
      ...BrandDataAr,
      ...ArchiveDataAr,
      ...ActionsAr,
      ...ValidationAr,
      ...HelpersAr,
      ...productsAr,
      "isActive": "الحالة",
      "welcome-user": "،مرحبا",
      "nav-notification": "الاشعارات",
      "nav-menu": "القائمة",
      "nav-archive": "الأرشيف",
      "nav-profile": "الملف الشخصي",
      "setting-btn": "إعدادت الموقع",
      "empty-table": `ليس هنالك اي عناصر بعد لعرضها`,
      "netwrok-error": "ثمة خطأ في الشبكة، من فضلك تحقق من اتصالك بالانترنت ثم اعد المحاولة"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: ["en", "ar"],
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;