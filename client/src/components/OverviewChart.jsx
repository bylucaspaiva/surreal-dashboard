import React, { useMemo } from 'react'
import {ResponsiveLine} from "@nivo/line"; 
import { useTheme } from '@emotion/react';
import { useGetSalesQuery } from 'state/api';

const OverviewChart = ({isDashboard = false, view}) => {

  const theme = useTheme();
  const { data, isLoading} = useGetSalesQuery();
  console.log("data4", data);

  return (
    <div>OverviewChart</div>
  )
}

export default OverviewChart