import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

import { ContactForm } from './form'

export const Contact = () => (
  <>
    <section>
      <div className='container mx-auto px-8 pt-8'>
        <div className="text-center mb-16">
          <h1 className="text-primary500 text-4xl font-bold after:block after:w-12 after:h-1 after:mx-auto after:bg-primary500 after:m-2">
            Contato
          </h1>
        </div>
        <p>
          Para falar conosco preencha o formulário ou nos contate através dos nossos canais de atendimento.
        </p>
      </div>
    </section>

    <section>
      <div className='container mx-auto px-8 pt-8'>
        <div className='gap-16 max-lg:gap-8 flex max-md:flex-col items-start my-10 lg:mx-10'>
          <div className='w-full flex flex-col flex-1'>
            <ContactForm />
          </div>
          <div className='w-full flex flex-col flex-1'>
            <h2 className="text-primary500 text-2xl font-semibold mb-4">
              Canais de atendimento
            </h2>
            <div className='flex flex-col gap-2 mb-8'>
              <div className='flex gap-2'>
                <PhoneIcon />
                <p>(31) 3773-3809</p>
              </div>

              <div className='flex gap-2'>
                <WhatsAppIcon />
                <p>(31) 9 7210-0062</p>
              </div>

              <div className='flex gap-2'>
                <EmailIcon />
                <p>contato@larespiritapaulodetarso.com.br</p>
              </div>

              <div className='flex gap-2'>
                <LocationOnIcon />
                <div>
                  <p>Rua Itabira, 25, Bairro Esperança</p>
                  <p>Sete Lagoas / MG</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-primary500 text-2xl font-semibold mb-4">
                Redes sociais
              </h2>
              <div className='flex flex-col gap-1 justify-center'>
                <div className='flex max-w-fit items-center gap-2 cursor-pointer hover:text-primary500 transition ease-in'>
                  <FacebookIcon fontSize='large' />
                  <a href="https://facebook.com/larespiritapaulodetarso7L">Facebook</a>
                </div>
                <div className='flex max-w-fit items-center gap-2 cursor-pointer hover:text-primary500 transition ease-in'>
                  <InstagramIcon fontSize='large' />
                  <a href="https://instagram.com/larespiritapaulodetarso">Instagram</a>
                </div>
                <div className='flex max-w-fit items-center gap-2 cursor-pointer hover:text-primary500 transition ease-in'>
                  <YouTubeIcon fontSize='large' />
                  <a href="https://youtube.com">YouTube</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)