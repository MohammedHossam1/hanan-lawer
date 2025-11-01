import { ApiResponse, fetcher } from "@/lib/fetch-methods";
import { HomePageData, TArticle, appointmentType } from "@/types/Index";
import { useMutation, useQuery } from "@tanstack/react-query";




export const useGetHomePage = (lang: string) => {
  return useQuery<ApiResponse<HomePageData>>({
    queryKey: ["home", lang],
    queryFn: () => fetcher<HomePageData>({ url: "/home", lang }),
    staleTime: 1000 * 60 * 60,
  });
};


export const useGetAppointmentsTypes = (lang: string) => {
  //hanlde react query fetch
  const query = useQuery({
    queryKey: ["appointment-types", lang],
    queryFn: () => fetcher<appointmentType[]>({ url: "/appointment-types", lang }),
    staleTime: 1000 * 60 * 60,
  })
  return query
};

export const useGetSingleBlog = (id: number, lang: string) => {
  //hanlde react query fetch
  const query = useQuery({
    queryKey: ["articles", id, lang],
    queryFn: () => fetcher<TArticle>({ url: `/articles/${id}`, lang }),
    staleTime: 1000 * 60 * 60,
  })
  return query
};

// 

type WorkingDays = {
  id: number;
  day: string;
  day_label: string;
  day_of_week: number;
  working_day_hours: {
    id: number;
    start_time: string;
    end_time: string;
  }[];
};
export const useGetWorkingDays = (lang: string) => {
  //hanlde react query fetch
  const query = useQuery({
    queryKey: ["working-days", lang],
    queryFn: () => fetcher<WorkingDays[]>({ url: `/working-days`, lang }),
    staleTime: 1000 * 60 * 60,
  })
  return query
};





// --- POST method example ---
export const usePostAppointment = () => {
  // This hook allows you to post contact form data to the backend
  // Usage: const mutation = usePostContact(); mutation.mutate(formData)
  return useMutation({
    mutationFn: async (data: any) => {
      // You can adjust the endpoint and payload as needed
      return fetcher({
        url: "/book-appointment",
        method: "POST",
        body: data,
      });
    },
  });
};