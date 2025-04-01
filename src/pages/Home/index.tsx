import { Button } from '@mui/material'
import PauloTarso from '../../assets/images/paulo-de-tarso.png'
import { Link } from 'react-router-dom'
import { CONTACT, DONATIONS, HISTORY, PROJECTS, VOLUNTEERS } from '../../config/routes'

export const Home = () => {
  return (
    <>
      {/* <section>
        <div className='absolute w-full max-h-96 max-lg:max-h-80 max-md:max-h-48 max-sm:max-h-36 h-full bg-gradient-to-b from-transparent to-white' />
        <img src={PauloTarso} className="w-full max-h-96 max-lg:max-h-80 max-md:max-h-48 max-sm:max-h-36" />
      </section> */}
      <section>
        <div className='relative w-full max-h-96 max-lg:max-h-80 max-md:max-h-48 max-sm:max-h-36'>
          <div className='absolute top-px w-full h-full bg-gradient-to-b from-transparent to-white' />
          <img src={PauloTarso} className="w-full max-h-96 max-lg:max-h-80 max-md:max-h-48 max-sm:max-h-36" />
        </div>
      </section>

      <section>
        <div className='container mx-auto px-8 flex flex-col gap-8 py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            História
          </h2>
          <div className="flex max-md:flex-col items-center justify-evenly gap-8">
            {/* <div className="py-8 max-w-md">
              <img src="https://picsum.photos/900/600" />
            </div> */}
            <div className="flex flex-col items-end max-md:items-center gap-8">
              <p>Conheça a nossa história e descubra como a nossa organização de caridade foi fundada. Saiba mais sobre os valores que nos impulsionam e inspire-se com as histórias de sucesso dos projetos anteriores.</p>
              <Button variant='contained' style={{ backgroundColor: 'var(--primary500', color: 'white' }}>
                <Link to={HISTORY}>
                  Conhecer história
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale100">
        <div className='container mx-auto px-8 flex flex-col gap-8 py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            Projetos
          </h2>
          <div className="flex flex-row-reverse max-md:flex-col items-center justify-evenly gap-8">
            {/* <div className="py-8 max-w-md">
              <img src="https://picsum.photos/1200/800" />
            </div> */}
            <div className="flex flex-col items-start max-md:items-center gap-8">
              <p>Descubra os projetos em andamento e as iniciativas atuais. Veja como estamos trabalhando para melhorar a vida de pessoas em situação de vulnerabilidade. Cada projeto tem um propósito único e você pode encontrar aquele que mais ressoa com você.</p>
              <Button variant='contained' style={{ backgroundColor: 'var(--primary500', color: 'white' }}>
                <Link to={PROJECTS}>
                  Conhecer projetos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto px-8 flex flex-col gap-8 py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            Doações
          </h2>
          <div className="flex max-md:flex-col items-center justify-evenly gap-8">
            {/* <div className="py-8 max-w-md">
              <img src="https://picsum.photos/1500/1000" />
            </div> */}
            <div className="flex flex-col items-end max-md:items-center gap-8">
              <p>Faça uma diferença real através de suas doações. Saiba como o seu apoio financeiro pode ajudar a impulsionar nossos projetos e alcançar impactos significativos. Cada contribuição é valiosa e pode mudar vidas.</p>
              <Button variant='contained' style={{ backgroundColor: 'var(--primary500', color: 'white' }}>
                <Link to={DONATIONS}>
                  Seja um doador
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale100">
        <div className='container mx-auto px-8 flex flex-col gap-8 py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            Voluntários
          </h2>
          <div className="flex flex-row-reverse max-md:flex-col items-center justify-evenly gap-8">
            {/* <div className="py-8 max-w-md">
              <img src="https://picsum.photos/2100/1400" />
            </div> */}
            <div className="flex flex-col items-start max-md:items-center gap-8">
              <p>Seja um herói da mudança! Descubra como se tornar um voluntário e fazer parte da nossa equipe dedicada. Compartilhe seu tempo, habilidades e paixão para causar um impacto positivo em nossa comunidade. Juntos, podemos fazer muito mais.</p>
              <Button variant='contained' style={{ backgroundColor: 'var(--primary500', color: 'white' }}>
                <Link to={VOLUNTEERS}>
                  Seja um voluntário
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto px-8 flex flex-col gap-8 py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            Contato
          </h2>
          <div className="flex max-md:flex-col items-center justify-evenly gap-8">
            {/* <div className="py-8 max-w-md">
              <img src="https://picsum.photos/2400/1600" />
            </div> */}
            <div className="flex flex-col items-end max-md:items-center gap-8">
            <p>Tem alguma pergunta, ideia ou deseja entrar em contato conosco? Não hesite em nos contatar. Estamos aqui para ouvir e apoiar. Utilize nossas informações de contato para nos enviar uma mensagem e responderemos o mais rápido possível.</p>
              <Button variant='contained' style={{ backgroundColor: 'var(--primary500', color: 'white' }}>
                <Link to={CONTACT}>
                  Entrar em contato
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}