
import * as yup from "yup";

export const schema = yup.object({
    email: yup.string('بريد غير صحيح').email('بريد غير صحيح').required('يجب ادخال بريد الكتروني'),
    password: yup.string('يجب ادخال كلمة السر').required('يجب ادخال كلمة السر'),
  })