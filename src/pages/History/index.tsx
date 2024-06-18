import { Fade } from 'react-awesome-reveal'

import History1 from '../../assets/images/history-1.png'
import History2 from '../../assets/images/history-2.png'
import History3 from '../../assets/images/history-3.png'
import History4 from '../../assets/images/history-4.png'
import History5 from '../../assets/images/history-5.png'

import './styles.css'

export const History = () => {
  return (
    <>
      <section>
        <div className='container mx-auto px-8 pt-8'>
          <div className="text-center mb-16">
            <h1 className="text-primary500 text-4xl font-bold after:block after:w-12 after:h-1 after:mx-auto after:bg-primary500 after:m-2">
              História
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto px-8 pt-8 max-md:p-0 h-full'>
          <div className='relative wrap overflow-hidden p-10 h-full'>
            <div className='max-lg:hidden border-2-2 absolute border-opacity-20 border-grayscale100 h-full border lg:left-1/2' />

            <Fade direction='left' triggerOnce duration={1500}>
              <div className='mb-8 gap-8 flex justify-between max-lg:justify-start items-center w-full lg:flex-row-reverse'>
                <div className='order-1 w-5/12 max-lg:hidden' />
                <div className='z-20 flex items-center order-1 bg-light-bronze shadow-xl star-twelve'>
                  <h1 className='z-10 mx-auto font-semibold text-lg text-white'>1</h1>
                </div>
                <div className='order-1 shadow-xl w-5/12 max-lg:w-4/5'>
                  <img src={History1} />
                  <div className='px-4 py-2'>
                    <p>
                      1967 - Após colocação da Pedra Fundamental, a fabricação dos tijolos da
                      instituição, por seu fundador.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade direction='right' triggerOnce duration={1500}>
              <div className='mb-8 gap-8 flex justify-between max-lg:justify-start items-center w-full'>
                <div className='order-1 w-5/12 max-lg:hidden' />
                <div className='z-20 flex items-center order-1 bg-light-bronze shadow-xl star-twelve'>
                  <h1 className='z-10 mx-auto font-semibold text-lg text-white'>2</h1>
                </div>
                <div className='order-1 shadow-xl w-5/12 max-lg:w-4/5'>
                  <img src={History2} />
                  <div className='px-4 py-2'>
                    <p>
                      1969 - Abertura do orfanato, que foi a primeira forma de atendimento e
                      perdurou por 30 anos.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade direction='left' triggerOnce duration={1500}>
              <div className='mb-8 gap-8 flex justify-between max-lg:justify-start items-center w-full lg:flex-row-reverse'>
                <div className='order-1 w-5/12 max-lg:hidden' />
                <div className='z-20 flex items-center order-1 bg-light-bronze shadow-xl star-twelve'>
                  <h1 className='z-10 mx-auto text-white font-semibold text-lg'>3</h1>
                </div>
                <div className='order-1 shadow-xl w-5/12 max-lg:w-4/5'>
                  <img src={History3} />
                  <div className='px-4 py-2'>
                    <p>
                      Creche casulo para atendimento de crianças de zero a cinco anos de idade, em horário
                      integral a fim de que seus pais pudessem trabalhar e aqueles que estivessem
                      desempregados, pudessem ser encaminhados para profissionalização e
                      oportunidades de emprego.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
            
            <Fade direction='right' triggerOnce duration={1500}>
              <div className='mb-8 gap-8 flex justify-between max-lg:justify-start items-center w-full'>
                <div className='order-1 w-5/12 max-lg:hidden' />
                <div className='z-20 flex items-center order-1 bg-light-bronze shadow-xl star-twelve'>
                  <h1 className='z-10 mx-auto font-semibold text-lg text-white'>4</h1>
                </div>
                <div className='order-1 shadow-xl w-5/12 max-lg:w-4/5'>
                  <img src={History4} />
                  <div className='px-4 py-2'>
                    <p>
                      Creche escola para atendimento de crianças de dois a cinco anos. Nesta época a instituição
                      chegou a atender 200 crianças em horário integral, o que equivale a 400 crianças
                      atendidas diariamente.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade direction='left' triggerOnce duration={1500}>
              <div className='mb-8 gap-8 flex justify-between max-lg:justify-start items-center w-full lg:flex-row-reverse'>
                <div className='order-1 w-5/12 max-lg:hidden' />
                <div className='z-20 flex items-center order-1 bg-light-bronze shadow-xl star-twelve'>
                  <h1 className='z-10 mx-auto text-white font-semibold text-lg'>5</h1>
                </div>
                <div className='order-1 shadow-xl w-5/12 max-lg:w-4/5'>
                  <img src={History5} />
                  <div className='px-4 py-2'>
                    <p>Escola Instituto Infantil Meimei até 2019.</p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  )
}