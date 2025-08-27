"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "../ui/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, { message: "الاسم مطلوب على الأقل حرفين" }),
  phone: z
    .string()
    .regex(/^01[0-9]{9}$/, { message: "رقم الهاتف غير صحيح" }),
  city: z.string().min(2, { message: "المدينة مطلوبة" }),
  option: z.string().nonempty({ message: "يجب اختيار نوع الطلب" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = ({ onClick ,isBooking}: { onClick?: () => void ,isBooking?:boolean}) => {
  const { t } = useTranslation();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      option: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    console.log("Form Data:", values);
    if (!isBooking) {
      toast({
        title: "تم الارسال بنجاح",
        className: "bg-green-400/80 text-white",

      })
    }
    if (onClick) onClick();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 text-start  w-full lg:w-3/4 mx-auto"
        dir="rtl"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="w-full border rounded-lg p-2 lg:p-3 h-12" placeholder={t("contactForm.name")} {...field} />
              </FormControl>
              <FormMessage className="" />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}

          name="phone"
          render={({ field }) => (
            <FormItem className="">
              <FormControl>
                <Input className="w-full border rounded-lg p-2 lg:p-3 h-12"
                  placeholder={t("contactForm.phone")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* City */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="w-full border rounded-lg p-2 lg:p-3 h-12" placeholder={t("contactForm.city")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Select Option */}
        <FormField
          control={form.control}
          name="option"
          render={({ field }) => (
            <FormItem >
              <Select dir="rtl" onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full border rounded-lg p-2 lg:p-3 h-12">
                    <SelectValue placeholder={t("contactForm.selectOption")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="option1" className="w-full  rounded-lg p-2 lg:p-3 h-12">
                    {t("contactForm.option1") || "استشارة قانونية"}
                  </SelectItem>
                  <SelectItem value="option2" className="w-full  rounded-lg p-2 lg:p-3 h-12">
                    {t("contactForm.option2") || "حجز موعد"}
                  </SelectItem>
                  <SelectItem value="option3" className="w-full  rounded-lg p-2 lg:p-3 h-12">
                    {t("contactForm.option3") || "استفسار عام"}
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          {t("contactForm.send")}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
