import { Button } from '@mui/material'
import Volunteer from '../../assets/images/volunteer.png'
import { Link } from 'react-router-dom'
import { CONTACT } from '../../config/routes'

export const Volunteers = () => {
  return (
    <>
      <section>
        <div className='container mx-auto px-8 pt-8 mb-8'>
          <div className="text-center mb-16">
            <h1 className="text-primary500 text-4xl font-bold after:block after:w-12 after:h-1 after:mx-auto after:bg-primary500 after:m-2">
              Voluntários
            </h1>
          </div>
          <p>Nossa organização de caridade acredita no poder da colaboração e do amor ao próximo. Estamos em busca de voluntários dedicados e comprometidos, dispostos a doar seu tempo e talento para fazer a diferença no mundo. Junte-se a nós e faça parte da nossa equipe de voluntários!</p>
        </div>
      </section>

      <section>
        <div className='container mx-auto px-8 pt-8 mb-8'>
          <div className='mb-4'>
            <h2 className="text-primary500 text-3xl font-semibold">
              Porque se tornar um voluntário?
            </h2>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <div className='font-bold text-3xl'>1.</div>
              <p>Impacto positivo: Ao se juntar a nós, você terá a oportunidade de impactar positivamente a vida de pessoas em situação de vulnerabilidade. Seu trabalho fará a diferença e trará esperança para aqueles que mais precisam.</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='font-bold text-3xl'>2.</div>
              <p>Desenvolvimento de habilidades: O voluntariado é uma excelente maneira de desenvolver habilidades pessoais e profissionais. Através de nossos projetos, você terá a chance de aprimorar suas habilidades de liderança, comunicação, empatia e trabalho em equipe.</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='font-bold text-3xl'>3.</div>
              <p>Networking e conexões: Ao fazer parte de nossa equipe de voluntários, você terá a oportunidade de conhecer pessoas incríveis e fazer novas conexões. Essas conexões podem abrir portas para futuras oportunidades pessoais e profissionais.</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='font-bold text-3xl'>4.</div>
              <p>Sorrisos e gratidão: Se você já teve a experiência de ajudar alguém e receber um sorriso de gratidão em troca, sabe o quão gratificante é. Ao se tornar um Super Voluntário, você terá a oportunidade de vivenciar esses momentos emocionantes que enchem nossos corações de alegria.</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='font-bold text-3xl'>5.</div>
              <p>Fazer parte de uma comunidade: Ao se juntar à nossa equipe de voluntários, você fará parte de uma comunidade de pessoas com valores compartilhados. Terá a chance de conhecer outras pessoas que acreditam na mesma causa e compartilhar experiências enriquecedoras juntos.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto px-8 pt-8 mb-8'>
          <div className="flex max-md:flex-col gap-8">
            <div className='max-w-sm'>
              <img src={Volunteer} />
            </div>
            <div className='flex flex-col flex-1 gap-4'>
              <p>Não importa a sua idade, experiência ou habilidades. Temos uma ampla variedade de projetos e áreas de atuação para você escolher. Seja uma doação de tempo regular ou para eventos especiais, temos sempre uma maneira de você contribuir.</p>
              <p>Junte-se a nós e faça a diferença! Torne-se um voluntário e ajude a construir um mundo melhor. Entre em contato conosco ou preencha nosso formulário.</p>
              <Link to={CONTACT}>
                <Button
                  variant='contained'
                  style={{ backgroundColor: 'var(--primary500)', marginTop: "1rem" }}
                >
                  Preencher formulário
                </Button>
              </Link>
            </div>
          </div> 
        </div>
      </section>
    </>
  )
}