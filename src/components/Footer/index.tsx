import { NavLink } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import FullLogo from '../../assets/images/full-logo-1.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Contacts, SocialMedia } from '../../config/constants'
import { CONTACT, DONATIONS, HISTORY, PROJECTS, VOLUNTEERS } from '../../config/routes'

export const Footer = () => {
  return (
    <footer className='bg-white px-10 py-5 gap-4 flex max-md:flex-col max-xl:text-sm justify-evenly items-start border-t border-grayscale200'>
      <div className='max-lg:hidden'>
        <img src={FullLogo} className='max-w-80 max-xl:max-w-60'/>
      </div>
      <div className='lg:hidden flex items-center justify-center'>
        <img src={Logo} className='max-w-20'/>
      </div>

      <div className='flex flex-col'>
        <p className='font-bold mb-2 text-primary500'>Navegue pelo site</p>
        <NavLink className='hover:text-primary500' to={HISTORY}>História</NavLink>
        <NavLink className='hover:text-primary500' to={PROJECTS}>Projetos</NavLink>
        <NavLink className='hover:text-primary500' to={DONATIONS}>Doações</NavLink>
        <NavLink className='hover:text-primary500' to={VOLUNTEERS}>Voluntários</NavLink>
        <NavLink className='hover:text-primary500' to={CONTACT}>Contato</NavLink>
      </div>

      <div className='flex flex-col gap-1 justify-center'>
        <p className='font-bold mb-2 text-primary500'>Redes sociais</p>
        <div className='flex items-center gap-2 cursor-pointer hover:text-primary500 transition ease-in'>
          <FacebookIcon fontSize='large' />
          <a href={SocialMedia.FACEBOOK}>Facebook</a>
        </div>
        <div className='flex items-center gap-2 cursor-pointer hover:text-primary500 transition ease-in'>
          <InstagramIcon fontSize='large' />
          <a href={SocialMedia.INSTAGRAM}>Instagram</a>
        </div>
        <div className='flex items-center gap-2 cursor-pointer hover:text-primary500 transition ease-in'>
          <WhatsAppIcon fontSize='large' />
          <a href={SocialMedia.WHATSAPP}>WhatsApp</a>
        </div>
      </div>

      <div className='flex flex-col gap-1 justify-center'>
        <p className='font-bold mb-2 text-primary500'>Canais de atendimento</p>
        <div className='flex flex-col gap-2 mb-8'>
          <div className='flex gap-2'>
            <PhoneIcon />
            <p>{Contacts.PHONE}</p>
          </div>

          <div className='flex gap-2'>
            <WhatsAppIcon />
            <p>{Contacts.WHATSAPP}</p>
          </div>

          <div className='flex gap-2'>
            <EmailIcon />
            <p>{Contacts.EMAIL}</p>
          </div>

          <div className='flex gap-2'>
            <LocationOnIcon />
            <div>
              <p>Rua Itabira, 25, Bairro Esperança - Sete Lagoas / MG</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
