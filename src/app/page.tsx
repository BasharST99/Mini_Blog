"use client";

import * as React from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="header"
        sx={{
          py: { xs: 6, md: 10 },
          borderBottom: "1px solid",
          borderColor: "divider",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.02), transparent 60%)",
        }}
      >
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
            <Box flex={1}>
              <Typography
                variant="overline"
                sx={{ opacity: 0.7, letterSpacing: 1, display: "block" }}
              >
                Mini Blog
              </Typography>
              <Typography variant="h3" fontWeight={800} gutterBottom>
                Read smarter, in <Box component="span" sx={{ color: "primary.main" }}>English</Box> &{" "}
                <Box component="span" sx={{ color: "warning.main" }}>Arabic</Box>.
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8, maxWidth: 560 }}>
                Bilingual posts with instant LTR/RTL support. Pick your language or jump
                straight into posts.
              </Typography>

              <Stack direction="row" spacing={1.5} mt={3} flexWrap="wrap">
                <Button
                  LinkComponent={NextLink}
                  href="/en/posts"
                  variant="contained"
                  size="large"
                >
                  Browse in English
                </Button>
                <Button
                  LinkComponent={NextLink}
                  href="/ar/posts"
                  variant="contained"
                  color="warning"
                  size="large"
                  sx={{ color: "black", "&:hover": { bgcolor: "warning.dark" } }}
                >
                  تصفّح بالعربية
                </Button>

              </Stack>
            </Box>

            <Box
              sx={{
                width: 220,
                height: 120,
                display: "grid",
                placeItems: "center",
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <Image src="/next.svg" alt="Next.js" width={180} height={38} />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 6, md: 8 }, flex: 1 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
            spacing={2}
            mb={3}
          >
            <Typography variant="h5" fontWeight={700}>
              Quick start
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button LinkComponent={NextLink} href="/en/posts" size="small">
                All posts (EN)
              </Button>
              <Button LinkComponent={NextLink} href="/ar/posts" size="small" color="warning" sx={{ color: "black" }}>
                كل المقالات (AR)
              </Button>
            </Stack>
          </Stack>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardActionArea LinkComponent={NextLink} href="/en/posts/1">
                  <CardContent>
                    <Typography variant="overline" sx={{ opacity: 0.7 }}>
                      Featured
                    </Typography>
                    <Typography variant="h6" fontWeight={700}>
                      Read a sample post (EN)
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1.5, opacity: 0.8 }}>
                      Jump straight into a post detail page rendered with React Query & MUI.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardActionArea LinkComponent={NextLink} href="/ar/posts/1">
                  <CardContent>
                    <Typography variant="overline" sx={{ opacity: 0.7 }}>
                      مميز
                    </Typography>
                    <Typography variant="h6" fontWeight={700}>
                      اقرأ مقالة تجريبية (AR)
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1.5, opacity: 0.8 }}>
                      صفحة تفاصيل بالعربية مع اتجاه RTL ودعم كامل.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="footer" sx={{ py: 4, borderTop: "1px solid", borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            Built with Next.js 15, TypeScript, MUI, Tailwind & React Query.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
