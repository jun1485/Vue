constructor(params: Omit<CompanyInfo, 'constructor'>) {
  this.name = params.name;
  this.registrationNumber = params.registrationNumber;
  this.onlineSaleNumber = params.onlineSaleNumber;
  this.ceo = params.ceo;
  this.phone = params.phone;
  this.email = params.email;
}

const fetchCompanyInfo = async (companyId: string): Promise<CompanyInfo> => {
  // 실제 API 호출 대신 더미 데이터 반환
  return Promise.resolve(createDummyCompanyInfo());
};

export const useCompanyInfoQuery = (
  companyId: Ref<string>
): UseQueryReturnType<CompanyInfo, Error> => {
  return useQuery({
    queryKey: ["companyInfo", companyId],
    queryFn: () => {
      return fetchCompanyInfo(companyId.value);
    },
    enabled: computed(() => !!companyId.value),
  });
};
