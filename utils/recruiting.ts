export const APPLICATIONS_CLOSED_ROUTE = '/join-us/applications-closed';

type RecruitingStatus = {
  aperturaIso: string;
  aperteManualmente?: boolean;
  chiuseManualmente: boolean;
  cta: {
    url: string;
  };
};

export const getRecruitingState = (
  stato: RecruitingStatus,
  now = Date.now(),
) => {
  const openingTime = Date.parse(stato.aperturaIso);
  const hasApplicationForm =
    stato.cta.url.trim() !== '' && stato.cta.url.trim() !== '#';
  const isOpen =
    !stato.chiuseManualmente && (stato.aperteManualmente === true || now >= openingTime);

  return {
    openingTime,
    hasApplicationForm,
    isOpen,
    isUpcoming: !stato.chiuseManualmente && !isOpen,
    applicationTarget:
      isOpen && hasApplicationForm
        ? { href: stato.cta.url, external: true }
        : { href: APPLICATIONS_CLOSED_ROUTE, external: false },
  };
};
