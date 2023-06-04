import React, { Fragment } from 'react';
import {
  Alert,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useDate from './useDate';
import usePremiumPayouts from './usePremiumPayouts';
import PremiumPayoutType from '../../../../enums/premiumPayoutType';
import PremiumPayout from '../../../../types/premiumPayout';
import { LoadingState } from '@tix-factory/extension-utils';

type PremiumPayoutsSummaryInput = {
  container: HTMLElement;

  universeId: number;
};

const doMath = (payouts: PremiumPayout[]): string => {
  let sum = 0;
  payouts.forEach((payout) => {
    sum += payout.payoutInRobux;
  });

  return `R\$${sum.toLocaleString()}`;
};

export default function PremiumPayoutsSummary({
  container,
  universeId,
}: PremiumPayoutsSummaryInput) {
  const startDate = useDate(
    container,
    `input[readonly][aria-label='Start Date']`
  );
  const endDate = useDate(container, `input[readonly][aria-label='End Date']`);
  const [loadingState, premiumPayouts] = usePremiumPayouts(
    universeId,
    startDate,
    endDate
  );
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  if (loadingState === LoadingState.Loading) {
    return <CircularProgress />;
  }

  if (loadingState === LoadingState.Error) {
    return (
      <Alert severity="error">Failed to load premium payout summary.</Alert>
    );
  }

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Typography variant="h5">Summary</Typography>
        <br />
        <Typography variant="body2">
          Math has been done for you, these are the numbers added up from the
          premium payouts chart (above). This is a Roblox+ feature.
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>Category</Typography>
              </TableCell>
              <TableCell>
                <Typography>Amount</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography>Actual Robux Earned</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {doMath(
                    premiumPayouts.filter(
                      (p) => p.payoutType === PremiumPayoutType.Actual
                    )
                  )}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Projected Robux</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {doMath(
                    premiumPayouts.filter(
                      (p) => p.payoutType === PremiumPayoutType.Projected
                    )
                  )}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Estimated Total</Typography>
              </TableCell>
              <TableCell>
                <Typography>{doMath(premiumPayouts)}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ThemeProvider>
    </React.StrictMode>
  );
}
