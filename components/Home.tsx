import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Starter Home</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <Box sx={{ px: { xs: 1, sm: 7 } }}>
          <h1 className="">
            This is a starting point for ... Next.js 13 (no App router)
          </h1>
          <Typography variant="body1">
            This is some "body1" text. <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            illum, quos provident amet suscipit eius, debitis saepe odit quo
            reprehenderit iure ipsa et laborum veniam eum cum dolorem, delectus
            ex. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <br />
          </Typography>
          {/* // This is the "body2" variant */}
          <Typography variant="body2">
            This is some "body2" text. <br />
            nesciunt delectus inventore odio, eaque voluptas architecto nisi
            ipsam excepturi reiciendis non velit suscipit? Quisquam quidem
            excepturi architecto veniam, ullam officia! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Molestias necessitatibus
            aspernatur perferendis optio, quibusdam veritatis ratione modi
            veniam in pariatur facilis quisquam suscipit? Nesciunt quisquam
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
            {/* This is some "inherit" text. */}
          </Typography>
          {/* // This is the "overline" variant */}
          <Typography variant="overline">
            {/* This is some "overline" text. */}
          </Typography>
          {/* // This is the "subtitle1" variant */}
          <Typography variant="subtitle1">
            {/* This is some "subtitle1" text. */}
          </Typography>
          {/* // This is the "subtitle2" variant */}
          <Typography variant="subtitle2">
            {/* This is some "subtitle2" text. */}
          </Typography>
          <p>
            nulla consequatur nisi fugiat quasi placeat cumque facilis,
            similique illo dolorem obcaecati ipsum officiis beatae enim quas id
            itaque earum adipisci neque tempore molestiae consequuntur! Soluta
            reiciendis ipsa, a minus voluptates optio, corporis saepe quas
            <Box
              component="img"
              src="https://picsum.photos/id/299/500/200"
              alt="Lorem Picsum"
              sx={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              py={3}
            />
            distinctio, doloribus corrupti cumque quis. Odio rem in nulla odit
            quia earum sit ratione explicabo aliquam vero repellendus, ullam
            illo, dolorum ducimus natus non sunt ex velit fugiat. Voluptatum
            officia tempora quia nobis nisi reprehenderit eaque dolorum non
            placeat nemo neque fuga deleniti cumque sit voluptas a, velit
            voluptatem ab vel. Magnam eum commodi fugit consequatur aperiam
            odit, possimus inventore aspernatur consequuntur vero, esse
            voluptatem enim eligendi atque tenetur, placeat ipsam asperiores
            animi dignissimos tenetur reprehenderit. Id neque voluptatem
            officiis distinctio veniam quod. Sed, odit est eveniet, mollitia
            repellendus perspiciatis ab magnam, architecto harum aut accusamus
            quos velit aliquid modi quaerat quasi corrupti quis! Mollitia,
            officia! Amet, corrupti! Dolorem libero sit corrupti tenetur
            <Box
              component="img"
              src="https://picsum.photos/id/429/500/200"
              alt="Lorem Picsum"
              sx={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              py={3}
            />
            architecto dicta, deleniti eveniet dolores illum. Explicabo sed
            soluta ipsum ipsa vero, tenetur ex, fuga asperiores ad nostrum
            dolorem enim qui maxime dolor cupiditate placeat cum aperiam dolores
            amet optio culpa natus eum a in! Assumenda, asperiores eligendi?
            Temporibus distinctio vel animi deserunt sed vero, ipsum quas eaque?
            Cum accusantium quos corporis reprehenderit ipsam excepturi?
            Aperiam, ipsa quae. Cupiditate odit, dolor unde, minima consequuntur
            velit optio at iste temporibus quibusdam voluptates facilis
            repellendus nesciunt, impedit enim voluptatum reprehenderit
            asperiores nam id dolorem nobis. Facilis facere voluptates sit
            laborum itaque? Aspernatur fugit sint dolorum expedita adipisci
            dolor suscipit, unde reiciendis minima necessitatibus enim, magni
            corporis! Aliquid ut voluptates pariatur impedit necessitatibus
            suscipit earum voluptatum omnis, velit repellat reprehenderit, rerum
            nisi assumenda iusto, deserunt quas dicta aliquam eum! Alias porro
            corrupti ipsam placeat repellat quae quod? Officia deleniti,
            voluptas veniam sed quasi officiis optio inventore sapiente odio
            <Box
              component="img"
              src="https://picsum.photos/id/129/500/200"
              alt="Lorem Picsum"
              sx={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              py={3}
            />
            maiores error asperiores in sit qui non, sequi eos fuga molestiae
            assumenda excepturi obcaecati. Reiciendis molestiae delectus, nam
            porro dignissimos quia praesentium itaque omnis suscipit tempora
            dolore corporis quas fugit quod rerum officia, laboriosam, autem et
            non! Incidunt veritatis magnam eveniet ducimus deserunt deleniti
            laborum laudantium reprehenderit exercitationem similique, earum
            illum quasi a labore quibusdam pariatur at aspernatur temporibus
            consequatur esse. Qui odit totam quaerat quas deleniti saepe
            excepturi molestiae ipsam! Debitis nihil illo modi aliquid, error
            temporibus autem at nobis dignissimos, saepe blanditiis aliquam
            molestiae cumque necessitatibus! Vitae sit perspiciatis nemo
            officiis quae distinctio adipisci molestiae blanditiis voluptate
            beatae cum facere nesciunt, velit aut ducimus sapiente dolor culpa
            ad? Odit consequuntur consectetur aspernatur veniam ipsum repellat
            dolores adipisci similique cupiditate magnam? Esse exercitationem
            illum enim quae optio aliquid saepe inventore natus quos sint iste,
            architecto aperiam, repellendus voluptas laudantium vero cum impedit
            ad consectetur. Autem ex voluptatem, commodi odit quo eveniet
            molestias sint animi sunt assumenda dolorem. Amet animi repellat
            magni doloribus ullam, tempore sed officiis placeat obcaecati
            dolorem eius repudiandae magnam temporibus et facilis tenetur!
            <Box
              component="img"
              src="https://picsum.photos/id/229/500/200"
              alt="Lorem Picsum"
              sx={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              py={3}
            />
            Tempore accusamus maiores, cumque tempora nemo quidem consectetur
            alias assumenda repudiandae, reiciendis eius, soluta odio fuga. Cum
            aut consectetur cumque iusto molestiae minima omnis harum aspernatur
            aperiam similique eos tempore praesentium necessitatibus esse
            inventore, dolores culpa maiores qui. Totam reprehenderit ut
            dignissimos. Accusantium at amet veritatis fugit impedit maiores
            necessitatibus, quibusdam atque, provident dicta minus rem. Fugit
            fugiat harum nesciunt dicta ea autem mollitia sequi, placeat animi
            debitis, voluptate ex doloremque voluptates corrupti repudiandae
            quasi dolore voluptatum itaque voluptatem suscipit magni! Omnis non
            error nam aliquid pariatur veritatis repellat iusto dolorem ipsam
            repudiandae. Rerum accusantium tempora quam quaerat non optio magni
            incidunt aliquid sunt deleniti beatae odit, delectus ad consequuntur
            <Box
              component="img"
              src="https://picsum.photos/id/529/500/200"
              alt="Lorem Picsum"
              sx={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              py={3}
            />
            necessitatibus similique amet labore modi reiciendis itaque. Saepe,
            dolorem voluptatem praesentium quis maiores nostrum doloremque, eum
            maxime a unde aliquam minima voluptate deserunt animi, nesciunt
            laudantium at! Ut explicabo consectetur excepturi quia qui corporis
            earum dicta error, ad tempora officia eaque nam vitae obcaecati,
            soluta aliquid hic tempore molestias nulla quam doloribus a facilis
            maxime? Necessitatibus aliquid, labore ab, corporis ea ad minima
            quae natus ipsa repudiandae nihil quod impedit. Deleniti unde vitae
            soluta magni consequuntur obcaecati, mollitia in cum facere ab
            officiis natus, aliquam aperiam error fugit commodi nesciunt? Natus
            inventore at harum eum sequi voluptatibus alias rerum temporibus!
            Voluptatibus culpa inventore eveniet saepe ab eum cum explicabo at
            amet laboriosam sit, quibusdam rerum obcaecati nemo provident
            excepturi tenetur quo natus blanditiis laudantium? Ducimus nihil
            maiores voluptatum animi mollitia itaque adipisci aliquid quis sint
            iure maxime, suscipit asperiores sequi temporibus. Rerum
            perspiciatis a tempore earum debitis pariatur accusantium architecto
            quibusdam temporibus ex at ea aperiam libero reprehenderit
            reiciendis saepe eveniet, nulla explicabo, soluta porro impedit
            tempora amet iure? Magni, perferendis earum error, suscipit enim in
            qui, consequatur quas maxime pariatur animi omnis blanditiis
            voluptate reprehenderit explicabo deserunt accusamus quis quod
            quisquam iste possimus nisi ipsam. Cum error repellendus pariatur
            <Box
              component="img"
              src="https://picsum.photos/id/419/500/200"
              alt="Lorem Picsum"
              sx={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              py={3}
            />
            enim vitae mollitia, provident illum, animi quo ratione dolorum
            quidem rem soluta excepturi? Nemo distinctio totam laboriosam culpa
            nostrum magnam quam mollitia iusto quod sint, perferendis optio, eum
            ad minus odio perspiciatis incidunt tempora nihil velit aliquid
            aperiam vitae sequi animi molestias? Suscipit beatae temporibus ab
            dolore quidem animi necessitatibus, labore nesciunt, aliquam ipsum,
            rerum quod perspiciatis minus praesentium. Pariatur accusantium sunt
            quaerat iure animi aut! Illo nemo quam ea eius ipsum corrupti.
            Labore ratione repellendus accusamus recusandae consequuntur nobis,
            voluptatibus maxime nam! Quos adipisci sed fugiat hic voluptatum,
            necessitatibus delectus quibusdam dolorem, vel distinctio ducimus!
            Recusandae porro, et modi ea culpa aut illo. Tempore architecto ea
            ratione illum commodi necessitatibus adipisci labore?
            Exercitationem, et! Consectetur rem, eligendi ipsam laboriosam
            dolore id quaerat odit error eius expedita. Hic, quo eius
            necessitatibus, minima voluptatibus ipsam harum ea corporis eum
            officia sed. Similique quis fugiat, cum numquam libero totam ratione
            est impedit vero blanditiis quasi, aut vitae! Soluta tenetur libero
            adipisci amet labore eum, vel blanditiis, laboriosam alias explicabo
            illo!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            illum, quos provident amet suscipit eius, debitis saepe odit quo
            reprehenderit iure ipsa et laborum veniam eum cum dolorem, delectus
            ex.
          </p>
        </Box>
      </Container>
    </>
  );
};

export default Home;
