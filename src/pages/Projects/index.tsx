import { Grid, Typography } from '@mui/material'

import CasaIdosos from '../../assets/images/casa-idosos.jpg'
import Esperancar from '../../assets/images/esperancar.jpg'
import Senac1 from '../../assets/images/senac-1.jpg'
import Senac2 from '../../assets/images/senac-2.jpg'

import './styles.css'

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
          </Grid>
        </div>
      </section>

      <section className="bg-grayscale100">
        <div className='container mx-auto px-8 flex flex-col py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            Parcerias
          </h2>
          <div className='flex flex-col pt-16 gap-8'>
            <h2 className="text-xl font-semibold">
              Oportunidade!
            </h2>
            <div className='flex flex-col gap-2'>
              <p>
                Cursos gratuitos para você ganhar o mercado de trabalho.
              </p>
              <p>
                Saiba mais pelo nosso telefone <span className='font-semibold'>(31) 9 7210-0062</span>.
              </p>
              <p>
                <span className='font-semibold'>Vagas limitadas!</span>
              </p>
            </div>
            <p className='text-lg'>
              Iniciativa <span className='font-semibold text-secondary500'>SENAC+</span> & <span className='font-semibold text-hope-primary'>Programa</span> <span className='font-semibold text-hope-secondary'>ESPERANÇAR</span>.
            </p>
          </div>
          <div className='flex flex-col pt-16'>
            <div className="flex max-md:flex-col items-center justify-evenly gap-8">
              <img className='partnerships-image' src={Senac1} />
              <img className='partnerships-image' src={Senac2} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}