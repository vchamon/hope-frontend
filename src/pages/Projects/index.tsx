import { Grid, Typography } from '@mui/material'

import CasaIdosos from '../../assets/images/casa-idosos.jpg'
import ClubeMaes from '../../assets/images/clube-maes.png'
import Esperancar from '../../assets/images/esperancar.jpg'

import './styles.css'
import { SocialMedia } from '../../config/constants'

export const Projects = () => {
  return (
    <>
      <section>
        <div className='container mx-auto px-8 pt-8'>
          <div className="text-center mb-16">
            <h1 className="text-primary500 text-4xl font-bold after:block after:w-12 after:h-1 after:mx-auto after:bg-primary500 after:m-2">
              Projetos
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className='gap-8 flex items-center my-10 mx-10 lg:mx-32 md:mx-20'>
          <Grid
            container
            className='projects-container'
            rowSpacing={{ xs: 2, sm: 4, md: 8 }}
            columnSpacing={{ xs: 2, md: 4 }}
            alignItems="center"
          >
            <Grid item lg={6} md={12} display="flex" justifyContent="center" width="100%">
              <img className='project-image' src={CasaIdosos} />
            </Grid>
            <Grid item lg={6} md={12}>
              <Typography variant='h6' color="var(--nursing-home-primary)" mb='1rem'>Casa Dia para Idosos</Typography>
              <Typography>
                A Casa Dia para Idosos Ertúzio de Souza
                Calazans foi planejada para atender de segunda
                a sexta-feira, idosos carentes, em horário integral,
                a fim de acolhê-los em um ambiente dinâmico,
                saudável e feliz, onde não lhes faltem atividades,
                alimentação de qualidade, acompanhamento
                de profissionais de diversas áreas da saúde,
                cuidados e muito amor. Terá início em breve,
                após conclusão da reforma da sede da
                instituição.
              </Typography>
            </Grid>

            <Grid item lg={6} md={12}>
              <Typography variant='h6' color="var(--hope-secondary)" mb='1rem'>Esperançar</Typography>
              <Typography>
                O ESPERANÇAR - Especialidades Reunidas no
                Amparo à Criança e ao Adolescente em Risco Social
                visa intermediar recursos e oportunidades nas áreas
                da saúde, da educação, do esporte e das artes aos
                seus tutelados, bem como da profissionalização de
                jovens e de pais, oferecidos por voluntários e
                parceiros. O programa promove a inserção de seus
                assistidos numa realidade mais promissora e feliz e
                quer despertar em VOCÊ, o desejo de tornar-se
                protagonista na construção de um futuro mais feliz.
                Encontra-se na fase de adesão dos parceiros.
              </Typography>
            </Grid>
            <Grid item lg={6} md={12} display="flex" justifyContent="center" width="100%">
              <img className='project-image' src={Esperancar} />
            </Grid>

            <Grid item lg={6} md={12} display="flex" justifyContent="center" width="100%">
              <img className='project-image' src={ClubeMaes} />
            </Grid>
            <Grid item lg={6} md={12}>
              <Typography variant='h6' color="var(--primary500)" mb='1rem'>Clube de Mães</Typography>
              <Typography>
              O Clube de Mães do Paulo de Tarso é o projeto mais antigo ainda em funcionamento na instituição. Criado inicialmente para apoiar as crianças internadas, tinha como foco oferecer formação para meninas, com cursos como bordado e crochê, além de incentivar a profissionalização. Com o tempo, foi aberto à comunidade e passou por reformulações.
              <br />
              <br />
              Hoje, além de contribuir com a instituição para o angariamento de fundos através da venda do artesanato produzido, o clube é um importante espaço de convivência e voluntariado, especialmente para mulheres idosas, fortalecendo o senso de pertencimento e utilidade.
              <br />
              <br />
              As atividades acontecem às terças-feiras, das 13h às 15h, e são abertas a novas participantes.
              <br />
              <br />
              Quer participar? <a href={SocialMedia.WHATSAPP} className="text-primary500">Entre em contato</a>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  )
}
