import { useQuery } from "@tanstack/react-query";

import { emptyKYCFile, fetchKYCFiles } from "@project/services";

export const kycFilePreviewKey = (customerId: number | undefined) =>
  ["kycDocumentPreview", customerId] as const;

export const useKYCFilePreview = (customerId: number | undefined) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: kycFilePreviewKey(customerId),
    queryFn: () => fetchKYCFiles(customerId as number),
    enabled: customerId !== undefined,
    retry: false,
  });

  return {
    proofOfResidence: data?.proofOfResidence ?? emptyKYCFile,
    selfie: data?.selfie ?? emptyKYCFile,
    isLoading,
    error,
    refetch,
  };
};
