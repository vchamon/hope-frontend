import QrCode from '../../assets/images/qr-code-pix.svg'
import Pix from '../../assets/images/pix.svg'
import BancoBrasil from '../../assets/images/banco-do-brasil.svg'
import SAAE from '../../assets/images/saae.png'
import Bazar from '../../assets/images/bazar.jpg'
import { Contacts } from '../../config/constants'

export const Donations = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-8 pt-8">
          <div className="text-center mb-16">
            <h1 className="text-primary500 text-4xl font-bold after:block after:w-12 after:h-1 after:mx-auto after:bg-primary500 after:m-2">
              Doações
            </h1>
          </div>
          <p>
            Você pode fazer doações de gêneros e materiais diversos, em espécie e através da conta de água*.
            Para isto, basta nos contatar ou escolher uma das formas abaixo:
          </p>
        </div>
      </section>

      <section>
        <div className='container mx-auto px-8 flex flex-col gap-8 py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            Pix
          </h2>
          <div className="flex max-md:flex-col items-center justify-evenly gap-8">
            <div className="py-8">
              <img className="w-60" src={Pix} />
            </div>
            <div className="flex max-md:flex-col items-center gap-8">
              <div className='flex flex-col gap-2'>
                <p>
                  <strong>Nome: </strong>Lar Espirita Paulo de Tarso
                </p>
                <p>
                  <strong>CNPJ: </strong>21.140.645/0001-08
                </p>
                <p>
                  <strong>Instituição: </strong>Banco do Brasil S.A.
                </p>
                <p>
                  <strong>Chave de CNPJ: </strong>21.140.645/0001-08
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-48 mb-2" src={QrCode} />
                <p className="text-sm">
                  Ou escaneie o QR Code
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale100">
        <div className='container mx-auto px-8 flex flex-col gap-8 py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            Transferência bancária
          </h2>
          <div className="flex max-md:flex-col items-center justify-evenly gap-8">
            <div className="flex flex-col flex-1 items-center">
              <img className="w-40" src={BancoBrasil} />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <p>
                <strong>Nome: </strong>Lar Espirita Paulo de Tarso
              </p>
              <p>
                <strong>CNPJ: </strong>21.140.645/0001-08
              </p>
              <p>
                <strong>Instituição: </strong>Banco do Brasil S.A.
              </p>
              <p>
                <strong>Agência: </strong>0395-6
              </p>
              <p>
                <strong>Conta: </strong>5534-4
              </p>
              <p>
                <strong>Tipo de conta: </strong>Corrente
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto px-8 flex flex-col gap-8 py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            Conta de água
          </h2>
          <div className="flex max-md:flex-col items-center gap-8">
            <div className="flex flex-col flex-1 items-center justify-center">
              <img className="max-w-60" src={SAAE} />
            </div>
            <div className='flex flex-col flex-1 gap-2'>
              <p className='mb-4'>Destina-se a doações recorrentes. Esta opção está disponível apenas para a cidade de Sete Lagoas/MG.</p>
              <p><strong>Como doar</strong></p>
              <p>Para doar, clique <a className="text-primary500" href="https://drive.google.com/file/d/1J6_8SMfsOB5wrieaiCnTT9tWoPSB3XDY/view?usp=drive_link">aqui</a> e faça o download do arquivo.</p>
              <p>Escolha uma das quantias sugeridas (R$ 10, R$ 20, R$ 30, R$ 40, R$ 50 ou R$ 100).</p>
              <p>Preencha e assine o requerimento (pode ser tanto assinatura escaneada quanto assinatura digital).</p>
              <p>Depois só enviar para o nosso e-mail ({Contacts.EMAIL}).</p>
              <p>E pronto: você será co autor desta história de amor em ação fazendo diferença nas vidas daqueles que mais necessitam!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-grayscale100">
        <div className='container mx-auto px-8 flex flex-col gap-8 py-16'>
          <h2 className="text-primary500 text-3xl font-semibold">
            Bazar
          </h2>
          <div className="flex max-md:flex-col items-center justify-evenly gap-8">
            <div className="flex flex-col flex-1 items-center">
              <img className="max-w-80" src={Bazar} />
            </div>
            <div className="flex flex-col flex-1 gap-4">
              <p>
                O Bazar Permanente do Lar Espírita Paulo de Tarso é um espaço solidário onde a comunidade pode encontrar roupas, sapatos, bolsas, bijuterias e brinquedos a precos acessíveis. Além de ser uma oportunidade para adquirir produtos com valores em conta, o bazar também é uma forma de contribuir com as ações sociais da instituição, já que toda a renda arrecadada ajuda a manter os projetos de assistência realizados pelo Lar. A comunidade também pode participar fazendo doações.
              </p>
              <p>
                O Bazar Permanente funciona de segunda a quinta-feira, das 8h às 17h e às sextas-feiras, das 8h às 16h. É uma maneira simples e solidária de colaborar: quem doa ajuda quem precisa, e quem compra encontra produtos úteis por preços acessíveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
