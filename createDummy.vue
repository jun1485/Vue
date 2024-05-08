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
  return Promise.resolve(createDummyCompanyInfo()); // Promise.resolve를 반환하여 즉시 더미데이터를 promise로 반환
};

export const useCompanyInfoQuery = (
  companyId: Ref<string>
): UseQueryReturnType<CompanyInfo, Error> => {
  return useQuery({
    queryKey: ["companyInfo", companyId],
    queryFn: () => {
      return fetchCompanyInfo(companyId.value);
    },
    enabled: computed(() => !!companyId.value), // companyId값이 있는 경우만 쿼리 함수 실
  });
};
