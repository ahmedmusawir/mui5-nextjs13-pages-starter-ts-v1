import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Head from 'next/head';
import { Layout } from '@/layout';

const Products = () => {
  return (
    <Layout>
      <Head>
        <title>Next Starter Products</title>
        <meta name="description" content="This is the demo Products" />
      </Head>
      <Container maxWidth="lg" sx={{ mt: 15, mb: 10 }}>
        <Box sx={{ px: { xs: 1, sm: 7 } }}>
          <h1 className="">This is the Products Template for resue...</h1>
          <Typography variant="body1">
            This is some "body1" text. <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            illum, quos provident amet suscipit eius, debitis saepe odit quo
            <br />
            <br />
          </Typography>
          {/* // This is the "body2" variant */}
          <Typography variant="body2">
            This is some "body2" text. <br />
            nesciunt delectus inventore odio, eaque voluptas architecto nisi
            ipsam excepturi reiciendis non velit suscipit? Quisquam quidem
            <br />
            <br />
          </Typography>
          {/* // This is the "button" variant */}
          <Typography variant="button">
            This is some "button" text. <br />
            <br />
          </Typography>
          {/* // This is the "caption" variant */}
          <Typography variant="caption">
            This is some "caption" text. <br />
            nemo temporibus modi? Asperiores soluta magnam error. Fugiat, ex
            odio? Quam placeat est velit possimus rerum non porro corporis?
            Suscipit beatae voluptas incidunt impedit sequi unde, voluptates
            <br /> <br />
          </Typography>
          {/* // This is the "h1" variant */}
          <Typography variant="h1">This is some "h1" text.</Typography>
          {/* // This is the "h2" variant */}
          <Typography variant="h2">This is some "h2" text.</Typography>
          {/* // This is the "h3" variant */}
          <Typography variant="h3">This is some "h3" text.</Typography>
          {/* // This is the "h4" variant */}
          <Typography variant="h4">This is some "h4" text.</Typography>
          {/* // This is the "h5" variant */}
          <Typography variant="h5">This is some "h5" text.</Typography>
          {/* // This is the "h6" variant */}
          <Typography variant="h6">This is some "h6" text.</Typography>
          {/* // This is the "inherit" variant */}
          <Typography variant="inherit">
            This is some "inherit" text.
          </Typography>
          {/* // This is the "overline" variant */}
          <Typography variant="overline">
            This is some "overline" text.
          </Typography>
          {/* // This is the "subtitle1" variant */}
          <Typography variant="subtitle1">
            This is some "subtitle1" text.
          </Typography>
          {/* // This is the "subtitle2" variant */}
          <Typography variant="subtitle2">
            This is some "subtitle2" text.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default Products;
