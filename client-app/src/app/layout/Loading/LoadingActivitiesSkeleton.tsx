import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

export default function LoadingActivitiesSkeleton() {
  return (
    <Card sx={{ maxWidth: 560, m: 2 }}>
      <CardHeader
        title={
          <Skeleton
            animation="pulse"
            height={10}
            width="100%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="pulse" height={10} width="40%" />}
      />

      <Skeleton sx={{ height: 190 }} animation="pulse" variant="rectangular" />

      <CardContent>
        <React.Fragment>
          <Skeleton animation="pulse" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="pulse" height={10} width="80%" />
        </React.Fragment>
      </CardContent>
    </Card>
  );
}
