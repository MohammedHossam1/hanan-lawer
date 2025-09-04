"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "الاسم مطلوب على الأقل حرفين" }),
  phone: z
    .string()
    .regex(/^01[0-9]{9}$/, { message: "رقم الهاتف غير صحيح" }),
  city: z.string().min(2, { message: "المدينة مطلوبة" }),
  option: z.string().nonempty({ message: "يجب اختيار نوع الطلب" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = ({ onClick }: { onClick?: () => void, isBooking?: boolean }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      option: "",
    },
  });

  // Handle form submission and send email via EmailJS
  function onSubmit(values: ContactFormValues) {
    setIsLoading(true)
    console.log("Form Data:", values);

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_5iac504",    // Replace with your service ID
          "template_dvaitr8",   // Replace with your template ID
          formRef.current,
          "Wf83WpQq3QNeTk6OT"     // Replace with your public key
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setIsLoading(false)

            toast({
              title: "تم الإرسال بنجاح",
              className: "bg-green-500 text-white",
            });
            form.reset(); // Reset the form fields after successful submission
            if (onClick) onClick();
          },
          (error) => {
            setIsLoading(false)

            console.error("FAILED...", error.text);
            toast({
              title: "حدث خطأ أثناء الإرسال",
              className: "bg-red-500 text-white",
            });
          }
        );
    }
  }

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 text-start w-full lg:w-3/4 mx-auto"
        dir="rtl"
      >
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-full border rounded-lg p-2 lg:p-3 h-12"
                  placeholder={t("contactForm.name")}
                  {...field}
                />
              </FormControl>
              <FormMessage className="" />
            </FormItem>
          )}
        />

        {/* Phone Field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-full border rounded-lg p-2 lg:p-3 h-12"
                  placeholder={t("contactForm.phone")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* City Field */}
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-full border rounded-lg p-2 lg:p-3 h-12"
                  placeholder={t("contactForm.city")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Select Option Field */}
        <FormField
          control={form.control}
          name="option"
          render={({ field }) => (
            <FormItem>
              <Select
                dir="rtl"
                onValueChange={(val) => {
                  field.onChange(val);
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full border rounded-lg p-2 lg:p-3 h-12">
                    <SelectValue placeholder={t("contactForm.selectOption")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="option1">{t("contactForm.option1")}</SelectItem>
                  <SelectItem value="option2">{t("contactForm.option2")}</SelectItem>
                  <SelectItem value="option3">{t("contactForm.option3")}</SelectItem>
                </SelectContent>
              </Select>
              {/* مهم: عشان EmailJS يلقط القيمة */}
              <input type="hidden" name="option" value={field.value} />
              <FormMessage />
            </FormItem>
          )}
        />


        <Button type="submit" disabled={isLoading} className="w-full">
          {!isLoading ? t("contactForm.send") : t("contactForm.loading")}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
