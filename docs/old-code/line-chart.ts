import { LineChartMultipleData } from '@/components/charts/line-chart-multiple';

import { NewOldCompanies } from '@/types/database';

export const getLineChartMultipleData = (
  allNewOldCompanies: NewOldCompanies[]
): LineChartMultipleData[] =>
  allNewOldCompanies
    .map((month) => {
      const { forMonth, firstTimeCompanies, newCompanies, oldCompanies, allCompanies } = month;

      return {
        monthName: forMonth.name,
        firstTimeCompaniesCount: firstTimeCompanies.length,
        newCompaniesCount: newCompanies.length,
        oldCompaniesCount: oldCompanies.length,
        totalCompaniesCount: allCompanies.length,
      };
    })
    .reverse();
