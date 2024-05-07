import { useQuery } from "@tanstack/react-query";

const fetchReplies = async ({ commentId, slug }) => {
  const response = await fetch(
    `/api/comment/${commentId}/replies?slug=${slug}`
  );

  if (!response.ok) {
    throw new Error("A resposta de rede não está ok");
  }

  return response.json();
};

export const useFetchReplies = ({ commentId, slug }) => {
  return useQuery({
    queryKey: ["replies", commentId],
    queryFn: async () => fetchReplies({ commentId, slug }),
    enabled: !!commentId && !!slug,
  });
};
