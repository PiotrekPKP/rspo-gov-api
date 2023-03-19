import { getManySchoolsSchema, getSchoolSchema, SchoolType } from "./types.js";

export const getManySchools = async (options?: {
  schoolTypes?: SchoolType[];
  offset?: number;
  items?: number;
}) => {
  const reqBody = {
    institutionTypeIdList: options?.schoolTypes ?? Object.values(SchoolType),
  };

  const repsonse = await fetch(
    `https://rspo.gov.pl/api/Institution?PageOffset=${
      options?.offset ?? 0
    }&PageSize=${options?.items ?? 100_000}`,
    {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: { "Content-Type": "application/json" },
    }
  );

  const parsed = getManySchoolsSchema.safeParse(await repsonse.json());

  if (!parsed.success) {
    return [];
  }

  return parsed.data.items;
};

export const getOneSchool = async (rspo: number) => {
  const repsonse = await fetch(`https://rspo.gov.pl/api/Institution/${rspo}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const parsed = getSchoolSchema.safeParse(await repsonse.json());

  if (!parsed.success) {
    return null;
  }

  return parsed.data;
};
